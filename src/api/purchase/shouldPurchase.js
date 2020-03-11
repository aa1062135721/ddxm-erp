/**
 *  仓库管理
 **/
import request from '@/utils/request';

// 供应商无货状态说明
export const noGoodsStatus = query => {
    return request({
        url: '/purchase/Be_purchase/supExplain',
        method: 'post',
        data: query
    });
};
