(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22e7db54"],{4598:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("员工管理")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"search-div"},[a("el-input",{staticClass:"my-input",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.requestData.search_val,callback:function(t){e.$set(e.requestData,"search_val",t)},expression:"requestData.search_val"}}),a("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("查询")]),e.$_has("add")?a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.staffAddDialogShow}},[e._v("添加")]):e._e()],1),a("div",{staticStyle:{margin:"40px 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.responseData.data}},[a("el-table-column",{attrs:{prop:"a_account",label:"成员账号"}}),a("el-table-column",{attrs:{prop:"a_username",label:"姓名"}}),a("el-table-column",{attrs:{prop:"rg_name",label:"岗位"}}),a("el-table-column",{attrs:{prop:"r_name",label:"所属部门"}}),a("el-table-column",{attrs:{prop:"create_time",label:"添加时间"}}),a("el-table-column",{attrs:{prop:"create_time",label:"最后登录"}}),e.$_has("isSwitch")?a("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66"},on:{change:function(a){return e.staffIsSwitch(t.row)}},model:{value:t.row.is_switch,callback:function(a){e.$set(t.row,"is_switch",a)},expression:"scope.row.is_switch"}})]}}],null,!1,572529926)}):e._e(),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.$_has("setAuth")?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.goToAuth(t.row)}}},[e._v("权限管理")]):e._e(),e.$_has("edit")?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.staffEditDialogShow(t.row)}}},[e._v("编辑")]):e._e(),e.$_has("del")?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.deleteDepartment(t.row)}}},[e._v("删除")]):e._e()]}}])})],1)],1),a("div",[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.responseData.total},on:{"current-change":e.handleCurrentChange}})],1)]),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"添加员工",center:"",visible:e.addDialog.visible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.addDialog,"visible",t)}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.addDialog.ruleForm,rules:e.addDialog.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"账号",prop:"a_account"}},[a("el-input",{model:{value:e.addDialog.ruleForm.a_account,callback:function(t){e.$set(e.addDialog.ruleForm,"a_account",t)},expression:"addDialog.ruleForm.a_account"}})],1),a("el-form-item",{attrs:{label:"登录密码",prop:"a_password"}},[a("el-input",{attrs:{"show-password":""},model:{value:e.addDialog.ruleForm.a_password,callback:function(t){e.$set(e.addDialog.ruleForm,"a_password",t)},expression:"addDialog.ruleForm.a_password"}})],1),a("el-form-item",{attrs:{label:"员工姓名",prop:"a_username"}},[a("el-input",{model:{value:e.addDialog.ruleForm.a_username,callback:function(t){e.$set(e.addDialog.ruleForm,"a_username",t)},expression:"addDialog.ruleForm.a_username"}})],1),a("el-form-item",{attrs:{label:"所属部门",prop:"role_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addDialog.ruleForm.role_id,callback:function(t){e.$set(e.addDialog.ruleForm,"role_id",t)},expression:"addDialog.ruleForm.role_id"}},e._l(e.addDialog.department,(function(e,t){return a("el-option",{key:t,attrs:{label:e.r_name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"所属岗位",prop:"ag_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addDialog.ruleForm.ag_id,callback:function(t){e.$set(e.addDialog.ruleForm,"ag_id",t)},expression:"addDialog.ruleForm.ag_id"}},e._l(e.addDialog.job,(function(e,t){return a("el-option",{key:t,attrs:{label:e.rg_name,value:e.id}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.staffAdd("ruleForm")}}},[e._v("立即创建")]),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"编辑员工",center:"",visible:e.editDialog.visible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.editDialog,"visible",t)}}},[a("el-form",{ref:"editDialog",staticClass:"demo-ruleForm",attrs:{model:e.editDialog.ruleForm,rules:e.editDialog.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"账号",prop:"a_account"}},[a("el-input",{model:{value:e.editDialog.ruleForm.a_account,callback:function(t){e.$set(e.editDialog.ruleForm,"a_account",t)},expression:"editDialog.ruleForm.a_account"}})],1),a("el-form-item",{attrs:{label:"旧密码",prop:"a_password"}},[a("el-input",{attrs:{"show-password":""},model:{value:e.editDialog.ruleForm.old_password,callback:function(t){e.$set(e.editDialog.ruleForm,"old_password",t)},expression:"editDialog.ruleForm.old_password"}})],1),a("el-form-item",{attrs:{label:"登录密码",prop:"a_password"}},[a("el-input",{attrs:{"show-password":""},model:{value:e.editDialog.ruleForm.a_password,callback:function(t){e.$set(e.editDialog.ruleForm,"a_password",t)},expression:"editDialog.ruleForm.a_password"}})],1),a("el-form-item",{attrs:{label:"员工姓名",prop:"a_username"}},[a("el-input",{model:{value:e.editDialog.ruleForm.a_username,callback:function(t){e.$set(e.editDialog.ruleForm,"a_username",t)},expression:"editDialog.ruleForm.a_username"}})],1),a("el-form-item",{attrs:{label:"所属部门",prop:"role_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editDialog.ruleForm.role_id,callback:function(t){e.$set(e.editDialog.ruleForm,"role_id",t)},expression:"editDialog.ruleForm.role_id"}},e._l(e.editDialog.department,(function(e,t){return a("el-option",{key:t,attrs:{label:e.r_name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"所属岗位",prop:"ag_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editDialog.ruleForm.ag_id,callback:function(t){e.$set(e.editDialog.ruleForm,"ag_id",t)},expression:"editDialog.ruleForm.ag_id"}},e._l(e.editDialog.job,(function(e,t){return a("el-option",{key:t,attrs:{label:e.rg_name,value:e.id}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.staffEditConfirm("editDialog")}}},[e._v("确认编辑")])],1)],1)],1)],1)},o=[],i=a("76bb"),l={name:"index",data:function(){return{requestData:{page:1,limit:10,search_val:""},responseData:{total:0,per_page:10,current_page:1,last_page:1,data:[{a_account:"admin",a_username:"超级管理员",rg_name:"总经理",r_name:"研发部",create_time:"1970-01-01 08:00:00",is_switch:0}]},addDialog:{visible:!1,ruleForm:{a_account:"",a_username:"",a_password:"",ag_id:"",role_id:""},rules:{a_account:[{required:!0,message:"请输入登录账号",trigger:"blur"}],a_username:[{required:!0,message:"请输入员工名字",trigger:"blur"}],a_password:[{required:!0,message:"请输入密码",trigger:"blur"}],ag_id:[{required:!0,message:"请选择岗位",trigger:"blur"}],role_id:[{required:!0,message:"请选择部门",trigger:"blur"}]},department:[],job:[]},editDialog:{visible:!1,ruleForm:{id:0,a_account:"",a_username:"",a_password:"",old_password:"",ag_id:"",role_id:""},rules:{a_account:[{required:!0,message:"请输入登录账号",trigger:"blur"}],a_username:[{required:!0,message:"请输入员工名字",trigger:"blur"}],a_password:[{required:!0,message:"请输入密码",trigger:"blur"}],old_password:[{required:!0,message:"请输入旧密码",trigger:"blur"}],ag_id:[{required:!0,message:"请选择岗位",trigger:"blur"}],role_id:[{required:!0,message:"请选择部门",trigger:"blur"}]},department:[],job:[]}}},methods:{deleteDepartment:function(e){var t=this,a={id:e.id};this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])(a).then((function(e){200===e.code&&(t.getList(),t.$message({type:"success",message:"删除成功!"}))})).catch((function(e){console.log(e),t.$message.error("操作失败")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleCurrentChange:function(e){this.requestData.page=e,this.getList()},getList:function(){var e=this;Object(i["e"])(this.requestData).then((function(t){200===t.code&&(e.responseData=t.data)})).catch((function(e){console.log(e)}))},staffAddDialogShow:function(){var e=this;Object(i["a"])().then((function(t){200===t.code&&(e.addDialog.department=t.data.role,e.addDialog.job=t.data.grade,e.addDialog.visible=!0)})).catch((function(e){console.log(e)}))},staffAdd:function(e){var t=this;this.$refs[e].validate((function(a){if(!a)return!1;Object(i["a"])(t.addDialog.ruleForm).then((function(a){200===a.code&&(t.resetForm(e),t.addDialog.visible=!1,t.getList(),t.$message.success("新增成功！"))})).catch((function(e){console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields()},staffEditDialogShow:function(e){var t=this;Object(i["c"])({id:e.id}).then((function(e){200===e.code&&(t.editDialog.department=e.data.role,t.editDialog.job=e.data.grade,t.editDialog.ruleForm.id=e.data.info.id,t.editDialog.ruleForm.a_account=e.data.info.a_account,t.editDialog.ruleForm.a_username=e.data.info.a_username,t.editDialog.ruleForm.ag_id=e.data.info.rg_id,t.editDialog.ruleForm.role_id=e.data.info.r_id,t.editDialog.visible=!0)})).catch((function(e){console.log(e)}))},staffEditConfirm:function(e){var t=this;this.$refs[e].validate((function(a){if(!a)return!1;Object(i["c"])(t.editDialog.ruleForm).then((function(a){200===a.code&&(t.resetForm(e),t.editDialog.visible=!1,t.getList())})).catch((function(e){console.log(e)}))}))},staffIsSwitch:function(e){var t=this,a={id:e.id,is_switch:e.is_switch?1:0};Object(i["d"])(a).then((function(a){200===a.code?t.$message.success("操作成功"):e.is_switch=e.is_switch?0:1})).catch((function(e){console.log(e)}))},goToAuth:function(e){console.log(e),this.$router.push({path:"/staffAuth",query:{admin_id_role_id:e.role_id,admin_id:e.id}})}},beforeMount:function(){this.getList()}},n=l,s=(a("9b29"),a("2877")),u=Object(s["a"])(n,r,o,!1,null,"c7b1535c",null);t["default"]=u.exports},"76bb":function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return u}));var r=a("b775"),o=function(e){return Object(r["a"])({url:"/auth/admin_manage/getList",method:"post",data:e})},i=function(e){return Object(r["a"])({url:"/auth/admin_manage/add",method:"post",data:e})},l=function(e){return Object(r["a"])({url:"/auth/admin_manage/edit",method:"post",data:e})},n=function(e){return Object(r["a"])({url:"/auth/admin_manage/del",method:"post",data:e})},s=function(e){return Object(r["a"])({url:"/auth/admin_manage/isSwitch",method:"post",data:e})},u=function(e){return Object(r["a"])({url:"/auth/admin_manage/setAuth",method:"post",data:e})}},"9b29":function(e,t,a){"use strict";var r=a("e3ab"),o=a.n(r);o.a},b775:function(e,t,a){"use strict";var r,o=a("bc3a"),i=a.n(o),l=a("5c96"),n=a("4360"),s=i.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});s.interceptors.request.use((function(e){return r=l["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e}),(function(e){return console.log(e),Promise.reject()})),s.interceptors.response.use((function(e){if(r.close(),200===e.status)return-1==e.data.code&&(n["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=e.data.code&&(l["Message"].closeAll(),Object(l["Message"])({message:e.data.msg,type:"error"})),e.data;Promise.reject()}),(function(e){return r.close(),console.log(e),Promise.reject()})),t["a"]=s},e3ab:function(e,t,a){}}]);