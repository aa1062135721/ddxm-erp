import request from '@/utils/request';
/**
 *  用户管理-用户列表
 **/
export const memberList = query => {
    return request({
        url: '/member/member_manage/getList',
        method: 'post',
        data: query
    });
};
/**
 *  用户管理-群发短信
 **/
export const sendMsgs = query => {
    return request({
        url: '/member/member_manage/sendMsgs',
        method: 'post',
        data: query
    });
};
/**
 *  用户管理-编辑
 **/
export const editMember = query => {
    return request({
        url: '/member/member_manage/edit',
        method: 'post',
        data: query
    });
};
/**
 *  门店列表
 **/
export const shopList = query => {
    return request({
        baseURL:'/stores',
        url: 'shop/shop_manage/getList',
        method: 'post',
        data: query
    });
};
/**
 *  用户管理-微信推送
 **/
export const sendWxMsgs = query => {
    return request({
        url: '/member/member_manage/sendWxMsgs',
        method: 'post',
        data: query
    });
};
