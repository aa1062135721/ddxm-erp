(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73f54d96","chunk-b0db311e"],{4380:function(t,o,e){"use strict";e.d(o,"n",(function(){return r})),e.d(o,"s",(function(){return s})),e.d(o,"q",(function(){return u})),e.d(o,"l",(function(){return d})),e.d(o,"m",(function(){return c})),e.d(o,"o",(function(){return i})),e.d(o,"p",(function(){return a})),e.d(o,"e",(function(){return g})),e.d(o,"i",(function(){return l})),e.d(o,"h",(function(){return f})),e.d(o,"g",(function(){return m})),e.d(o,"r",(function(){return p})),e.d(o,"f",(function(){return h})),e.d(o,"a",(function(){return b})),e.d(o,"d",(function(){return j})),e.d(o,"k",(function(){return _})),e.d(o,"c",(function(){return O})),e.d(o,"b",(function(){return y})),e.d(o,"j",(function(){return v})),e.d(o,"w",(function(){return k})),e.d(o,"u",(function(){return w})),e.d(o,"v",(function(){return L})),e.d(o,"t",(function(){return C})),e.d(o,"x",(function(){return x}));var n=e("b775"),r=function(t){return Object(n["a"])({url:"/goods/goods/getList",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/goods/goods/isSwitch",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/goods/goods/isShow",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/goods/goods/del",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/goods/goods/editGoodsInfo",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_recycle/getList",method:"post",data:t})},a=function(t){return Object(n["a"])({url:"/goods/goods_recycle/edit",method:"post",data:t})},g=function(t){return Object(n["a"])({url:"/goods/goods_recycle/del",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_add/add",method:"post",data:t})},f=function(t){return Object(n["a"])({url:"/goods/goods_category/getList",method:"post",data:t})},m=function(t){return Object(n["a"])({url:"/goods/goods_category/find",method:"post",data:t})},p=function(t){return Object(n["a"])({url:"/goods/goods_specs/getList",method:"post",data:t})},h=function(t){return Object(n["a"])({url:"/goods/goods_specs/edit",method:"post",data:t})},b=function(t){return Object(n["a"])({url:"/goods/goods_specs/add",method:"post",data:t})},j=function(t){return Object(n["a"])({url:"/goods/goods_specs/del",method:"post",data:t})},_=function(t){return Object(n["a"])({url:"/goods/goods_comment/getList",method:"post",data:t})},O=function(t){return Object(n["a"])({url:"/goods/goods_comment/del",method:"post",data:t})},y=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/editGoodsInfo",method:"post",data:t})},v=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelfList",method:"post",data:t})},k=function(t){return Object(n["a"])({url:"/goods/goods_type/getList",method:"post",data:t})},w=function(t){return Object(n["a"])({url:"/goods/goods_type/del",method:"post",data:t})},L=function(t){return Object(n["a"])({url:"/goods/goods_type/edit",method:"post",data:t})},C=function(t){return Object(n["a"])({url:"goods/goods_type/add",method:"post",data:t})},x=function(t){return Object(n["a"])({url:"goods/goods_resource/first",method:"post",data:t})}},"60e1":function(t,o,e){"use strict";var n=e("e354"),r=e.n(n);r.a},b26e:function(t,o,e){"use strict";e.d(o,"f",(function(){return r})),e.d(o,"g",(function(){return s})),e.d(o,"e",(function(){return u})),e.d(o,"a",(function(){return d})),e.d(o,"b",(function(){return c})),e.d(o,"c",(function(){return i})),e.d(o,"i",(function(){return a})),e.d(o,"h",(function(){return g})),e.d(o,"d",(function(){return l}));var n=e("b775"),r=function(t){return Object(n["a"])({url:"/system/common/getAllGoods",method:"get",params:t})},s=function(t){return Object(n["a"])({url:"/system/Common/getQiNiuToken",method:"get",params:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_brand/getList",method:"post",params:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_brand/add",method:"post",params:t})},c=function(t){return Object(n["a"])({url:"/goods/goods_brand/del",method:"post",params:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_brand/edit",method:"post",params:t})},a=function(t){return Object(n["a"])({url:"/goods/goods_resource/getList",method:"post",params:t})},g=function(t){return Object(n["a"])({url:"/goods/goods_resource/del",method:"post",params:t})},l=function(t){return Object(n["a"])({url:"/system/common/findChilds",method:"post",params:t})}},b775:function(t,o,e){"use strict";var n,r=e("bc3a"),s=e.n(r),u=e("5c96"),d=e("4360"),c=s.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});c.interceptors.request.use((function(t){return n=u["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(n.close(),200===t.status)return-1==t.data.code&&(d["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(u["Message"].closeAll(),Object(u["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return n.close(),console.log(t),Promise.reject()})),o["a"]=c},de1d:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"photoAlbumList"},[e("div",{staticClass:"container"},[e("div",{staticStyle:{"text-align":"right"}},[e("el-button",{staticStyle:{background:"#1ABC9C",color:"#fff"},on:{click:t.delAll}},[t._v("删除选中照片")])],1),e("div",{staticClass:"list"},[e("ul",t._l(t.imglist,(function(o,n){return e("li",{key:n},[e("img",{attrs:{src:o.gr_url},on:{click:function(e){return t.choose(o)}}}),e("p",[e("span",{on:{click:function(e){return t.firstImg(o)}}},[t._v("设为主图")]),e("span",{staticClass:"del"},[e("span",{on:{click:function(e){return t.choose(o)}}},[2===o.gr_type?e("i"):t._e()]),e("span",{on:{click:function(e){return t.findimg(o)}}},[t._v("删除图片")])])])])})),0)])])])},r=[],s=e("b26e"),u=e("4380"),d={data:function(){return{imglist:[],imgids:[]}},methods:{getimglist:function(){this.imglist=this.$route.query.data.child,console.log(this.imglist)},findimg:function(t){var o=this,e=[];e.push(t.id);var n={ids:e};Object(s["h"])(n).then((function(t){o.$message({message:t.msg,type:"success"})}))},delAll:function(){var t=this,o={ids:this.imgids};Object(s["h"])(o).then((function(o){t.$message({message:o.msg,type:"success"})}))},firstImg:function(t){var o=this;console.log(t);var e={id:t.id,goods_id:t.goods_id};Object(u["x"])(e).then((function(t){200==t.code&&(o.$message({message:t.msg,type:"success"}),o.getimglist())}))},choose:function(t){1===t.gr_type?t.gr_type=2:t.gr_type=1,this.imgids.push(t.id)}},mounted:function(){this.getimglist()}},c=d,i=(e("60e1"),e("2877")),a=Object(i["a"])(c,n,r,!1,null,"e5d2b40a",null);o["default"]=a.exports},e354:function(t,o,e){}}]);