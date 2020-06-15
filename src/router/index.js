import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import layout from './layout'

export const constantRoutes = [
{path: '/',component: layout,meta: { title: '自述文件' },redirect:'home',children: [
        {path: '/home',component: () => import('../components/page/Dashboard'),meta: { title: '首页' }},
        {path: '/departmentAuth',component: () => import('../components/page/auth_management/department_management/auth'),meta:{ title: '部门权限管理' }},
        {path: '/staffAuth',component: () => import('../components/page/auth_management/staff_management/auth'),meta: { title: '员工权限管理' }},
        {path: '/toView',component: () => import('../components/page/goods_management/goods_comments/toView'),meta: { title: '评论详情' }},
        {path: '/addClass',component: () => import('../components/page/goods_management/goods_classification/addClass'),meta: { title: '添加分类' }},
        {path: '/multipleIsup',component: () => import('../components/page/goods_management/goods_batchChange/multipleIsup'),meta: { title: '批量自动上下架' }},
        {path: '/moreEditor',component: () => import('../components/page/goods_management/goods_batchChange/moreEditor'),meta: { title: '统一编辑' }},
        {path: '/singleEditor',component: () => import('../components/page/goods_management/goods_batchChange/singleEditor'),meta: { title: '逐个编辑' }},
    ]
},
{path: '/login',component: () => import('../components/page/Login.vue'),meta: { title: '登录' }},
// {
//     path: '*',
//     redirect: '/404'
// }

]

const createRouter = () => new Router({
    routes: constantRoutes
  })

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}


export default createRouter()
