(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09d80042","chunk-d8ea59f4","chunk-4d41fe26"],{"01d1":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return c}));var r=a("b775"),n=function(t){return Object(r["a"])({url:"/warehouse/supplier_manage/getList",method:"post",data:t})},o=function(t){return Object(r["a"])({url:"/system/common/getSupplier",method:"post",data:t})},i=function(t){return Object(r["a"])({url:"/warehouse/supplier_manage/add",method:"post",data:t})},s=function(t){return Object(r["a"])({url:"/warehouse/supplier_manage/del",method:"post",data:t})},c=function(t){return Object(r["a"])({url:"/warehouse/supplier_manage/edit",method:"post",data:t})}},"0a0b":function(t,e,a){},"0e43":function(t,e,a){},"1af6":function(t,e,a){var r=a("63b6");r(r.S,"Array",{isArray:a("9003")})},"1e31":function(t,e,a){"use strict";var r=a("0e43"),n=a.n(r);n.a},"20fd":function(t,e,a){"use strict";var r=a("d9f6"),n=a("aebd");t.exports=function(t,e,a){e in t?r.f(t,e,n(0,a)):t[e]=a}},3702:function(t,e,a){var r=a("481b"),n=a("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[n]===t)}},"40c3":function(t,e,a){var r=a("6b4c"),n=a("5168")("toStringTag"),o="Arguments"==r(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(a){}};t.exports=function(t){var e,a,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(a=i(e=Object(t),n))?a:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},"4ee1":function(t,e,a){var r=a("5168")("iterator"),n=!1;try{var o=[7][r]();o["return"]=function(){n=!0},Array.from(o,(function(){throw 2}))}catch(i){}t.exports=function(t,e){if(!e&&!n)return!1;var a=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:a=!0}},o[r]=function(){return s},t(o)}catch(i){}return a}},"4ff7":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return c}));var r=a("b775"),n=function(t){return Object(r["a"])({url:"/warehouse/warehouse_manage/getList",method:"post",data:t})},o=function(t){return Object(r["a"])({url:"/system/common/getWarehouse",method:"post",data:t})},i=function(t){return Object(r["a"])({url:"/warehouse/warehouse_manage/add",method:"post",data:t})},s=function(t){return Object(r["a"])({url:"/warehouse/warehouse_manage/del",method:"post",data:t})},c=function(t){return Object(r["a"])({url:"/warehouse/warehouse_manage/edit",method:"post",data:t})}},"549b":function(t,e,a){"use strict";var r=a("d864"),n=a("63b6"),o=a("241e"),i=a("b0dc"),s=a("3702"),c=a("b447"),u=a("20fd"),l=a("7cd6");n(n.S+n.F*!a("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,n,d,p=o(t),f="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,b=void 0!==m,g=0,y=l(p);if(b&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==y||f==Array&&s(y))for(e=c(p.length),a=new f(e);e>g;g++)u(a,g,b?m(p[g],g):p[g]);else for(d=y.call(p),a=new f;!(n=d.next()).done;g++)u(a,g,b?i(d,m,[n.value,g],!0):n.value);return a.length=g,a}})},"54a1":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"5b03":function(t,e,a){"use strict";var r=a("0a0b"),n=a.n(r);n.a},"5cf9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{staticClass:"my-input",attrs:{placeholder:t.placeholder,clearable:""},on:{change:t.change},model:{value:t.choosesValue,callback:function(e){t.choosesValue=e},expression:"choosesValue"}},t._l(t.list,(function(t,e){return a("el-option",{key:e,attrs:{label:t.s_name,value:t.id}})})),1)},n=[],o=a("01d1"),i={name:"index",props:{placeholder:{type:String,default:"选择供应商"},value:null},data:function(){return{choosesValue:"",list:[]}},methods:{change:function(){this.$emit("input",this.choosesValue)}},watch:{value:{immediate:!0,handler:function(t){this.choosesValue=t}}},beforeCreate:function(){var t=this;Object(o["e"])().then((function(e){200===e.code&&(t.list=e.data)})).catch((function(t){console.log(t)}))}},s=i,c=(a("ede2"),a("2877")),u=Object(c["a"])(s,r,n,!1,null,"408530ba",null);e["default"]=u.exports},"677e":function(t,e,a){},"75fc":function(t,e,a){"use strict";var r=a("a745"),n=a.n(r);function o(t){if(n()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var i=a("774e"),s=a.n(i),c=a("c8bb"),u=a.n(c);function l(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return o(t)||l(t)||d()}a.d(e,"a",(function(){return p}))},"774e":function(t,e,a){t.exports=a("d2d5")},"7cd6":function(t,e,a){var r=a("40c3"),n=a("5168")("iterator"),o=a("481b");t.exports=a("584a").getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||o[r(t)]}},"95d5":function(t,e,a){var r=a("40c3"),n=a("5168")("iterator"),o=a("481b");t.exports=a("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||o.hasOwnProperty(r(e))}},a745:function(t,e,a){t.exports=a("f410")},aa1f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-cascader",{attrs:{placeholder:t.placeholder,options:t.list,clearable:"",props:{checkStrictly:!0,value:"id",label:"w_name",children:"children"}},on:{change:t.change},model:{value:t.choosesValue,callback:function(e){t.choosesValue=e},expression:"choosesValue"}})},n=[],o=(a("55dd"),a("75fc")),i=a("4ff7"),s={name:"index",props:{placeholder:{type:String,default:"请选择仓库"},value:null},data:function(){return{choosesValue:[],list:[]}},methods:{change:function(){this.$emit("input",this.choosesValue[this.choosesValue.length-1])}},watch:{value:{immediate:!0,handler:function(t){if(t){var e=function t(e,r,n){n.some((function(n){var i=n.children||[];if(n.id===r)return a=e,!0;if(i.length>0){var s=Object(o["a"])(e);return s.push(n.id),t(s,r,i)}}))},a=[];e([],t,this.list),this.choosesValue=[t].concat(Object(o["a"])(a)).sort()}else this.choosesValue=[]}}},beforeCreate:function(){var t=this;Object(i["e"])().then((function(e){200===e.code&&(t.list=e.data)})).catch((function(t){console.log(t)}))}},c=s,u=(a("1e31"),a("2877")),l=Object(u["a"])(c,r,n,!1,null,"1fa4dcec",null);e["default"]=l.exports},b0dc:function(t,e,a){var r=a("e4ae");t.exports=function(t,e,a,n){try{return n?e(r(a)[0],a[1]):e(a)}catch(i){var o=t["return"];throw void 0!==o&&r(o.call(t)),i}}},b775:function(t,e,a){"use strict";var r,n=a("bc3a"),o=a.n(n),i=a("5c96"),s=a("4360"),c=o.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});c.interceptors.request.use((function(t){return r=i["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(r.close(),200===t.status)return-1==t.data.code&&(s["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(i["Message"].closeAll(),Object(i["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return r.close(),console.log(t),Promise.reject()})),e["a"]=c},c8bb:function(t,e,a){t.exports=a("54a1")},d2d5:function(t,e,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r=function(t,e){var a=window.URL.createObjectURL(new Blob([t])),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",e),document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r)}),3e3)}},ede2:function(t,e,a){"use strict";var r=a("677e"),n=a.n(r);n.a},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray},f887:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("采购打款单")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"search-div"},[a("supplier",{model:{value:t.requestData.sup_id,callback:function(e){t.$set(t.requestData,"sup_id",e)},expression:"requestData.sup_id"}}),a("el-select",{staticClass:"my-input",attrs:{placeholder:"是否先打款",clearable:""},model:{value:t.requestData.is_price_firse,callback:function(e){t.$set(t.requestData,"is_price_firse",e)},expression:"requestData.is_price_firse"}},[a("el-option",{attrs:{label:"是",value:"1"}}),a("el-option",{attrs:{label:"否",value:"0"}})],1),a("el-select",{staticClass:"my-input",attrs:{placeholder:"发货方式",clearable:""},model:{value:t.requestData.pick_way,callback:function(e){t.$set(t.requestData,"pick_way",e)},expression:"requestData.pick_way"}},[a("el-option",{attrs:{label:"自提",value:"2"}}),a("el-option",{attrs:{label:"发给仓库",value:"1"}}),a("el-option",{attrs:{label:"发给客户",value:"3"}})],1),a("el-date-picker",{staticStyle:{"margin-right":"10px"},attrs:{"value-format":"yyyy-MM-dd",type:"datetimerange","range-separator":"至","start-placeholder":"采购开始时间","end-placeholder":"采购结束时间"},on:{change:t.changeRequestTime},model:{value:t.requestData.time,callback:function(e){t.$set(t.requestData,"time",e)},expression:"requestData.time"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("搜索")]),t.$_has("export")?a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.myExport}},[t._v("导出")]):t._e()],1),a("div",{staticStyle:{margin:"40px 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.responseData.data}},[a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),a("el-table-column",{attrs:{label:"采购单信息",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v("采购人："+t._s(e.row.user_name))]),a("div",[t._v("供应商："+t._s(e.row.sup_name))]),a("div",[t._v("采购单订单编号："+t._s(e.row.sn))]),a("div",[t._v("采购时间："+t._s(e.row.create_time))])]}}])}),a("el-table-column",{attrs:{prop:"price_firse",label:"是否先打款"}}),a("el-table-column",{attrs:{label:"商品条形码",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,r){return a("div",{key:r},[t._v(t._s(e.bar_code))])}))}}])}),a("el-table-column",{attrs:{label:"商品名称",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,r){return a("div",{key:r},[t._v(t._s(e.title))])}))}}])}),a("el-table-column",{attrs:{label:"商品规格"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,r){return a("div",{key:r},[t._v(t._s(e.attr_name))])}))}}])}),a("el-table-column",{attrs:{label:"采购数量"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,r){return a("div",{key:r},[t._v(t._s(e.num))])}))}}])}),a("el-table-column",{attrs:{prop:"postage",label:"运费"}}),a("el-table-column",{attrs:{label:"合计金额"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,r){return a("div",{key:r},[t._v(t._s(e.amount))])}))}}])}),a("el-table-column",{attrs:{prop:"remarks",label:"备注"}}),a("el-table-column",{attrs:{prop:"status_name",label:"状态"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,r){return a("div",{key:r},[t.$_has("purItemRecord")?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.purchaseHistoryDialogShow(e)}}},[t._v("采购历史")]):t._e()],1)}))}}])})],1)],1),a("div",[a("el-pagination",{attrs:{total:t.responseData.count,background:"",layout:"prev, pager, next"},on:{"current-change":t.handleCurrentChange}})],1)]),a("el-dialog",{attrs:{title:"采购历史",visible:t.purchaseHistoryDialog.isShow,width:"40%",center:""},on:{"update:visible":function(e){return t.$set(t.purchaseHistoryDialog,"isShow",e)}}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-date-picker",{staticClass:"my-input",staticStyle:{"max-width":"300px","margin-right":"10px"},attrs:{type:"datetimerange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"采购开始时间","end-placeholder":"采购结束时间"},on:{change:t.purchaseHistoryDialogChangeRequestTime},model:{value:t.purchaseHistoryDialog.requestData.time,callback:function(e){t.$set(t.purchaseHistoryDialog.requestData,"time",e)},expression:"purchaseHistoryDialog.requestData.time"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.purchaseHistoryDialogSearchBtn}},[t._v("搜索")])],1),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"}},[t._v("平均单价："+t._s(t.purchaseHistoryDialog.responseData.meanPrice))]),a("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"}},[t._v("平均采购量："+t._s(t.purchaseHistoryDialog.responseData.meanNum))]),a("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"}},[t._v("总采购量："+t._s(t.purchaseHistoryDialog.responseData.allNum))])],1),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"500px",data:t.purchaseHistoryDialog.responseData.data}},[a("el-table-column",{attrs:{prop:"sup_name",label:"供应商名称"}}),a("el-table-column",{attrs:{prop:"num",label:"采购的数量"}}),a("el-table-column",{attrs:{prop:"price",label:"采购的单价"}}),a("el-table-column",{attrs:{prop:"create_time",label:"采购的时间"}})],1)],1),a("div",[a("el-pagination",{attrs:{total:t.purchaseHistoryDialog.responseData.count,background:"",layout:"prev, pager, next"},on:{"current-change":t.purchaseHistoryDialogHandleCurrentChange}})],1)])],1)},n=[],o=a("5cf9"),i=a("aa1f"),s=a("b775"),c=function(t){return Object(s["a"])({url:"/finance/purchase_remittance/getList",method:"post",data:t})},u=function(t){return Object(s["a"])({url:"/finance/purchase_remittance/purItemRecord",method:"post",data:t})},l=function(t){return Object(s["a"])({url:"/finance/purchase_remittance/export",data:"get",responseType:"blob"})},d=a("ed08"),p={name:"index",data:function(){return{requestData:{sup_id:"",is_price_firse:"",time:"",start_time:"",end_time:"",pick_way:"",page:1,limit:10},responseData:{count:0,data:[]},purchaseHistoryDialog:{isShow:!1,requestData:{page:1,limit:10,item_id:"",attr_ids:"",start_time:"",end_time:"",time:""},responseData:{count:0,meanPrice:0,meanNum:0,allNum:0,data:[]}}}},methods:{changeRequestTime:function(t){this.requestData.start_time=t[0],this.requestData.end_time=t[1]},getList:function(){var t=this;c(this.requestData).then((function(e){200===e.code&&(t.responseData=e.data)})).catch((function(t){console.log(t)}))},handleCurrentChange:function(t){this.requestData.page=t,this.getList()},purchaseHistoryDialogShow:function(t){this.purchaseHistoryDialog.requestData.item_id=t.item_id,this.purchaseHistoryDialog.requestData.attr_ids=t.attr_ids,this.purchaseHistoryDialogSearchBtn()},purchaseHistoryDialogChangeRequestTime:function(t){this.purchaseHistoryDialog.requestData.start_time=t[0],this.purchaseHistoryDialog.requestData.end_time=t[1]},purchaseHistoryDialogHandleCurrentChange:function(t){this.purchaseHistoryDialog.requestData.page=t,this.purchaseHistoryDialogSearchBtn()},purchaseHistoryDialogSearchBtn:function(){var t=this;u(this.purchaseHistoryDialog.requestData).then((function(e){200===e.code&&(t.purchaseHistoryDialog.responseData=e.data,t.purchaseHistoryDialog.isShow=!0)})).catch((function(t){console.log(t)}))},myExport:function(){l().then((function(t){Object(d["a"])(t,"file.xlsx")}))}},components:{supplier:o["default"],depot:i["default"]},beforeMount:function(){this.getList()}},f=p,h=(a("5b03"),a("2877")),m=Object(h["a"])(f,r,n,!1,null,"4536e6fb",null);e["default"]=m.exports}}]);