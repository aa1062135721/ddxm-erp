(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6abd9e46"],{"32c9":function(t,s,i){"use strict";var e=i("962a"),a=i.n(e);a.a},"5a8f":function(t,s,i){t.exports=i.p+"static/img/arrow.d9dd53c5.png"},"6e15":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"goodsAdd"},[i("div",[i("div",{staticClass:"steps"},[i("el-steps",{attrs:{active:t.active,"finish-status":"success","align-center":""}},[i("el-step",{attrs:{title:"选择商品分类"}}),i("el-step",{attrs:{title:"填写商品信息"}}),i("el-step",{attrs:{title:"填写商品属性"}})],1)],1)]),1===t.flag?i("Classification"):t._e(),i("keep-alive",[2===t.flag?i("Information"):t._e()],1),3===t.flag?i("Attribute"):t._e(),1===t.flag?i("div",[i("el-button",{staticClass:"next",staticStyle:{"margin-top":"12px"},on:{click:t.next}},[t._v("下一步,填写商品信息")])],1):2===t.flag?i("div",[i("el-button",{staticClass:"last",staticStyle:{"margin-top":"12px"},on:{click:t.last}},[t._v("上一步,选择商品分类")]),i("el-button",{staticClass:"next",staticStyle:{"margin-top":"12px"},on:{click:t.next}},[t._v("下一步,填写商品属性")])],1):i("div",[i("el-button",{staticClass:"last",staticStyle:{"margin-top":"12px"},on:{click:t.last}},[t._v("上一步,填写商品信息")]),i("el-button",{staticClass:"next",staticStyle:{"margin-top":"12px"},on:{click:t.end}},[t._v("完成提交商品")])],1)],1)},a=[],n=(i("ac6a"),i("8468")),c=i("c24f"),o=i("fdb1"),l=i("4380"),r={data:function(){return{active:0,flag:1,num:1,ids:"",id:""}},methods:{next:function(){if(this.num++,this.active++>3&&(this.active=0),2===this.num){this.flag=2;var t=JSON.parse(sessionStorage.getItem("classification"));t&&(this.ids=t)}else 3===this.num&&(this.flag=3)},last:function(){this.num--,this.active-- >3&&(this.active=0),1===this.num?this.flag=1:2===this.num&&(this.flag=2)},end:function(){var t=this;this.active++>3&&(this.active=3),this.ids.third&&(this.ids.third?this.id=this.ids.third.id:this.id=this.ids.second.id);var s={};s=JSON.parse(sessionStorage.getItem("usData")),s.g_class.push(this.id),s.g_specs.forEach((function(t){t.initial_sales=0})),console.log(s),Object(l["i"])(s).then((function(s){200==s.code&&(sessionStorage.clear(),t.$message({message:s.msg,type:"success"}))}))}},components:{Classification:n["default"],Information:c["default"],Attribute:o["default"]},created:function(){var t=this.$route.query.type,s=this.$route.query.val;t&&(this.flag=t,sessionStorage.setItem("editGoods",JSON.stringify(s)))}},h=r,d=(i("a2b4"),i("2877")),u=Object(d["a"])(h,e,a,!1,null,"3726dabe",null);s["default"]=u.exports},8468:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Classification"},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"section"},[e("div",{staticClass:"choose_class"},[e("div",{staticClass:"left_class"},[e("ul",[e("p",[t._v("选择一级分类")]),t._l(t.tableData,(function(s,i){return e("li",{key:i,class:i===t.index?"active":"",on:{click:function(e){return t.firstClass(s,i)}}},[e("span",[t._v(t._s(s.gc_name))]),e("span",[t._v(">")])])}))],2)]),e("img",{attrs:{src:i("5a8f")}}),e("div",{staticClass:"middle_class"},[e("ul",[e("p",[t._v("选择二级分类")]),t._l(t.secondClass,(function(s,i){return e("li",{key:i,class:i===t.current?"active":"",on:{click:function(e){return t.twoClass(s,i)}}},[t._v(t._s(s.gc_name))])}))],2)]),e("img",{attrs:{src:i("5a8f")}}),e("div",{staticClass:"right_class"},[e("ul",[e("p",[t._v("选择三级分类")]),t._l(t.thirdClass,(function(s,i){return s.gc_name?e("li",{key:i,on:{click:function(i){return t.threeClass(s)}}},[t._v(t._s(s.gc_name))]):e("p",[t._v("暂无分类")])}))],2)])]),e("div",{staticClass:"txt"},[e("p",{staticStyle:{color:"#666"}},[t._v("\n                    您当前选择的商品类别是：\n                    "),e("span",[t._v(t._s(t.firstchoose.gc_name))]),t.secondchoose.gc_name?e("span",[t._v(">")]):t._e(),e("span",[t._v(t._s(t.secondchoose.gc_name))]),t.thirdchoose.gc_name?e("span",[t._v(">")]):t._e(),e("span",[t._v(t._s(t.thirdchoose.gc_name))])])])])])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"asider"},[i("div",{staticClass:"box"},[i("p",[t._v("选择分类")]),i("div",{staticClass:"kailong"})])])}],n=(i("ac6a"),i("4380")),c=i("b26e"),o={data:function(){return{tableData:[],limit:1e4,goods_id:35,secondClass:[],thirdClass:[],firstchoose:"请选择",secondchoose:"",thirdchoose:"",index:null,current:null}},methods:{firstClass:function(t,s){var i=this;this.index=s,this.current=null,console.log(s),this.firstchoose=t,this.secondchoose="",this.thirdchoose="",this.secondClass=[],this.thirdClass=[];var e={pid:t.id};Object(c["d"])(e).then((function(t){var s=[];t.data.forEach((function(t){s.push(t)})),i.secondClass=s})),this.setGoodsInfo()},twoClass:function(t,s){console.log(s),this.current=s;var i=[];t.children&&t.children.forEach((function(t){i.push(t)})),this.thirdClass=i,this.secondchoose=t,this.setGoodsInfo()},threeClass:function(t){this.thirdchoose=t,this.setGoodsInfo()},show:function(){var t=this,s={limit:this.limit};Object(n["h"])(s).then((function(s){console.log(s),t.tableData=s.data.data}))},setGoodsInfo:function(){var t={first:this.firstchoose,second:this.secondchoose,third:this.thirdchoose};sessionStorage.setItem("classification",JSON.stringify(t))}},created:function(){this.show()}},l=o,r=(i("32c9"),i("2877")),h=Object(r["a"])(l,e,a,!1,null,"5f97c748",null);s["default"]=h.exports},"85c8":function(t,s,i){},"962a":function(t,s,i){},a2b4:function(t,s,i){"use strict";var e=i("85c8"),a=i.n(e);a.a}}]);