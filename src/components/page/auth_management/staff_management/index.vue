<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>员工管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input
                        class="my-input"
                        placeholder="请输入内容"
                        v-model="requestData.search_val"
                        clearable>
                </el-input>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" plain @click="staffAddDialogShow" v-if="$_has('add')">添加</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%">
                <el-table-column prop="a_account" label="成员账号"></el-table-column>
                <el-table-column prop="a_username" label="姓名"></el-table-column>
                <el-table-column prop="rg_name" label="岗位"></el-table-column>
                <el-table-column prop="r_name" label="所属部门"></el-table-column>
                <el-table-column prop="create_time" label="添加时间"></el-table-column>
                <el-table-column prop="create_time" label="最后登录"></el-table-column>
                <el-table-column label="是否启用" v-if="$_has('edit')">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row.is_switch"
                                :active-value="1"
                                :inactive-value="0"
                                active-color="#13ce66"
                                @change="staffIsSwitch(scope.row)"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="goToAuth(scope.row)">权限管理</el-button>
                        <el-button type="text" @click="staffEditDialogShow(scope.row)" v-if="$_has('edit')">编辑</el-button>
                        <el-button type="text" @click="deleteDepartment(scope.row)" v-if="$_has('del')">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="handleCurrentChange"
                        :total="responseData.total">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="添加员工" center :visible.sync="addDialog.visible" width="30%">
            <el-form :model="addDialog.ruleForm" :rules="addDialog.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="a_account">
                    <el-input v-model="addDialog.ruleForm.a_account"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="a_password">
                    <el-input v-model="addDialog.ruleForm.a_password"  show-password></el-input>
                </el-form-item>
                <el-form-item label="员工姓名" prop="a_username">
                    <el-input v-model="addDialog.ruleForm.a_username"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="role_id">
                    <el-select v-model="addDialog.ruleForm.role_id" placeholder="请选择">
                        <el-option v-for="(item, index) in addDialog.department" :key="index" :label="item.r_name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属岗位" prop="ag_id">
                    <el-select v-model="addDialog.ruleForm.ag_id" placeholder="请选择">
                        <el-option v-for="(item, index) in addDialog.job" :key="index" :label="item.rg_name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="staffAdd('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-dialog v-dialogDrag title="编辑员工" center :visible.sync="editDialog.visible" width="30%">
            <el-form :model="editDialog.ruleForm" :rules="editDialog.rules" ref="editDialog" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="a_account">
                    <el-input v-model="editDialog.ruleForm.a_account"></el-input>
                </el-form-item>
                <el-form-item label="旧密码" prop="a_password">
                    <el-input v-model="editDialog.ruleForm.old_password"  show-password></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="a_password">
                    <el-input v-model="editDialog.ruleForm.a_password"  show-password></el-input>
                </el-form-item>
                <el-form-item label="员工姓名" prop="a_username">
                    <el-input v-model="editDialog.ruleForm.a_username"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="role_id">
                    <el-select v-model="editDialog.ruleForm.role_id" placeholder="请选择">
                        <el-option v-for="(item, index) in editDialog.department" :key="index" :label="item.r_name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属岗位" prop="ag_id">
                    <el-select v-model="editDialog.ruleForm.ag_id" placeholder="请选择">
                        <el-option v-for="(item, index) in editDialog.job" :key="index" :label="item.rg_name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="staffEditConfirm('editDialog')">确认编辑</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import { list, add, edit, del, isSwitch } from '@/api/auth/staff';

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    page: 1,
                    limit: 10,
                    search_val:'', // 搜索时带的值，默认列表查询不传
                },
                responseData: {
                    total:0,
                    per_page: 10,
                    current_page: 1,
                    last_page: 1,
                    data: [
                        {
                            a_account: "admin",
                            a_username: "超级管理员",
                            rg_name: "总经理",
                            r_name: "研发部",
                            create_time: "1970-01-01 08:00:00",
                            is_switch: 0,
                        }
                    ]
                },

                addDialog: {
                    visible: false,
                    ruleForm: {
                        a_account: '',//登录账号
                        a_username: '',//昵称
                        a_password: '',// 密码
                        ag_id: '',//岗位ID
                        role_id: '',//部门ID
                    },
                    rules: {
                        a_account: [
                            { required: true, message: '请输入登录账号', trigger: 'blur' },
                        ],
                        a_username: [
                            { required: true, message: '请输入员工名字', trigger: 'blur' },
                        ],
                        a_password: [
                            { required: true, message: '请输入密码', trigger: 'blur' },
                        ],
                        ag_id: [
                            { required: true, message: '请选择岗位', trigger: 'blur' },
                        ],
                        role_id: [
                            { required: true, message: '请选择部门', trigger: 'blur' },
                        ],
                    },
                    department: [],// 部门
                    job: [],//岗位
                },
                editDialog: {
                    visible: false,
                    ruleForm: {
                        id: 0,
                        a_account: '',//登录账号
                        a_username: '',//昵称
                        a_password: '',// 密码
                        old_password: '',// 旧密码
                        ag_id: '',//岗位ID
                        role_id: '',//部门ID
                    },
                    rules: {
                        a_account: [
                            { required: true, message: '请输入登录账号', trigger: 'blur' },
                        ],
                        a_username: [
                            { required: true, message: '请输入员工名字', trigger: 'blur' },
                        ],
                        a_password: [
                            { required: true, message: '请输入密码', trigger: 'blur' },
                        ],
                        old_password: [
                            { required: true, message: '请输入旧密码', trigger: 'blur' },
                        ],
                        ag_id: [
                            { required: true, message: '请选择岗位', trigger: 'blur' },
                        ],
                        role_id: [
                            { required: true, message: '请选择部门', trigger: 'blur' },
                        ],
                    },
                    department: [],// 部门
                    job: [],//岗位
                },
            }
        },
        methods: {
            // 删除员工
            deleteDepartment(staff){
                const requestData = {
                    id: staff.id
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

            //改变页码
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
            // 获取员工列表
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200) {
                        this.responseData = res.data
                    }
                }).catch(err => {
                    console.log(err)
                })
            },

            //添加员工
            staffAddDialogShow(){
                add().then(res => {
                    if (res.code === 200) {
                       this.addDialog.department = res.data.role;
                       this.addDialog.job = res.data.grade;
                       this.addDialog.visible = true;
                    }
                }).catch(err => {
                    console.log(err)
                })

            },
            staffAdd(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        add(this.addDialog.ruleForm).then(res => {
                            if (res.code === 200) {
                                this.resetForm(formName);
                                this.addDialog.visible = false;
                                this.getList();
                                this.$message.success('新增成功！');
                            }
                        }).catch(err => {
                            console.log(err)
                        });
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 员工的编辑
            staffEditDialogShow(scope){
                edit({id: scope.id}).then(res => {
                    if (res.code === 200) {
                        this.editDialog.department = res.data.role;
                        this.editDialog.job = res.data.grade;

                        this.editDialog.ruleForm.id = res.data.info.id;
                        this.editDialog.ruleForm.a_account = res.data.info.a_account;
                        this.editDialog.ruleForm.a_username = res.data.info.a_username;
                        this.editDialog.ruleForm.ag_id = res.data.info.rg_id;
                        this.editDialog.ruleForm.role_id = res.data.info.r_id;

                        this.editDialog.visible = true;
                    }
                }).catch(err => {
                    console.log(err)
                });

            },
            staffEditConfirm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        edit(this.editDialog.ruleForm).then(res => {
                            if (res.code === 200) {
                                this.resetForm(formName);
                                this.editDialog.visible = false;
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
            //是否启用操作
            staffIsSwitch(staff){
                const requestData = {
                    id: staff.id,
                    is_switch: staff.is_switch ? 1 : 0
                };
                isSwitch(requestData).then(res => {
                    if (res.code === 200){
                        this.$message.success('操作成功');
                    } else {
                        staff.is_switch = staff.is_switch ? 0 : 1;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            // 权限管理页面
            goToAuth(scope) {
                console.log(scope);
                this.$router.push({
                    path: '/staffAuth',
                    query: {
                        admin_id_role_id: scope.role_id,// 部门id
                        admin_id: scope.id,// 员工id
                    }
                })
            },
        },
        beforeMount() {
            this.getList();
        },
    };
</script>

<style scoped lang="scss">
    .search-div{
        display: flex;
        flex-wrap: wrap;
        .my-input{
            width: 150px;
            margin-right: 10px;
        }
    }
</style>
