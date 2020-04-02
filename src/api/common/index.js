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

/**
 * 获取七牛云上传文件token
 **/
export const getQiNiuToken = query => {
    return request({
        url: '/system/Common/getQiNiuToken',
        method: 'get',
        params: query
    });
};
