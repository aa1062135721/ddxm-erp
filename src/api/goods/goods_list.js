
import request from '@/utils/request';

/**
 *  商品- 商品列表
 **/
export const goodsList = query => {
    return request({
        url: '/goods/goods/getList',
        method: 'post',
        data: query
    });
};
/**
 *  编辑商品信息【销售价格、库存预警值等】
 **/
export const goodsInfo = query => {
    return request({
        url: '/goods/goods/editGoodsInfo',
        method: 'post',
        data: query
    });
};
/**
 *  商品回收站- 商品列表
 **/
export const goodsRecycle = query => {
    return request({
        url: '/goods/goods_recycle/getList',
        method: 'post',
        data: query
    });
};
/**
 *  商品回收站- 还原
 **/
export const goodsReduction = query => {
    return request({
        url: '/goods/goods_recycle/edit',
        method: 'post',
        data: query
    });
};
/**
 *  商品回收站- 删除
 **/
export const deleteGoods = query => {
    return request({
        url: '/goods/goods_recycle/del',
        method: 'post',
        data: query
    });
};
