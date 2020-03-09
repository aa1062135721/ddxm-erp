import request from '../utils/request';

export const getRoute = query => {
    return request({
        url: '/system/test_action/index',
        method: 'get',
        params: query
    });
};
