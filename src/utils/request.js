import axios from 'axios';
import { Message } from 'element-ui';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : 'http://testadmin2.ddxm661.com',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
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
        console.log(error);
        return Promise.reject();
    }
);

export default service;
