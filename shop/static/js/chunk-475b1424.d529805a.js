(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-475b1424"],{"072e":function(t,e,n){"use strict";n.d(e,"o",(function(){return r})),n.d(e,"p",(function(){return s})),n.d(e,"q",(function(){return i})),n.d(e,"r",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return f})),n.d(e,"n",(function(){return l})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return b})),n.d(e,"s",(function(){return h})),n.d(e,"t",(function(){return g})),n.d(e,"k",(function(){return y})),n.d(e,"g",(function(){return j})),n.d(e,"i",(function(){return O})),n.d(e,"h",(function(){return v})),n.d(e,"j",(function(){return w})),n.d(e,"f",(function(){return x}));var o=n("b775"),r=function(t){return Object(o["a"])({url:"/systemset/privacy/getList",method:"post",data:t})},s=function(t){return Object(o["a"])({url:"/systemset/privacy/edit",method:"post",data:t})},i=function(t){return Object(o["a"])({url:"/systemset/service_agreement/getList",method:"post",data:t})},a=function(t){return Object(o["a"])({url:"/systemset/service_agreement/edit",method:"post",data:t})},c=function(t){return Object(o["a"])({url:"/systemset/banner/getList",method:"post",data:t})},u=function(t){return Object(o["a"])({url:"/systemset/banner/edit",method:"post",data:t})},d=function(t){return Object(o["a"])({url:"/systemset/banner/add",method:"post",data:t})},m=function(t){return Object(o["a"])({url:"/systemset/banner/del",method:"post",data:t})},f=function(t){return Object(o["a"])({url:"/systemset/banner/isSwitch",method:"post",data:t})},l=function(t){return Object(o["a"])({url:"/systemset/Icon/getList",method:"post",data:t})},p=function(t){return Object(o["a"])({url:"/systemset/Icon/add",method:"post",data:t})},b=function(t){return Object(o["a"])({url:"/systemset/Icon/edit",method:"post",data:t})},h=function(t){return Object(o["a"])({url:"/systemset/time_set/getList",method:"post",data:t})},g=function(t){return Object(o["a"])({url:"/systemset/time_set/edit",method:"post",data:t})},y=function(t){return Object(o["a"])({url:"/systemset/Hot/getList",method:"post",data:t})},j=function(t){return Object(o["a"])({url:"/systemset/Hot/add",method:"post",data:t})},O=function(t){return Object(o["a"])({url:"/systemset/Hot/edit",method:"post",data:t})},v=function(t){return Object(o["a"])({url:"/systemset/Hot/del",method:"post",data:t})},w=function(t){return Object(o["a"])({url:"/systemset/Hot/isSwitch",method:"post",data:t})},x=function(t){return Object(o["a"])({baseURL:"/api",url:"/system/Common/getQiNiuToken",method:"get",params:t})}},"3ebe":function(t,e,n){"use strict";var o=n("6fd1"),r=n.n(o);r.a},"6fd1":function(t,e,n){},b775:function(t,e,n){"use strict";var o,r=n("bc3a"),s=n.n(r),i=n("5c96"),a=n("4360"),c=s.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});c.interceptors.request.use((function(t){return o=i["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(o.close(),200===t.status)return-1==t.data.code&&(a["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(i["Message"].closeAll(),Object(i["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return o.close(),console.log(t),Promise.reject()})),e["a"]=c},c5a9:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"editPartition"},[n("div",{staticClass:"singer"},[n("span",{staticStyle:{"margin-right":"10px"}},[t._v("标题 :")]),n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入分区名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("div",{staticClass:"singer1"},[n("p",[t._v("内容 :")]),n("Editor",{staticStyle:{width:"800px","margin-left":"10px"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("div",{staticStyle:{"margin-top":"150px","text-align":"center"}},[n("el-button",{staticStyle:{background:"#1ABC9C",color:"#fff",width:"100px",height:"36px"},on:{click:t.submit}},[t._v("提交")])],1)])])},r=[],s=(n("7f7f"),n("76b1")),i=n("072e"),a={data:function(){return{name:"",content:"",id:null}},components:{Editor:s["default"]},created:function(){this.getPartitionInfo()},methods:{getPartitionInfo:function(){var t=this;Object(i["o"])().then((function(e){t.name=e.data.title,t.content=e.data.content,t.id=e.data.id}))},submit:function(){var t=this,e={title:this.name,content:this.content,id:this.id};Object(i["p"])(e).then((function(e){200==e.code&&t.$message({message:e.msg,type:"success"})}))}}},c=a,u=(n("3ebe"),n("2877")),d=Object(u["a"])(c,o,r,!1,null,"7f2102f8",null);e["default"]=d.exports}}]);