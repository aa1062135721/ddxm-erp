(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0db311e"],{4380:function(t,o,n){"use strict";n.d(o,"n",(function(){return r})),n.d(o,"s",(function(){return d})),n.d(o,"q",(function(){return u})),n.d(o,"l",(function(){return s})),n.d(o,"m",(function(){return c})),n.d(o,"o",(function(){return a})),n.d(o,"p",(function(){return i})),n.d(o,"e",(function(){return g})),n.d(o,"i",(function(){return f})),n.d(o,"h",(function(){return l})),n.d(o,"g",(function(){return m})),n.d(o,"r",(function(){return p})),n.d(o,"f",(function(){return b})),n.d(o,"a",(function(){return h})),n.d(o,"d",(function(){return j})),n.d(o,"k",(function(){return O})),n.d(o,"c",(function(){return _})),n.d(o,"b",(function(){return w})),n.d(o,"j",(function(){return y})),n.d(o,"w",(function(){return L})),n.d(o,"u",(function(){return k})),n.d(o,"v",(function(){return v})),n.d(o,"t",(function(){return I})),n.d(o,"x",(function(){return S}));var e=n("b775"),r=function(t){return Object(e["a"])({url:"/goods/goods/getList",method:"post",data:t})},d=function(t){return Object(e["a"])({url:"/goods/goods/isSwitch",method:"post",data:t})},u=function(t){return Object(e["a"])({url:"/goods/goods/isShow",method:"post",data:t})},s=function(t){return Object(e["a"])({url:"/goods/goods/del",method:"post",data:t})},c=function(t){return Object(e["a"])({url:"/goods/goods/editGoodsInfo",method:"post",data:t})},a=function(t){return Object(e["a"])({url:"/goods/goods_recycle/getList",method:"post",data:t})},i=function(t){return Object(e["a"])({url:"/goods/goods_recycle/edit",method:"post",data:t})},g=function(t){return Object(e["a"])({url:"/goods/goods_recycle/del",method:"post",data:t})},f=function(t){return Object(e["a"])({url:"/goods/goods_add/add",method:"post",data:t})},l=function(t){return Object(e["a"])({url:"/goods/goods_category/getList",method:"post",data:t})},m=function(t){return Object(e["a"])({url:"/goods/goods_category/find",method:"post",data:t})},p=function(t){return Object(e["a"])({url:"/goods/goods_specs/getList",method:"post",data:t})},b=function(t){return Object(e["a"])({url:"/goods/goods_specs/edit",method:"post",data:t})},h=function(t){return Object(e["a"])({url:"/goods/goods_specs/add",method:"post",data:t})},j=function(t){return Object(e["a"])({url:"/goods/goods_specs/del",method:"post",data:t})},O=function(t){return Object(e["a"])({url:"/goods/goods_comment/getList",method:"post",data:t})},_=function(t){return Object(e["a"])({url:"/goods/goods_comment/del",method:"post",data:t})},w=function(t){return Object(e["a"])({url:"/goods/goods_bulk_edit/editGoodsInfo",method:"post",data:t})},y=function(t){return Object(e["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelfList",method:"post",data:t})},L=function(t){return Object(e["a"])({url:"/goods/goods_type/getList",method:"post",data:t})},k=function(t){return Object(e["a"])({url:"/goods/goods_type/del",method:"post",data:t})},v=function(t){return Object(e["a"])({url:"/goods/goods_type/edit",method:"post",data:t})},I=function(t){return Object(e["a"])({url:"goods/goods_type/add",method:"post",data:t})},S=function(t){return Object(e["a"])({url:"goods/goods_resource/first",method:"post",data:t})}},b26e:function(t,o,n){"use strict";n.d(o,"f",(function(){return r})),n.d(o,"g",(function(){return d})),n.d(o,"e",(function(){return u})),n.d(o,"a",(function(){return s})),n.d(o,"b",(function(){return c})),n.d(o,"c",(function(){return a})),n.d(o,"i",(function(){return i})),n.d(o,"h",(function(){return g})),n.d(o,"d",(function(){return f}));var e=n("b775"),r=function(t){return Object(e["a"])({url:"/system/common/getAllGoods",method:"get",params:t})},d=function(t){return Object(e["a"])({url:"/system/Common/getQiNiuToken",method:"get",params:t})},u=function(t){return Object(e["a"])({url:"/goods/goods_brand/getList",method:"post",params:t})},s=function(t){return Object(e["a"])({url:"/goods/goods_brand/add",method:"post",params:t})},c=function(t){return Object(e["a"])({url:"/goods/goods_brand/del",method:"post",params:t})},a=function(t){return Object(e["a"])({url:"/goods/goods_brand/edit",method:"post",params:t})},i=function(t){return Object(e["a"])({url:"/goods/goods_resource/getList",method:"post",params:t})},g=function(t){return Object(e["a"])({url:"/goods/goods_resource/del",method:"post",params:t})},f=function(t){return Object(e["a"])({url:"/system/common/findChilds",method:"post",params:t})}},b775:function(t,o,n){"use strict";var e,r=n("bc3a"),d=n.n(r),u=n("5c96"),s=n("4360"),c=d.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});c.interceptors.request.use((function(t){return e=u["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(e.close(),200===t.status)return-1==t.data.code&&(s["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(u["Message"].closeAll(),Object(u["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return e.close(),console.log(t),Promise.reject()})),o["a"]=c}}]);