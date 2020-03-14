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
