/**
 *  财务--来往款项
 **/
import request from '../../utils/request';

export const list = query => {
    return request({
        url: '/finance/remittance_flow/getList',
        method: 'post',
        data: query
    });
};

export const add = query => {
    return request({
        url: '/finance/remittance_flow/add',
        method: 'post',
        data: query
    });
};

export const details = query => {
    return request({
        url: '/finance/remittance_flow/find',
        method: 'post',
        data: query
    });
};

export const cancel = query => {
    return request({
        url: '/finance/remittance_flow/removeRemittance',
        method: 'post',
        data: query
    });
};
