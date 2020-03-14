/**
 *  采购入库单
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/purchase/Purchase_warehouse/purList',
        method: 'post',
        data: query
    });
};

// 采购入库单发货
export const deliverItems = query => {
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
