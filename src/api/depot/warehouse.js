/**
 *  仓库  入库单
 **/
import request from '@/utils/request';

// 入库单 列表
export const list = query => {
    return request({
        url: '/purchase/Purchase_warehouse/getList',
        method: 'post',
        data: query
    });
};

// 入库
export const deliver = query => {
    return request({
        url: '/purchase/Purchase_warehouse/deliverItems',
        method: 'post',
        data: query
    });
};

// 入库记录
export const deliverLog = query => {
    return request({
        url: '/purchase/Purchase_warehouse/deliverLog',
        method: 'post',
        data: query
    });
};

// 取消入库
export const deliverCancel = query => {
    return request({
        url: '/purchase/Purchase_warehouse/backDeliver',
        method: 'post',
        data: query
    });
};
