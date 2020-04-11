/**
 *  其他入库单
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/warehousing_entry/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/warehouse/warehousing_entry/add',
        method: 'post',
        data: query
    });
};

// 取消其他出库
export const cancel = query => {
    return request({
        url: '/warehouse/warehousing_entry/cancel',
        method: 'post',
        data: query
    });
};

// 导出
export const exportFile = query => {
    return request({
        url: '',
        method: 'post',
        data: query
    });
};
