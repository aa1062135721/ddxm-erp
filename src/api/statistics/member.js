/**
 *  统计管理 会员管理
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        baseURL: '/aShop',
        url: '/order/order_count/memberCount',
        method: 'post',
        data: query
    });
};
