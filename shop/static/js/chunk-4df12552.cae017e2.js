(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4df12552","chunk-4b83b337","chunk-b0db311e"],{"32a1":function(t,e,o){"use strict";var n=o("3304"),a=o.n(n);a.a},3304:function(t,e,o){},4380:function(t,e,o){"use strict";o.d(e,"n",(function(){return a})),o.d(e,"s",(function(){return r})),o.d(e,"q",(function(){return s})),o.d(e,"l",(function(){return c})),o.d(e,"m",(function(){return i})),o.d(e,"o",(function(){return d})),o.d(e,"p",(function(){return u})),o.d(e,"e",(function(){return l})),o.d(e,"i",(function(){return f})),o.d(e,"h",(function(){return g})),o.d(e,"g",(function(){return h})),o.d(e,"r",(function(){return p})),o.d(e,"f",(function(){return m})),o.d(e,"a",(function(){return b})),o.d(e,"d",(function(){return _})),o.d(e,"k",(function(){return v})),o.d(e,"c",(function(){return w})),o.d(e,"b",(function(){return y})),o.d(e,"j",(function(){return j})),o.d(e,"w",(function(){return k})),o.d(e,"u",(function(){return O})),o.d(e,"v",(function(){return S})),o.d(e,"t",(function(){return C})),o.d(e,"x",(function(){return x}));var n=o("b775"),a=function(t){return Object(n["a"])({url:"/goods/goods/getList",method:"post",data:t})},r=function(t){return Object(n["a"])({url:"/goods/goods/isSwitch",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/goods/goods/isShow",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/goods/goods/del",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/goods/goods/editGoodsInfo",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_recycle/getList",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_recycle/edit",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_recycle/del",method:"post",data:t})},f=function(t){return Object(n["a"])({url:"/goods/goods_add/add",method:"post",data:t})},g=function(t){return Object(n["a"])({url:"/goods/goods_category/getList",method:"post",data:t})},h=function(t){return Object(n["a"])({url:"/goods/goods_category/find",method:"post",data:t})},p=function(t){return Object(n["a"])({url:"/goods/goods_specs/getList",method:"post",data:t})},m=function(t){return Object(n["a"])({url:"/goods/goods_specs/edit",method:"post",data:t})},b=function(t){return Object(n["a"])({url:"/goods/goods_specs/add",method:"post",data:t})},_=function(t){return Object(n["a"])({url:"/goods/goods_specs/del",method:"post",data:t})},v=function(t){return Object(n["a"])({url:"/goods/goods_comment/getList",method:"post",data:t})},w=function(t){return Object(n["a"])({url:"/goods/goods_comment/del",method:"post",data:t})},y=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/editGoodsInfo",method:"post",data:t})},j=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelfList",method:"post",data:t})},k=function(t){return Object(n["a"])({url:"/goods/goods_type/getList",method:"post",data:t})},O=function(t){return Object(n["a"])({url:"/goods/goods_type/del",method:"post",data:t})},S=function(t){return Object(n["a"])({url:"/goods/goods_type/edit",method:"post",data:t})},C=function(t){return Object(n["a"])({url:"goods/goods_type/add",method:"post",data:t})},x=function(t){return Object(n["a"])({url:"goods/goods_resource/first",method:"post",data:t})}},"4f8c":function(t,e,o){},5435:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"goods_list"},[o("div",{staticClass:"container"},[o("div",{staticClass:"search-div"},[o("div",{staticClass:"SearchBar"},[o("div",{staticStyle:{color:"#666"}},[o("label",{attrs:{for:"main"}},[t._v("输入搜索：")]),o("el-input",{staticStyle:{width:"220px","margin-right":"10px"},attrs:{placeholder:"商品名称/条形码(回车键查看)",id:"main"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchGoods(e)}},model:{value:t.goods_id,callback:function(e){t.goods_id=e},expression:"goods_id"}})],1),o("div",{staticStyle:{color:"#666"}},[t._v("商品品牌：\n                    "),o("Brand",{on:{input:t.input},model:{value:t.requestData.brand,callback:function(e){t.$set(t.requestData,"brand",e)},expression:"requestData.brand"}})],1)]),o("div",{staticClass:"goodsBox"},[t._m(0),o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark"}},[o("el-table-column",{attrs:{label:"编号",width:"120",prop:"id"}}),o("el-table-column",{attrs:{label:"商品图片",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("el-avatar",{attrs:{size:60,src:t.row.imgurl}})]}}])}),o("el-table-column",{attrs:{prop:"g_title",label:"商品名称","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{label:"价格/货号",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("p",[t._v("价格："+t._s(e.row.price))]),o("p",[t._v("货号："+t._s(e.row.code))])]}}])}),o("el-table-column",{attrs:{label:"标签",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",[o("span",[t._v("上架：")]),o("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#1ABC9C","inactive-color":"#ff4949"},on:{change:function(o){return t.changeSwitch(e.row)}},model:{value:e.row.is_shelf,callback:function(o){t.$set(e.row,"is_shelf",o)},expression:"scope.row.is_shelf"}})],1),o("div",[o("span",[t._v("显示：")]),o("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#1ABC9C","inactive-color":"#ff4949"},on:{change:function(o){return t.changeShow(e.row)}},model:{value:e.row.is_show,callback:function(o){t.$set(e.row,"is_show",o)},expression:"scope.row.is_show"}})],1)]}}])}),o("el-table-column",{attrs:{label:"排序",width:"120",prop:"w_stock"}}),o("el-table-column",{attrs:{label:"SUK库存",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("i",{staticClass:"el-icon-edit-outline",staticStyle:{"font-size":"30px",color:"#1ABC9C",cursor:"pointer"},on:{click:function(o){t.flag=!0,t.changeClick(e.row)}}})]}}])}),o("el-table-column",{attrs:{label:"销量",width:"120",prop:"sales"}}),o("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{staticStyle:{color:"#1ABC9C"},attrs:{type:"text",size:"small"},on:{click:function(o){return t.editGooods(e.row)}}},[t._v("编辑")]),o("el-button",{staticStyle:{color:"#1ABC9C"},attrs:{type:"text",size:"small"},on:{click:function(o){return t.delGoods(e.row)}}},[t._v("删除")])]}}])})],1),t.flag?o("div",{staticClass:"SUK_ku"},[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",staticStyle:{display:"flex","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[o("span",[t._v("编辑货品信息")]),o("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.flag=!1}}},[t._v("X")])]),o("div",{staticClass:"kucun_info"},[o("div",{staticStyle:{display:"flex","line-height":"40px"}},[o("span",[t._v("商品货号：")]),t._l(t.sukinfo,(function(e,n){return n<1?o("span",{key:n},[o("span",[t._v(t._s(e.bar_code))])]):t._e()})),o("div",{staticClass:"seach_bar"},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"按SUK编码搜索"}}),o("el-button",[o("i",{staticClass:"el-icon-search"})])],1)],2),o("div",{staticClass:"edit_box"},[o("table",[o("thead",[o("tr",[o("td",[t._v("SUK编码")]),o("td",[t._v("规格名称")]),o("td",[t._v("推荐价格")]),o("td",[o("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("销售价格\n                                            ")]),o("td",[o("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("商品库存\n                                            ")]),o("td",[o("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("库存预警值\n                                            ")])])]),o("tbody",t._l(t.sukinfo,(function(e,n){return o("tr",{key:n},[o("td",[o("el-input",{staticStyle:{width:"130px"},attrs:{disabled:"",value:e.bar_code}})],1),o("td",[t._v(t._s(e.key_name))]),o("td",[o("el-input",{staticStyle:{width:"80px"},attrs:{value:e.recommendprice},model:{value:t.recommendedPrice,callback:function(e){t.recommendedPrice=e},expression:"recommendedPrice"}})],1),o("td",[o("el-input",{staticStyle:{width:"80px"},attrs:{value:e.price},model:{value:t.salesPrice,callback:function(e){t.salesPrice=e},expression:"salesPrice"}})],1),o("td",[o("el-input",{staticStyle:{width:"80px"},attrs:{disabled:"",value:e.stock}})],1),o("td",[o("el-input",{staticStyle:{width:"80px"},attrs:{value:e.warning_value},model:{value:t.warning,callback:function(e){t.warning=e},expression:"warning"}})],1)])})),0)])])]),o("div",{staticClass:"confirm"},[o("el-button",{on:{click:function(e){t.flag=!1}}},[t._v("取消")]),o("el-button",{staticStyle:{background:"#1ABC9C",color:"#fff"},on:{click:t.modify_goods}},[t._v("确定")])],1)])],1):t._e(),o("div",{staticClass:"footer"},[o("div",{staticClass:"block"},[o("el-pagination",{attrs:{"current-page":t.currentPage,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])],1)])])])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mTitle"},[o("span",{staticStyle:{color:"#666"}},[t._v("数据列表")])])}],r=(o("ac6a"),o("c149")),s=o("4380"),c=(o("e247"),{created:function(){var t=this;this.getgoods(),document.onkeydown=function(e){var o=e.key;"Enter"===o&&t.searchGoods()}},data:function(){return{currentPage:1,goods_id:"",requestData:{title:"",brand:""},tableData:[],total:1,flag:!1,sukinfo:[],recommendedPrice:"",salesPrice:"",warning:"",brandVal:""}},components:{Brand:r["default"]},methods:{toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleClick:function(t){console.log(t)},changeSwitch:function(t){console.log(t);var e={is_shelf:t.is_shelf,id:t.id};Object(s["s"])(e).then((function(t){console.log(t)}))},changeShow:function(t){console.log(t);var e={id:t.id,is_show:t.is_show};Object(s["q"])(e).then((function(t){console.log(t)}))},getgoods:function(){var t=this;Object(s["n"])().then((function(e){t.tableData=e.data.data,t.total=e.data.total,t.currentPage=e.data.currentPage,console.log(e)}))},handleCurrentChange:function(t){var e=this,o={};o=this.goods_id?{page:t,search_val:this.goods_id}:this.brandVal?{page:t,gb_title:this.brandVal}:{page:t},Object(s["n"])(o).then((function(t){e.tableData=t.data.data,console.log(t)}))},searchGoods:function(){var t=this,e={search_val:this.goods_id};Object(s["n"])(e).then((function(e){t.tableData=e.data.data,t.total=e.data.total,t.currentPage=e.data.currentPage,console.log(e)}))},input:function(t){var e=this;this.brandVal=t;var o={gb_title:t};Object(s["n"])(o).then((function(t){e.tableData=t.data.data,e.total=t.data.total,e.currentPage=t.data.currentPage,console.log(t)}))},changeClick:function(t){var e=this,o={id:t.id};Object(s["m"])(o).then((function(t){e.sukinfo=t.data,t.data.forEach((function(t){sessionStorage.setItem("goods_id",t.id),e.recommendedPrice=t.recommendprice,e.salesPrice=t.price,e.warning=t.warning_value}))}))},modify_goods:function(){var t=this,e={id:sessionStorage.getItem("goods_id"),recommendprice:this.recommendedPrice,price:this.salesPrice,warning_value:this.warning};Object(s["m"])(e).then((function(e){t.$message({message:e.msg,type:"success"})}))},delGoods:function(t){var e=this;console.log(t),Object(s["l"])({id:t.id}).then((function(t){200==t.code&&e.getgoods()}))},editGooods:function(t){console.log(t),this.$router.push({path:"/goods_management/goods_add",query:{type:2,val:t}})}},computed:{allGoods:function(){return this.tableData.length}}}),i=c,d=(o("8449a"),o("2877")),u=Object(d["a"])(i,n,a,!1,null,"6c62e84c",null);e["default"]=u.exports},"8449a":function(t,e,o){"use strict";var n=o("4f8c"),a=o.n(n);a.a},b26e:function(t,e,o){"use strict";o.d(e,"f",(function(){return a})),o.d(e,"g",(function(){return r})),o.d(e,"e",(function(){return s})),o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return d})),o.d(e,"i",(function(){return u})),o.d(e,"h",(function(){return l})),o.d(e,"d",(function(){return f}));var n=o("b775"),a=function(t){return Object(n["a"])({url:"/system/common/getAllGoods",method:"get",params:t})},r=function(t){return Object(n["a"])({url:"/system/Common/getQiNiuToken",method:"get",params:t})},s=function(t){return Object(n["a"])({url:"/goods/goods_brand/getList",method:"post",params:t})},c=function(t){return Object(n["a"])({url:"/goods/goods_brand/add",method:"post",params:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_brand/del",method:"post",params:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_brand/edit",method:"post",params:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_resource/getList",method:"post",params:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_resource/del",method:"post",params:t})},f=function(t){return Object(n["a"])({url:"/system/common/findChilds",method:"post",params:t})}},b775:function(t,e,o){"use strict";var n,a=o("bc3a"),r=o.n(a),s=o("5c96"),c=o("4360"),i=r.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});i.interceptors.request.use((function(t){return n=s["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),i.interceptors.response.use((function(t){if(n.close(),200===t.status)return-1==t.data.code&&(c["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(s["Message"].closeAll(),Object(s["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return n.close(),console.log(t),Promise.reject()})),e["a"]=i},c149:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-select",{staticClass:"my-input",attrs:{placeholder:t.placeholder,clearable:""},on:{change:t.change},model:{value:t.choosesValue,callback:function(e){t.choosesValue=e},expression:"choosesValue"}},[o("div",{staticStyle:{display:"flex",padding:"5px","text-align":"center"}},[o("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"请输入商品"},model:{value:t.searchBrand,callback:function(e){t.searchBrand=e},expression:"searchBrand"}}),o("el-button",{staticStyle:{"margin-left":"5px"},on:{click:t.searchBtn}},[t._v("搜索")])],1),t._l(t.list,(function(t,e){return o("el-option",{key:e,attrs:{value:t.gb_title}})}))],2)},a=[],r=o("b26e"),s={name:"index",props:{placeholder:{type:String,default:"请选择品牌"},value:null},data:function(){return{choosesValue:"",list:[],searchBrand:""}},methods:{change:function(){this.$emit("input",this.choosesValue)},searchBtn:function(){var t=this,e={seach_val:this.searchBrand};Object(r["e"])(e).then((function(e){t.list=e.data.data}))}},watch:{value:{immediate:!0,handler:function(t){var e=this;this.choosesValue=t,""===t&&Object(r["e"])().then((function(t){e.list=t.data.data}))}}},beforeCreate:function(){var t=this;Object(r["e"])().then((function(e){200===e.code&&(t.list=e.data.data)})).catch((function(t){console.log(t)}))}},c=s,i=(o("32a1"),o("2877")),d=Object(i["a"])(c,n,a,!1,null,"35da6c16",null);e["default"]=d.exports},e247:function(t,e,o){"use strict";o.d(e,"e",(function(){return a})),o.d(e,"f",(function(){return r})),o.d(e,"b",(function(){return s})),o.d(e,"a",(function(){return c})),o.d(e,"g",(function(){return i})),o.d(e,"d",(function(){return d})),o.d(e,"h",(function(){return u})),o.d(e,"c",(function(){return l}));var n=o("b775"),a=function(t){return Object(n["a"])({url:"/goods/goods_category/del",method:"post",data:t})},r=function(t){return Object(n["a"])({url:"/goods/goods_comment/find",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/goods/goods_comment/isSwitch",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/goods/goods_brand/isSwitch",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_category/isSwitch",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_category/add",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_category/shiftGoods",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelf",method:"post",data:t})}}}]);