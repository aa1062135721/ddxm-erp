/**
 *  员工管理
**/
import request from '../utils/request';

export const list = query => {
    return request({
        url: '/auth/admin_manage/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/auth/admin_manage/add',
        method: 'post',
        data: query
    });
};

export const edit = query => {
    return request({
        url: '/auth/admin_manage/edit',
        method: 'post',
        data: query
    });
};

export const del = query => {
    return request({
        url: '/auth/admin_manage/del',
        method: 'post',
        data: query
    });
};

// 禁用或启用
export const isSwitch = query => {
    return request({
        url: '/auth/admin_manage/isSwitch',
        method: 'post',
        data: query
    });
};
