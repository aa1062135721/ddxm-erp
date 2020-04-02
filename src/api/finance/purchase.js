/**
 *  财务--采购打款单
 **/
import request from '../../utils/request';

export const list = query => {
    return request({
        url: '/finance/purchase_remittance/getList',
        method: 'post',
        data: query
    });
};

// 采购成本或采购历史记录
export const costOrRecord = query => {
    return request({
        url: '/finance/purchase_remittance/purItemRecord',
        method: 'post',
        data: query
    });
};

// 导出
export const exportFile = query => {
    return request({
        url: '/finance/purchase_remittance/export',
        data: "get",
        responseType: 'blob'
    });
};
