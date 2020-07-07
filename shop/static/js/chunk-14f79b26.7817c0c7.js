(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14f79b26"],{"0099":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[e._v("部门管理")])],1)],1),r("div",{staticClass:"container"},[r("div",[e.$_has("add")?r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.addDialogShow}},[e._v("添加")]):e._e()],1),r("div",{staticStyle:{margin:"40px 0"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.responseData}},[r("el-table-column",{attrs:{prop:"r_name",label:"部门名称"}}),r("el-table-column",{attrs:{prop:"p_name",label:"上级部门"}}),r("el-table-column",{attrs:{prop:"r_desc",label:"职能描述"}}),r("el-table-column",{attrs:{prop:"create_time",label:"添加时间"}}),e.$_has("isSwitch")?r("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},on:{change:function(r){return e.isSwitch(t.row)}},model:{value:t.row.is_switch,callback:function(r){e.$set(t.row,"is_switch",r)},expression:"scope.row.is_switch"}})]}}],null,!1,2264572992)}):e._e(),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.$_has("setAuth")?r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.goToAuth(t.row)}}},[e._v("权限管理")]):e._e(),e.$_has("edit")?r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.editDialogShow(t.row)}}},[e._v("编辑")]):e._e(),e.$_has("del")?r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.deleteDepartment(t.row)}}},[e._v("删除")]):e._e()]}}])})],1)],1)]),r("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"添加部门",center:"",visible:e.addDepartmentDialog.visible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.addDepartmentDialog,"visible",t)}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.addDepartmentDialog.ruleForm,rules:e.addDepartmentDialog.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"部门名称",prop:"r_name"}},[r("el-input",{model:{value:e.addDepartmentDialog.ruleForm.r_name,callback:function(t){e.$set(e.addDepartmentDialog.ruleForm,"r_name",t)},expression:"addDepartmentDialog.ruleForm.r_name"}})],1),r("el-form-item",{attrs:{label:"上级部门",prop:"r_pid"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addDepartmentDialog.ruleForm.r_pid,callback:function(t){e.$set(e.addDepartmentDialog.ruleForm,"r_pid",t)},expression:"addDepartmentDialog.ruleForm.r_pid"}},e._l(e.addDepartmentDialog.department,(function(e,t){return r("el-option",{key:t,attrs:{label:e.r_name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"职能描述",prop:"r_desc"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.addDepartmentDialog.ruleForm.r_desc,callback:function(t){e.$set(e.addDepartmentDialog.ruleForm,"r_desc",t)},expression:"addDepartmentDialog.ruleForm.r_desc"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addDepartment("ruleForm")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),r("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"编辑部门",center:"",visible:e.editDepartmentDialog.visible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.editDepartmentDialog,"visible",t)}}},[r("el-form",{ref:"editRuleForm",staticClass:"demo-ruleForm",attrs:{model:e.editDepartmentDialog.ruleForm,rules:e.editDepartmentDialog.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"部门名称",prop:"r_name"}},[r("el-input",{model:{value:e.editDepartmentDialog.ruleForm.r_name,callback:function(t){e.$set(e.editDepartmentDialog.ruleForm,"r_name",t)},expression:"editDepartmentDialog.ruleForm.r_name"}})],1),r("el-form-item",{attrs:{label:"上级部门",prop:"r_pid"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editDepartmentDialog.ruleForm.r_pid,callback:function(t){e.$set(e.editDepartmentDialog.ruleForm,"r_pid",t)},expression:"editDepartmentDialog.ruleForm.r_pid"}},e._l(e.editDepartmentDialog.department,(function(e,t){return r("el-option",{key:t,attrs:{label:e.r_name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"职能描述",prop:"r_desc"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.editDepartmentDialog.ruleForm.r_desc,callback:function(t){e.$set(e.editDepartmentDialog.ruleForm,"r_desc",t)},expression:"editDepartmentDialog.ruleForm.r_desc"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editDepartmentConfirm("editRuleForm")}}},[e._v("确认编辑")])],1)],1)],1)],1)},i=[],n=r("24ef"),o={name:"index",data:function(){return{responseData:[],addDepartmentDialog:{visible:!1,department:[],ruleForm:{r_pid:"",r_name:"",r_level:"",r_desc:""},rules:{r_pid:[{required:!0,message:"请选择上级部门",trigger:"blur"}],r_name:[{required:!0,message:"请输入部门名称",trigger:"blur"}],r_desc:[{required:!0,message:"请填写职能描述",trigger:"blur"}]}},editDepartmentDialog:{visible:!1,department:[],ruleForm:{id:"",r_pid:"",r_name:"",r_level:"",r_desc:""},rules:{r_pid:[{required:!0,message:"请选择上级部门",trigger:"blur"}],r_name:[{required:!0,message:"请输入部门名称",trigger:"blur"}],r_desc:[{required:!0,message:"请填写职能描述",trigger:"blur"}]}}}},methods:{addDialogShow:function(){var e=this;Object(n["a"])().then((function(t){200===t.code&&(e.addDepartmentDialog.visible=!0,t.data.push({id:0,r_name:"顶级部门"}),e.addDepartmentDialog.department=t.data)})).catch((function(e){console.log(e)}))},addDepartment:function(e){var t=this;this.$refs[e].validate((function(r){if(!r)return!1;Object(n["a"])(t.addDepartmentDialog.ruleForm).then((function(r){200===r.code&&(t.resetForm(e),t.addDepartmentDialog.visible=!1,t.$message({type:"success",message:"添加成功!"}),t.getList())})).catch((function(e){console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields()},editDialogShow:function(e){var t=this;Object(n["c"])({id:e.id}).then((function(e){200===e.code&&(t.editDepartmentDialog.department=e.data.parent,t.editDepartmentDialog.ruleForm.id=e.data.info.id,t.editDepartmentDialog.ruleForm.r_pid=e.data.info.r_pid,t.editDepartmentDialog.ruleForm.r_name=e.data.info.r_name,t.editDepartmentDialog.ruleForm.r_level=e.data.info.r_level,t.editDepartmentDialog.ruleForm.r_desc=e.data.info.r_desc,t.editDepartmentDialog.visible=!0)})).catch((function(e){console.log(e)}))},editDepartmentConfirm:function(e){var t=this;this.$refs[e].validate((function(r){if(!r)return!1;t.editDepartmentDialog.department.map((function(e){e.id===t.editDepartmentDialog.ruleForm.r_pid&&(t.editDepartmentDialog.ruleForm.r_level=e.r_level)})),Object(n["c"])(t.editDepartmentDialog.ruleForm).then((function(r){200===r.code&&(t.getList(),t.resetForm(e),t.editDepartmentDialog.visible=!1,t.$message({type:"success",message:"编辑成功!"}))})).catch((function(e){console.log(e)}))}))},deleteDepartment:function(e){var t=this,r={id:e.id};this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["b"])(r).then((function(e){200===e.code&&(t.getList(),t.$message({type:"success",message:"删除成功!"}))})).catch((function(e){console.log(e),t.$message.error("操作失败")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getList:function(){var e=this,t={page:1,limit:10};Object(n["e"])(t).then((function(t){200===t.code&&(e.responseData=t.data)})).catch((function(e){console.log(e)}))},isSwitch:function(e){var t=this,r={id:e.id,is_switch:e.is_switch?1:0};Object(n["d"])(r).then((function(r){200===r.code?t.$message.success("操作成功"):e.is_switch=e.is_switch?0:1})).catch((function(e){console.log(e)}))},goToAuth:function(e){this.$router.push({path:"/departmentAuth",query:{role_id:e.id}})}},beforeMount:function(){this.getList()}},l=o,s=r("2877"),c=Object(s["a"])(l,a,i,!1,null,"7e5a7b32",null);t["default"]=c.exports},"24ef":function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"f",(function(){return c}));var a=r("b775"),i=function(e){return Object(a["a"])({url:"/auth/role_manage/getList",method:"post",data:e})},n=function(e){return Object(a["a"])({url:"/auth/role_manage/add",method:"post",data:e})},o=function(e){return Object(a["a"])({url:"/auth/role_manage/edit",method:"post",data:e})},l=function(e){return Object(a["a"])({url:"/auth/role_manage/del",method:"post",data:e})},s=function(e){return Object(a["a"])({url:"/auth/role_manage/isSwitch",method:"post",data:e})},c=function(e){return Object(a["a"])({url:"/auth/role_manage/setAuth",method:"post",data:e})}},b775:function(e,t,r){"use strict";var a,i=r("bc3a"),n=r.n(i),o=r("5c96"),l=r("4360"),s=n.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});s.interceptors.request.use((function(e){return a=o["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e}),(function(e){return console.log(e),Promise.reject()})),s.interceptors.response.use((function(e){if(a.close(),200===e.status)return-1==e.data.code&&(l["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=e.data.code&&(o["Message"].closeAll(),Object(o["Message"])({message:e.data.msg,type:"error"})),e.data;Promise.reject()}),(function(e){return a.close(),console.log(e),Promise.reject()})),t["a"]=s}}]);