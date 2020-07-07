import request from '../utils/request';

export const loginErp = query => {
    return request({
        baseURL:'/api',
        url: '/system/login/checkLogin',
        method: 'post',
        data: query
    });
};
export const loginShop = query => {
    return request({
        // baseURL:'/aShop',
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

