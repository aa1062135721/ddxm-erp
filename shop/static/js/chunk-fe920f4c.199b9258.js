(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe920f4c"],{"3b9d":function(t,e,n){"use strict";var a=n("9bf2"),r=n.n(a);r.a},"3e8f":function(t,e){},"44aa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editSales"},[n("div",{staticClass:"container"},[n("div",{staticClass:"table"},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark","cell-style":{"text-align":"center"}}},[n("el-table-column",{attrs:{label:"商品ID",width:"120",prop:"id",align:"center"}}),n("el-table-column",{attrs:{label:"商品名称",prop:"title",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.items[0].item_name))])]}}])}),n("el-table-column",{attrs:{label:"规格名称",prop:"items",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return n("div",{key:a},[n("span",[t._v(t._s(e.specs_names))])])}))}}])}),n("el-table-column",{attrs:{label:"总库存",prop:"items",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return n("div",{key:a},[n("span",[t._v(t._s(e.stock))])])}))}}])}),n("el-table-column",{attrs:{label:"销售原价",prop:"items",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return n("div",{key:a},[n("span",[t._v(t._s(e.old_price))])])}))}}])}),n("el-table-column",{attrs:{label:"活动价格",prop:"items",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return n("div",{key:a},[n("el-input",{attrs:{type:"number"},model:{value:e.price,callback:function(n){t.$set(e,"price",n)},expression:"item.price"}})],1)}))}}])}),n("el-table-column",{attrs:{label:"限购数量",align:"center",prop:"people_num",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return n("div",{key:a},[n("el-input",{attrs:{type:"number"},model:{value:e.residue_num,callback:function(n){t.$set(e,"residue_num",n)},expression:"item.residue_num"}})],1)}))}}])}),n("el-table-column",{attrs:{label:"虚拟销量",prop:"items",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.items,(function(e,a){return n("div",{key:a},[n("el-input",{attrs:{type:"number"},model:{value:e.virtually_num,callback:function(n){t.$set(e,"virtually_num",n)},expression:"item.virtually_num"}})],1)}))}}])})],1)],1),n("div",{staticClass:"fromList"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"标签"}},[n("el-input",{staticStyle:{width:"220px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"每人限购"}},[n("el-input",{staticStyle:{width:"220px"},model:{value:t.form.buy,callback:function(e){t.$set(t.form,"buy",e)},expression:"form.buy"}})],1),n("el-form-item",{attrs:{label:"开始时间"}},[[n("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.start_time,callback:function(e){t.$set(t.form,"start_time",e)},expression:"form.start_time"}})]],2),n("el-form-item",{attrs:{label:"结束时间"}},[[n("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})]],2),n("el-form-item",{attrs:{label:"是否显示"}},[n("el-radio-group",{model:{value:t.form.show,callback:function(e){t.$set(t.form,"show",e)},expression:"form.show"}},[n("el-radio",{attrs:{label:1}},[t._v("显示")]),n("el-radio",{attrs:{label:2}},[t._v("隐藏")])],1)],1),n("el-form-item",{attrs:{label:"是否免邮"}},[n("el-radio-group",{model:{value:t.form.noMail,callback:function(e){t.$set(t.form,"noMail",e)},expression:"form.noMail"}},[n("el-radio",{attrs:{label:1}},[t._v("是")]),n("el-radio",{attrs:{label:2}},[t._v("否")])],1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即提交")])],1)],1)],1)])])},r=[],i=(n("7f7f"),n("ac6a"),n("a5d0")),o=(n("3e8f"),{data:function(){return{tableData:[],form:{name:"",buy:"",region:"",start_time:"",end_time:"",show:"",noMail:""},id:null}},methods:{getSalesList:function(){var t=this.$route.query.value;this.tableData.push(t),this.form.start_time=this.endmatDate(t.end_time),this.form.end_time=this.formatDate(t.start_time),this.form.show=t.status,this.form.noMail=t.postage_way,console.log("111111",this.$route.query.value)},formatDate:function(t,e){var n=new Date(1e3*parseInt(t)),a=n.getFullYear()+"-",r=n.getMonth()+1<10?"0"+(n.getMonth()+1)+"-":n.getMonth()+1+"-",i=n.getDate()<10?"0"+n.getDate()+" ":n.getDate()+" ",o=n.getHours()<10?"0"+n.getHours()+":":n.getHours()+":",s=n.getMinutes()<10?"0"+n.getMinutes()+":":n.getMinutes()+":",l=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return a+r+i+o+s+l},endmatDate:function(t,e){var n=new Date(1e3*parseInt(t)),a=n.getFullYear()+"-",r=n.getMonth()+1<10?"0"+(n.getMonth()+1)+"-":n.getMonth()+1+"-",i=n.getDate()<10?"0"+n.getDate()+" ":n.getDate()+" ",o=n.getHours()<10?"0"+n.getHours()+":":n.getHours()+":",s=n.getMinutes()<10?"0"+n.getMinutes()+":":n.getMinutes()+":",l=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return a+r+i+o+s+l},onSubmit:function(){var t=this,e=[];this.tableData.forEach((function(t){t.postage_way,t.status,t.items.forEach((function(t){var n={item_id:"",item_name:"",id:"",specs_ids:"",specs_names:"",old_price:"",price:"",commander_price:"",stock:"",virtually_num:"",residue_num:""};n.item_id=t.item_id,n.item_name=t.item_name,n.id=t.id,n.specs_ids=t.specs_ids,n.specs_names=t.specs_names,n.old_price=t.old_price,n.price=t.price,n.commander_price=t.commander_price,n.stock=t.stock,n.virtually_num=t.virtually_num,n.residue_num=parseInt(t.residue_num),e.push(n)}))}));var n={id:this.id,title:this.form.name,type:1,people_num:this.form.buy,start_time:this.getTimestamp(this.form.start_time),end_time:this.getTimestamp(this.form.end_time),items:e,postage_way:this.form.noMail,status:this.form.show};console.log(n),Object(i["e"])(n).then((function(e){200==e.code&&t.$message({message:e.msg,type:"success"})}))},getTimestamp:function(t){return new Date(t).getTime()/1e3}},created:function(){this.getSalesList()},mounted:function(){var t=this;this.tableData.forEach((function(e){t.form.name=e.title,t.form.buy=e.people_num,t.id=e.id}))}}),s=o,l=(n("3b9d"),n("2877")),u=Object(l["a"])(s,a,r,!1,null,"70944fd8",null);e["default"]=u.exports},"9bf2":function(t,e,n){},a5d0:function(t,e,n){"use strict";n.d(e,"n",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"o",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return m})),n.d(e,"m",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"j",(function(){return p})),n.d(e,"l",(function(){return b})),n.d(e,"g",(function(){return _})),n.d(e,"i",(function(){return h})),n.d(e,"h",(function(){return g}));var a=n("b775"),r=function(t){return Object(a["a"])({baseURL:"/api",url:"/api/item/getGoodsList",method:"post",data:t})},i=function(t){return Object(a["a"])({url:"/activity/Seckill/getLIst",method:"post",data:t})},o=function(t){return Object(a["a"])({url:"/activity/Seckill/edit",method:"post",data:t})},s=function(t){return Object(a["a"])({url:"/activity/Seckill/del",method:"post",data:t})},l=function(t){return Object(a["a"])({url:"/activity/Seckill/add",method:"post",data:t})},u=function(t){return Object(a["a"])({url:"/activity/Collage/getList",method:"post",data:t})},c=function(t){return Object(a["a"])({url:"/activity/Collage/add",method:"post",data:t})},m=function(t){return Object(a["a"])({url:"/activity/Collage/edit",method:"post",data:t})},d=function(t){return Object(a["a"])({url:"/activity/flash_sale/getList",method:"post",data:t})},f=function(t){return Object(a["a"])({url:"/activity/flash_sale/del",method:"post",data:t})},p=function(t){return Object(a["a"])({url:"/activity/flash_sale/add",method:"post",data:t})},b=function(t){return Object(a["a"])({url:"/activity/flash_sale/edit",method:"post",data:t})},_=function(t){return Object(a["a"])({url:"/cashout/cashout_mange/getList",method:"post",data:t})},h=function(t){return Object(a["a"])({url:"/cashout/cashout_mange/edit",method:"post",data:t})},g=function(t){return Object(a["a"])({url:"/cashout/cashout_mange/add",method:"post",data:t})}},b775:function(t,e,n){"use strict";var a,r=n("bc3a"),i=n.n(r),o=n("5c96"),s=n("4360"),l=i.a.create({baseURL:"http://ddxm661.com:8088",timeout:3e3});l.interceptors.request.use((function(t){return a=o["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),"/api"===t.baseURL&&(t.baseURL="http://testadmin2.ddxm661.com"),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){if(a.close(),200===t.status)return-1==t.data.code&&(s["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=t.data.code&&(o["Message"].closeAll(),Object(o["Message"])({message:t.data.msg,type:"error"})),t.data;Promise.reject()}),(function(t){return a.close(),Promise.reject(t)})),e["a"]=l}}]);