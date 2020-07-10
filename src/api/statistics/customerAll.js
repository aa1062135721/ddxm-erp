import request from '@/utils/request';
/**
 *  统计管理 客户管理
 **/
export const warehouse = query => {
    return request({
        url: '/warehouse/warehouse_out/getListC',
        method: 'post',
        data: query
    });
};
/**
 *  统计管理 删除客户
 **/
export const delWarehouse = query => {
    return request({
        url: '/warehouse/warehouse_out/delC',
        method: 'post',
        data: query
    });
};

