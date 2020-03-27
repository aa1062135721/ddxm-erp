/**
 *  采购, 待采购单
 **/
import request from '@/utils/request';

// 供应商无货状态说明
export const noGoodsStatus = query => {
    return request({
        url: '/purchase/Be_purchase/supExplain',
        method: 'post',
        data: query
    });
};

// 设置无货
export const setNoGoods = query => {
    return request({
        url: '/purchase/Be_purchase/setNotItem',
        method: 'post',
        data: query
    });
};

export const list = query => {
    return request({
        url: '/purchase/Be_purchase/getList',
        method: 'post',
        data: query
    });
};

// 缺货轨迹
export const noGoodsTrail = query => {
    return request({
        url: '/purchase/Be_purchase/itemTrail',
        method: 'post',
        data: query
    });
};
