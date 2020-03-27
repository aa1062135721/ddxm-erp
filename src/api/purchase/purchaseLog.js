/**
 *  采购记录
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/purchase/Purchase_record/getList',
        method: 'post',
        data: query
    });
};

// 取消采购
export const purCancel = query => {
    return request({
        url: '/purchase/Purchase_record/purCancel',
        method: 'post',
        data: query
    });
};
