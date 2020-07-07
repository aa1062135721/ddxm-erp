(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ada2c90"],{"3bd8":function(t,e,a){"use strict";var o=a("d470"),n=a.n(o);n.a},4525:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editSales"},[a("div",{staticClass:"container"},[a("div",{staticClass:"table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark","cell-style":{"text-align":"center"}}},[a("el-table-column",{attrs:{label:"商品ID",width:"120",prop:"id",align:"center"}}),a("el-table-column",{attrs:{label:"商品名称",prop:"g_title",align:"center"}}),a("el-table-column",{attrs:{prop:"imgurl",label:"图片",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{shape:"square",size:100,src:t.row.imgurl}})]}}])}),a("el-table-column",{attrs:{label:"规格名称",prop:"key_name",width:"200",align:"center"}}),a("el-table-column",{attrs:{label:"总库存",prop:"w_stock",align:"center"}}),a("el-table-column",{attrs:{label:"销售原价",prop:"price",align:"center"}}),a("el-table-column",{attrs:{label:"活动价格",align:"center",prop:"newPrice",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticStyle:{width:"120px"},attrs:{type:"number"},model:{value:e.row.newPrice,callback:function(a){t.$set(e.row,"newPrice",a)},expression:"scope.row.newPrice"}})]}}])}),a("el-table-column",{attrs:{label:"限购数量",align:"center",prop:"xgNum",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticStyle:{width:"120px"},attrs:{type:"number"},model:{value:e.row.xgNum,callback:function(a){t.$set(e.row,"xgNum",a)},expression:"scope.row.xgNum"}})]}}])}),a("el-table-column",{attrs:{label:"初始数量",align:"center",prop:"csNum",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticStyle:{width:"120px"},attrs:{type:"number"},model:{value:e.row.csNum,callback:function(a){t.$set(e.row,"csNum",a)},expression:"scope.row.csNum"}})]}}])}),a("el-table-column",{attrs:{width:"130",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{color:"#1ABC9C"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteGoods(e.$index)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"add",staticStyle:{"text-align":"center",color:"#1ABC9C","margin-top":"10px"}},[a("p",{on:{click:t.addGoods}},[t._v("点击此处添加商品")])])],1),a("div",{staticClass:"fromList"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标签"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"每人限购"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.form.buy,callback:function(e){t.$set(t.form,"buy",e)},expression:"form.buy"}})],1),a("el-form-item",{attrs:{label:"开始时间"}},[[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.start_time,callback:function(e){t.$set(t.form,"start_time",e)},expression:"form.start_time"}})]],2),a("el-form-item",{attrs:{label:"结束时间"}},[[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})]],2),a("el-form-item",{attrs:{label:"是否显示"}},[a("el-radio-group",{model:{value:t.form.show,callback:function(e){t.$set(t.form,"show",e)},expression:"form.show"}},[a("el-radio",{attrs:{label:1}},[t._v("显示")]),a("el-radio",{attrs:{label:2}},[t._v("隐藏")])],1)],1),a("el-form-item",{attrs:{label:"是否免邮"}},[a("el-radio-group",{model:{value:t.form.noMail,callback:function(e){t.$set(t.form,"noMail",e)},expression:"form.noMail"}},[a("el-radio",{attrs:{label:1}},[t._v("是")]),a("el-radio",{attrs:{label:2}},[t._v("否")])],1)],1),a("el-form-item",[a("el-button",{staticStyle:{background:"#1ABC9C",color:"#fff"},on:{click:t.onSubmit}},[t._v("立即提交")])],1)],1)],1),t.flag?a("div",{staticClass:"goodsList"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("选择商品")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.flag=!1}}},[t._v("X")])],1),a("div",{staticClass:"main"},[a("div",{staticClass:"title",staticStyle:{"margin-bottom":"20px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"商品名称"},model:{value:t.goodsVal,callback:function(e){t.goodsVal=e},expression:"goodsVal"}}),a("el-button",{staticStyle:{background:"#1ABC9C",color:"#fff","margin-left":"10px"},on:{click:t.searchGoods}},[t._v("搜索")])],1),a("div",{staticClass:"goodsTable"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.goodsTable,"tooltip-effect":"dark"},on:{"selection-change":t.selectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"商品名称",prop:"g_title",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"图片",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{shape:"square",size:100,src:t.row.imgurl}})]}}],null,!1,3485760204)}),a("el-table-column",{attrs:{prop:"key_name",label:"规格"}}),a("el-table-column",{attrs:{prop:"price",label:"销售金额","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"w_stock",label:"总库存","show-overflow-tooltip":""}})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)]),a("div",{staticClass:"btn"},[a("el-button",{staticStyle:{background:"#1ABC9C",color:"#fff"},on:{click:t.sure}},[t._v("确定")]),a("el-button",{on:{click:function(e){t.flag=!1}}},[t._v("取消")])],1)])],1):t._e()])])},n=[],l=(a("7f7f"),a("ac6a"),a("a5d0")),r={data:function(){return{tableData:[],goodsTable:[],form:{name:"",buy:"",region:"",start_time:"",end_time:"",show:"",noMail:""},id:null,total:1,currentPage:1,goodsVal:"",flag:!1,item:[]}},methods:{formatDate:function(t,e){var a=new Date(1e3*parseInt(t)),o=a.getFullYear()+"-",n=a.getMonth()+1<10?"0"+(a.getMonth()+1)+"-":a.getMonth()+1+"-",l=a.getDate()<10?"0"+a.getDate()+" ":a.getDate()+" ",r=a.getHours()<10?"0"+a.getHours()+":":a.getHours()+":",i=a.getMinutes()<10?"0"+a.getMinutes()+":":a.getMinutes()+":",s=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return o+n+l+r+i+s},endmatDate:function(t,e){var a=new Date(1e3*parseInt(t)),o=a.getFullYear()+"-",n=a.getMonth()+1<10?"0"+(a.getMonth()+1)+"-":a.getMonth()+1+"-",l=a.getDate()<10?"0"+a.getDate()+" ":a.getDate()+" ",r=a.getHours()<10?"0"+a.getHours()+":":a.getHours()+":",i=a.getMinutes()<10?"0"+a.getMinutes()+":":a.getMinutes()+":",s=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return o+n+l+r+i+s},onSubmit:function(){var t=this,e={};this.tableData.forEach((function(a){var o={};o={item_id:a.id,item_name:a.g_title,specs:[{specs_ids:"",specs_names:"",old_price:a.price,price:a.newPrice,stock:a.xgNum,virtually_num:a.csNum}]},e={title:t.form.name,people_num:t.form.buy,type:1,start_time:t.getTimestamp(t.form.start_time),end_time:t.getTimestamp(t.form.end_time),postage_way:t.form.noMail,status:t.form.show,items:[o]}})),console.log(e),Object(l["j"])(e).then((function(t){console.log(t)}))},getTimestamp:function(t){return new Date(t).getTime()/1e3},addGoods:function(){this.flag=!0},getGoodsList:function(){var t=this;Object(l["n"])().then((function(e){t.goodsTable=e.data.data,t.total=e.data.total,console.log(e)}))},handleCurrentChange:function(t){var e=this;Object(l["n"])({page:t,search_val:this.goodsVal}).then((function(t){e.goodsTable=t.data.data,console.log(t)}))},searchGoods:function(){var t=this;Object(l["n"])({search_val:this.goodsVal}).then((function(e){t.goodsTable=e.data.data,t.total=e.data.total}))},deleteGoods:function(t){this.tableData.splice(t,1)},selectionChange:function(t){this.item=t},sure:function(){var t=[];this.item.forEach((function(e){t.push(e)})),this.tableData=t}},created:function(){this.getGoodsList()}},i=r,s=(a("3bd8"),a("2877")),c=Object(s["a"])(i,o,n,!1,null,"3e80e8c7",null);e["default"]=c.exports},a5d0:function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return r})),a.d(e,"o",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"n",(function(){return d})),a.d(e,"m",(function(){return m})),a.d(e,"k",(function(){return f})),a.d(e,"j",(function(){return p})),a.d(e,"l",(function(){return g})),a.d(e,"g",(function(){return b})),a.d(e,"i",(function(){return h})),a.d(e,"h",(function(){return v}));var o=a("b775"),n=function(t){return Object(o["a"])({url:"/activity/Seckill/getLIst",method:"post",data:t})},l=function(t){return Object(o["a"])({url:"/activity/Seckill/edit",method:"post",data:t})},r=function(t){return Object(o["a"])({url:"/activity/Seckill/del",method:"post",data:t})},i=function(t){return Object(o["a"])({url:"/activity/Seckill/add",method:"post",data:t})},s=function(t){return Object(o["a"])({url:"/activity/Collage/getList",method:"post",data:t})},c=function(t){return Object(o["a"])({url:"/activity/Collage/add",method:"post",data:t})},u=function(t){return Object(o["a"])({url:"/activity/Collage/edit",method:"post",data:t})},d=function(t){return Object(o["a"])({baseURL:"/api",url:"/goods/goods/getList",method:"post",data:t})},m=function(t){return Object(o["a"])({url:"/activity/flash_sale/getList",method:"post",data:t})},f=function(t){return Object(o["a"])({url:"/activity/flash_sale/del",method:"post",data:t})},p=function(t){return Object(o["a"])({url:"/activity/flash_sale/add",method:"post",data:t})},g=function(t){return Object(o["a"])({url:"/activity/flash_sale/edit",method:"post",data:t})},b=function(t){return Object(o["a"])({url:"/cashout/cashout_mange/getList",method:"post",data:t})},h=function(t){return Object(o["a"])({url:"/cashout/cashout_mange/edit",method:"post",data:t})},v=function(t){return Object(o["a"])({url:"/cashout/cashout_mange/add",method:"post",data:t})}},b775:function(t,e,a){"use strict";var o,n=a("bc3a"),l=a.n(n),r=a("5c96"),i=a("4360"),s=l.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});s.interceptors.request.use((function(t){return o=r["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),s.interceptors.response.use((function(t){if(o.close(),200===t.status)return-1==t.data.code&&(i["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(r["Message"].closeAll(),Object(r["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return o.close(),console.log(t),Promise.reject()})),e["a"]=s},d470:function(t,e,a){}}]);