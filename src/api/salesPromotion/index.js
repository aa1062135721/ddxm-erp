
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