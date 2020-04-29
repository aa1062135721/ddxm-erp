/**
 *  订单- 退货单列表
 **/
import request from '@/utils/request';

// 列表
export const list = query => {
    return request({
        baseURL: '/aShop',
        url: '/order/order_return/getList',
        method: 'post',
        data: query
    });
};

// 详情
export const details = query => {
    return request({
        baseURL: '/aShop',
        url: '/order/order_return/find',
        method: 'post',
        data: query
    });
};

// 确认/拒绝退货
export const orderTrueHandle = query => {
    return request({
        baseURL: '/aShop',
        url: '/order/order_return/orderTrueHandle',
        method: 'post',
        data: query
    });
};
