(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2d3dea8"],{"0214":function(t,e,a){"use strict";var n=a("79a2"),r=a.n(n);r.a},"79a2":function(t,e,a){},"8af5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editSales"},[a("div",{staticClass:"container"},[a("div",{staticClass:"table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark","cell-style":{"text-align":"center"}}},[a("el-table-column",{attrs:{label:"商品ID",width:"120",prop:"id",align:"center"}}),a("el-table-column",{attrs:{label:"商品名称",prop:"title",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.items[0].item_name))])]}}])}),a("el-table-column",{attrs:{label:"规格名称",prop:"items",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,n){return a("div",{key:n},[e.specs_names?a("span",[t._v(t._s(e.specs_names))]):a("span",[t._v("暂无")])])}))}}])}),a("el-table-column",{attrs:{label:"总库存",prop:"items",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,n){return a("div",{key:n},[a("span",[t._v(t._s(e.stock))])])}))}}])}),a("el-table-column",{attrs:{label:"销售原价",prop:"items",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,n){return a("div",{key:n},[a("span",[t._v(t._s(e.old_price))])])}))}}])}),a("el-table-column",{attrs:{label:"活动价格",prop:"items",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,n){return a("div",{key:n},[a("el-input",{attrs:{type:"number"},model:{value:e.price,callback:function(a){t.$set(e,"price",a)},expression:"item.price"}})],1)}))}}])}),a("el-table-column",{attrs:{label:"限购数量",align:"center",prop:"people_num",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,n){return a("div",{key:n},[a("el-input",{attrs:{type:"number"},model:{value:e.residue_num,callback:function(a){t.$set(e,"residue_num",a)},expression:"item.residue_num"}})],1)}))}}])}),a("el-table-column",{attrs:{label:"虚拟销量",prop:"items",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,n){return a("div",{key:n},[a("el-input",{attrs:{type:"number"},model:{value:e.virtually_num,callback:function(a){t.$set(e,"virtually_num",a)},expression:"item.virtually_num"}})],1)}))}}])})],1)],1),a("div",{staticClass:"fromList"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标签"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"每人限购"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.form.buy,callback:function(e){t.$set(t.form,"buy",e)},expression:"form.buy"}})],1),a("el-form-item",{attrs:{label:"开始时间"}},[[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.start_time,callback:function(e){t.$set(t.form,"start_time",e)},expression:"form.start_time"}})]],2),a("el-form-item",{attrs:{label:"结束时间"}},[[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})]],2),a("el-form-item",{attrs:{label:"是否显示"}},[a("el-radio-group",{model:{value:t.form.show,callback:function(e){t.$set(t.form,"show",e)},expression:"form.show"}},[a("el-radio",{attrs:{label:1}},[t._v("显示")]),a("el-radio",{attrs:{label:2}},[t._v("隐藏")])],1)],1),a("el-form-item",{attrs:{label:"是否免邮"}},[a("el-radio-group",{model:{value:t.form.noMail,callback:function(e){t.$set(t.form,"noMail",e)},expression:"form.noMail"}},[a("el-radio",{attrs:{label:1}},[t._v("是")]),a("el-radio",{attrs:{label:2}},[t._v("否")])],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即提交")])],1)],1)],1)])])},r=[],i=(a("7f7f"),a("ac6a"),a("a5d0")),o={data:function(){return{tableData:[],form:{name:"",buy:"",region:"",start_time:"",end_time:"",show:"",noMail:""},id:null}},methods:{getSalesList:function(){var t=this.$route.query.value;this.tableData.push(t),this.form.start_time=this.endmatDate(t.end_time),this.form.end_time=this.formatDate(t.start_time),this.form.show=t.status,this.form.noMail=t.postage_way,console.log("111111",this.$route.query.value)},formatDate:function(t,e){var a=new Date(1e3*parseInt(t)),n=a.getFullYear()+"-",r=a.getMonth()+1<10?"0"+(a.getMonth()+1)+"-":a.getMonth()+1+"-",i=a.getDate()<10?"0"+a.getDate()+" ":a.getDate()+" ",o=a.getHours()<10?"0"+a.getHours()+":":a.getHours()+":",s=a.getMinutes()<10?"0"+a.getMinutes()+":":a.getMinutes()+":",l=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return n+r+i+o+s+l},endmatDate:function(t,e){var a=new Date(1e3*parseInt(t)),n=a.getFullYear()+"-",r=a.getMonth()+1<10?"0"+(a.getMonth()+1)+"-":a.getMonth()+1+"-",i=a.getDate()<10?"0"+a.getDate()+" ":a.getDate()+" ",o=a.getHours()<10?"0"+a.getHours()+":":a.getHours()+":",s=a.getMinutes()<10?"0"+a.getMinutes()+":":a.getMinutes()+":",l=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return n+r+i+o+s+l},onSubmit:function(){var t=this,e=[];this.tableData.forEach((function(t){t.postage_way,t.status,t.items.forEach((function(t){var a={item_id:"",item_name:"",id:"",specs_ids:"",specs_names:"",old_price:"",price:"",commander_price:"",stock:"",virtually_num:"",residue_num:""};a.item_id=t.item_id,a.item_name=t.item_name,a.id=t.id,a.specs_ids=t.specs_ids,a.specs_names=t.specs_names,a.old_price=t.old_price,a.price=t.price,a.commander_price=t.commander_price,a.stock=t.stock,a.virtually_num=t.virtually_num,a.residue_num=parseInt(t.residue_num),e.push(a)}))}));var a={id:this.id,type:1,title:this.form.name,people_num:this.form.buy,start_time:this.getTimestamp(this.form.start_time),end_time:this.getTimestamp(this.form.end_time),items:e,postage_way:this.form.noMail,status:this.form.show};console.log(a),Object(i["l"])(a).then((function(e){200==e.code&&t.$message({message:e.msg,type:"success"})}))},getTimestamp:function(t){return new Date(t).getTime()/1e3}},created:function(){this.getSalesList()},mounted:function(){var t=this;this.tableData.forEach((function(e){t.form.name=e.title,t.form.buy=e.people_num,t.id=e.id}))}},s=o,l=(a("0214"),a("2877")),u=Object(l["a"])(s,n,r,!1,null,"2d4f284c",null);e["default"]=u.exports},a5d0:function(t,e,a){"use strict";a.d(e,"n",(function(){return r})),a.d(e,"f",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"o",(function(){return l})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return m})),a.d(e,"m",(function(){return d})),a.d(e,"k",(function(){return f})),a.d(e,"j",(function(){return p})),a.d(e,"l",(function(){return _})),a.d(e,"g",(function(){return b})),a.d(e,"i",(function(){return h})),a.d(e,"h",(function(){return g}));var n=a("b775"),r=function(t){return Object(n["a"])({baseURL:"/api",url:"/api/item/getGoodsList",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/activity/Seckill/getLIst",method:"post",data:t})},o=function(t){return Object(n["a"])({url:"/activity/Seckill/edit",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/activity/Seckill/del",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/activity/Seckill/add",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/activity/Collage/getList",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/activity/Collage/add",method:"post",data:t})},m=function(t){return Object(n["a"])({url:"/activity/Collage/edit",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/activity/flash_sale/getList",method:"post",data:t})},f=function(t){return Object(n["a"])({url:"/activity/flash_sale/del",method:"post",data:t})},p=function(t){return Object(n["a"])({url:"/activity/flash_sale/add",method:"post",data:t})},_=function(t){return Object(n["a"])({url:"/activity/flash_sale/edit",method:"post",data:t})},b=function(t){return Object(n["a"])({url:"/cashout/cashout_mange/getList",method:"post",data:t})},h=function(t){return Object(n["a"])({url:"/cashout/cashout_mange/edit",method:"post",data:t})},g=function(t){return Object(n["a"])({url:"/cashout/cashout_mange/add",method:"post",data:t})}},b775:function(t,e,a){"use strict";var n,r=a("bc3a"),i=a.n(r),o=a("5c96"),s=a("4360"),l=i.a.create({baseURL:"http://ddxm661.com:8088",timeout:3e3});l.interceptors.request.use((function(t){return n=o["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),"/api"===t.baseURL&&(t.baseURL="http://testadmin2.ddxm661.com"),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){if(n.close(),200===t.status)return-1==t.data.code&&(s["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(o["Message"].closeAll(),Object(o["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return n.close(),Promise.reject(t)})),e["a"]=l}}]);