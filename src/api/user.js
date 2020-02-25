import request from '../utils/request';

export const login = query => {
    return request({
        url: '/system/login/checkLogin',
        method: 'post',
        data: query
    });
};

export const loginOut = query => {
    return request({
        url: '/system/login/outLogin',
        method: 'post',
        data: query
    });
};

