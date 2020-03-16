<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>部门管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div>
                <el-button type="primary" plain @click="addDialogShow">添加</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table
                    :data="responseData"
                    style="width: 100%">
                <el-table-column prop="r_name" label="部门名称"></el-table-column>
                <el-table-column prop="p_name" label="上级部门"></el-table-column>
                <el-table-column prop="r_desc" label="职能描述"></el-table-column>
                <el-table-column prop="create_time" label="添加时间"></el-table-column>
                <el-table-column label="是否启用">
                    <template slot-scope="scope">
                        <el-switch
                                active-color="#13ce66"
                                v-model="scope.row.is_switch"
                                :active-value="1"
                                :inactive-value="0"
                                @change="isSwitch(scope.row)"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="goToAuth(scope.row)">权限管理</el-button>
                        <el-button type="text" @click="editDialogShow(scope.row)">编辑</el-button>
                        <el-button type="text" @click="deleteDepartment(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>
        </div>

        <el-dialog v-dialogDrag title="添加部门" center :visible.sync="addDepartmentDialog.visible" width="30%">
            <el-form :model="addDepartmentDialog.ruleForm" :rules="addDepartmentDialog.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="部门名称" prop="r_name">
                    <el-input v-model="addDepartmentDialog.ruleForm.r_name"></el-input>
                </el-form-item>
                <el-form-item label="上级部门" prop="r_pid">
                    <el-select v-model="addDepartmentDialog.ruleForm.r_pid" placeholder="请选择">
                        <el-option v-for="(item, index) in addDepartmentDialog.department" :key="index" :label="item.r_name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="职能描述" prop="r_desc">
                    <el-input type="textarea" v-model="addDepartmentDialog.ruleForm.r_desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addDepartment('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog v-dialogDrag title="编辑部门" center :visible.sync="editDepartmentDialog.visible" width="30%">
            <el-form :model="editDepartmentDialog.ruleForm" :rules="editDepartmentDialog.rules" ref="editRuleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="部门名称" prop="r_name">
                    <el-input v-model="editDepartmentDialog.ruleForm.r_name"></el-input>
                </el-form-item>
                <el-form-item label="上级部门" prop="r_pid">
                    <el-select v-model="editDepartmentDialog.ruleForm.r_pid" placeholder="请选择">
                        <el-option v-for="(item, index) in editDepartmentDialog.department" :key="index" :label="item.r_name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="职能描述" prop="r_desc">
                    <el-input type="textarea" v-model="editDepartmentDialog.ruleForm.r_desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="editDepartmentConfirm('editRuleForm')">确认编辑</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import { list, add, edit, del, isSwitch } from '../../../api/department';

    export default {
        name: 'index',
        data(){
            return {
                responseData: [],

                addDepartmentDialog: {
                    visible: false,
                    // 上级部门
                    department: [],
                    ruleForm: {
                        r_pid: '',//上级栏目ID
                        r_name: '',//部门名称
                        r_level:'',//层级(数据来源上级栏目接口中)
                        r_desc: ''//职能描述
                    },
                    rules: {
                        r_pid: [
                            { required: true, message: '请选择上级部门', trigger: 'blur' },
                        ],
                        r_name: [
                            { required: true, message: '请输入部门名称', trigger: 'blur' },
                        ],
                        r_desc: [
                            { required: true, message: '请填写职能描述', trigger: 'blur' }
                        ]
                    },
                },
                editDepartmentDialog: {
                    visible: false,
                    // 上级部门
                    department: [],
                    ruleForm: {
                        id: '',
                        r_pid: '',//上级栏目ID
                        r_name: '',//部门名称
                        r_level:'',//层级(数据来源上级栏目接口中)
                        r_desc: ''//职能描述
                    },
                    rules: {
                        r_pid: [
                            { required: true, message: '请选择上级部门', trigger: 'blur' },
                        ],
                        r_name: [
                            { required: true, message: '请输入部门名称', trigger: 'blur' },
                        ],
                        r_desc: [
                            { required: true, message: '请填写职能描述', trigger: 'blur' }
                        ]
                    },
                },
            }
        },
        methods: {
            // 新增对话框显示
            addDialogShow(){
                add().then(res => {
                    if (res.code === 200) {
                        this.addDepartmentDialog.visible = true;
                        res.data.push({id: 0, r_name: '顶级部门'});
                        this.addDepartmentDialog.department = res.data;
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            // 新增
            addDepartment(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        add(this.addDepartmentDialog.ruleForm).then(res => {
                            if (res.code === 200) {
                                this.resetForm(formName);
                                this.addDepartmentDialog.visible = false;
                                this.$message({
                                    type: 'success',
                                    message: '添加成功!'
                                });
                                this.getList();
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 编辑部门对话框显示
            editDialogShow(scope){
                edit({id: scope.id}).then(res => {
                    if (res.code === 200) {
                        this.editDepartmentDialog.department = res.data.parent;
                        this.editDepartmentDialog.ruleForm.id = res.data.info.id;
                        this.editDepartmentDialog.ruleForm.r_pid = res.data.info.r_pid;
                        this.editDepartmentDialog.ruleForm.r_name = res.data.info.r_name;
                        this.editDepartmentDialog.ruleForm.r_level = res.data.info.r_level;
                        this.editDepartmentDialog.ruleForm.r_desc = res.data.info.r_desc;
                        this.editDepartmentDialog.visible = true;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            editDepartmentConfirm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.editDepartmentDialog.department.map((item) => {
                            if (item.id === this.editDepartmentDialog.ruleForm.r_pid) {
                                this.editDepartmentDialog.ruleForm.r_level = item.r_level;
                            }
                        });
                        edit(this.editDepartmentDialog.ruleForm).then(res => {
                            if (res.code === 200) {
                                this.getList();
                                this.resetForm(formName);
                                this.editDepartmentDialog.visible = false;
                                this.$message({
                                    type: 'success',
                                    message: '编辑成功!'
                                });
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } else {
                        return false;
                    }
                });
            },


            // 删除部门
            deleteDepartment(scope){
                const requestData = {
                    id: scope.id
                };
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    del(requestData).then(res => {
                        if (res.code === 200) {
                            this.getList();
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                        this.$message.error('操作失败');
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            //获取部门列表
            getList(){
              const requestData = {
                  page: 1,
                  limit: 10,
              }
              list(requestData).then(res => {
                  if (res.code === 200){
                    this.responseData = res.data
                  }
              }).catch(err => {
                  console.log(err)
              })
            },

            //是否启用
            isSwitch(scope){
                const requestData = {
                    id: scope.id,
                    is_switch: scope.is_switch ? 1 : 0
                };
                isSwitch(requestData).then(res => {
                    if (res.code === 200){
                        this.$message.success('操作成功');
                    } else {
                        scope.is_switch = scope.is_switch ? 0 : 1
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            // 权限管理页面
            goToAuth(scope) {
                this.$router.push({
                    path: '/departmentAuth',
                    query: {
                        role_id: scope.id
                    }
                })
            },

        },
        beforeMount() {
            this.getList()
        },
    };
</script>

<style scoped lang="scss">

</style>
