
import request from '@/utils/request';

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
