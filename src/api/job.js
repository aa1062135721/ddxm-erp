/**
 *  岗位管理
 **/
import request from '../utils/request';

export const list = query => {
    return request({
        url: '/auth/Admin_grade/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/auth/Admin_grade/add',
        method: 'post',
        data: query
    });
};

export const edit = query => {
    return request({
        url: '/auth/Admin_grade/add',
        method: 'post',
        data: query
    });
};

export const del = query => {
    return request({
        url: '/auth/Admin_grade/del',
        method: 'post',
        data: query
    });
};

// 禁用或启用
export const isSwitch = query => {
    return request({
        url: '/auth/Admin_grade/setSwitch',
        method: 'post',
        data: query
    });
};
