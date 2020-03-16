import Vue from 'vue';
import App from './App.vue';
import store from './store/index'
import ElementUI from 'element-ui';
Vue.use(ElementUI, {
    size: 'small'
});

import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';

Vue.config.productionTip = false;

import router from './router';
var getRouter;
const _import = require('./router/_import');
const layout = require('./router/layout');

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    // document.title = `${to.meta.title} | 捣蛋熊猫管理系统`;
    // console.log("路由钩子函数to：",to);
    // console.log("路由钩子函数from：",from);
    // console.log("路由钩子函数next：",next);

    if (store.state.userInfo.username) {
        if (to.path === '/login') {
            next({ path: '/' }); // 如果再跑去登录页面则重定向到主页
        } else {
            if (!getRouter) {
                let Arr = getObjArr('vuex').userInfo.auth;
                if (Arr) {
                    saveObjArr('router',Arr);
                    getRouter = filterAsyncRouter(Arr);
                    routerGo(to, next);
                } else {
                    let newRoutes = getObjArr('router'); //从localStorage拿到了路由
                    getRouter = filterAsyncRouter(newRoutes);
                    routerGo(to, next);
                }
            } else {
                next();
            }
        }
    } else {
        console.log("未登录：强制跳转登录页面");
        getRouter = undefined;
        if (to.path === '/login'){
            next();
        } else {
            next({
                path: '/login',
            });
        }
    }
});

function filterAsyncRouter(asyncRouterMap) {  //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component.toLowerCase() === 'layout') {
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
    console.log("初始化动态路由");
    router.addRoutes(getRouter) //动态添加路由
    // global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
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
