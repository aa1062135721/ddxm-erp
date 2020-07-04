
import request from '@/utils/request';
/**
 *  隐私保护政策
 **/
export const privacy = query => {
    return request({
        url: '/systemset/privacy/getList',
        method: 'post',
        data: query
    });
};
/**
 *  隐私保护政策
 **/
export const privacyEdit = query => {
    return request({
        url: '/systemset/privacy/edit',
        method: 'post',
        data: query
    });
};
/**
 *  服务协议
 **/
export const service = query => {
    return request({
        url: '/systemset/service_agreement/getList',
        method: 'post',
        data: query
    });
};
/**
 *  服务协议——新增
 **/
export const serviceEdit = query => {
    return request({
        url: '/systemset/service_agreement/edit',
        method: 'post',
        data: query
    });
};
/**
 *  Banner列表
 **/
export const bannerList = query => {
    return request({
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
 *  超时管理——超时列表
 **/
export const timeSet = query => {
    return request({
        url: '/systemset/time_set/getList',
        method: 'post',
        data: query
    });
};
/**
 *  超时管理——编辑超时
 **/
export const timeSetOut = query => {
    return request({
        url: '/systemset/time_set/edit',
        method: 'post',
        data: query
    });
};
/**
 *  热门管理——热搜列表
 **/
export const hotList = query => {
    return request({
        url: '/systemset/Hot/getList',
        method: 'post',
        data: query
    });
};
/**
 *  热门管理——新增热搜
 **/
export const hotAdd = query => {
    return request({
        url: '/systemset/Hot/add',
        method: 'post',
        data: query
    });
};
/**
 *  热门管理——编辑热搜
 **/
export const hotEdit = query => {
    return request({
        url: '/systemset/Hot/edit',
        method: 'post',
        data: query
    });
};
/**
 *  热门管理——删除热搜
 **/
export const hotDel = query => {
    return request({
        url: '/systemset/Hot/del',
        method: 'post',
        data: query
    });
};
/**
 *  热门管理——禁用与启用
 **/
export const hotIsSwitch = query => {
    return request({
        url: '/systemset/Hot/isSwitch',
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
