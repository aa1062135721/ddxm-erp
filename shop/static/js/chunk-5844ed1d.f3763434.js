(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5844ed1d","chunk-4d41fe26"],{"01d1":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return l}));var o=a("b775"),s=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/getList",method:"post",data:t})},i=function(t){return Object(o["a"])({url:"/system/common/getSupplier",method:"post",data:t})},r=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/add",method:"post",data:t})},n=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/del",method:"post",data:t})},l=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/edit",method:"post",data:t})}},"16c2":function(t,e,a){"use strict";var o=a("3b20"),s=a.n(o);s.a},"3b20":function(t,e,a){},"5cf9":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{staticClass:"my-input",attrs:{placeholder:t.placeholder,clearable:""},on:{change:t.change},model:{value:t.choosesValue,callback:function(e){t.choosesValue=e},expression:"choosesValue"}},t._l(t.list,(function(t,e){return a("el-option",{key:e,attrs:{label:t.s_name,value:t.id}})})),1)},s=[],i=a("01d1"),r={name:"index",props:{placeholder:{type:String,default:"选择供应商"},value:null},data:function(){return{choosesValue:"",list:[]}},methods:{change:function(){this.$emit("input",this.choosesValue)}},watch:{value:{immediate:!0,handler:function(t){this.choosesValue=t}}},beforeCreate:function(){var t=this;Object(i["e"])().then((function(e){200===e.code&&(t.list=e.data)})).catch((function(t){console.log(t)}))}},n=r,l=(a("ede2"),a("2877")),u=Object(l["a"])(n,o,s,!1,null,"408530ba",null);e["default"]=u.exports},"677e":function(t,e,a){},b775:function(t,e,a){"use strict";var o,s=a("bc3a"),i=a.n(s),r=a("5c96"),n=a("4360"),l=i.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});l.interceptors.request.use((function(t){return o=r["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),l.interceptors.response.use((function(t){if(o.close(),200===t.status)return-1==t.data.code&&(n["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(r["Message"].closeAll(),Object(r["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return o.close(),console.log(t),Promise.reject()})),e["a"]=l},ccf0:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("待采购单")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"search-div"},[a("el-input",{staticClass:"my-input",attrs:{placeholder:"商品名称/条形码",clearable:""},model:{value:t.requestData.title,callback:function(e){t.$set(t.requestData,"title",e)},expression:"requestData.title"}}),a("supplier",{model:{value:t.requestData.sup_id,callback:function(e){t.$set(t.requestData,"sup_id",e)},expression:"requestData.sup_id"}}),a("el-date-picker",{staticClass:"my-input",staticStyle:{"min-width":"400px"},attrs:{type:"datetimerange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"缺货开始","end-placeholder":"缺货结束"},on:{change:t.changeRequestTime},model:{value:t.requestData.time,callback:function(e){t.$set(t.requestData,"time",e)},expression:"requestData.time"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("搜索")]),t.$_has("export")?a("el-button",{attrs:{type:"primary",plain:""}},[t._v("导出")]):t._e()],1),a("div",{staticStyle:{margin:"40px 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.responseData.data}},[a("el-table-column",{attrs:{prop:"sup_name",label:"供应商"}}),a("el-table-column",{attrs:{prop:"item_id",label:"商品ID"}}),a("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"attr_name",label:"规格"}}),a("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticClass:"table-td-thumb",staticStyle:{width:"80px",height:"80px",margin:"10px"},attrs:{src:t.row.pic,"preview-src-list":[t.row.pic]}})]}}])}),a("el-table-column",{attrs:{prop:"bar_code",label:"条形码"}}),a("el-table-column",{attrs:{prop:"num",label:"缺货量"}}),a("el-table-column",{attrs:{prop:"l_browser",label:"操作信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.noGoodsTrackDialogShow(e.row)}}},[t._v("缺货轨迹")])]}}])})],1)],1),a("div",[a("el-pagination",{attrs:{total:t.responseData.count,background:"",layout:"prev, pager, next"},on:{"current-change":t.handleCurrentChange}})],1)]),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"缺货轨迹",center:"",visible:t.noGoodsTrackDialog.isShow,width:"30%"},on:{"update:visible":function(e){return t.$set(t.noGoodsTrackDialog,"isShow",e)}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"择缺货时间"}},[a("el-date-picker",{staticClass:"my-input",staticStyle:{"max-width":"300px"},attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"缺货开始","end-placeholder":"缺货结束"},on:{change:t.noGoodsTrackDialogChangeRequestTime},model:{value:t.noGoodsTrackDialog.requestData.time,callback:function(e){t.$set(t.noGoodsTrackDialog.requestData,"time",e)},expression:"noGoodsTrackDialog.requestData.time"}})],1),a("el-form-item",{attrs:{label:"合计缺货数量"}},[a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v(t._s(t.noGoodsTrackDialog.responseData.allNum))])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.noGoodsTrackDialogGetList}},[t._v("提交")])],1)],1),a("div",{staticStyle:{margin:"40px 0"}},[a("el-table",{attrs:{"max-height":"100",data:t.noGoodsTrackDialog.responseData.data}},[a("el-table-column",{attrs:{prop:"order_sn",label:"订单编号"}}),a("el-table-column",{attrs:{prop:"num",label:"缺货数量"}}),a("el-table-column",{attrs:{prop:"create_time",label:"缺货时间"}})],1)],1),a("div",[a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.noGoodsTrackDialog.responseData.count,background:""},on:{"current-change":t.noGoodsTrackDialogHandleCurrentChange}})],1)],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"设置无货",center:"",visible:t.setNoGoodsDialog.isShow,width:"30%"},on:{"update:visible":function(e){return t.$set(t.setNoGoodsDialog,"isShow",e)}}},[a("el-form",{ref:"setNoGoodsDialog",attrs:{"label-width":"100px",model:t.setNoGoodsDialog.requestData,rules:t.setNoGoodsDialog.rules}},[a("el-form-item",{attrs:{label:"无货状态",prop:"sup_explain"}},[a("el-select",{staticClass:"my-input",attrs:{placeholder:"请选择无货状态状态",clearable:""},model:{value:t.setNoGoodsDialog.requestData.sup_explain,callback:function(e){t.$set(t.setNoGoodsDialog.requestData,"sup_explain",e)},expression:"setNoGoodsDialog.requestData.sup_explain"}},t._l(t.setNoGoodsDialog.responseData.noGoodsStatusList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.key}})})),1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==t.setNoGoodsDialog.requestData.sup_explain,expression:"setNoGoodsDialog.requestData.sup_explain == 1"}],attrs:{label:"无货时间",prop:"time","inline-message":!0}},[a("el-date-picker",{staticClass:"my-input",staticStyle:{"max-width":"300px"},attrs:{type:"datetimerange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},on:{change:t.setNoGoodsDialogChangeRequestTime},model:{value:t.setNoGoodsDialog.requestData.time,callback:function(e){t.$set(t.setNoGoodsDialog.requestData,"time",e)},expression:"setNoGoodsDialog.requestData.time"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.setNoGoodsDialogSubmit("setNoGoodsDialog")}}},[t._v("提交")]),a("el-button",{on:{click:function(e){return t.resetForm("setNoGoodsDialog")}}},[t._v("重置")])],1)],1)],1)],1)},s=[],i=a("5cf9"),r=a("b775"),n=function(t){return Object(r["a"])({url:"/purchase/Be_purchase/supExplain",method:"post",data:t})},l=function(t){return Object(r["a"])({url:"/purchase/Be_purchase/setNotItem",method:"post",data:t})},u=function(t){return Object(r["a"])({url:"/purchase/Be_purchase/getList",method:"post",data:t})},c=function(t){return Object(r["a"])({url:"/purchase/Be_purchase/itemTrail",method:"post",data:t})},d={name:"index",data:function(){var t=this,e=function(e,a,o){1==t.setNoGoodsDialog.requestData.sup_explain&&0===t.setNoGoodsDialog.requestData.time.length?o(new Error("请选择时间")):o()};return{noGoodsTrackDialog:{isShow:!1,requestData:{item_id:"",attr_ids:"",time:"",start_time:"",end_time:"",page:1,limit:10},responseData:{count:0,allNum:0,data:[]}},setNoGoodsDialog:{isShow:!1,responseData:{noGoodsStatusList:[]},rules:{sup_explain:[{required:!0,message:"请选择无货状态说明",trigger:"blur"}],time:[{validator:e,trigger:"blur"}]},requestData:{sup_id:"",item_id:"",attr_ids:"",sup_explain:"",time:"",start_time:"",end_time:""}},requestData:{page:1,limit:10,sup_id:"",title:"",start_time:"",end_time:"",time:""},responseData:{count:0,data:[]}}},methods:{resetForm:function(t){this.$refs[t].resetFields()},setNoGoodsDialogShow:function(t){this.setNoGoodsDialog.requestData.sup_id=t.sup_id,this.setNoGoodsDialog.requestData.item_id=t.item_id,this.setNoGoodsDialog.requestData.attr_ids=t.attr_ids,this.setNoGoodsDialog.isShow=!0},setNoGoodsDialogChangeRequestTime:function(t){this.setNoGoodsDialog.requestData.start_time=t[0],this.setNoGoodsDialog.requestData.end_time=t[1]},setNoGoodsDialogSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;console.log("设置无货提交的参数：",e.setNoGoodsDialog.requestData),l(e.setNoGoodsDialog.requestData).then((function(t){200===t.code&&(e.getList(),e.$message.success("设置成功！"),e.setNoGoodsDialog.isShow=!1)})).catch((function(t){console.log(t)}))}))},noGoodsTrackDialogShow:function(t){this.noGoodsTrackDialog.requestData.item_id=t.item_id,this.noGoodsTrackDialog.requestData.attr_ids=t.attr_ids,this.noGoodsTrackDialogGetList()},noGoodsTrackDialogChangeRequestTime:function(t){this.noGoodsTrackDialog.requestData.start_time=t[0],this.noGoodsTrackDialog.requestData.end_time=t[1]},noGoodsTrackDialogHandleCurrentChange:function(t){this.noGoodsTrackDialog.requestData.page=t,this.noGoodsTrackDialogGetList()},noGoodsTrackDialogGetList:function(){var t=this;c(this.noGoodsTrackDialog.requestData).then((function(e){200==e.code&&(t.noGoodsTrackDialog.responseData=e.data,t.noGoodsTrackDialog.isShow=!0)})).catch((function(t){console.log(t)}))},changeRequestTime:function(t){this.requestData.start_time=t[0],this.requestData.end_time=t[1]},handleCurrentChange:function(t){this.requestData.page=t,this.getList()},getList:function(){var t=this;u(this.requestData).then((function(e){200===e.code&&(t.responseData=e.data)})).catch((function(t){console.log(t)}))}},beforeMount:function(){var t=this;this.getList(),n().then((function(e){200===e.code&&(t.setNoGoodsDialog.responseData.noGoodsStatusList=e.data.data)})).catch((function(t){console.log(t)}))},components:{supplier:i["default"]}},p=d,m=(a("16c2"),a("2877")),g=Object(m["a"])(p,o,s,!1,null,"f8a9482a",null);e["default"]=g.exports},ede2:function(t,e,a){"use strict";var o=a("677e"),s=a.n(o);s.a}}]);