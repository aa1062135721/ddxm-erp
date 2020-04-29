/**
 *  订单- 订单列表
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        baseURL: '/aShop',
        url: '/order/order_list/getList',
        method: 'post',
        data: query
    });
};
