(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61202e38","chunk-e8348ee2"],{"2a6c":function(t,e,o){"use strict";var n=o("6bef"),r=o.n(n);r.a},"6bef":function(t,e,o){},a2c7:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload-info"},[o("div",[o("el-upload",{staticClass:"upload-demo",attrs:{action:t.domain,data:t.QiniuData,"on-remove":t.handleRemove,"on-success":t.uploadSuccess,"before-upload":t.beforeAvatarUpload,multiple:!1,limit:1,"file-list":t.fileList}},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1)])},r=[],a=(o("7f7f"),o("b26e")),s={data:function(){return{loading:!0,QiniuData:{key:"",token:""},domain:"https://upload-z2.qiniup.com",qiniuaddr:"",fileList:[]}},mounted:function(){this.getQiniuToken()},methods:{handleRemove:function(t,e){var o=this,n=[];e.map((function(t){n.push("".concat(o.qiniuaddr).concat(t.response.key))})),this.$emit("getImgUrls",n)},beforeAvatarUpload:function(t){var e="image/png"===t.type,o="image/jpeg"===t.type,n="image/jpg"===t.type,r=t.size/1024/1024<2;return e||o||n?r?void(this.QiniuData.key=(new Date).getTime()+"_upload_"+Math.floor(100*Math.random())+"_"+t.name):(this.$message.error("上传头像图片大小不能超过 2MB!"),!1):(this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!"),!1)},uploadSuccess:function(t,e,o){var n=[];o.map((function(t){n=t.response.key})),this.$emit("getImgUrls",n)},getQiniuToken:function(){var t=this;Object(a["g"])().then((function(e){200===e.code&&(t.QiniuData.token=e.data.token,t.qiniuaddr=e.data.domain)})).catch((function(t){}))}}},i=s,c=o("2877"),u=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=u.exports},b26e:function(t,e,o){"use strict";o.d(e,"f",(function(){return r})),o.d(e,"g",(function(){return a})),o.d(e,"e",(function(){return s})),o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return c})),o.d(e,"c",(function(){return u})),o.d(e,"i",(function(){return d})),o.d(e,"h",(function(){return l})),o.d(e,"d",(function(){return m}));var n=o("b775"),r=function(t){return Object(n["a"])({url:"/system/common/getAllGoods",method:"get",params:t})},a=function(t){return Object(n["a"])({url:"/system/Common/getQiNiuToken",method:"get",params:t})},s=function(t){return Object(n["a"])({url:"/goods/goods_brand/getList",method:"post",params:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_brand/add",method:"post",params:t})},c=function(t){return Object(n["a"])({url:"/goods/goods_brand/del",method:"post",params:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_brand/edit",method:"post",params:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_resource/getList",method:"post",params:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_resource/del",method:"post",params:t})},m=function(t){return Object(n["a"])({url:"/system/common/findChilds",method:"post",params:t})}},b775:function(t,e,o){"use strict";var n,r=o("bc3a"),a=o.n(r),s=o("5c96"),i=o("4360"),c=a.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});c.interceptors.request.use((function(t){return n=s["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(n.close(),200===t.status)return-1==t.data.code&&(i["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(s["Message"].closeAll(),Object(s["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return n.close(),console.log(t),Promise.reject()})),e["a"]=c},c004:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addBrand"},[o("div",{staticClass:"container"},[t._m(0),o("div",{staticClass:"main"},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"品牌名称"}},[o("el-input",{staticStyle:{width:"214px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"品牌首字母"}},[o("el-input",{staticStyle:{width:"214px"},model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}})],1),o("el-form-item",{attrs:{label:"品牌图标"}},[o("Clickupload",{on:{getImgUrls:t.getImgUrls}})],1),o("el-form-item",{attrs:{label:"排序"}},[o("el-input",{staticStyle:{width:"214px"},model:{value:t.form.sorting,callback:function(e){t.$set(t.form,"sorting",e)},expression:"form.sorting"}})],1),o("el-form-item",{attrs:{label:"是否显示"}},[o("el-radio",{attrs:{label:"0"},model:{value:t.form.checkList,callback:function(e){t.$set(t.form,"checkList",e)},expression:"form.checkList"}},[t._v("是")]),o("el-radio",{attrs:{label:"1"},model:{value:t.form.checkList,callback:function(e){t.$set(t.form,"checkList",e)},expression:"form.checkList"}},[t._v("否")])],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)],1)])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("p",[t._v("添加新品牌")])])}],a=(o("7f7f"),o("e247"),o("b26e")),s=o("a2c7"),i={data:function(){return{form:{name:"",tag:"",sorting:"",checkList:null,imgUrl:""},fatherId:0}},methods:{onSubmit:function(){var t=this,e={gb_title:this.form.name,gb_tag:this.form.tag,gb_sort:this.form.sorting,gb_status:this.form.checkList,gb_url:this.form.imgUrl};console.log(e),Object(a["a"])(e).then((function(e){200===e.code&&t.$message({message:e.msg,type:"success"})}))},getImgUrls:function(t){this.form.imgUrl=t},getBrandInfo:function(){var t=this.$route.query.data;this.form.name=t.gb_title,this.form.tag=t.gb_tag,this.form.sorting=t.gb_sort,this.form.checkList=t.gb_status,this.form.imgUrl=t.gb_url}},components:{Clickupload:s["default"]},mounted:function(){this.getBrandInfo()}},c=i,u=(o("2a6c"),o("2877")),d=Object(u["a"])(c,n,r,!1,null,null,null);e["default"]=d.exports},e247:function(t,e,o){"use strict";o.d(e,"e",(function(){return r})),o.d(e,"f",(function(){return a})),o.d(e,"b",(function(){return s})),o.d(e,"a",(function(){return i})),o.d(e,"g",(function(){return c})),o.d(e,"d",(function(){return u})),o.d(e,"h",(function(){return d})),o.d(e,"c",(function(){return l}));var n=o("b775"),r=function(t){return Object(n["a"])({url:"/goods/goods_category/del",method:"post",data:t})},a=function(t){return Object(n["a"])({url:"/goods/goods_comment/find",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/goods/goods_comment/isSwitch",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_brand/isSwitch",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/goods/goods_category/isSwitch",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_category/add",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_category/shiftGoods",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelf",method:"post",data:t})}}}]);