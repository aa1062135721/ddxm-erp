(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af2fbbe"],{"072e":function(t,e,o){"use strict";o.d(e,"o",(function(){return s})),o.d(e,"p",(function(){return n})),o.d(e,"q",(function(){return a})),o.d(e,"r",(function(){return i})),o.d(e,"d",(function(){return c})),o.d(e,"c",(function(){return m})),o.d(e,"a",(function(){return u})),o.d(e,"b",(function(){return l})),o.d(e,"e",(function(){return d})),o.d(e,"n",(function(){return f})),o.d(e,"l",(function(){return p})),o.d(e,"m",(function(){return b})),o.d(e,"s",(function(){return y})),o.d(e,"t",(function(){return _})),o.d(e,"k",(function(){return h})),o.d(e,"g",(function(){return v})),o.d(e,"i",(function(){return g})),o.d(e,"h",(function(){return x})),o.d(e,"j",(function(){return w})),o.d(e,"f",(function(){return j}));var r=o("b775"),s=function(t){return Object(r["a"])({url:"/systemset/privacy/getList",method:"post",data:t})},n=function(t){return Object(r["a"])({url:"/systemset/privacy/edit",method:"post",data:t})},a=function(t){return Object(r["a"])({url:"/systemset/service_agreement/getList",method:"post",data:t})},i=function(t){return Object(r["a"])({url:"/systemset/service_agreement/edit",method:"post",data:t})},c=function(t){return Object(r["a"])({url:"/systemset/banner/getList",method:"post",data:t})},m=function(t){return Object(r["a"])({url:"/systemset/banner/edit",method:"post",data:t})},u=function(t){return Object(r["a"])({url:"/systemset/banner/add",method:"post",data:t})},l=function(t){return Object(r["a"])({url:"/systemset/banner/del",method:"post",data:t})},d=function(t){return Object(r["a"])({url:"/systemset/banner/isSwitch",method:"post",data:t})},f=function(t){return Object(r["a"])({url:"/systemset/Icon/getList",method:"post",data:t})},p=function(t){return Object(r["a"])({url:"/systemset/Icon/add",method:"post",data:t})},b=function(t){return Object(r["a"])({url:"/systemset/Icon/edit",method:"post",data:t})},y=function(t){return Object(r["a"])({url:"/systemset/time_set/getList",method:"post",data:t})},_=function(t){return Object(r["a"])({url:"/systemset/time_set/edit",method:"post",data:t})},h=function(t){return Object(r["a"])({url:"/systemset/Hot/getList",method:"post",data:t})},v=function(t){return Object(r["a"])({url:"/systemset/Hot/add",method:"post",data:t})},g=function(t){return Object(r["a"])({url:"/systemset/Hot/edit",method:"post",data:t})},x=function(t){return Object(r["a"])({url:"/systemset/Hot/del",method:"post",data:t})},w=function(t){return Object(r["a"])({url:"/systemset/Hot/isSwitch",method:"post",data:t})},j=function(t){return Object(r["a"])({baseURL:"/api",url:"/system/Common/getQiNiuToken",method:"get",params:t})}},"89ea":function(t,e,o){},a4d5:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"time"},[o("div",{staticClass:"container"},[o("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"160px"}},[o("el-form-item",{attrs:{label:"待付款超时"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.payovertime,callback:function(e){t.$set(t.form,"payovertime",e)},expression:"form.payovertime"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("小时（只针对普通订单）")])],1),o("el-form-item",{attrs:{label:"拼团待付款超时"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.spellpayovertime,callback:function(e){t.$set(t.form,"spellpayovertime",e)},expression:"form.spellpayovertime"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("小时（只针对拼团订单）")])],1),o("el-form-item",{attrs:{label:"抢购待付款超时"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.snapup,callback:function(e){t.$set(t.form,"snapup",e)},expression:"form.snapup"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("分钟（只针对抢购订单）")])],1),o("el-form-item",{attrs:{label:"自动收货超时"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.automatic,callback:function(e){t.$set(t.form,"automatic",e)},expression:"form.automatic"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（商城自营）")])],1),o("el-form-item",{attrs:{label:"跨境购-自动收货超时"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.crossborder,callback:function(e){t.$set(t.form,"crossborder",e)},expression:"form.crossborder"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（跨境购）")])],1),o("el-form-item",{attrs:{label:"自动评论超时"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.comments,callback:function(e){t.$set(t.form,"comments",e)},expression:"form.comments"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（确认收货后开始计时）")])],1),o("el-form-item",{attrs:{label:"未成团成功超时"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.noclouds,callback:function(e){t.$set(t.form,"noclouds",e)},expression:"form.noclouds"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("小时")])],1),o("el-form-item",{attrs:{label:"自动拼团"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.automaticspell,callback:function(e){t.$set(t.form,"automaticspell",e)},expression:"form.automaticspell"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("分（从拼团结束时间--倒计时时间）")])],1),o("el-form-item",{attrs:{label:"分销结算"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:t.form.distribution,callback:function(e){t.$set(t.form,"distribution",e)},expression:"form.distribution"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("天（完成收货之后多少天结算）")])],1),o("el-form-item",[o("el-button",{staticStyle:{background:"#1ABC9C",color:"#FFF"},on:{click:t.submit}},[t._v("保存更改")])],1)],1)],1)])},s=[],n=o("072e"),a={data:function(){return{form:{payovertime:"",spellpayovertime:"",snapup:"",automatic:"",crossborder:"",comments:"",noclouds:"",automaticspell:"",distribution:""}}},methods:{getTimeList:function(){var t=this;Object(n["s"])().then((function(e){var o=e.data.data;t.form.payovertime=o.set_waitpay_time,t.form.spellpayovertime=o.set_group_waitpay_time,t.form.snapup=o.set_rob_waitpay_time,t.form.automatic=o.set_takedelivery_time,t.form.crossborder=o.set_ca_takedelivery_time,t.form.comments=o.set_comment_time,t.form.noclouds=o.set_assemble_fail_time,t.form.automaticspell=o.set_assemble_success_time,t.form.distribution=o.set_retai_order_time}))},submit:function(){var t=this,e={set_waitpay_time:this.form.payovertime,set_group_waitpay_time:this.form.spellpayovertime,set_rob_waitpay_time:this.form.snapup,set_takedelivery_time:this.form.automatic,set_ca_takedelivery_time:this.form.crossborder,set_comment_time:this.form.comments,set_assemble_fail_time:this.form.noclouds,set_assemble_success_time:this.form.automaticspell,set_retai_order_time:this.form.distribution};Object(n["t"])(e).then((function(e){200==e.code&&t.$message({message:e.msg,type:"success"})}))}},created:function(){this.getTimeList()}},i=a,c=(o("b70c"),o("2877")),m=Object(c["a"])(i,r,s,!1,null,"14be310e",null);e["default"]=m.exports},b70c:function(t,e,o){"use strict";var r=o("89ea"),s=o.n(r);s.a},b775:function(t,e,o){"use strict";var r,s=o("bc3a"),n=o.n(s),a=o("5c96"),i=o("4360"),c=n.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});c.interceptors.request.use((function(t){return r=a["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(r.close(),200===t.status)return-1==t.data.code&&(i["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(a["Message"].closeAll(),Object(a["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return r.close(),console.log(t),Promise.reject()})),e["a"]=c}}]);