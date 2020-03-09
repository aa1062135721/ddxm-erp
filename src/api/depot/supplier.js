/**
 *  供应商管理
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/supplier_manage/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/warehouse/supplier_manage/add',
        method: 'post',
        data: query
    });
};

export const del = query => {
    return request({
        url: '/warehouse/supplier_manage/del',
        method: 'post',
        data: query
    });
};

export const edit = query => {
    return request({
        url: '/warehouse/supplier_manage/edit',
        method: 'post',
        data: query
    });
};
