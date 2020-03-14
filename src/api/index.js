import request from '../utils/request';

export const getRoute = query => {
    return request({
        url: '/system/test_action/index',
        method: 'get',
        params: query
    });
};

/**
 * 查看物流
 * @param query {code: 'jd', sn: 'JDVE00865342928'}
 * @returns {AxiosPromise}
 */
export const logistics = query => {
    return request({
        url: '/system/Common/logistics',
        method: 'post',
        params: query
    });
};
