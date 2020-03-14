import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import layout from './layout'

export const constantRoutes = [
{
    path: '/',
    component: layout,
    meta: { title: '自述文件' },
    redirect:'home',
    children: [
        {
            path: '/home',
            component: () => import('../components/page/Dashboard'),
            meta: { title: '首页' }
        },
        // {
        //     path: '/menu',
        //     component: () => import('../components/page/menu_management/index'),
        //     meta: { title: '菜单管理' }
        // },
        // {
        //     path: '/shouldPurchase',
        //     component: () => import('../components/page/purchase_management/should_purchase/index'),
        //     meta: { title: '待采购单' }
        // },
        // {
        //     path: '/purchaseLog',
        //     component: () => import('../components/page/purchase_management/purchase_log/index'),
        //     meta: { title: '待采记录' }
        // },
        // {
        //     path: '/depotManagement',
        //     component: () => import('../components/page/depot_management/depot_management/index'),
        //     meta: { title: '仓库管理' }
        // },
        // {
        //     path: '/supplierManagement',
        //     component: () => import('../components/page/depot_management/supplier_management/index'),
        //     meta: { title: '供应商管理' }
        // },
        // {
        //     path: '/inventoryCheck',
        //     component: () => import('../components/page/depot_management/inventory_check/index'),
        //     meta: { title: '库存查询' }
        // },

        {
            path: '/departmentAuth',
            component: () => import('../components/page/department_management/auth'),
            meta: { title: '部门权限管理' }
        },
        {
            path: '/staffAuth',
            component: () => import('../components/page/staff_management/auth'),
            meta: { title: '员工权限管理' }
        },
        // {
        //     path: '/purchaseWarehouse',
        //     component: () => import('../components/page/purchase_management/purchase_warehouse/index'),
        //     meta: { title: '采购入库单' }
        // },
    ]
},
{
    path: '/login',
    component: () => import('../components/page/Login.vue'),
    meta: { title: '登录' }
},
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

const router = createRouter()

export default router
// export default new Router({
//     routes: [
//         {
//             path: '/',
//             redirect: '/dashboard'
//         },
//         {
//             path: '/',
//             component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
//             meta: { title: '自述文件' },
//             children: [
//                 {
//                     path: '/dashboard',
//                     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
//                     meta: { title: '系统首页' }
//                 },
//                 {
//                     path: '/icon',
//                     component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
//                     meta: { title: '自定义图标' }
//                 },
//                 {
//                     path: '/table',
//                     component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
//                     meta: { title: '基础表格' }
//                 },
//                 {
//                     path: '/tabs',
//                     component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
//                     meta: { title: 'tab选项卡' }
//                 },
//                 {
//                     path: '/form',
//                     component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
//                     meta: { title: '基本表单' }
//                 },
//                 {
//                     // 富文本编辑器组件
//                     path: '/editor',
//                     component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
//                     meta: { title: '富文本编辑器' }
//                 },
//                 {
//                     // markdown组件
//                     path: '/markdown',
//                     component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
//                     meta: { title: 'markdown编辑器' }
//                 },
//                 {
//                     // 图片上传组件
//                     path: '/upload',
//                     component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
//                     meta: { title: '文件上传' }
//                 },
//                 {
//                     // vue-schart组件
//                     path: '/charts',
//                     component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
//                     meta: { title: 'schart图表' }
//                 },
//                 {
//                     // 拖拽列表组件
//                     path: '/drag',
//                     component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
//                     meta: { title: '拖拽列表' }
//                 },
//                 {
//                     // 拖拽Dialog组件
//                     path: '/dialog',
//                     component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
//                     meta: { title: '拖拽弹框' }
//                 },
//                 {
//                     // 权限页面
//                     path: '/permission',
//                     component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
//                     meta: { title: '权限测试', permission: true }
//                 },
//                 {
//                     path: '/404',
//                     component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
//                     meta: { title: '404' }
//                 },
//                 {
//                     path: '/403',
//                     component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
//                     meta: { title: '403' }
//                 },
//                 {
//                     path: '/departmentManagement',
//                     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/department_management/index'),
//                     meta: { title: '部门管理' }
//                 },
//                 {
//                     path: '/jobManagement',
//                     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/job_management/index'),
//                     meta: { title: '岗位管理' }
//                 },
//                 {
//                     path: '/staffManagement',
//                     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/staff_management/index'),
//                     meta: { title: '员工管理' }
//                 },
//                 {
//                     path: '/menuManagement',
//                     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/menu_management/index'),
//                     meta: { title: '菜单管理',  permission: true }
//                 },
//                 {
//                     path: '/logManagement',
//                     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/log_management/index'),
//                     meta: { title: '登录日志' }
//                 },
//             ]
//         },
//         {
//             path: '/login',
//             component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
//             meta: { title: '登录' }
//         },
//         {
//             path: '*',
//             redirect: '/404'
//         }
//     ]
// });
