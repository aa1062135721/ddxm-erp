/**
 *  统计管理 交易统计
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        baseURL: '/aShop',
        url: '/order/order_count/transactionCount',
        method: 'post',
        data: query
    });
};
