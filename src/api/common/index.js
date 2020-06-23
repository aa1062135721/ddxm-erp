import request from '@/utils/request';

/**
 * 选择商品
 **/
export const getGoods = query => {
    return request({
        url: '/system/common/getAllGoods',
        method: 'get',
        params: query
    });
};

/**
 * 获取七牛云上传文件token
 **/
export const getQiNiuToken = query => {
    return request({
        url: '/system/Common/getQiNiuToken',
        method: 'get',
        params: query
    });
};

/**
 * 选择品牌
 **/
export const getBrand = query => {
    return request({
        url: '/goods/goods_brand/getList',
        method: 'post',
        params: query
    });
};


/**
 * 添加新品牌
 **/
export const brandAdd = query => {
    return request({
        url: '/goods/goods_brand/add',
        method: 'post',
        params: query
    });
};


/**
 * 删除品牌
 **/
export const delBrand = query => {
    return request({
        url: '/goods/goods_brand/del',
        method: 'post',
        params: query
    });
};

/**
 * 编辑品牌
 **/
export const editBrand = query => {
    return request({
        url: '/goods/goods_brand/edit',
        method: 'post',
        params: query
    });
};

/**
 * 商品图片资源--图片列表
 **/
export const resourceList = query => {
    return request({
        url: '/goods/goods_resource/getList',
        method: 'post',
        params: query
    });
};

/**
 * 商品图片资源--删除图片
 **/
export const resourceDel = query => {
    return request({
        url: '/goods/goods_resource/del',
        method: 'post',
        params: query
    });
};
