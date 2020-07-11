import request from '@/utils/request';
/**
 *  统计管理 客户列表
 **/
export const warehouse = query => {
    return request({
        url: '/warehouse/customer/getList',
        method: 'post',
        data: query
    });
};
/**
 *  统计管理 删除客户
 **/
export const delWarehouse = query => {
    return request({
        url: '/warehouse/customer/del',
        method: 'post',
        data: query
    });
};
/**
 *  统计管理 新增客户
 **/
export const addWarehouse = query => {
    return request({
        url: '/warehouse/customer/add',
        method: 'post',
        data: query
    });
};
/**
 *  统计管理 编辑客户
 **/
export const editWarehouse = query => {
    return request({
        url: '/warehouse/customer/edit',
        method: 'post',
        data: query
    });
};
