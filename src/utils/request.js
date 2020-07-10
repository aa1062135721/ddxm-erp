import axios from 'axios';
import { Message, Loading } from 'element-ui';
import store from '../store/index.js';
let loading;

/**
 * process.env.NODE_ENV === 'development' 来判断是否开发环境，利用代理解决跨越问题，在vue.config.js文件里配置的
 * 开发人员特别注意，本系统分有2个子系统，，erp和shop
 * erp测试服请求地址为：http://testadmin2.ddxm661.com，其中有api部分地址是http://ddxm661.com:8088
 *
 * shop
 * 测试服请求地址为：http://ddxm661.com:8088
 * 主要独立模块为page/order_management
 * 比如说登录啊，权限管理啊，动态路由啊都是公用的erp中的。
 */
const service = axios.create({
    /**
     * 打包成erp系统
     * 开发环境也要把vue.config.js中的/api代理成http://testadmin2.ddxm661.com重启 TODO
     */
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : 'http://testadmin2.ddxm661.com',
    /**
     * 打包成shop系统
     * 开发环境也要把vue.config.js中的/api代理成http://ddxm661.com:8088重启项目 TODO
     */
    // baseURL: process.env.NODE_ENV === 'development' ? '/aShop' : 'http://ddxm661.com:8088',
    timeout: 3000
});

service.interceptors.request.use(
    config => {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        /**
         * erp
         * 如果打包成erp,则这个if不要注释了。
         * 如果打包成shop 这个if要注释起来
        //  */
        if (process.env.NODE_ENV === 'production') {
            if (config.baseURL === '/aShop') {
                config.baseURL = 'http://ddxm661.com:8088'
            }
        }
         /**
         * erp
         * 如果打包成shop,则这个if不要注释了。
         * 如果打包成erp 这个if要注释起来
        //  */
        // if (process.env.NODE_ENV === 'production') {
        //     if (config.baseURL === '/api') {
        //         config.baseURL = 'http://testadmin2.ddxm661.com'
        //     }
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        loading.close();
        if (response.status === 200) {
            if (response.data.code == -1) {
                store.commit('setUserInfo', {});
                window.localStorage.removeItem('router');
                window.location.href = '#/login';
                setTimeout(() => {
                    window.location.reload();
                }, 150)
            }
            if (response.data.code != 200){
                Message.closeAll();
                Message({
                    message: response.data.msg,
                    type: 'error'
                })
            }
            return response.data;
        } else {
            Promise.reject();
        }
    },
    // error => {
    //     loading.close();
    //     return Promise.reject(error);
    // }
    //测试---------------------------------------------------
    error => {
        if (error && error.response) {
          switch (error.response.status) {
            case 400: error.message = '请求错误(400)'; break;
            case 401: this.$router.push('@/components/page/Login.vue'); break;
            case 403: error.message = '拒绝访问(403)'; break;
            case 404: error.message = '请求出错(404)'; break;
            case 408: error.message = '请求超时(408)'; break;
            case 500: error.message = '服务器错误(500)'; break;
            case 501: error.message = '服务未实现(501)'; break;
            case 502: error.message = '网络错误(502)'; break;
            case 503: error.message = '服务不可用(503)'; break;
            case 504: error.message = '网络超时(504)'; break;
            case 505: error.message = 'HTTP版本不受支持(505)'; break;
            default: error.message = `连接出错(${error.response.status})!`;
          }
        } else {
          error.message = '连接服务器失败!'
        }
        message.error(error.message);
        loading.close();
        return Promise.reject(error);
      }
);
export default service;
