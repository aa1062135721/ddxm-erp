(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-653ea8b0","chunk-4b83b337","chunk-b0db311e"],{"32a1":function(t,e,o){"use strict";var n=o("3304"),a=o.n(n);a.a},3304:function(t,e,o){},4093:function(t,e,o){"use strict";var n=o("e7e8"),a=o.n(n);a.a},4380:function(t,e,o){"use strict";o.d(e,"n",(function(){return a})),o.d(e,"s",(function(){return r})),o.d(e,"q",(function(){return s})),o.d(e,"l",(function(){return c})),o.d(e,"m",(function(){return i})),o.d(e,"o",(function(){return u})),o.d(e,"p",(function(){return d})),o.d(e,"e",(function(){return l})),o.d(e,"i",(function(){return f})),o.d(e,"h",(function(){return g})),o.d(e,"g",(function(){return p})),o.d(e,"r",(function(){return h})),o.d(e,"f",(function(){return m})),o.d(e,"a",(function(){return b})),o.d(e,"d",(function(){return _})),o.d(e,"k",(function(){return v})),o.d(e,"c",(function(){return j})),o.d(e,"b",(function(){return y})),o.d(e,"j",(function(){return O})),o.d(e,"w",(function(){return k})),o.d(e,"u",(function(){return x})),o.d(e,"v",(function(){return w})),o.d(e,"t",(function(){return S})),o.d(e,"x",(function(){return C}));var n=o("b775"),a=function(t){return Object(n["a"])({url:"/goods/goods/getList",method:"post",data:t})},r=function(t){return Object(n["a"])({url:"/goods/goods/isSwitch",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/goods/goods/isShow",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/goods/goods/del",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/goods/goods/editGoodsInfo",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_recycle/getList",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_recycle/edit",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_recycle/del",method:"post",data:t})},f=function(t){return Object(n["a"])({url:"/goods/goods_add/add",method:"post",data:t})},g=function(t){return Object(n["a"])({url:"/goods/goods_category/getList",method:"post",data:t})},p=function(t){return Object(n["a"])({url:"/goods/goods_category/find",method:"post",data:t})},h=function(t){return Object(n["a"])({url:"/goods/goods_specs/getList",method:"post",data:t})},m=function(t){return Object(n["a"])({url:"/goods/goods_specs/edit",method:"post",data:t})},b=function(t){return Object(n["a"])({url:"/goods/goods_specs/add",method:"post",data:t})},_=function(t){return Object(n["a"])({url:"/goods/goods_specs/del",method:"post",data:t})},v=function(t){return Object(n["a"])({url:"/goods/goods_comment/getList",method:"post",data:t})},j=function(t){return Object(n["a"])({url:"/goods/goods_comment/del",method:"post",data:t})},y=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/editGoodsInfo",method:"post",data:t})},O=function(t){return Object(n["a"])({url:"/goods/goods_bulk_edit/goodsBulkShelfList",method:"post",data:t})},k=function(t){return Object(n["a"])({url:"/goods/goods_type/getList",method:"post",data:t})},x=function(t){return Object(n["a"])({url:"/goods/goods_type/del",method:"post",data:t})},w=function(t){return Object(n["a"])({url:"/goods/goods_type/edit",method:"post",data:t})},S=function(t){return Object(n["a"])({url:"goods/goods_type/add",method:"post",data:t})},C=function(t){return Object(n["a"])({url:"goods/goods_resource/first",method:"post",data:t})}},"5a8f":function(t,e,o){t.exports=o.p+"static/img/arrow.d9dd53c5.png"},7392:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"batchChange"},[n("div",{staticClass:"title"},[n("el-button",[t._v("修改基本信息")]),t.$_has("find")?n("el-button",{on:{click:t.findUp}},[t._v("批量自动上下架")]):t._e()],1),n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"sortingOptions"},[n("div",{staticClass:"childHeader"},[n("Brand",{on:{input:t.input}}),n("div",[n("el-input",{attrs:{placeholder:"请输入搜索关键词"},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),n("el-button",{staticStyle:{"margin-left":"10px"},on:{click:t.searchName}},[t._v("搜索")]),n("el-button",{staticStyle:{"margin-left":"10px"},on:{click:t.reset}},[t._v("重置")])],1)],1),n("div",{staticClass:"main"},[n("div",[n("div",{staticClass:"left_table",attrs:{id:"left_table"}},[n("p",[t._v("\n                            已选择\n                            "),n("span",{staticStyle:{color:"red"}},[t._v(t._s(t.all))]),t._v("条\n                        ")]),t._l(t.goodslist,(function(e,o){return n("el-checkbox-group",{key:o,staticClass:"checkbox",model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-checkbox",{attrs:{label:e,value:o,disabled:"0"==e.gsp_id,title:e.g_title},on:{"update:disabled":function(o){return t.$set(e,"gsp_id=='0'",o)}}},[t._v(t._s(e.g_title))])],1)}))],2),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{staticStyle:{background:"#42c6ac",color:"#fff"},on:{click:t.confirm}},[t._v("确定")])],1)]),n("img",{attrs:{src:o("5a8f")}}),n("div",[n("div",{staticClass:"right_table"},[n("p",[t._v("\n                            已选择\n                            "),n("span",{staticStyle:{color:"red"}},[t._v(t._s(t.all))]),t._v("条\n                        ")]),t._l(t.num,(function(e,o){return n("el-checkbox-group",{key:o,staticClass:"checkbox",model:{value:t.suretype,callback:function(e){t.suretype=e},expression:"suretype"}},[n("el-checkbox",{attrs:{label:o,name:"type",title:e.g_title}},[t._v(t._s(e.g_title))])],1)}))],2),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{staticStyle:{background:"#42c6ac",color:"#fff"},on:{click:t.remove}},[t._v("移除")])],1)])]),n("div",{staticClass:"foot"},[n("div",[n("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("逐个编辑")]),n("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("统一编辑")])],1),n("div",[t.$_has("find")?n("el-button",{staticStyle:{background:"#42c6ac",color:"#fff","margin-top":"20px",width:"120px",height:"40px"},on:{click:t.enterEditor}},[t._v("进入编辑")]):t._e()],1)])])])])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"asider"},[o("div",{staticClass:"box"},[o("p",[t._v("根据商品分类、品牌")]),o("div",{staticClass:"kailong"})])])}],r=(o("ac6a"),o("c149")),s=o("4380"),c={data:function(){return{goodslist:[],num:[],radio:null,type:[],suretype:[],alltype:[],current_page:1,last_page:null,searchVal:"",title_batch:[]}},methods:{findUp:function(){this.$router.push({path:"/multipleIsup"})},getGoodsList:function(){var t=this;Object(s["n"])().then((function(e){t.goodslist=e.data.data,t.current_page=e.data.current_page,t.last_page=e.data.last_page}))},confirm:function(){this.num=JSON.parse(JSON.stringify(this.type)),console.log(this.num)},remove:function(){var t=this;this.suretype.forEach((function(e){t.num.splice(e,1)}))},input:function(t){var e=this,o={gb_title:t};Object(s["n"])(o).then((function(t){e.goodslist=t.data.data,console.log(t.data.data)}))},enterEditor:function(){console.log(this.num),"1"===this.radio?this.$router.push({path:"/singleEditor",query:{data:this.num}}):"2"===this.radio&&this.$router.push({path:"/moreEditor",query:{data:this.num}})},searchName:function(){var t=this,e={search_val:this.searchVal};Object(s["n"])(e).then((function(e){t.goodslist=e.data.data}))},reset:function(){this.getGoodsList()},loadmore:function(){var t=this,e=document.querySelector("#left_table");e.addEventListener("scroll",(function(){var o=e.scrollHeight-e.scrollTop-e.clientHeight;if(o<=0&&t.current_page<t.last_page){t.current_page++;var n={page:t.current_page};Object(s["n"])(n).then((function(e){t.goodslist=t.goodslist.concat(e.data.data),console.log(e)}))}}))}},created:function(){this.getGoodsList()},computed:{all:function(){return this.num.length}},watch:{value:{immediate:!0,handler:function(t){console.log(t)}}},updated:function(){this.loadmore()},components:{Brand:r["default"]}},i=c,u=(o("4093"),o("2877")),d=Object(u["a"])(i,n,a,!1,null,"bdec20be",null);e["default"]=d.exports},b26e:function(t,e,o){"use strict";o.d(e,"f",(function(){return a})),o.d(e,"g",(function(){return r})),o.d(e,"e",(function(){return s})),o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return u})),o.d(e,"i",(function(){return d})),o.d(e,"h",(function(){return l})),o.d(e,"d",(function(){return f}));var n=o("b775"),a=function(t){return Object(n["a"])({url:"/system/common/getAllGoods",method:"get",params:t})},r=function(t){return Object(n["a"])({url:"/system/Common/getQiNiuToken",method:"get",params:t})},s=function(t){return Object(n["a"])({url:"/goods/goods_brand/getList",method:"post",params:t})},c=function(t){return Object(n["a"])({url:"/goods/goods_brand/add",method:"post",params:t})},i=function(t){return Object(n["a"])({url:"/goods/goods_brand/del",method:"post",params:t})},u=function(t){return Object(n["a"])({url:"/goods/goods_brand/edit",method:"post",params:t})},d=function(t){return Object(n["a"])({url:"/goods/goods_resource/getList",method:"post",params:t})},l=function(t){return Object(n["a"])({url:"/goods/goods_resource/del",method:"post",params:t})},f=function(t){return Object(n["a"])({url:"/system/common/findChilds",method:"post",params:t})}},b775:function(t,e,o){"use strict";var n,a=o("bc3a"),r=o.n(a),s=o("5c96"),c=o("4360"),i=r.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});i.interceptors.request.use((function(t){return n=s["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t}),(function(t){return console.log(t),Promise.reject()})),i.interceptors.response.use((function(t){if(n.close(),200===t.status)return-1==t.data.code&&(c["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(s["Message"].closeAll(),Object(s["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return n.close(),console.log(t),Promise.reject()})),e["a"]=i},c149:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-select",{staticClass:"my-input",attrs:{placeholder:t.placeholder,clearable:""},on:{change:t.change},model:{value:t.choosesValue,callback:function(e){t.choosesValue=e},expression:"choosesValue"}},[o("div",{staticStyle:{display:"flex",padding:"5px","text-align":"center"}},[o("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"请输入商品"},model:{value:t.searchBrand,callback:function(e){t.searchBrand=e},expression:"searchBrand"}}),o("el-button",{staticStyle:{"margin-left":"5px"},on:{click:t.searchBtn}},[t._v("搜索")])],1),t._l(t.list,(function(t,e){return o("el-option",{key:e,attrs:{value:t.gb_title}})}))],2)},a=[],r=o("b26e"),s={name:"index",props:{placeholder:{type:String,default:"请选择品牌"},value:null},data:function(){return{choosesValue:"",list:[],searchBrand:""}},methods:{change:function(){this.$emit("input",this.choosesValue)},searchBtn:function(){var t=this,e={seach_val:this.searchBrand};Object(r["e"])(e).then((function(e){t.list=e.data.data}))}},watch:{value:{immediate:!0,handler:function(t){var e=this;this.choosesValue=t,""===t&&Object(r["e"])().then((function(t){e.list=t.data.data}))}}},beforeCreate:function(){var t=this;Object(r["e"])().then((function(e){200===e.code&&(t.list=e.data.data)})).catch((function(t){console.log(t)}))}},c=s,i=(o("32a1"),o("2877")),u=Object(i["a"])(c,n,a,!1,null,"35da6c16",null);e["default"]=u.exports},e7e8:function(t,e,o){}}]);