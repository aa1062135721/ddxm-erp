(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6193ddb4"],{4380:function(t,o,e){"use strict";e.d(o,"n",(function(){return a})),e.d(o,"s",(function(){return s})),e.d(o,"q",(function(){return r})),e.d(o,"l",(function(){return c})),e.d(o,"m",(function(){return d})),e.d(o,"o",(function(){return i})),e.d(o,"p",(function(){return u})),e.d(o,"e",(function(){return l})),e.d(o,"i",(function(){return f})),e.d(o,"h",(function(){return g})),e.d(o,"g",(function(){return h})),e.d(o,"r",(function(){return b})),e.d(o,"f",(function(){return p})),e.d(o,"a",(function(){return _})),e.d(o,"d",(function(){return m})),e.d(o,"k",(function(){return v})),e.d(o,"c",(function(){return j})),e.d(o,"b",(function(){return O})),e.d(o,"j",(function(){return w})),e.d(o,"w",(function(){return k})),e.d(o,"u",(function(){return y})),e.d(o,"v",(function(){return C})),e.d(o,"t",(function(){return S})),e.d(o,"x",(function(){return x}));var n=e("b775"),a=function(t){return Object(n["a"])({url:"/goods/goods/getList",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/goods/goods/isSwitch",method:"post",data:t})},r=function(t){return Object(n["a"])({url:"/goods/goods/isShow",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/goods/goods/del",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/goods/goods/editGoodsInfo",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_recycle/getList",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_recycle/edit",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_recycle/del",method:"post",data:t})},f=function(t){return Object(n["a"])({url:"/goods/goods_add/add",method:"post",data:t})},g=function(t){return Object(n["a"])({url:"/goods/goods_category/getList",method:"post",data:t})},h=function(t){return Object(n["a"])({url:"/goods/goods_category/find",method:"post",data:t})},b=function(t){return Object(n["a"])({url:"/goods/goods_specs/getList",method:"post",data:t})},p=function(t){return Object(n["a"])({url:"/goods/goods_specs/edit",method:"post",data:t})},_=function(t){return Object(n["a"])({url:"/goods/goods_specs/add",method:"post",data:t})},m=function(t){return Object(n["a"])({url:"/goods/goods_specs/del",method:"post",data:t})},v=function(t){return Object(n["a"])({url:"/goods/goods_comment/getList",method:"post",data:t})},j=function(t){return Object(n["a"])({url:"/goods/goods_comment/del",method:"post",data:t})},O=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/editGoodsInfo",method:"post",data:t})},w=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelfList",method:"post",data:t})},k=function(t){return Object(n["a"])({url:"/goods/goods_type/getList",method:"post",data:t})},y=function(t){return Object(n["a"])({url:"/goods/goods_type/del",method:"post",data:t})},C=function(t){return Object(n["a"])({url:"/goods/goods_type/edit",method:"post",data:t})},S=function(t){return Object(n["a"])({url:"goods/goods_type/add",method:"post",data:t})},x=function(t){return Object(n["a"])({url:"goods/goods_resource/first",method:"post",data:t})}},"6a87":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"classification"},[e("div",{staticClass:"container"},[e("div",{staticClass:"search-div"},[e("div",{staticClass:"goodsBox"},[e("div",{staticClass:"mTitle"},[e("span",{staticStyle:{color:"#666"}},[t._v("数据列表\n                        "),t.flag?e("span",{staticStyle:{color:"#444","font-size":"14px","margin-left":"30px"},on:{click:t.returnNext}},[t._v("返回>>")]):t._e()]),e("div",[t.$_has("edit")?e("el-button",{on:{click:function(o){return t.add()}}},[t._v("添加")]):t._e()],1)]),e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark"}},[e("el-table-column",{attrs:{label:"编号",width:"120",prop:"id"}}),e("el-table-column",{attrs:{label:"分类名称",width:"120",prop:"gc_name"}}),e("el-table-column",{attrs:{label:"级别",prop:"gc_level"}}),e("el-table-column",{attrs:{label:"商品数量",width:"200",prop:"goods_num"}}),e("el-table-column",{attrs:{label:"数量单位"}},[[e("span",[t._v("件")])]],2),e("el-table-column",{attrs:{label:"是否显示"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":2,"active-color":"#1ABC9C","inactive-color":"#ff4949"},on:{change:function(e){return t.changeSwitch(o.row)}},model:{value:o.row.gc_status,callback:function(e){t.$set(o.row,"gc_status",e)},expression:"scope.row.gc_status"}})]}}])}),e("el-table-column",{attrs:{label:"排序",width:"120",prop:"gc_sort"}}),e("el-table-column",{attrs:{label:"设置",prop:"sales",width:"260"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("div",{staticClass:"sorting"},[t.$_has("edit")?e("span",{on:{click:function(e){return t.handleClick(o.row)}}},[t._v("新增下级")]):t._e(),t.$_has("find")?e("span",{on:{click:function(e){return t.findClass(o.row)}}},[t._v("查看下级")]):t._e(),e("span",{on:{click:function(e){t.rod=!0,t.transfer(o.row)}}},[t._v("转移商品")])])]}}])}),e("el-table-column",{attrs:{width:"130",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(o){return[t.$_has("edit")?e("el-button",{staticStyle:{color:"#1ABC9C"},attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClick(o.row)}}},[t._v("编辑")]):t._e(),e("el-button",{staticStyle:{color:"#1ABC9C"},attrs:{type:"text",size:"small"},on:{click:function(e){return t.deleteGoods(o.row)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"footer"},[e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":t.currentPage,layout:"total, prev, pager, next, jumper","page-size":20,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])],1)]),t.rod?e("div",{staticClass:"transfer"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{display:"flex","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[e("span",[t._v("转移商品")]),e("div",{on:{click:function(o){t.rod=!1}}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("X")])])]),e("div",{staticClass:"section"},[e("div",[e("p",[t._v("原商品分类:")]),e("el-input",{staticStyle:{width:"210px"},attrs:{disabled:""},model:{value:t.original_id,callback:function(o){t.original_id=o},expression:"original_id"}})],1),e("div",[e("p",[t._v("目标商品分类:")]),e("el-select",{attrs:{placeholder:"请选择商品分类"},model:{value:t.chooseGoodsclass,callback:function(o){t.chooseGoodsclass=o},expression:"chooseGoodsclass"}},t._l(t.tableData,(function(t){return e("el-option",{key:t.id,attrs:{label:t.gc_name,value:t.id}})})),1)],1)]),e("div",{staticClass:"cardFoot"},[e("el-button",{on:{click:function(o){t.rod=!1}}},[t._v("取消")]),e("el-button",{staticStyle:{background:"#1ABC9C",color:"#fff"},on:{click:t.startTransfer}},[t._v("开始转移")])],1)])],1):t._e()])])},a=[],s=e("bd86"),r=e("4380"),c=e("e247"),d={created:function(){this.getgoods()},data:function(){var t;return t={currentPage:1,tableData:[],total:1,recommendedPrice:"",salesPrice:"",warning:"",rate:null},Object(s["a"])(t,"total",1),Object(s["a"])(t,"flag",!1),Object(s["a"])(t,"rod",!1),Object(s["a"])(t,"original_goods",null),Object(s["a"])(t,"original_id",null),Object(s["a"])(t,"chooseGoodsclass",""),t},methods:{handleClick:function(t){console.log(t),this.$router.push({path:"/addClass",query:{id:t.id,gc_level:parseInt(t.gc_level)+1}})},findClass:function(t){var o=this,e={id:t.id};Object(r["g"])(e).then((function(t){o.tableData=t.data.data,console.log(t)})),this.flag=!0},returnNext:function(){this.getgoods(),this.flag=!1},add:function(){this.$router.push({path:"/addClass"})},getgoods:function(){var t=this,o={is_shelf:this.is_shelf};Object(r["h"])(o).then((function(o){console.log(o),t.tableData=o.data.data,t.total=o.data.total}))},handleCurrentChange:function(t){var o=this;console.log(t);var e={page:t};Object(r["h"])(e).then((function(t){o.tableData=t.data.data}))},changeSwitch:function(t){var o={id:t.id,gc_status:t.gc_status};Object(c["g"])(o).then((function(t){console.log(t)}))},deleteGoods:function(t){var o=this,e={id:t.id};Object(c["e"])(e).then((function(t){o.$message({message:t.msg,type:"success"})})),this.getgoods()},transfer:function(t){this.original_goods=t.id,this.original_id=t.gc_name},startTransfer:function(){console.log(this.chooseGoodsclass);var t={start_id:this.chooseGoodsclass,end_id:this.original_goods};Object(c["h"])(t).then((function(t){console.log(t)}))}}},i=d,u=(e("74cb"),e("2877")),l=Object(u["a"])(i,n,a,!1,null,"700b42de",null);o["default"]=l.exports},"74cb":function(t,o,e){"use strict";var n=e("7e6d"),a=e.n(n);a.a},"7e6d":function(t,o,e){},b775:function(t,o,e){"use strict";var n,a=e("bc3a"),s=e.n(a),r=e("5c96"),c=e("4360"),d=s.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});d.interceptors.request.use((function(t){return n=r["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),d.interceptors.response.use((function(t){if(n.close(),200===t.status)return-1==t.data.code&&(c["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(r["Message"].closeAll(),Object(r["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return n.close(),console.log(t),Promise.reject()})),o["a"]=d},e247:function(t,o,e){"use strict";e.d(o,"e",(function(){return a})),e.d(o,"f",(function(){return s})),e.d(o,"b",(function(){return r})),e.d(o,"a",(function(){return c})),e.d(o,"g",(function(){return d})),e.d(o,"d",(function(){return i})),e.d(o,"h",(function(){return u})),e.d(o,"c",(function(){return l}));var n=e("b775"),a=function(t){return Object(n["a"])({url:"/goods/goods_category/del",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/goods/goods_comment/find",method:"post",data:t})},r=function(t){return Object(n["a"])({url:"/goods/goods_comment/isSwitch",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/goods/goods_brand/isSwitch",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_category/isSwitch",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_category/add",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_category/shiftGoods",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelf",method:"post",data:t})}}}]);