import request from '../utils/request';

/** 
 * 新增菜单
*/
export const addMenu = query => {
    return request({
        url: '/systemset/column_manage/add',
        method: 'post',
        data: query
    });
};

/** 
 * 菜单编辑
*/
export const editMenu = query => {
    return request({
        url: '/systemset/column_manage/edit',
        method: 'post',
        data: query
    });
};

/** 
 * 菜单列表
*/
export const listMenu = query => {
    return request({
        url: '/systemset/column_manage/getList',
        method: 'post',
        data: query
    });
};

/** 
 * 删除列表
*/
export const delMenu = query => {
    return request({
        url: '/systemset/column_manage/del',
        method: 'post',
        data: query
    });
};