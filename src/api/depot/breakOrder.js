/**
 *  仓库 - 破损单
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/damage_list/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/warehouse/damage_list/add',
        method: 'post',
        data: query
    });
}

// 审核
export const examine = query => {
    return request({
        url: '/warehouse/damage_list/examine',
        method: 'post',
        data: query
    });
}
