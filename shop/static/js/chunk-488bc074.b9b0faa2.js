(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-488bc074"],{"0e43":function(t,e,a){},"12c4":function(t,e,a){"use strict";var o=a("d653"),n=a.n(o);n.a},"1af6":function(t,e,a){var o=a("63b6");o(o.S,"Array",{isArray:a("9003")})},"1e31":function(t,e,a){"use strict";var o=a("0e43"),n=a.n(o);n.a},"20fd":function(t,e,a){"use strict";var o=a("d9f6"),n=a("aebd");t.exports=function(t,e,a){e in t?o.f(t,e,n(0,a)):t[e]=a}},"4ff7":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return l}));var o=a("b775"),n=function(t){return Object(o["a"])({url:"/warehouse/warehouse_manage/getList",method:"post",data:t})},s=function(t){return Object(o["a"])({url:"/system/common/getWarehouse",method:"post",data:t})},r=function(t){return Object(o["a"])({url:"/warehouse/warehouse_manage/add",method:"post",data:t})},i=function(t){return Object(o["a"])({url:"/warehouse/warehouse_manage/del",method:"post",data:t})},l=function(t){return Object(o["a"])({url:"/warehouse/warehouse_manage/edit",method:"post",data:t})}},"549b":function(t,e,a){"use strict";var o=a("d864"),n=a("63b6"),s=a("241e"),r=a("b0dc"),i=a("3702"),l=a("b447"),u=a("20fd"),c=a("7cd6");n(n.S+n.F*!a("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,n,d,f=s(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,b=void 0!==m,_=0,g=c(f);if(b&&(m=o(m,h>2?arguments[2]:void 0,2)),void 0==g||p==Array&&i(g))for(e=l(f.length),a=new p(e);e>_;_++)u(a,_,b?m(f[_],_):f[_]);else for(d=g.call(f),a=new p;!(n=d.next()).done;_++)u(a,_,b?r(d,m,[n.value,_],!0):n.value);return a.length=_,a}})},"54a1":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"75fc":function(t,e,a){"use strict";var o=a("a745"),n=a.n(o);function s(t){if(n()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var r=a("774e"),i=a.n(r),l=a("c8bb"),u=a.n(l);function c(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return s(t)||c(t)||d()}a.d(e,"a",(function(){return f}))},"774e":function(t,e,a){t.exports=a("d2d5")},"95d5":function(t,e,a){var o=a("40c3"),n=a("5168")("iterator"),s=a("481b");t.exports=a("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||s.hasOwnProperty(o(e))}},a745:function(t,e,a){t.exports=a("f410")},aa1f:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-cascader",{attrs:{placeholder:t.placeholder,options:t.list,clearable:"",props:{checkStrictly:!0,value:"id",label:"w_name",children:"children"}},on:{change:t.change},model:{value:t.choosesValue,callback:function(e){t.choosesValue=e},expression:"choosesValue"}})},n=[],s=(a("55dd"),a("75fc")),r=a("4ff7"),i={name:"index",props:{placeholder:{type:String,default:"请选择仓库"},value:null},data:function(){return{choosesValue:[],list:[]}},methods:{change:function(){this.$emit("input",this.choosesValue[this.choosesValue.length-1])}},watch:{value:{immediate:!0,handler:function(t){if(t){var e=function t(e,o,n){n.some((function(n){var r=n.children||[];if(n.id===o)return a=e,!0;if(r.length>0){var i=Object(s["a"])(e);return i.push(n.id),t(i,o,r)}}))},a=[];e([],t,this.list),this.choosesValue=[t].concat(Object(s["a"])(a)).sort()}else this.choosesValue=[]}}},beforeCreate:function(){var t=this;Object(r["e"])().then((function(e){200===e.code&&(t.list=e.data)})).catch((function(t){console.log(t)}))}},l=i,u=(a("1e31"),a("2877")),c=Object(u["a"])(l,o,n,!1,null,"1fa4dcec",null);e["default"]=c.exports},c8bb:function(t,e,a){t.exports=a("54a1")},cf24:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("其他入库单")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"search-div"},[a("el-input",{staticClass:"my-input",attrs:{placeholder:"商品名/条形码/单号"},model:{value:t.requestData.seach_val,callback:function(e){t.$set(t.requestData,"seach_val",e)},expression:"requestData.seach_val"}}),a("depot",{model:{value:t.requestData.shop_id,callback:function(e){t.$set(t.requestData,"shop_id",e)},expression:"requestData.shop_id"}}),a("supplier",{model:{value:t.requestData.sup_id,callback:function(e){t.$set(t.requestData,"sup_id",e)},expression:"requestData.sup_id"}}),a("el-select",{staticClass:"my-input",attrs:{placeholder:"状态",clearable:""},model:{value:t.requestData.status,callback:function(e){t.$set(t.requestData,"status",e)},expression:"requestData.status"}},[a("el-option",{attrs:{label:"正常",value:"1"}}),a("el-option",{attrs:{label:"已取消",value:"2"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("查询")]),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.addDialog.isShow=!0}}},[t._v("新增")]),t.$_has("export")?a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.myExport}},[t._v("导出")]):t._e()],1),a("div",{staticStyle:{margin:"40px 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.responseData.data,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{label:"出库信息",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("订单号："+t._s(e.row.sn))]),a("p",[t._v("供应商："+t._s(e.row.sup_name))]),a("p",[t._v("入库人："+t._s(e.row.user_name))]),a("p",[t._v("入库仓库："+t._s(e.row.w_name))]),a("p",[t._v("入库时间："+t._s(e.row.create_time))])]}}])}),a("el-table-column",{attrs:{label:"商品名",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,o){return a("p",{key:o},[t._v(t._s(e.title))])}))}}])}),a("el-table-column",{attrs:{label:"条形码",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,o){return a("p",{key:o},[t._v(t._s(e.bar_code))])}))}}])}),a("el-table-column",{attrs:{label:"规格"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,o){return a("p",{key:o},[t._v(t._s(e.attr_name))])}))}}])}),a("el-table-column",{attrs:{label:"入库量"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,o){return a("p",{key:o},[t._v(t._s(e.num))])}))}}])}),a("el-table-column",{attrs:{label:"入库单价"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,o){return a("p",{key:o},[t._v(t._s(e.price))])}))}}])}),a("el-table-column",{attrs:{label:"合计金额"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,o){return a("p",{key:o},[t._v(t._s(e.num*e.price))])}))}}])}),a("el-table-column",{attrs:{prop:"remarks",label:"备注"}}),a("el-table-column",{attrs:{prop:"status_name",label:"状态"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.myCancel(e.row.id)}}},[t._v("取消入库")]):t._e()]}}])})],1)],1),a("div",[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.responseData.count},on:{"current-change":t.handleCurrentChange}})],1)]),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"新增其他入库单",center:"",visible:t.addDialog.isShow,width:"50%"},on:{"update:visible":function(e){return t.$set(t.addDialog,"isShow",e)}}},[a("div",{staticClass:"search-div"},[a("depot",{staticClass:"my-input",model:{value:t.addDialog.requestData.shop_id,callback:function(e){t.$set(t.addDialog.requestData,"shop_id",e)},expression:"addDialog.requestData.shop_id"}}),a("supplier",{ref:"supplier",model:{value:t.addDialog.requestData.sup_id,callback:function(e){t.$set(t.addDialog.requestData,"sup_id",e)},expression:"addDialog.requestData.sup_id"}}),a("el-input",{staticClass:"my-input",attrs:{placeholder:"请输入备注"},model:{value:t.addDialog.requestData.remarks,callback:function(e){t.$set(t.addDialog.requestData,"remarks",e)},expression:"addDialog.requestData.remarks"}}),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.addDialog.isShow,expression:"addDialog.isShow"}],staticStyle:{margin:"0 0 10px 10px"},attrs:{type:"primary",plain:""},on:{click:t.addDialogChoosesGoodsDialogShow}},[t._v("选择商品")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{height:"300",data:t.addDialog.requestData.items}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),a("el-table-column",{attrs:{prop:"bar_code",label:"条形码"}}),a("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),a("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{attrs:{src:t.row.pic,"preview-src-list":[t.row.pic]}})]}}])}),a("el-table-column",{attrs:{prop:"attr_name",label:"规格"}}),a("el-table-column",{attrs:{prop:"kuchun",label:"库存"}}),a("el-table-column",{attrs:{label:"入库单价"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.price,callback:function(a){t.$set(e.row,"price",a)},expression:"scope.row.price"}})]}}])}),a("el-table-column",{attrs:{label:"入库数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.num,callback:function(a){t.$set(e.row,"num",a)},expression:"scope.row.num"}})]}}])}),a("el-table-column",{attrs:{label:"合计金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.num*e.row.price||0)+"\n                ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.addDialogDelGoods(e.$index)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info"},on:{click:function(e){t.addDialog.isShow=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addDialogSubmit}},[t._v("提交")])],1)],1),a("chooses-goods",{attrs:{visible:t.addDialog.choosesGoodsDialogIsShow,requestData:{warehouse_id:t.addDialog.requestData.shop_id}},on:{"update:visible":function(e){return t.$set(t.addDialog,"choosesGoodsDialogIsShow",e)},sendChoosesGoods:t.addDialogGetChoosesGoods}})],1)},n=[],s=(a("ac4d"),a("8a81"),a("ac6a"),a("75fc")),r=a("b775"),i=function(t){return Object(r["a"])({url:"/warehouse/warehousing_entry/getList",method:"post",data:t})},l=function(t){return Object(r["a"])({url:"/warehouse/warehousing_entry/add",method:"post",data:t})},u=function(t){return Object(r["a"])({url:"/warehouse/warehousing_entry/cancel",method:"post",data:t})},c=function(t){return Object(r["a"])({url:"",method:"post",data:t})},d=a("aa1f"),f=a("5cf9"),p=a("89ed"),h=a("ed08"),m={name:"index",data:function(){return{responseData:{count:0,data:[]},requestData:{page:1,limit:10,search_val:"",shop_id:"",sup_id:"",status:""},addDialog:{isShow:!1,responseData:[],requestData:{sup_id:"",sup_name:"",shop_id:"",remarks:"",items:[]},choosesGoodsDialogIsShow:!1}}},methods:{getList:function(){var t=this;i(this.requestData).then((function(e){200===e.code&&(t.responseData=e.data)})).catch((function(t){console.log(t)}))},handleCurrentChange:function(t){this.requestData.page=t,this.getList()},myExport:function(){c().then((function(t){Object(h["a"])(t,"其他入库单.xlsx")}))},myCancel:function(t){var e=this;this.$confirm("你正在取消其他入库操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){u({id:t}).then((function(t){200===t.code&&(e.getList(),e.$message({type:"success",message:"取消成功!"}))})).catch((function(t){console.log(t)}))})).catch((function(){}))},addDialogChoosesGoodsDialogShow:function(){this.addDialog.requestData.shop_id?this.addDialog.choosesGoodsDialogIsShow=!0:this.$message.error("请先选择仓库在选择商品")},addDialogGetChoosesGoods:function(t){var e=[],a=[],o=!0,n=!1,r=void 0;try{for(var i,l=t[Symbol.iterator]();!(o=(i=l.next()).done);o=!0){var u=i.value;e.push({item_id:u.id,title:u.g_title,pic:u.imgurl,attr_ids:u.key||0,attr_name:u.key_name,bar_code:u.code,kuchun:u.w_stock,price:u.price||0,num:""})}}catch(d){n=!0,r=d}finally{try{o||null==l.return||l.return()}finally{if(n)throw r}}a=[].concat(Object(s["a"])(this.addDialog.requestData.items),e);var c={};this.addDialog.requestData.items=a.reduce((function(t,e){return!c[e.item_id+e.attr_ids]&&(c[e.item_id+e.attr_ids]=t.push(e)),t}),[])},addDialogDelGoods:function(t){this.addDialog.requestData.items.splice(t,1)},addDialogSubmit:function(){var t=this;if(this.addDialog.requestData.sup_id)if(this.addDialog.requestData.shop_id)if(this.$refs.supplier.list.forEach((function(e){t.addDialog.requestData.sup_id==e.id&&(t.addDialog.requestData.sup_name=e.s_name)})),0!==this.addDialog.requestData.items.length){var e=!0,a=!0,o=!1,n=void 0;try{for(var s,r=this.addDialog.requestData.items[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var i=s.value;if(!i.price){e=!1,this.$message.error("【".concat(i.title,"】的入库单价有误"));break}if(!i.num){e=!1,this.$message.error("【".concat(i.title,"】的入库数量有误"));break}}}catch(u){o=!0,n=u}finally{try{a||null==r.return||r.return()}finally{if(o)throw n}}e&&l(this.addDialog.requestData).then((function(e){200===e.code&&(t.getList(),t.addDialog.isShow=!1,t.addDialog.requestData={sup_id:"",sup_name:"",shop_id:"",remarks:"",items:[]})})).catch((function(t){console.log(t)}))}else this.$message.error("请至少选择一个商品");else this.$message.error("请选择仓库");else this.$message.error("请选择供应商")}},created:function(){this.getList()},components:{depot:d["default"],supplier:f["default"],choosesGoods:p["default"]},watch:{"addDialog.requestData.shop_id":function(t,e){this.addDialog.requestData.items=[]}}},b=m,_=(a("12c4"),a("2877")),g=Object(_["a"])(b,o,n,!1,null,"8ecfd780",null);e["default"]=g.exports},d2d5:function(t,e,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},d653:function(t,e,a){},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var o=function(t,e){var a=window.URL.createObjectURL(new Blob([t])),o=document.createElement("a");o.style.display="none",o.href=a,o.setAttribute("download",e),document.body.appendChild(o),o.click(),setTimeout((function(){document.body.removeChild(o)}),3e3)}},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray}}]);