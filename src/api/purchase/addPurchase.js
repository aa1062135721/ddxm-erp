/**
 *  新增采购单
 **/
import request from '@/utils/request';

// 新增采购单时获取缺货数量
export const getShortageNum = query => {
    return request({
        url: '/Purchase/Purchase/getShortageNum',
        method: 'post',
        data: query
    });
};

// 采购历史记录
export const purchaseHistoryList = query => {
    return request({
        url: '/Purchase/Purchase/purItemRecord',
        method: 'post',
        data: query
    });
};


// 新增采购单
export const addPurchase = query => {
    return request({
        url: '/Purchase/Purchase/addPurchase',
        method: 'post',
        data: query
    });
};
