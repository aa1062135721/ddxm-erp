import request from '../utils/request';

/** 
 * 日志列表
*/
export const logMenu = query => {
    return request({
        url: '/auth/log_manage/getList',
        method: 'post',
        data: query
    });
};