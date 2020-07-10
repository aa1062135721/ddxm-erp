
import request from '@/utils/request';

/**
 *  商品- 商品列表
 **/
export const goodsList = query => {
    return request({
        baseURL:'/api',
        url: '/api/item/getGoodsList',
        method: 'post',
        data: query
    });
};
/**
 *  秒杀——秒杀列表
 **/
export const activityList = query => {
    return request({
        url: '/activity/Seckill/getLIst',
        method: 'post',
        data: query
    });
};
/**
 *  秒杀——编辑列表
 **/
export const activityEdit= query => {
    return request({
        url: '/activity/Seckill/edit',
        method: 'post',
        data: query
    });
};
/**
 *  秒杀——删除秒杀
 **/
export const activityDel= query => {
    return request({
        url: '/activity/Seckill/del',
        method: 'post',
        data: query
    });
};
/**
 *  秒杀——添加秒杀
 **/
export const seckillAdd= query => {
    return request({
        url: '/activity/Seckill/add',
        method: 'post',
        data: query
    });
};
/**
 *  拼团——拼团列表
 **/
export const CollageList= query => {
    return request({
        url: '/activity/Collage/getList',
        method: 'post',
        data: query
    });
};
/**
 *  拼团——添加拼团
 **/
export const CollageAdd= query => {
    return request({
        url: '/activity/Collage/add',
        method: 'post',
        data: query
    });
};
/**
 *  拼团——编辑拼团
 **/
export const CollageEdit= query => {
    return request({
        url: '/activity/Collage/edit',
        method: 'post',
        data: query
    });
};
/**
 *  拼团——删除拼团
 **/
export const CollageDel= query => {
    return request({
        url: '/activity/Collage/del',
        method: 'post',
        data: query
    });
};
/**
 *  限时购——限时购列表
 **/
export const flashSale= query => {
    return request({
        url: '/activity/flash_sale/getList',
        method: 'post',
        data: query
    });
};
/**
 *  限时购——限时购删除
 **/
export const flashDel= query => {
    return request({
        url: '/activity/flash_sale/del',
        method: 'post',
        data: query
    });
};
/**
 *  限时购——限时购添加
 **/
export const flashAdd= query => {
    return request({
        url: '/activity/flash_sale/add',
        method: 'post',
        data: query
    });
};
/**
 *  限时购——限时购编辑
 **/
export const flashEdit= query => {
    return request({
        url: '/activity/flash_sale/edit',
        method: 'post',
        data: query
    });
};
/**
 *  提现管理——列表
 **/
export const cashout= query => {
    return request({
        url: '/cashout/cashout_mange/getList',
        method: 'post',
        data: query
    });
};
/**
 *  提现管理——编辑
 **/
export const cashoutEdit= query => {
    return request({
        url: '/cashout/cashout_mange/edit',
        method: 'post',
        data: query
    });
};
/**
 *  提现管理——添加提现
 **/
export const cashoutAdd= query => {
    return request({
        url: '/cashout/cashout_mange/add',
        method: 'post',
        data: query
    });
};
