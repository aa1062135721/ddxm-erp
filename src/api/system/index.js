
import request from '@/utils/request';
/**
 *  隐私保护政策
 **/
export const privacy = query => {
    return request({
        baseURL: 'http://ddxm661.com:8088',
        url: '/systemset/privacy/getList',
        method: 'post',
        data: query
    });
};
/**
 *  Banner列表
 **/
export const bannerList = query => {
    return request({
        baseURL: 'http://ddxm661.com:8088',
        url: '/systemset/banner/getList',
        method: 'post',
        data: query
    });
};
/**
 *  Banner列表
 **/
export const bannerEdit = query => {
    return request({
        baseURL: 'http://ddxm661.com:8088',
        url: '/systemset/banner/edit',
        method: 'post',
        data: query
    });
};
/**
 * 获取七牛云上传文件token
 **/
export const getQiNiuToken = query => {
    return request({
        baseURL: '/api',
        url: '/system/Common/getQiNiuToken',
        method: 'get',
        params: query
    });
};