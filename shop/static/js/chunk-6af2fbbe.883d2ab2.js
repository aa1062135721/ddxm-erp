(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af2fbbe"],{"072e":function(t,e,r){"use strict";r.d(e,"o",(function(){return s})),r.d(e,"p",(function(){return a})),r.d(e,"q",(function(){return n})),r.d(e,"r",(function(){return i})),r.d(e,"d",(function(){return m})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return d})),r.d(e,"n",(function(){return f})),r.d(e,"l",(function(){return p})),r.d(e,"m",(function(){return b})),r.d(e,"s",(function(){return y})),r.d(e,"t",(function(){return _})),r.d(e,"k",(function(){return h})),r.d(e,"g",(function(){return v})),r.d(e,"i",(function(){return g})),r.d(e,"h",(function(){return x})),r.d(e,"j",(function(){return w})),r.d(e,"f",(function(){return j}));var o=r("b775"),s=function(t){return Object(o["a"])({url:"/systemset/privacy/getList",method:"post",data:t})},a=function(t){return Object(o["a"])({url:"/systemset/privacy/edit",method:"post",data:t})},n=function(t){return Object(o["a"])({url:"/systemset/service_agreement/getList",method:"post",data:t})},i=function(t){return Object(o["a"])({url:"/systemset/service_agreement/edit",method:"post",data:t})},m=function(t){return Object(o["a"])({url:"/systemset/banner/getList",method:"post",data:t})},c=function(t){return Object(o["a"])({url:"/systemset/banner/edit",method:"post",data:t})},u=function(t){return Object(o["a"])({url:"/systemset/banner/add",method:"post",data:t})},l=function(t){return Object(o["a"])({url:"/systemset/banner/del",method:"post",data:t})},d=function(t){return Object(o["a"])({url:"/systemset/banner/isSwitch",method:"post",data:t})},f=function(t){return Object(o["a"])({url:"/systemset/Icon/getList",method:"post",data:t})},p=function(t){return Object(o["a"])({url:"/systemset/Icon/add",method:"post",data:t})},b=function(t){return Object(o["a"])({url:"/systemset/Icon/edit",method:"post",data:t})},y=function(t){return Object(o["a"])({url:"/systemset/time_set/getList",method:"post",data:t})},_=function(t){return Object(o["a"])({url:"/systemset/time_set/edit",method:"post",data:t})},h=function(t){return Object(o["a"])({url:"/systemset/Hot/getList",method:"post",data:t})},v=function(t){return Object(o["a"])({url:"/systemset/Hot/add",method:"post",data:t})},g=function(t){return Object(o["a"])({url:"/systemset/Hot/edit",method:"post",data:t})},x=function(t){return Object(o["a"])({url:"/systemset/Hot/del",method:"post",data:t})},w=function(t){return Object(o["a"])({url:"/systemset/Hot/isSwitch",method:"post",data:t})},j=function(t){return Object(o["a"])({baseURL:"/api",url:"/system/Common/getQiNiuToken",method:"get",params:t})}},"89ea":function(t,e,r){},a4d5:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"time"},[r("div",{staticClass:"container"},[r("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"160px"}},[r("el-form-item",{attrs:{label:"待付款超时"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.payovertime,callback:function(e){t.$set(t.form,"payovertime",e)},expression:"form.payovertime"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("小时（只针对普通订单）")])],1),r("el-form-item",{attrs:{label:"拼团待付款超时"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.spellpayovertime,callback:function(e){t.$set(t.form,"spellpayovertime",e)},expression:"form.spellpayovertime"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("小时（只针对拼团订单）")])],1),r("el-form-item",{attrs:{label:"抢购待付款超时"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.snapup,callback:function(e){t.$set(t.form,"snapup",e)},expression:"form.snapup"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("分钟（只针对抢购订单）")])],1),r("el-form-item",{attrs:{label:"自动收货超时"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.automatic,callback:function(e){t.$set(t.form,"automatic",e)},expression:"form.automatic"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（商城自营）")])],1),r("el-form-item",{attrs:{label:"跨境购-自动收货超时"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.crossborder,callback:function(e){t.$set(t.form,"crossborder",e)},expression:"form.crossborder"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（跨境购）")])],1),r("el-form-item",{attrs:{label:"自动评论超时"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.comments,callback:function(e){t.$set(t.form,"comments",e)},expression:"form.comments"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（确认收货后开始计时）")])],1),r("el-form-item",{attrs:{label:"未成团成功超时"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.noclouds,callback:function(e){t.$set(t.form,"noclouds",e)},expression:"form.noclouds"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("小时")])],1),r("el-form-item",{attrs:{label:"自动拼团"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.automaticspell,callback:function(e){t.$set(t.form,"automaticspell",e)},expression:"form.automaticspell"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("分（从拼团结束时间--倒计时时间）")])],1),r("el-form-item",{attrs:{label:"分销结算"}},[r("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.distribution,callback:function(e){t.$set(t.form,"distribution",e)},expression:"form.distribution"}}),r("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（完成收货之后多少天结算）")])],1),r("el-form-item",[r("el-button",{staticStyle:{background:"#1ABC9C",color:"#FFF"},on:{click:t.submit}},[t._v("保存更改")])],1)],1)],1)])},s=[],a=r("072e"),n={data:function(){return{form:{payovertime:"",spellpayovertime:"",snapup:"",automatic:"",crossborder:"",comments:"",noclouds:"",automaticspell:"",distribution:""}}},methods:{getTimeList:function(){var t=this;Object(a["s"])().then((function(e){var r=e.data.data;t.form.payovertime=r.set_waitpay_time,t.form.spellpayovertime=r.set_group_waitpay_time,t.form.snapup=r.set_rob_waitpay_time,t.form.automatic=r.set_takedelivery_time,t.form.crossborder=r.set_ca_takedelivery_time,t.form.comments=r.set_comment_time,t.form.noclouds=r.set_assemble_fail_time,t.form.automaticspell=r.set_assemble_success_time,t.form.distribution=r.set_retai_order_time}))},submit:function(){var t=this,e={set_waitpay_time:this.form.payovertime,set_group_waitpay_time:this.form.spellpayovertime,set_rob_waitpay_time:this.form.snapup,set_takedelivery_time:this.form.automatic,set_ca_takedelivery_time:this.form.crossborder,set_comment_time:this.form.comments,set_assemble_fail_time:this.form.noclouds,set_assemble_success_time:this.form.automaticspell,set_retai_order_time:this.form.distribution};Object(a["t"])(e).then((function(e){200==e.code&&t.$message({message:e.msg,type:"success"})}))}},created:function(){this.getTimeList()}},i=n,m=(r("b70c"),r("2877")),c=Object(m["a"])(i,o,s,!1,null,"14be310e",null);e["default"]=c.exports},b70c:function(t,e,r){"use strict";var o=r("89ea"),s=r.n(o);s.a},b775:function(t,e,r){"use strict";var o,s=r("bc3a"),a=r.n(s),n=r("5c96"),i=r("4360"),m=a.a.create({baseURL:"http://ddxm661.com:8088",timeout:3e3});m.interceptors.request.use((function(t){return o=n["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),"/api"===t.baseURL&&(t.baseURL="http://testadmin2.ddxm661.com"),t}),(function(t){return Promise.reject(t)})),m.interceptors.response.use((function(t){if(o.close(),200===t.status)return-1==t.data.code&&(i["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(n["Message"].closeAll(),Object(n["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return o.close(),Promise.reject(t)})),e["a"]=m}}]);