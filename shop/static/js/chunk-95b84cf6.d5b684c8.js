(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95b84cf6"],{"1af6":function(t,e,n){var i=n("63b6");i(i.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var i=n("d9f6"),a=n("aebd");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}},3702:function(t,e,n){var i=n("481b"),a=n("5168")("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||r[a]===t)}},"40c3":function(t,e,n){var i=n("6b4c"),a=n("5168")("toStringTag"),r="Arguments"==i(function(){return arguments}()),o=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,l;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=o(e=Object(t),a))?n:r?i(e):"Object"==(l=i(e))&&"function"==typeof e.callee?"Arguments":l}},4147:function(t,e,n){},"4ee1":function(t,e,n){var i=n("5168")("iterator"),a=!1;try{var r=[7][i]();r["return"]=function(){a=!0},Array.from(r,(function(){throw 2}))}catch(o){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var r=[7],l=r[i]();l.next=function(){return{done:n=!0}},r[i]=function(){return l},t(r)}catch(o){}return n}},"549b":function(t,e,n){"use strict";var i=n("d864"),a=n("63b6"),r=n("241e"),o=n("b0dc"),l=n("3702"),s=n("b447"),c=n("20fd"),u=n("7cd6");a(a.S+a.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,a,d,f=r(t),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,g=0,y=u(f);if(v&&(h=i(h,m>2?arguments[2]:void 0,2)),void 0==y||p==Array&&l(y))for(e=s(f.length),n=new p(e);e>g;g++)c(n,g,v?h(f[g],g):f[g]);else for(d=y.call(f),n=new p;!(a=d.next()).done;g++)c(n,g,v?o(d,h,[a.value,g],!0):a.value);return n.length=g,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"607d":function(t,e,n){"use strict";var i=n("dc52"),a=n.n(i);a.a},"75fc":function(t,e,n){"use strict";var i=n("a745"),a=n.n(i);function r(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var o=n("774e"),l=n.n(o),s=n("c8bb"),c=n.n(s);function u(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return r(t)||u(t)||d()}n.d(e,"a",(function(){return f}))},"774e":function(t,e,n){t.exports=n("d2d5")},"7cd6":function(t,e,n){var i=n("40c3"),a=n("5168")("iterator"),r=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||r[i(t)]}},"95d5":function(t,e,n){var i=n("40c3"),a=n("5168")("iterator"),r=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||r.hasOwnProperty(i(e))}},a745:function(t,e,n){t.exports=n("f410")},abac:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-info"},[n("div",[n("el-upload",{staticClass:"upload-demo",attrs:{action:t.domain,data:t.QiniuData,"on-remove":t.handleRemove,"on-success":t.uploadSuccess,"before-upload":t.beforeAvatarUpload,multiple:!1,limit:1,"file-list":t.fileList}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1)])},a=[],r=(n("7f7f"),n("b26e")),o={data:function(){return{loading:!0,QiniuData:{key:"",token:""},domain:"https://upload-z2.qiniup.com",qiniuaddr:"",fileList:[]}},mounted:function(){this.getQiniuToken()},methods:{handleRemove:function(t,e){var n=this,i=[];e.map((function(t){i.push("".concat(n.qiniuaddr).concat(t.response.key))})),this.$emit("getImgUrls",i)},beforeAvatarUpload:function(t){var e="image/png"===t.type,n="image/jpeg"===t.type,i="image/jpg"===t.type,a=t.size/1024/1024<2;return e||n||i?a?void(this.QiniuData.key=(new Date).getTime()+"_upload_"+Math.floor(100*Math.random())+"_"+t.name):(this.$message.error("上传头像图片大小不能超过 2MB!"),!1):(this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!"),!1)},uploadSuccess:function(t,e,n){var i=[];n.map((function(t){i=t.response.key})),this.$emit("getImgUrls",i)},getQiniuToken:function(){var t=this;Object(r["g"])().then((function(e){200===e.code&&(t.QiniuData.token=e.data.token,t.qiniuaddr=e.data.domain)})).catch((function(t){}))}}},l=o,s=n("2877"),c=Object(s["a"])(l,i,a,!1,null,null,null);e["default"]=c.exports},b0dc:function(t,e,n){var i=n("e4ae");t.exports=function(t,e,n,a){try{return a?e(i(n)[0],n[1]):e(n)}catch(o){var r=t["return"];throw void 0!==r&&i(r.call(t)),o}}},bf22:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",{staticClass:"my-input",attrs:{placeholder:t.placeholder,clearable:""},on:{change:t.change},model:{value:t.choosesValue,callback:function(e){t.choosesValue=e},expression:"choosesValue"}},t._l(t.list,(function(t,e){return n("el-option",{key:e,attrs:{value:t.id,label:t.gs_title}})})),1)},a=[],r=n("bd86"),o=(n("7514"),n("4380")),l={name:"index",props:{placeholder:{type:String,default:"请选择属性类别"},value:null},data:function(){return{choosesValue:"",list:[],searchBrand:""}},methods:{change:function(){var t=this,e=this.list.find((function(e){return e.id==t.choosesValue})).gs_title,n={title:e,id:this.choosesValue};Object(o["r"])({gs_pid:n.id}).then((function(e){t.$emit("input",Object(r["a"])({},n.title,e.data.data))}))}},watch:{value:{immediate:!0,handler:function(t){this.choosesValue=t}}},beforeCreate:function(){var t=this;Object(o["r"])().then((function(e){console.log(e),200===e.code&&(t.list=e.data.data)}))}},s=l,c=(n("607d"),n("2877")),u=Object(c["a"])(s,i,a,!1,null,"af84d26c",null);e["default"]=u.exports},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},dc52:function(t,e,n){},e6ea:function(t,e,n){"use strict";var i=n("4147"),a=n.n(i);a.a},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f646:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-info"},[n("div",[n("el-upload",{staticClass:"upload-demo",attrs:{action:t.domain,data:t.QiniuData,"on-remove":t.handleRemove,"on-success":t.uploadSuccess,"before-upload":t.beforeAvatarUpload,multiple:!1,"file-list":t.fileList,"list-type":"picture-card"}},[n("i",{staticClass:"el-icon-plus"})])],1)])},a=[],r=(n("7f7f"),n("b26e")),o={data:function(){return{loading:!0,QiniuData:{key:"",token:""},domain:"https://upload-z2.qiniup.com",qiniuaddr:"",fileList:[]}},mounted:function(){this.getQiniuToken()},methods:{handleRemove:function(t,e){var n=this,i=[];e.map((function(t){i.push("".concat(n.qiniuaddr).concat(t.response.key))})),this.$emit("getImgUrls",i)},beforeAvatarUpload:function(t){var e="image/png"===t.type,n="image/jpeg"===t.type,i="image/jpg"===t.type,a=t.size/1024/1024<2;return e||n||i?a?void(this.QiniuData.key=(new Date).getTime()+"_upload_"+Math.floor(100*Math.random())+"_"+t.name):(this.$message.error("上传头像图片大小不能超过 2MB!"),!1):(this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!"),!1)},uploadSuccess:function(t,e,n){var i=[];n.map((function(t){i=t.response.key})),this.$emit("getImgUrls",i)},getQiniuToken:function(){var t=this;Object(r["g"])().then((function(e){200===e.code&&(t.QiniuData.token=e.data.token,t.qiniuaddr=e.data.domain)})).catch((function(t){}))}}},l=o,s=n("2877"),c=Object(s["a"])(l,i,a,!1,null,null,null);e["default"]=c.exports},fdb1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Attribute"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"section"},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"属性类型"}},[n("ChooseProperty",{on:{input:t.input}})],1),n("div",{staticClass:"specifications"},[n("p",[n("span",[t._v("*")]),t._v("商品规格\n                    ")]),n("div",[n("ul",{staticStyle:{"list-style":"none"}},t._l(t.PropertyList,(function(e,i){return n("li",{key:i},t._l(e,(function(e,i){return n("div",{key:i},[n("span",[t._v(t._s(i))]),n("el-checkbox-group",{model:{value:t.ruleForm.type,callback:function(e){t.$set(t.ruleForm,"type",e)},expression:"ruleForm.type"}},t._l(e,(function(e){return n("el-checkbox",{key:e.id,attrs:{label:e}},[t._v(t._s(e.gs_title))])})),1)],1)})),0)})),0)]),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{on:{click:t.addSpecifications}},[t._v("增加")])],1)]),n("div",{staticClass:"edit_box"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ruleForm.list,border:""}},[t._l(t.columnList,(function(e,i){return n("el-table-column",{key:i,attrs:{label:e,width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row["val"+i],callback:function(n){t.$set(e.row,"val"+i,n)},expression:"scope.row['val'+index]"}})]}}],null,!0)})})),n("el-table-column",{attrs:{label:"原价"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.price,callback:function(n){t.$set(e.row,"price",n)},expression:"scope.row.price"}})]}}])}),n("el-table-column",{attrs:{label:"会员价"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.recommendprice,callback:function(n){t.$set(e.row,"recommendprice",n)},expression:"scope.row.recommendprice"}})]}}])}),n("el-table-column",{attrs:{label:"上传图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("goodsupload",{on:{getImgUrls:t.getImgUrls},nativeOn:{click:function(n){return t.getIndex(e)}},model:{value:e.row.imgurl,callback:function(n){t.$set(e.row,"imgurl",n)},expression:"scope.row.imgurl"}})]}}])}),n("el-table-column",{attrs:{label:"条形码"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.bar_code,callback:function(n){t.$set(e.row,"bar_code",n)},expression:"scope.row.bar_code"}})]}}])}),n("el-table-column",{attrs:{label:"商品库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.num,callback:function(n){t.$set(e.row,"num",n)},expression:"scope.row.num"}})]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.deleteJob(e.$index)}}},[t._v("删除")])]}}])})],2)],1)],1),n("div",{staticClass:"addimg"},[n("div",{staticClass:"goodsImg"},[t._m(1),n("div",{staticClass:"imglist"},[n("div",{staticClass:"upimg"},[n("singerUpImg",{on:{getImgUrls:t.setImg}})],1)])])]),n("div",{staticStyle:{"text-align":"center","margin-top":"50px"}},[n("el-button",{on:{click:t.submit}},[t._v("提交")])],1)],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"asider"},[n("div",{staticClass:"box"},[n("p",[t._v("商品属性")]),n("div",{staticClass:"kailong"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box2"},[n("p",[t._v("商品相册")]),n("div",{staticClass:"rich_title"})])}],r=(n("456d"),n("28a5"),n("75fc")),o=(n("ac4d"),n("8a81"),n("ac6a"),n("8615"),n("bf22")),l=(n("4380"),n("abac")),s=n("f646"),c={name:"FuncFormsEdit",data:function(){return{ruleForm:{type:[],list:[{key:"",key_name:"",recommendprice:"",price:"",imgurl:"",bar_code:"",initial_sales:0}]},rules:{type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}]},PropertyList:[],columnList:[],child:[],select_name:"规格",specifications:[],content:null,tableIndex:null,editorOption:{},data:{},g_imgs:[]}},components:{ChooseProperty:o["default"],goodsupload:l["default"],singerUpImg:s["default"]},mounted:function(){this.data=JSON.parse(sessionStorage.getItem("data")),console.log(this.data)},methods:{addSpecifications:function(){var t=this;this.ruleForm.list=[];var e=[],n=!0,i=!1,a=void 0;try{for(var o,l=function(){var n=o.value;e[Object.keys(n)[0]]=[],Object.values(n)[0].map((function(i){var a=!0,r=!1,o=void 0;try{for(var l,s=t.ruleForm.type[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var c=l.value;i.id==c.id&&e[Object.keys(n)[0]].push(c)}}catch(u){r=!0,o=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}}))},s=this.PropertyList[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)l()}catch(b){i=!0,a=b}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}var c=Object.values(e),u=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=[],a=function t(n,a){var r=e[n],o=n===e.length-1,l=!0,s=!1,c=void 0;try{for(var u,d=r[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){var f=u.value,p=a.concat(f);o?i.push(p):t(n+1,p)}}catch(b){s=!0,c=b}finally{try{l||null==d.return||d.return()}finally{if(s)throw c}}};return a(0,[]),i},d=u.apply(void 0,Object(r["a"])(c)),f=[],p=!0,m=!1,h=void 0;try{for(var v,g=function(){var t=v.value,e={key_name:"",key:""};t.map((function(n,i){i+1===t.length?(e.key_name+=n.gs_title,e.key+=n.id):(e.key_name+=n.gs_title+"_",e.key+=n.id+"_")})),f.push(e)},y=d[Symbol.iterator]();!(p=(v=y.next()).done);p=!0)g()}catch(b){m=!0,h=b}finally{try{p||null==y.return||y.return()}finally{if(m)throw h}}this.ruleForm.list=f,this.ruleForm.list.forEach((function(t){for(var e=t.key_name.split("_"),n=0;n<e.length;n++)t["val"+n]=e[n]})),this.columnList=[],this.PropertyList.forEach((function(e){console.log(Object.keys(e)[0]),t.columnList.push(Object.keys(e)[0])}))},input:function(t){console.log(t);var e=!0,n=!0,i=!1,a=void 0;try{for(var r,o=this.PropertyList[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var l=r.value;console.log("每一项：",l),l==t&&(e=!1)}}catch(s){i=!0,a=s}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}e&&this.PropertyList.push(t)},getIndex:function(t){this.tableIndex=t.$index},getImgUrls:function(t){this.ruleForm.list[this.tableIndex].imgurl=t},deleteJob:function(t){console.log(t),this.ruleForm.list.splice(t,1)},setImg:function(t){this.g_imgs.push(t),console.log(t)},submit:function(){var t={g_title:this.data.g_title,g_subtitle:this.data.g_subtitle,g_content:this.data.g_content,brand_id:this.data.brand_id,supplier_id:this.data.supplier_id,g_specs:this.ruleForm.list,g_class:this.data.g_class,is_show:this.data.is_show,g_type:this.data.g_type,g_img:this.g_imgs,g_ratio:this.data.g_ratio,g_dis_price:this.data.g_dis_price,type_id:this.data.type_id};sessionStorage.setItem("usData",JSON.stringify(t)),console.log(this.ruleForm.list)}}},u=c,d=(n("e6ea"),n("2877")),f=Object(d["a"])(u,i,a,!1,null,null,null);e["default"]=f.exports}}]);