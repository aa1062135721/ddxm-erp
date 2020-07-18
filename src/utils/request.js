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
//request拦截器
service.interceptors.request.use(
    config => {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    //打包系统时，要把下面另一个系统中的if注释掉--------------------------------------
        /**
         * erp系统
        //  */
        if (process.env.NODE_ENV === 'production') {
            if (config.baseURL === '/aShop') {
                config.baseURL = 'http://ddxm661.com:8088'
            }
        }
         /**
         * shop系统
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
    error => {
        loading.close();
        return Promise.reject(error);
    }
);
export default service;
