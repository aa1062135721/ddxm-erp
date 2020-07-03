
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
 *  Banner编辑
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
 *  Banner添加
 **/
export const bannerAdd = query => {
    return request({
        baseURL: 'http://ddxm661.com:8088',
        url: '/systemset/banner/add',
        method: 'post',
        data: query
    });
};
/**
 *  Banner删除
 **/
export const bannerDel = query => {
    return request({
        baseURL: 'http://ddxm661.com:8088',
        url: '/systemset/banner/del',
        method: 'post',
        data: query
    });
};
/**
 *  Banner——禁用与启用
 **/
export const bannerSwitch = query => {
    return request({
        baseURL: 'http://ddxm661.com:8088',
        url: '/systemset/banner/isSwitch',
        method: 'post',
        data: query
    });
};

/**
 *  图标管理——图标列表
 **/
export const iconList = query => {
    return request({
        url: '/systemset/Icon/getList',
        method: 'post',
        data: query
    });
};
/**
 *  图标管理——添加图标
 **/
export const iconAdd = query => {
    return request({
        url: '/systemset/Icon/add',
        method: 'post',
        data: query
    });
};
/**
 *  图标管理——编辑图标
 **/
export const iconEdit = query => {
    return request({
        url: '/systemset/Icon/edit',
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
