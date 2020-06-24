
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
/**
 *  商品评论- 查看
 **/
export const goodsListFind = query => {
    return request({
        url: '/goods/goods_comment/find',
        method: 'post',
        data: query
    });
};
/**
 *  商品评论- 是否显示
 **/
export const commentSwitch = query => {
    return request({
        url: '/goods/goods_comment/isSwitch',
        method: 'post',
        data: query
    });
};
/**
 *  品牌管理- 是否显示
 **/
export const brandSwitch = query => {
    return request({
        url: '/goods/goods_brand/isSwitch',
        method: 'post',
        data: query
    });
};
/**
 *  商品分类- 是否显示
 **/
export const goodsSwitch = query => {
    return request({
        url: '/goods/goods_category/isSwitch',
        method: 'post',
        data: query
    });
};
/**
 *  商品分类- 新增
 **/
export const goodsClassAdd = query => {
    return request({
        url: '/goods/goods_category/add',
        method: 'post',
        data: query
    });
};
/**
 *  商品分类- 转移商品
 **/
export const shiftGoods = query => {
    return request({
        url: '/goods/goods_category/shiftGoods',
        method: 'post',
        data: query
    });
};
/**
 *  商品管理- 商品批量上下级
 **/
export const goodsBulkShelf = query => {
    return request({
        url: '/goods/goods_bulk_edit/goodsBulkShelf',
        method: 'post',
        data: query
    });
};
