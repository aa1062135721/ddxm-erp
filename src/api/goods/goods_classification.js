
import request from '@/utils/request';

/**
 *  商品分类- 删除
 **/
export const goodsListDel = query => {
    return request({
        url: '/goods/goods_category/del',
        method: 'post',
        data: query
    });
};