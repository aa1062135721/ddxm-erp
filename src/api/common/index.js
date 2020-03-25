import request from '@/utils/request';

/**
 * 选择商品
 **/
export const getGoods = query => {
    return request({
        url: '/system/common/getAllGoods',
        method: 'get',
        params: query
    });
};
