(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae869ee4"],{"01d1":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c}));var o=a("b775"),r=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/getList",method:"post",data:t})},n=function(t){return Object(o["a"])({url:"/system/common/getSupplier",method:"post",data:t})},s=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/add",method:"post",data:t})},i=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/del",method:"post",data:t})},c=function(t){return Object(o["a"])({url:"/warehouse/supplier_manage/edit",method:"post",data:t})}},"0c44":function(t,e,a){},1173:function(t,e){t.exports=function(t,e,a,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(a+": incorrect invocation!");return t}},"1af6":function(t,e,a){var o=a("63b6");o(o.S,"Array",{isArray:a("9003")})},"20fd":function(t,e,a){"use strict";var o=a("d9f6"),r=a("aebd");t.exports=function(t,e,a){e in t?o.f(t,e,r(0,a)):t[e]=a}},"24c5":function(t,e,a){"use strict";var o,r,n,s,i=a("b8e3"),c=a("e53d"),u=a("d864"),l=a("40c3"),d=a("63b6"),p=a("f772"),f=a("79aa"),h=a("1173"),m=a("a22a"),g=a("f201"),v=a("4178").set,b=a("aba2")(),y=a("656e"),_=a("4439"),D=a("bc13"),x=a("cd78"),w="Promise",k=c.TypeError,S=c.process,q=S&&S.versions,G=q&&q.v8||"",j=c[w],I="process"==l(S),C=function(){},O=r=y.f,H=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[a("5168")("species")]=function(t){t(C,C)};return(I||"function"==typeof PromiseRejectionEvent)&&t.then(C)instanceof e&&0!==G.indexOf("6.6")&&-1===D.indexOf("Chrome/66")}catch(o){}}(),$=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},P=function(t,e){if(!t._n){t._n=!0;var a=t._c;b((function(){var o=t._v,r=1==t._s,n=0,s=function(e){var a,n,s,i=r?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{i?(r||(2==t._h&&N(t),t._h=1),!0===i?a=o:(l&&l.enter(),a=i(o),l&&(l.exit(),s=!0)),a===e.promise?u(k("Promise-chain cycle")):(n=$(a))?n.call(a,c,u):c(a)):u(o)}catch(d){l&&!s&&l.exit(),u(d)}};while(a.length>n)s(a[n++]);t._c=[],t._n=!1,e&&!t._h&&T(t)}))}},T=function(t){v.call(c,(function(){var e,a,o,r=t._v,n=A(t);if(n&&(e=_((function(){I?S.emit("unhandledRejection",r,t):(a=c.onunhandledrejection)?a({promise:t,reason:r}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",r)})),t._h=I||A(t)?2:1),t._a=void 0,n&&e.e)throw e.v}))},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},N=function(t){v.call(c,(function(){var e;I?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},B=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),P(e,!0))},R=function(t){var e,a=this;if(!a._d){a._d=!0,a=a._w||a;try{if(a===t)throw k("Promise can't be resolved itself");(e=$(t))?b((function(){var o={_w:a,_d:!1};try{e.call(t,u(R,o,1),u(B,o,1))}catch(r){B.call(o,r)}})):(a._v=t,a._s=1,P(a,!1))}catch(o){B.call({_w:a,_d:!1},o)}}};H||(j=function(t){h(this,j,w,"_h"),f(t),o.call(this);try{t(u(R,this,1),u(B,this,1))}catch(e){B.call(this,e)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=a("5c95")(j.prototype,{then:function(t,e){var a=O(g(this,j));return a.ok="function"!=typeof t||t,a.fail="function"==typeof e&&e,a.domain=I?S.domain:void 0,this._c.push(a),this._a&&this._a.push(a),this._s&&P(this,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),n=function(){var t=new o;this.promise=t,this.resolve=u(R,t,1),this.reject=u(B,t,1)},y.f=O=function(t){return t===j||t===s?new n(t):r(t)}),d(d.G+d.W+d.F*!H,{Promise:j}),a("45f2")(j,w),a("4c95")(w),s=a("584a")[w],d(d.S+d.F*!H,w,{reject:function(t){var e=O(this),a=e.reject;return a(t),e.promise}}),d(d.S+d.F*(i||!H),w,{resolve:function(t){return x(i&&this===s?j:this,t)}}),d(d.S+d.F*!(H&&a("4ee1")((function(t){j.all(t)["catch"](C)}))),w,{all:function(t){var e=this,a=O(e),o=a.resolve,r=a.reject,n=_((function(){var a=[],n=0,s=1;m(t,!1,(function(t){var i=n++,c=!1;a.push(void 0),s++,e.resolve(t).then((function(t){c||(c=!0,a[i]=t,--s||o(a))}),r)})),--s||o(a)}));return n.e&&r(n.v),a.promise},race:function(t){var e=this,a=O(e),o=a.reject,r=_((function(){m(t,!1,(function(t){e.resolve(t).then(a.resolve,o)}))}));return r.e&&o(r.v),a.promise}})},3024:function(t,e){t.exports=function(t,e,a){var o=void 0===a;switch(e.length){case 0:return o?t():t.call(a);case 1:return o?t(e[0]):t.call(a,e[0]);case 2:return o?t(e[0],e[1]):t.call(a,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(a,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(a,e[0],e[1],e[2],e[3])}return t.apply(a,e)}},3702:function(t,e,a){var o=a("481b"),r=a("5168")("iterator"),n=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||n[r]===t)}},3750:function(t,e,a){"use strict";var o=a("0c44"),r=a.n(o);r.a},"3b8d":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var o=a("795b"),r=a.n(o);function n(t,e,a,o,n,s,i){try{var c=t[s](i),u=c.value}catch(l){return void a(l)}c.done?e(u):r.a.resolve(u).then(o,n)}function s(t){return function(){var e=this,a=arguments;return new r.a((function(o,r){var s=t.apply(e,a);function i(t){n(s,o,r,i,c,"next",t)}function c(t){n(s,o,r,i,c,"throw",t)}i(void 0)}))}}},"3c11":function(t,e,a){"use strict";var o=a("63b6"),r=a("584a"),n=a("e53d"),s=a("f201"),i=a("cd78");o(o.P+o.R,"Promise",{finally:function(t){var e=s(this,r.Promise||n.Promise),a="function"==typeof t;return this.then(a?function(a){return i(e,t()).then((function(){return a}))}:t,a?function(a){return i(e,t()).then((function(){throw a}))}:t)}})},"40c3":function(t,e,a){var o=a("6b4c"),r=a("5168")("toStringTag"),n="Arguments"==o(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(a){}};t.exports=function(t){var e,a,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(a=s(e=Object(t),r))?a:n?o(e):"Object"==(i=o(e))&&"function"==typeof e.callee?"Arguments":i}},4178:function(t,e,a){var o,r,n,s=a("d864"),i=a("3024"),c=a("32fc"),u=a("1ec9"),l=a("e53d"),d=l.process,p=l.setImmediate,f=l.clearImmediate,h=l.MessageChannel,m=l.Dispatch,g=0,v={},b="onreadystatechange",y=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},_=function(t){y.call(t.data)};p&&f||(p=function(t){var e=[],a=1;while(arguments.length>a)e.push(arguments[a++]);return v[++g]=function(){i("function"==typeof t?t:Function(t),e)},o(g),g},f=function(t){delete v[t]},"process"==a("6b4c")(d)?o=function(t){d.nextTick(s(y,t,1))}:m&&m.now?o=function(t){m.now(s(y,t,1))}:h?(r=new h,n=r.port2,r.port1.onmessage=_,o=s(n.postMessage,n,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(o=function(t){l.postMessage(t+"","*")},l.addEventListener("message",_,!1)):o=b in u("script")?function(t){c.appendChild(u("script"))[b]=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:p,clear:f}},"43fc":function(t,e,a){"use strict";var o=a("63b6"),r=a("656e"),n=a("4439");o(o.S,"Promise",{try:function(t){var e=r.f(this),a=n(t);return(a.e?e.reject:e.resolve)(a.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"4c95":function(t,e,a){"use strict";var o=a("e53d"),r=a("584a"),n=a("d9f6"),s=a("8e60"),i=a("5168")("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:o[t];s&&e&&!e[i]&&n.f(e,i,{configurable:!0,get:function(){return this}})}},"4ee1":function(t,e,a){var o=a("5168")("iterator"),r=!1;try{var n=[7][o]();n["return"]=function(){r=!0},Array.from(n,(function(){throw 2}))}catch(s){}t.exports=function(t,e){if(!e&&!r)return!1;var a=!1;try{var n=[7],i=n[o]();i.next=function(){return{done:a=!0}},n[o]=function(){return i},t(n)}catch(s){}return a}},"549b":function(t,e,a){"use strict";var o=a("d864"),r=a("63b6"),n=a("241e"),s=a("b0dc"),i=a("3702"),c=a("b447"),u=a("20fd"),l=a("7cd6");r(r.S+r.F*!a("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,r,d,p=n(t),f="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,v=0,b=l(p);if(g&&(m=o(m,h>2?arguments[2]:void 0,2)),void 0==b||f==Array&&i(b))for(e=c(p.length),a=new f(e);e>v;v++)u(a,v,g?m(p[v],v):p[v]);else for(d=b.call(p),a=new f;!(r=d.next()).done;v++)u(a,v,g?s(d,m,[r.value,v],!0):r.value);return a.length=v,a}})},"54a1":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"5c95":function(t,e,a){var o=a("35e8");t.exports=function(t,e,a){for(var r in e)a&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},"656e":function(t,e,a){"use strict";var o=a("79aa");function r(t){var e,a;this.promise=new t((function(t,o){if(void 0!==e||void 0!==a)throw TypeError("Bad Promise constructor");e=t,a=o})),this.resolve=o(e),this.reject=o(a)}t.exports.f=function(t){return new r(t)}},"696e":function(t,e,a){a("c207"),a("1654"),a("6c1c"),a("24c5"),a("3c11"),a("43fc"),t.exports=a("584a").Promise},"75fc":function(t,e,a){"use strict";var o=a("a745"),r=a.n(o);function n(t){if(r()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var s=a("774e"),i=a.n(s),c=a("c8bb"),u=a.n(c);function l(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return n(t)||l(t)||d()}a.d(e,"a",(function(){return p}))},"774e":function(t,e,a){t.exports=a("d2d5")},"795b":function(t,e,a){t.exports=a("696e")},"7cd6":function(t,e,a){var o=a("40c3"),r=a("5168")("iterator"),n=a("481b");t.exports=a("584a").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||n[o(t)]}},8796:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("新增采购")])],1)],1),a("div",{staticClass:"container"},[t.requestData.length?a("div",{staticClass:"search-div"},[a("el-select",{staticClass:"my-input",attrs:{placeholder:"是否先打款",clearable:""},model:{value:t.requestData[t.tabIndex].is_price_firse,callback:function(e){t.$set(t.requestData[t.tabIndex],"is_price_firse",e)},expression:"requestData[tabIndex].is_price_firse"}},[a("el-option",{attrs:{label:"先发货再打款",value:"0"}}),a("el-option",{attrs:{label:"先打款再发货",value:"1"}})],1),a("el-select",{staticClass:"my-input",attrs:{placeholder:"发货方式",clearable:""},model:{value:t.requestData[t.tabIndex].pick_way,callback:function(e){t.$set(t.requestData[t.tabIndex],"pick_way",e)},expression:"requestData[tabIndex].pick_way"}},[a("el-option",{attrs:{label:"发给仓库",value:"1"}}),a("el-option",{attrs:{label:"自提",value:"2"}}),a("el-option",{attrs:{label:"发给客户",value:"3"}})],1),a("el-input",{staticClass:"my-input",attrs:{placeholder:"请输入运费",clearable:""},model:{value:t.requestData[t.tabIndex].postage,callback:function(e){t.$set(t.requestData[t.tabIndex],"postage",e)},expression:"requestData[tabIndex].postage"}}),a("el-input",{staticClass:"my-input",staticStyle:{"min-width":"300px"},attrs:{placeholder:"备注信息",clearable:""},model:{value:t.requestData[t.tabIndex].remarks,callback:function(e){t.$set(t.requestData[t.tabIndex],"remarks",e)},expression:"requestData[tabIndex].remarks"}}),a("el-input",{staticClass:"my-input",staticStyle:{"min-width":"300px"},attrs:{placeholder:"采购单实际支付金额 (不包含运费)",clearable:""},model:{value:t.requestData[t.tabIndex].amount,callback:function(e){t.$set(t.requestData[t.tabIndex],"amount",e)},expression:"requestData[tabIndex].amount"}})],1):t._e(),a("div",{staticClass:"addBox"},[a("el-button",{staticClass:"addInput",attrs:{type:"primary",plain:""},on:{click:function(e){t.addSupplierDialog.isShow=!0}}},[t._v("选择供货商")]),t.requestData.length?a("el-button",{staticClass:"addInput",attrs:{type:"primary",plain:""},on:{click:function(e){t.choosesGoodsDialog.isShow=!0}}},[t._v("选择商品")]):t._e(),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0!==t.requestData.length,expression:"requestData.length !== 0"}],attrs:{type:"primary"},on:{click:t.addPurchaseOrderSubmit}},[t._v("提交并保存")])],1),a("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":t.removeTab,"tab-click":t.tabClick},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.requestData,(function(e,o){return a("el-tab-pane",{key:o,attrs:{label:t.supplierIdToName(e.sup_id),name:""+o}},[a("div",{staticStyle:{margin:"40px 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.items}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"g_title",label:"商品名称"}}),a("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticClass:"table-td-thumb",attrs:{src:t.row.imgurl,"preview-src-list":[t.row.imgurl]}})]}}],null,!0)}),a("el-table-column",{attrs:{prop:"key_name",label:"规格"}}),a("el-table-column",{attrs:{prop:"code",label:"条形码"}}),a("el-table-column",{attrs:{prop:"w_stock",label:"库存"}}),a("el-table-column",{attrs:{label:"采购单价"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入采购单价"},model:{value:e.row.price,callback:function(a){t.$set(e.row,"price",a)},expression:"scope.row.price"}})]}}],null,!0)}),a("el-table-column",{attrs:{prop:"noGoodsNum",label:"缺货量"}}),a("el-table-column",{attrs:{label:"采购数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入采购数量"},model:{value:e.row.num,callback:function(a){t.$set(e.row,"num",a)},expression:"scope.row.num"}})]}}],null,!0)}),a("el-table-column",{attrs:{label:"合计金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                    "+t._s(parseFloat(e.row.num)*parseFloat(e.row.price)||"待计算")+"\n                                ")]}}],null,!0)}),a("el-table-column",{attrs:{label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.row.remarks,callback:function(a){t.$set(e.row,"remarks",a)},expression:"scope.row.remarks"}})]}}],null,!0)}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.purchaseHistoryDialogShow(e.row)}}},[t._v("采购历史")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.addPurchaseOrderDeleteGoods(e.$index)}}},[t._v("删除")])]}}],null,!0)})],1)],1)])})),1)],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.choosesGoodsDialog.isShow,title:"选择商品",center:"",width:"40%"},on:{"update:visible":function(e){return t.$set(t.choosesGoodsDialog,"isShow",e)}}},[a("el-input",{staticClass:"input",attrs:{placeholder:"商品名称/条形码",clearable:""},model:{value:t.choosesGoodsDialog.requestData.seach_val,callback:function(e){t.$set(t.choosesGoodsDialog.requestData,"seach_val",e)},expression:"choosesGoodsDialog.requestData.seach_val"}}),a("el-select",{staticClass:"input",attrs:{placeholder:"供应商",clearable:""},model:{value:t.choosesGoodsDialog.requestData.supplier_id,callback:function(e){t.$set(t.choosesGoodsDialog.requestData,"supplier_id",e)},expression:"choosesGoodsDialog.requestData.supplier_id"}},t._l(t.addSupplierDialog.responseData,(function(t,e){return a("el-option",{key:e,attrs:{label:t.s_name,value:t.id}})})),1),a("el-button",{attrs:{type:"primary"},on:{click:t.choosesGoodsDialogSearchBtn}},[t._v("搜索")]),a("div",{staticStyle:{margin:"40px 0"}},[a("el-table",{ref:"multipleTable",attrs:{"max-height":"400",data:t.choosesGoodsDialog.responseData.data},on:{"selection-change":t.choosesGoodsDialogChooseGoods}},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{prop:"code",label:"条形码"}}),a("el-table-column",{attrs:{prop:"g_title",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"key_name",label:"规格"}}),a("el-table-column",{attrs:{prop:"s_name",label:"供应商"}}),a("el-table-column",{attrs:{prop:"w_stock",label:"库存"}})],1)],1),a("div",[a("el-pagination",{attrs:{layout:"prev, pager, next",background:"",small:"",total:t.choosesGoodsDialog.responseData.total},on:{"current-change":t.choosesGoodsDialogHandleCurrentChange}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.choosesGoodsDialog.isShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.choosesGoodsDialogConfirmOk}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"新增供货",visible:t.addSupplierDialog.isShow,width:"20%",center:""},on:{"update:visible":function(e){return t.$set(t.addSupplierDialog,"isShow",e)}}},[a("el-select",{staticClass:"my-input",staticStyle:{width:"150px","margin-left":"90px"},attrs:{clearable:""},model:{value:t.addSupplierDialog.id,callback:function(e){t.$set(t.addSupplierDialog,"id",e)},expression:"addSupplierDialog.id"}},t._l(t.addSupplierDialog.responseData,(function(t,e){return a("el-option",{key:e,attrs:{label:t.s_name,value:t.id}})})),1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addSupplierDialog.isShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addTab}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"采购历史",visible:t.purchaseHistoryDialog.isShow,width:"40%",center:""},on:{"update:visible":function(e){return t.$set(t.purchaseHistoryDialog,"isShow",e)}}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-date-picker",{staticClass:"my-input",staticStyle:{"max-width":"300px","margin-right":"10px"},attrs:{type:"datetimerange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"采购开始时间","end-placeholder":"采购结束时间"},on:{change:t.purchaseHistoryDialogChangeRequestTime},model:{value:t.purchaseHistoryDialog.requestData.time,callback:function(e){t.$set(t.purchaseHistoryDialog.requestData,"time",e)},expression:"purchaseHistoryDialog.requestData.time"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.purchaseHistoryDialogSearchBtn}},[t._v("搜索")])],1),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"}},[t._v("平均单价："+t._s(t.purchaseHistoryDialog.responseData.meanPrice))]),a("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"}},[t._v("平均采购量："+t._s(t.purchaseHistoryDialog.responseData.meanNum))]),a("el-tag",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"}},[t._v("总采购量："+t._s(t.purchaseHistoryDialog.responseData.allNum))])],1),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"500px",data:t.purchaseHistoryDialog.responseData.data}},[a("el-table-column",{attrs:{prop:"sup_name",label:"供应商名称"}}),a("el-table-column",{attrs:{prop:"num",label:"采购的数量"}}),a("el-table-column",{attrs:{prop:"price",label:"采购的单价"}}),a("el-table-column",{attrs:{prop:"create_time",label:"采购的时间"}})],1)],1),a("div",[a("el-pagination",{attrs:{total:t.purchaseHistoryDialog.responseData.count,background:"",layout:"prev, pager, next"},on:{"current-change":t.purchaseHistoryDialogHandleCurrentChange}})],1)])],1)},r=[],n=(a("ac4d"),a("8a81"),a("ac6a"),a("75fc")),s=(a("96cf"),a("3b8d")),i=a("b26e"),c=a("01d1"),u=a("b775"),l=function(t){return Object(u["a"])({url:"/Purchase/Purchase/getShortageNum",method:"post",data:t})},d=function(t){return Object(u["a"])({url:"/Purchase/Purchase/purItemRecord",method:"post",data:t})},p=function(t){return Object(u["a"])({url:"/Purchase/Purchase/add",method:"post",data:t})},f={name:"index",data:function(){return{tabIndex:"0",requestData:[],addSupplierDialog:{isShow:!1,id:"",responseData:[]},choosesGoodsDialog:{isShow:!1,requestData:{page:1,seach_val:"",supplier_id:""},responseData:{total:0,per_page:0,current_page:0,last_page:0,data:[]},choosesGoods:[]},purchaseHistoryDialog:{isShow:!1,requestData:{page:1,limit:10,item_id:"",attr_ids:"",start_time:"",end_time:"",time:""},responseData:{count:0,meanPrice:0,meanNum:0,allNum:0,data:[]}}}},created:function(){var t=this;Object(c["e"])().then((function(e){200===e.code&&(t.addSupplierDialog.responseData=e.data)}))},methods:{tabClick:function(t){this.tabIndex=t.index},addTab:function(){var t=this,e=!1;if(this.addSupplierDialog.id){if(this.requestData.map((function(a){a.sup_id==t.addSupplierDialog.id&&(t.$message({message:"该采购单已存在你选择点供应商,请重新选择",type:"warning"}),e=!0)})),e)return;var a;this.addSupplierDialog.responseData.map((function(e){e.id===t.addSupplierDialog.id&&(a=e)}));var o={sup_id:this.addSupplierDialog.id,is_price_firse:""+a.pay_type,pick_way:""+a.send_type,postage:"",remarks:"",amount:"",items:[]};this.requestData.push(o),this.addSupplierDialog.id="",this.addSupplierDialog.isShow=!1}else this.$message({message:"请选择供应商",type:"error"})},removeTab:function(t){var e=this;this.$confirm("本次新增采购单将移除此供应商, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.requestData.splice(t,1),e.tabIndex=e.requestData.length?e.requestData.length-1+"":"0",e.$message({type:"success",message:"移除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消移除"})}))},supplierIdToName:function(t){var e="";return this.addSupplierDialog.responseData.map((function(a){a.id==t&&(e=a.s_name)})),e},choosesGoodsDialogSearchBtn:function(){var t=this;Object(i["f"])(this.choosesGoodsDialog.requestData).then((function(e){200===e.code&&(e.data.data.map((function(t,e){t.num="",t.remarks="",t.price=""})),t.choosesGoodsDialog.responseData=e.data)})).catch((function(t){console.log(t)}))},choosesGoodsDialogHandleCurrentChange:function(t){this.choosesGoodsDialog.requestData.page=t,this.choosesGoodsDialogSearchBtn()},choosesGoodsDialogChooseGoods:function(t){this.choosesGoodsDialog.choosesGoods=t},choosesGoodsDialogConfirmOk:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,o,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=[],this.choosesGoodsDialog.choosesGoods.map((function(t){a.push({item_id:t.id,attr_ids:t.key})})),t.next=4,l(a).then((function(t){200===t.code&&r.choosesGoodsDialog.choosesGoods.map((function(e){t.data.map((function(t){e.id===t.item_id&&e.key===t.attr_ids&&(e.noGoodsNum=t.num,e.price=t.price)}))}))})).catch((function(t){console.log(t)}));case 4:(e=this.requestData[this.tabIndex].items).push.apply(e,Object(n["a"])(this.choosesGoodsDialog.choosesGoods)),o={},this.requestData[this.tabIndex].items=this.requestData[this.tabIndex].items.reduce((function(t,e){return!o[e.id+e.key]&&(o[e.id+e.key]=t.push(e)),t}),[]),this.choosesGoodsDialog.choosesGoods=[],this.choosesGoodsDialog.responseData.data=[],this.choosesGoodsDialog.responseData.total=0,this.choosesGoodsDialog.requestData.page=1,this.choosesGoodsDialog.isShow=!1;case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),purchaseHistoryDialogShow:function(t){this.purchaseHistoryDialog.requestData.item_id=t.id,this.purchaseHistoryDialog.requestData.attr_ids=t.key,this.purchaseHistoryDialogSearchBtn()},purchaseHistoryDialogChangeRequestTime:function(t){this.purchaseHistoryDialog.requestData.start_time=t[0],this.purchaseHistoryDialog.requestData.end_time=t[1]},purchaseHistoryDialogHandleCurrentChange:function(t){this.purchaseHistoryDialog.requestData.page=t,this.purchaseHistoryDialogSearchBtn()},purchaseHistoryDialogSearchBtn:function(){var t=this;d(this.purchaseHistoryDialog.requestData).then((function(e){200===e.code&&(t.purchaseHistoryDialog.responseData=e.data,t.purchaseHistoryDialog.isShow=!0)})).catch((function(t){console.log(t)}))},addPurchaseOrderDeleteGoods:function(t){this.requestData[parseInt(this.tabIndex)].items.splice(t,1)},addPurchaseOrderSubmit:function(){var t=this,e=!0,a=[],o=!0,r=!1,n=void 0;try{for(var s,i=this.requestData[Symbol.iterator]();!(o=(s=i.next()).done);o=!0){var c=s.value,u={sup_id:c.sup_id,is_price_firse:c.is_price_firse,pick_way:c.pick_way,postage:c.postage,amount:c.amount,remarks:c.remarks,items:[]};if(!c.is_price_firse){this.$message.error("请选择【".concat(this.supplierIdToName(c.sup_id),"】供应商的是否先打款！")),e=!1;break}if(!c.pick_way){this.$message.error("请选择【".concat(this.supplierIdToName(c.sup_id),"】供应商的发货方式！")),e=!1;break}if(0===c.items.length){this.$message.error("【".concat(this.supplierIdToName(c.sup_id),"】供应商没有要采购的商品！")),e=!1;break}var l=!0,d=!1,f=void 0;try{for(var h,m=c.items[Symbol.iterator]();!(l=(h=m.next()).done);l=!0){var g=h.value;if(!/^[0-9]*[1-9][0-9]*$/.test(g.num)){this.$message.error("【".concat(this.supplierIdToName(c.sup_id),"】供应商的【").concat(g.g_title,"】商品的采购数量有误！")),e=!1;break}if(!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(g.price)){this.$message.error("【".concat(this.supplierIdToName(c.sup_id),"】供应商的【").concat(g.g_title,"】商品的采购单价有误！")),e=!1;break}var v={item_id:g.id,title:g.g_title,pic:g.imgurl,attr_name:g.key_name,attr_ids:g.key,bar_code:g.code,price:g.price,num:g.num,remarks:g.remarks};u.items.push(v)}}catch(b){d=!0,f=b}finally{try{l||null==m.return||m.return()}finally{if(d)throw f}}a.push(u)}}catch(b){r=!0,n=b}finally{try{o||null==i.return||i.return()}finally{if(r)throw n}}e&&(console.log("通过验证，且要提交点数据：",a),p(a).then((function(e){200===e.code&&(t.requestData=[],t.$message.success("新增采购单成功！"))})))}},components:{}},h=f,m=(a("3750"),a("2877")),g=Object(m["a"])(h,o,r,!1,null,"1a83bc36",null);e["default"]=g.exports},"95d5":function(t,e,a){var o=a("40c3"),r=a("5168")("iterator"),n=a("481b");t.exports=a("584a").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||n.hasOwnProperty(o(e))}},a22a:function(t,e,a){var o=a("d864"),r=a("b0dc"),n=a("3702"),s=a("e4ae"),i=a("b447"),c=a("7cd6"),u={},l={};e=t.exports=function(t,e,a,d,p){var f,h,m,g,v=p?function(){return t}:c(t),b=o(a,d,e?2:1),y=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(n(v)){for(f=i(t.length);f>y;y++)if(g=e?b(s(h=t[y])[0],h[1]):b(t[y]),g===u||g===l)return g}else for(m=v.call(t);!(h=m.next()).done;)if(g=r(m,b,h.value,e),g===u||g===l)return g};e.BREAK=u,e.RETURN=l},a745:function(t,e,a){t.exports=a("f410")},aba2:function(t,e,a){var o=a("e53d"),r=a("4178").set,n=o.MutationObserver||o.WebKitMutationObserver,s=o.process,i=o.Promise,c="process"==a("6b4c")(s);t.exports=function(){var t,e,a,u=function(){var o,r;c&&(o=s.domain)&&o.exit();while(t){r=t.fn,t=t.next;try{r()}catch(n){throw t?a():e=void 0,n}}e=void 0,o&&o.enter()};if(c)a=function(){s.nextTick(u)};else if(!n||o.navigator&&o.navigator.standalone)if(i&&i.resolve){var l=i.resolve(void 0);a=function(){l.then(u)}}else a=function(){r.call(o,u)};else{var d=!0,p=document.createTextNode("");new n(u).observe(p,{characterData:!0}),a=function(){p.data=d=!d}}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,a()),e=r}}},b0dc:function(t,e,a){var o=a("e4ae");t.exports=function(t,e,a,r){try{return r?e(o(a)[0],a[1]):e(a)}catch(s){var n=t["return"];throw void 0!==n&&o(n.call(t)),s}}},b26e:function(t,e,a){"use strict";a.d(e,"f",(function(){return r})),a.d(e,"g",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"i",(function(){return l})),a.d(e,"h",(function(){return d})),a.d(e,"d",(function(){return p}));var o=a("b775"),r=function(t){return Object(o["a"])({url:"/system/common/getAllGoods",method:"get",params:t})},n=function(t){return Object(o["a"])({url:"/system/Common/getQiNiuToken",method:"get",params:t})},s=function(t){return Object(o["a"])({url:"/goods/goods_brand/getList",method:"post",params:t})},i=function(t){return Object(o["a"])({url:"/goods/goods_brand/add",method:"post",params:t})},c=function(t){return Object(o["a"])({url:"/goods/goods_brand/del",method:"post",params:t})},u=function(t){return Object(o["a"])({url:"/goods/goods_brand/edit",method:"post",params:t})},l=function(t){return Object(o["a"])({url:"/goods/goods_resource/getList",method:"post",params:t})},d=function(t){return Object(o["a"])({url:"/goods/goods_resource/del",method:"post",params:t})},p=function(t){return Object(o["a"])({url:"/system/common/findChilds",method:"post",params:t})}},b775:function(t,e,a){"use strict";var o,r=a("bc3a"),n=a.n(r),s=a("5c96"),i=a("4360"),c=n.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});c.interceptors.request.use((function(t){return o=s["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),c.interceptors.response.use((function(t){if(o.close(),200===t.status)return-1==t.data.code&&(i["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(s["Message"].closeAll(),Object(s["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return o.close(),console.log(t),Promise.reject()})),e["a"]=c},bc13:function(t,e,a){var o=a("e53d"),r=o.navigator;t.exports=r&&r.userAgent||""},c8bb:function(t,e,a){t.exports=a("54a1")},cd78:function(t,e,a){var o=a("e4ae"),r=a("f772"),n=a("656e");t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var a=n.f(t),s=a.resolve;return s(e),a.promise}},d2d5:function(t,e,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},f201:function(t,e,a){var o=a("e4ae"),r=a("79aa"),n=a("5168")("species");t.exports=function(t,e){var a,s=o(t).constructor;return void 0===s||void 0==(a=o(s)[n])?e:r(a)}},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray}}]);