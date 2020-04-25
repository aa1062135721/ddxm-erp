/**
 *  仓库 - 退货单
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/shop_order_return/getList',
        method: 'post',
        data: query
    });
};

// 退货入库记录
export const deliverLog = query => {
    return request({
        url: '/warehouse/shop_order_return/deliverLog',
        method: 'post',
        data: query
    });
};

// 退货商品入库
export const orderReturnDeliver = query => {
    return request({
        url: '/warehouse/shop_order_return/orderReturnDeliver',
        method: 'post',
        data: query
    });
};
