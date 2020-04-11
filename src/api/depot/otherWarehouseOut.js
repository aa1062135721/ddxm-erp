/**
 *  其他出库单
 **/
import request from '@/utils/request';

//  其他出库单  列表/搜索
export const list = query => {
    return request({
        url: '/warehouse/warehouse_out/getList',
        method: 'post',
        data: query
    });
};

// 新增其他出库
export const add = query => {
    return request({
        url: '/warehouse/warehouse_out/add',
        method: 'post',
        data: query
    });
};

// 取消其他出库
export const cancel = query => {
    return request({
        url: '/warehouse/warehouse_out/cancel',
        method: 'post',
        data: query
    });
};

// 导出 其他出库
export const exportFile = query => {
    return request({
        url: '/warehouse/warehousing_entry/export',
        method: 'post',
        data: query
    });
};

// 其他出库 对账
export const reconciliation = query => {
    return request({
        url: '/warehouse/warehouse_out/reconciliation',
        method: 'post',
        data: query
    });
};
