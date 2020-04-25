/**
 *  仓库 - 发货单
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/shop_deliver_order/getList',
        method: 'post',
        data: query
    });
};

export const sendGoods = query => {
    return request({
        url: '/warehouse/shop_deliver_order/sendGoods',
        method: 'post',
        data: query
    });
};

export const sendGoodsLog = query => {
    return request({
        url: '/warehouse/shop_deliver_order/sendGoodsFlows',
        method: 'post',
        data: query
    });
};
