(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9a6bb26","chunk-2d0e28d4"],{"4ac6":function(e,t,n){"use strict";var o=n("752c"),s=n.n(o);s.a},"4ffd":function(e,t,n){e.exports=n.p+"static/img/logo.e5f96c8e.png"},"752c":function(e,t,n){},"7ed4":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),s=new o["default"];t["default"]=s},b775:function(e,t,n){"use strict";var o,s=n("bc3a"),c=n.n(s),r=n("5c96"),a=n("4360"),l=c.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});l.interceptors.request.use((function(e){return o=r["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e}),(function(e){return console.log(e),Promise.reject()})),l.interceptors.response.use((function(e){if(o.close(),200===e.status)return-1==e.data.code&&(a["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=e.data.code&&(r["Message"].closeAll(),Object(r["Message"])({message:e.data.msg,type:"error"})),e.data;Promise.reject()}),(function(e){return o.close(),console.log(e),Promise.reject()})),t["a"]=l},c24f3:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r}));var o=n("b775"),s=function(e){return Object(o["a"])({baseURL:"/api",url:"/system/login/checkLogin",method:"post",data:e})},c=function(e){return Object(o["a"])({url:"/system/login/checkLogin",method:"post",data:e})},r=function(e){return Object(o["a"])({url:"/system/login/outLogin",method:"post",data:e})}},cff1:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-left"},[n("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[e.collapse?n("i",{staticClass:"el-icon-s-unfold"}):n("i",{staticClass:"el-icon-s-fold"})]),e._m(0),n("div",{staticClass:"my-menu"},[n("el-menu",{staticClass:"nav-demo",attrs:{"default-active":""+e.sideBarId,"active-text-color":"#fff","text-color":"#fff",mode:"horizontal"},on:{select:e.handleSelect}},e._l(e.userInfo.auth,(function(t,o){return n("el-menu-item",{key:o,attrs:{index:""+t.id}},[e._v(e._s(t.meta.title))])})),1)],1)]),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",{staticClass:"btn-fullscreen",on:{click:e.handleFullScreen}},[n("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"el-icon-rank"})])],1),n("div",{staticClass:"btn-bell"},[n("el-tooltip",{attrs:{effect:"dark",content:e.message?"有"+e.message+"条未读消息":"消息中心",placement:"bottom"}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"el-icon-bell"})])],1),e.message?n("span",{staticClass:"btn-bell-badge"}):e._e()],1),n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:e.userInfo.headImg||"https://ddxm661.com/static/admin/img/avatar.png"}})]),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n                    "+e._s(e.userInfo.username)+"\n                    "),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[e._v("退出登录")])],1)],1)],1)])])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo"},[o("img",{attrs:{src:n("4ffd"),alt:""}}),o("span",[e._v("捣蛋熊")])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("7ed4"),a=n("2f62"),l=n("c24f3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){return{collapse:!1,fullscreen:!1,message:""}},created:function(){},computed:u({},Object(a["d"])(["userInfo","sideBarId"])),methods:u({},Object(a["c"])(["setUserInfo"]),{},Object(a["b"])(["setSideId"]),{handleCommand:function(e){var t=this;"loginout"==e&&Object(l["b"])().then((function(e){t.setUserInfo({}),window.localStorage.removeItem("router"),t.$router.push({path:"/login"}),setTimeout((function(){window.location.reload()}),200)})).catch((function(e){console.log(e)}))},handleSelect:function(e,t){this.setSideId(""+e)},collapseChage:function(){this.collapse=!this.collapse,r["default"].$emit("collapse",this.collapse)},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}),mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},m=d,f=(n("4ac6"),n("2877")),p=Object(f["a"])(m,o,s,!1,null,"5967d52b",null);t["default"]=p.exports}}]);