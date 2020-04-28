import axios from 'axios';
import { Message, Loading } from 'element-ui';
import store from '../store/index.js';
let loading;

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : 'http://testadmin2.ddxm661.com',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        if (process.env.NODE_ENV === 'production') {
            if (config.baseURL === '/api') {
                config.baseURL = 'http://testadmin2.ddxm661.com'
            }
            if (config.baseURL === '/aShop') {
                config.baseURL = 'http://ddxm661.com:8088'
            }
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
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
        console.log(error);
        return Promise.reject();
    }
);

export default service;
