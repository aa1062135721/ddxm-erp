/**
 *  部门管理
 **/
import request from '../../utils/request';

export const list = query => {
    return request({
        url: '/auth/role_manage/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/auth/role_manage/add',
        method: 'post',
        data: query
    });
};

export const edit = query => {
    return request({
        url: '/auth/role_manage/edit',
        method: 'post',
        data: query
    });
};

export const del = query => {
    return request({
        url: '/auth/role_manage/del',
        method: 'post',
        data: query
    });
};

// 禁用或启用
export const isSwitch = query => {
    return request({
        url: '/auth/role_manage/isSwitch',
        method: 'post',
        data: query
    });
};

// 设置权限
export const setAuth = query => {
    return request({
        url: '/auth/role_manage/setAuth',
        method: 'post',
        data: query
    });
};
