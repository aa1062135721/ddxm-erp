(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-192c0db6","chunk-3b532174"],{"365c":function(t,e,o){"use strict";o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var a=o("b775"),s=function(t){return Object(a["a"])({url:"/system/Common/logistics",method:"post",params:t})},n=function(t){return Object(a["a"])({baseURL:"/aShop",url:"/system/Common/selectCompany",method:"post",params:t})},i=function(t){return Object(a["a"])({url:"/system/common/getCustomer",method:"post",params:t})}},"3fd1":function(t,e,o){},"73a8":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"查看物流信息",center:"",visible:t.show,width:"30%"},on:{"update:visible":function(e){t.show=e}}},[o("div",{staticClass:"title"},[o("div",{staticClass:"title-item"},[o("span",[t._v("物流：")]),t._v(t._s(t.codeToString(t.code))+"\n        ")]),o("div",{staticClass:"title-item"},[o("span",[t._v("快递单号：")]),t._v(t._s(t.sn)+"\n        ")])]),o("el-steps",{attrs:{direction:"vertical",active:1,space:"100px"}},t._l(t.responseData,(function(t,e){return o("el-step",{key:e,attrs:{title:t.Date,description:t.StatusDescription}})})),1)],1)},s=[],n=(o("ac4d"),o("8a81"),o("ac6a"),o("365c")),i={name:"logistics",data:function(){return{show:!1,responseData:[{Date:"2020-03-11 17:28:46",StatusDescription:"您的订单已由【郑州逸泉营业部】接货完成",Details:"",checkpoint_status:"transit"},{Date:"2020-03-11 17:28:19",StatusDescription:"尊敬的用户您好，受全国道路交通影响，部分快递可能会延迟派送，我们正在全力为您服务，请您耐心等待;",Details:"",checkpoint_status:"transit"},{Date:"2020-03-11 16:06:08",StatusDescription:"揽收任务已分配给朱小波,配送员电话18639001511或18337156351",Details:"",checkpoint_status:"transit",ItemNode:"ItemReceived"}],list:[]}},props:{isShow:{type:Boolean,default:!1},code:{type:String,default:""},sn:{type:String,default:""}},watch:{isShow:{immediate:!0,handler:function(t){console.log("我是查看物流子组件，父组件让我显示出来了",t),this.show=t,t&&this.getData()}},show:function(t,e){t||(console.log("子组件改变父组件的值"),this.$emit("update:isShow",!1))}},methods:{getData:function(){var t=this,e={sn:this.sn,code:this.code};Object(n["b"])(e).then((function(e){200===e.code&&(t.responseData=e.data)})).catch((function(t){console.log(t)}))},codeToString:function(t){var e=!0,o=!1,a=void 0;try{for(var s,n=this.list[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(t.toLowerCase()==i.code.toLowerCase())return i.title}}catch(r){o=!0,a=r}finally{try{e||null==n.return||n.return()}finally{if(o)throw a}}}},beforeCreate:function(){var t=this;Object(n["c"])().then((function(e){200===e.code&&(t.list=e.data)})).catch((function(t){console.log(t)}))}},r=i,l=(o("e307"),o("2877")),c=Object(l["a"])(r,a,s,!1,null,"4b65ceab",null);e["default"]=c.exports},a9bb:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"crumbs"},[o("el-breadcrumb",{attrs:{separator:"/"}},[o("el-breadcrumb-item",[t._v("退货单")])],1)],1),o("div",{staticClass:"container"},[o("div",{staticClass:"search-div"},[o("el-select",{staticClass:"my-input",attrs:{placeholder:"状态",clearable:""},model:{value:t.requestData.status,callback:function(e){t.$set(t.requestData,"status",e)},expression:"requestData.status"}},[o("el-option",{attrs:{label:"0待入库",value:"0"}}),o("el-option",{attrs:{label:"1部分入库",value:"1"}}),o("el-option",{attrs:{label:"2已完成",value:"2"}})],1),o("el-input",{staticClass:"my-input",staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"商品名称|条形码|退货人手机"},model:{value:t.requestData.seach_val,callback:function(e){t.$set(t.requestData,"seach_val",e)},expression:"requestData.seach_val"}})],1),o("div",[o("el-button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("搜索")]),o("el-button",{attrs:{type:"primary",plain:""}},[t._v("导出")])],1),o("div",{staticStyle:{margin:"40px 0"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.responseData.data,border:""}},[o("el-table-column",{attrs:{label:"退货人信息",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",[t._v("收件人："+t._s(e.row.o_receiving_realname))]),o("div",[t._v("手机号："+t._s(e.row.o_receiving_mobile))]),o("div",[t._v("收货地址："+t._s(e.row.o_receiving_address))])]}}])}),o("el-table-column",{attrs:{label:"商品名称",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return o("div",{key:a},[t._v(t._s(e.og_goods_title))])}))}}])}),o("el-table-column",{attrs:{label:"商品条形码",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return o("div",{key:a},[t._v(t._s(e.og_goods_code))])}))}}])}),o("el-table-column",{attrs:{label:"商品规格"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return o("div",{key:a},[t._v(t._s(e.og_goods_key))])}))}}])}),o("el-table-column",{attrs:{label:"退货数量"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return o("div",{key:a},[t._v(t._s(e.ot_number))])}))}}])}),o("el-table-column",{attrs:{label:"退货信息",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return o("div",{key:a},[t._v("\n                                已退："+t._s(e.ot_entry_num)+"——\n                                待退："+t._s(e.stay_num)+"\n                            ")])}))}}])}),o("el-table-column",{attrs:{label:"物流信息",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return o("div",{key:a},[t._v("\n                                物流单号:"+t._s(e.ot_logistics_sn)+"\n"),o("el-button",{attrs:{type:"text"},on:{click:function(o){return t.viewerLogisticsDialogShow(e.ot_logistics_sn,e.ot_logistics_code)}}},[t._v("查看物流")])],1)}))}}])}),o("el-table-column",{attrs:{label:"状态",prop:"status"}}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){return t.warehousingDialogShow(e.row)}}},[t._v("入库")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return t.warehousingLogDialogShow(e.row)}}},[t._v("入库记录")])]}}])})],1)],1),o("div",[o("el-pagination",{attrs:{total:t.responseData.total,background:"",layout:"prev, pager, next"},on:{"current-change":t.handleCurrentChange}})],1)]),o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"send-goods-dialog",attrs:{title:"入库",center:"",visible:t.warehousingDialog.isShow,width:"50%"},on:{"update:visible":function(e){return t.$set(t.warehousingDialog,"isShow",e)}}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.warehousingDialog.requestData,border:""}},[o("el-table-column",{attrs:{prop:"goods_title",label:"商品名"}}),o("el-table-column",{attrs:{prop:"goods_code",label:"条形码"}}),o("el-table-column",{attrs:{prop:"specs_id",label:"规格"}}),o("el-table-column",{attrs:{prop:"total_retun_num",label:"退货数量"}}),o("el-table-column",{attrs:{prop:"already_num",label:"已入库"}}),o("el-table-column",{attrs:{prop:"stay_num",label:" 剩余数量"}}),o("el-table-column",{attrs:{label:"退货数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{model:{value:e.row.return_num,callback:function(o){t.$set(e.row,"return_num",o)},expression:"scope.row.return_num"}})]}}])})],1),o("div",{staticStyle:{"margin-top":"50px","text-align":"center"}},[o("el-button",{attrs:{type:"primary"},on:{click:t.warehousingDialogSubmit}},[t._v("提交")])],1)],1),o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"send-goods-dialog",attrs:{title:"入库记录",center:"",visible:t.warehousingLogDialog.isShow,width:"50%"},on:{"update:visible":function(e){return t.$set(t.warehousingLogDialog,"isShow",e)}}},t._l(t.warehousingLogDialog.responseData,(function(e,a){return o("div",{key:a,staticClass:"send-goods-dialog-item"},[o("div",{staticClass:"box"},[o("div",[t._v("\n                        入库仓库："+t._s(e.w_name)+"\n                    ")]),o("div",[t._v("\n                        入库人员："+t._s(e.a_username)+"\n                    ")]),o("div",[t._v("\n                        入库时间："+t._s(e.create_time)+"\n                    ")]),o("div",[o("el-button",{attrs:{type:"text"},on:{click:function(o){return t.viewerLogisticsDialogShow(e.ot_logistics_sn,e.ot_logistics_code)}}},[t._v("查看物流")])],1)]),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.goods_info,border:""}},[o("el-table-column",{attrs:{prop:"goods_title",label:"商品名"}}),o("el-table-column",{attrs:{prop:"goods_code",label:"条形码"}}),o("el-table-column",{attrs:{prop:"specs_key",label:"规格"}}),o("el-table-column",{attrs:{prop:"ot_num",label:"退货总量"}}),o("el-table-column",{attrs:{prop:"join_num",label:"入库量"}})],1)],1)})),0),o("logistics",{attrs:{isShow:t.viewerLogisticsDialog.isShow,code:t.viewerLogisticsDialog.code,sn:t.viewerLogisticsDialog.sn},on:{"update:isShow":function(e){return t.$set(t.viewerLogisticsDialog,"isShow",e)},"update:is-show":function(e){return t.$set(t.viewerLogisticsDialog,"isShow",e)}}})],1)},s=[],n=(o("ac4d"),o("8a81"),o("ac6a"),o("b775")),i=function(t){return Object(n["a"])({url:"/warehouse/shop_order_return/getList",method:"post",data:t})},r=function(t){return Object(n["a"])({url:"/warehouse/shop_order_return/deliverLog",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/warehouse/shop_order_return/orderReturnDeliver",method:"post",data:t})},c=o("73a8"),u={name:"index",data:function(){return{requestData:{status:"",seach_val:"",page:1,limit:10},responseData:{total:1,per_page:10,current_page:1,last_page:1,data:[]},viewerLogisticsDialog:{isShow:!1,code:"",sn:""},warehousingDialog:{isShow:!1,requestData:[]},warehousingLogDialog:{isShow:!1,responseData:[]}}},methods:{resetForm:function(t){this.$refs[t].resetFields()},getList:function(){var t=this;i(this.requestData).then((function(e){200===e.code&&(t.responseData=e.data)})).catch((function(t){console.log(t)}))},handleCurrentChange:function(t){this.requestData.page=t,this.getList()},viewerLogisticsDialogShow:function(t,e){this.viewerLogisticsDialog={isShow:!0,code:e,sn:t}},warehousingDialogShow:function(t){var e=[],o=!0,a=!1,s=void 0;try{for(var n,i=t.items[Symbol.iterator]();!(o=(n=i.next()).done);o=!0){var r=n.value;e.push({specs_id:r.og_goods_key,goods_id:r.goods_id,return_num:"",stay_num:r.stay_num,already_num:r.ot_entry_num,total_retun_num:r.ot_number,order_id:r.order_id,og_id:r.id,ot_id:r.ot_id,goods_title:r.og_goods_title,goods_code:r.og_goods_code,ot_logistics_code:r.ot_logistics_code,ot_logistics_sn:r.ot_logistics_sn})}}catch(l){a=!0,s=l}finally{try{o||null==i.return||i.return()}finally{if(a)throw s}}this.warehousingDialog.requestData=e,this.warehousingDialog.isShow=!0},warehousingDialogSubmit:function(){var t=this,e=!1,o=!0,a=!1,s=void 0;try{for(var n,i=this.warehousingDialog.requestData[Symbol.iterator]();!(o=(n=i.next()).done);o=!0){var r=n.value;if(!r.return_num||parseInt(r.return_num)<=0||parseInt(r.return_num)>parseInt(r.stay_num)){this.$message.error("【".concat(r.goods_title,"】的退货数量有误！")),e=!0;break}}}catch(c){a=!0,s=c}finally{try{o||null==i.return||i.return()}finally{if(a)throw s}}e||l(this.warehousingDialog.requestData).then((function(e){200===e.code&&(t.getList(),t.warehousingDialog.isShow=!1)})).catch((function(t){console.log(t)}))},warehousingLogDialogShow:function(t){var e=this,o={order_id:t.id};r(o).then((function(t){200===t.code&&(e.warehousingLogDialog.responseData=t.data,e.warehousingLogDialog.isShow=!0)})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.getList()},components:{logistics:c["default"]}},d=u,g=(o("ab1a"),o("2877")),_=Object(g["a"])(d,a,s,!1,null,"7557fd75",null);e["default"]=_.exports},ab1a:function(t,e,o){"use strict";var a=o("3fd1"),s=o.n(a);s.a},b62e:function(t,e,o){},b775:function(t,e,o){"use strict";var a,s=o("bc3a"),n=o.n(s),i=o("5c96"),r=o("4360"),l=n.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});l.interceptors.request.use((function(t){return a=i["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),l.interceptors.response.use((function(t){if(a.close(),200===t.status)return-1==t.data.code&&(r["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(i["Message"].closeAll(),Object(i["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return a.close(),console.log(t),Promise.reject()})),e["a"]=l},e307:function(t,e,o){"use strict";var a=o("b62e"),s=o.n(a);s.a}}]);