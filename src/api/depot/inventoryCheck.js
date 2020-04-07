/**
 *  库存查询
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/warehouse_select/getList',
        method: 'post',
        data: query
    });
};

// 商品成本轨迹
export const costLocus = query => {
    return request({
        url: '/warehouse/warehouse_select/costLocus',
        method: 'post',
        data: query
    });
};

// 商品轨迹
export const goodsLocus = query => {
    return request({
        url: '/warehouse/warehouse_select/goodsLocus',
        method: 'post',
        data: query
    });
};

// 导出
export const exportFile = query => {
    return request({
        url: '/warehouse/warehouse_select/export',
        method: 'get',
        data: query
    });
};
