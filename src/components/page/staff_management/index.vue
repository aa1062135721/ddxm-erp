<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>员工管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div>
                <el-button type="primary" plain @click="addDialog.visible = true">添加</el-button>
            </div>
            <div>
                <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="成员账号"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="address" label="所属部门"></el-table-column>
                <el-table-column prop="date" label="添加时间"></el-table-column>
                <el-table-column prop="date" label="最后登录"></el-table-column>
                <el-table-column label="是否启用">
                    <template slot-scope="scope">
                        <el-switch
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text">权限管理</el-button>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text" @click="deleteDepartment(scope)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="添加员工" center :visible.sync="addDialog.visible" width="30%">
            <el-form :model="addDialog.ruleForm" :rules="addDialog.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="account">
                    <el-input v-model="addDialog.ruleForm.account"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="pass">
                    <el-input v-model="addDialog.ruleForm.pass"  show-password></el-input>
                </el-form-item>
                <el-form-item label="员工姓名" prop="name">
                    <el-input v-model="addDialog.ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="员工邮箱" prop="email">
                    <el-input v-model="addDialog.ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="desc">
                    <el-select v-model="addDialog.ruleForm.department" placeholder="请选择">
                        <el-option v-for="item in department" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属岗位" prop="job">
                    <el-select v-model="addDialog.ruleForm.job" placeholder="请选择">
                        <el-option v-for="item in job" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注信息" prop="desc">
                    <el-input type="textarea" v-model="addDialog.ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                job: [
                    {
                        id: 1,
                        name: 'PHP开发工程师',
                    },
                    {
                        id: 2,
                        name: '前端开发工程师',
                    },
                    {
                        id: 2,
                        name: '客服',
                    },
                ],
                department: [
                    {
                        id: 1,
                        name: '电商部',
                    },
                    {
                        id: 2,
                        name: '研发部',
                    },
                    {
                        id: 2,
                        name: '财务部',
                    },
                ],
                addDialog: {
                    visible: false,
                    ruleForm: {
                        account: '',
                        name: '',
                        email:'',
                        department: '',
                        job: '',
                        pass: '',
                        desc: ''
                    },
                    rules: {
                        name: [
                            { required: true, message: '请输入部门名称', trigger: 'blur' },
                        ],
                        desc: [
                            { required: true, message: '请填写职能描述', trigger: 'blur' }
                        ]
                    },
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            deleteDepartment(scope){
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }

    };
</script>

<style scoped lang="scss">

</style>
