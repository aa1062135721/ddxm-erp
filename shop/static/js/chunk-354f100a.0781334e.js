(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-354f100a"],{"01b3":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-select",{staticClass:"my-input",attrs:{placeholder:e.placeholder,clearable:""},on:{change:e.change},model:{value:e.choosesValue,callback:function(t){e.choosesValue=t},expression:"choosesValue"}},e._l(e.list,(function(e,t){return o("el-option",{key:t,attrs:{label:e.title,value:e.code}})})),1)},a=[],c=o("365c"),s={data:function(){return{choosesValue:"",list:[]}},props:{placeholder:{type:String,default:"请选择物流公司"},value:null},methods:{change:function(){this.$emit("input",this.choosesValue)}},watch:{value:{immediate:!0,handler:function(e){this.choosesValue=e}}},beforeCreate:function(){var e=this;Object(c["c"])().then((function(t){200===t.code&&(e.list=t.data)})).catch((function(e){console.log(e)}))}},r=s,i=o("2877"),u=Object(i["a"])(r,n,a,!1,null,"4af9de54",null);t["default"]=u.exports},"365c":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return s}));var n=o("b775"),a=function(e){return Object(n["a"])({url:"/system/Common/logistics",method:"post",params:e})},c=function(e){return Object(n["a"])({baseURL:"/aShop",url:"/system/Common/selectCompany",method:"post",params:e})},s=function(e){return Object(n["a"])({url:"/system/common/getCustomer",method:"post",params:e})}},b775:function(e,t,o){"use strict";var n,a=o("bc3a"),c=o.n(a),s=o("5c96"),r=o("4360"),i=c.a.create({baseURL:"http://ddxm661.com:8088",timeout:3e3});i.interceptors.request.use((function(e){return n=s["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),"/api"===e.baseURL&&(e.baseURL="http://testadmin2.ddxm661.com"),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){if(n.close(),200===e.status)return-1==e.data.code&&(r["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=e.data.code&&(s["Message"].closeAll(),Object(s["Message"])({message:e.data.msg,type:"error"})),e.data;Promise.reject()}),(function(e){return n.close(),Promise.reject(e)})),t["a"]=i}}]);