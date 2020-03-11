/**
 *  仓库管理
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/warehouse_manage/getList',
        method: 'post',
        data: query
    });
};

// 仓库公共查询接口（无分页）
export const listAll = query => {
    return request({
        url: '/system/common/getWarehouse',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/warehouse/warehouse_manage/add',
        method: 'post',
        data: query
    });
};

export const del = query => {
    return request({
        url: '/warehouse/warehouse_manage/del',
        method: 'post',
        data: query
    });
};

export const edit = query => {
    return request({
        url: '/warehouse/warehouse_manage/edit',
        method: 'post',
        data: query
    });
};
