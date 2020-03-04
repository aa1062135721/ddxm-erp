import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const getRoute = query => {
    return request({
        url: '/system/test_action/index',
        method: 'get',
        params: query
    });
};
