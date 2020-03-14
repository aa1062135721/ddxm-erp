/**
 *  采购记录
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/purchase/Purchase_record/purchaseList',
        method: 'post',
        data: query
    });
};

export const del = query => {
    return request({
        url: '/purchase/Purchase_record/delList',
        method: 'post',
        data: query
    });
};
