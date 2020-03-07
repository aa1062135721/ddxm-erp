import Vue from 'vue';
import App from './App.vue';
import store from './store/index'
import ElementUI from 'element-ui';
Vue.use(ElementUI, {
    size: 'small'
});

import axios from 'axios'

import { getRoute } from './api/index'


import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';

Vue.config.productionTip = false;

import router from './router';
var getRouter

const _import = require('./router/_import')
const layout = require('./router/layout')

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | 捣蛋熊猫管理系统`;
//     // const role = store.state.userInfo.username;
//     // if (!role && to.path !== '/login') {
//     //     next('/login');
//     // } else if (to.meta.permission) {
//     //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     //     console.log(store.state.userInfo)
//     //     role === 'admin' ? next() : next('/403');
//     // } else {
//     //     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//     //     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//     //         Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//     //             confirmButtonText: '确定'
//     //         });
//     //     } else {
//     //         next();
//     //     }
//     // }
//     if (!getRouter) { //不加这个判断，路由会陷入死循环
//       console.log(111)
//       if (!getObjArr('router')) {
//         getRoute().then(res=>{
//           console.log(res)
//           if(res.code == 200){
//             console.log("路由",res )
//             saveObjArr('router',res.data)
//             getRouter = filterAsyncRouter(res.data)
//             console.log("处理之后",getRouter)
//
//             routerGo(to, next)
//           }
//         })
//       } else {//从localStorage拿到了路由
//         let newRoutes = getObjArr('router')//拿到路由
//         getRouter = filterAsyncRouter(newRoutes)
//         console.log("本地",getRouter)
//           routerGo(to, next)
//         }
//       } else {
//         next()
//       }
// });

function filterAsyncRouter(asyncRouterMap) {  //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component === 'layout') {
        route.component = layout
      }else{
          route.component = _import(route.component)
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}

function routerGo(to, next) {
    router.addRoutes(getRouter) //动态添加路由
    global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
    next({ ...to, replace: true })
}

function saveObjArr(name, data) { //localStorage 存储数组对象的方法
    localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { //localStorage 获取数组对象的方法
    return JSON.parse(window.localStorage.getItem(name));
}



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
