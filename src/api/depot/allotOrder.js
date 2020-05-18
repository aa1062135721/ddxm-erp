/**
 *  仓库 - 调拨单
 **/
import request from '@/utils/request';

export const list = query => {
    return request({
        url: '/warehouse/Allot/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/warehouse/Allot/add',
        method: 'post',
        data: query
    });
}

export const confirm = query => {
    return request({
        url: '/warehouse/Allot/confirm',
        method: 'post',
        data: query
    });
}

export const sendGoods = query => {
    return request({
        url: '/warehouse/Allot/sendGoods',
        method: 'post',
        data: query
    });
}

export const sendGoodsCancel = query => {
    return request({
        url: '/warehouse/Allot/cancelSendGoods',
        method: 'post',
        data: query
    });
}

export const edit = query => {
    return request({
        url: '/warehouse/Allot/edit',
        method: 'post',
        data: query
    });
}
