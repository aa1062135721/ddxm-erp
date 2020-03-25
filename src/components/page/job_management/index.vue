<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>岗位管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input
                        class="my-input"
                        placeholder="请输入内容"
                        v-model="requestData.rg_name"
                        clearable>
                </el-input>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" plain @click=" addDialog.visible= true" v-if="$_has('add')">添加</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%">
                    <el-table-column prop="rg_name" label="岗位名称"></el-table-column>
                    <el-table-column prop="creata_time" label="添加时间"></el-table-column>
                    <el-table-column label="是否启用" v-if="$_has('edit')">
                        <template slot-scope="scope">
                            <el-switch
                                    v-model="scope.row.is_switch"
                                    :active-value="1"
                                    :inactive-value="0"
                                    active-color="#13ce66"
                                    @change="isSwitchJob(scope.row)"
                            >
                            </el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="editDialog.ruleForm.id = scope.row.id; editDialog.ruleForm.rg_name = scope.row.rg_name; editDialog.visible = true;" v-if="$_has('edit')">编辑</el-button>
                            <el-button type="text" @click="deleteJob(scope.row)" v-if="$_has('del')">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="handleCurrentChange"
                        :total="responseData.count">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="添加岗位" center :visible.sync="addDialog.visible" width="30%">
            <el-form :model="addDialog.ruleForm" :rules="addDialog.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="岗位名称" prop="rg_name">
                    <el-input v-model="addDialog.ruleForm.rg_name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addJob('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog v-dialogDrag title="编辑岗位" center :visible.sync="editDialog.visible" width="30%">
            <el-form :model="editDialog.ruleForm" :rules="editDialog.rules" ref="ruleFormEdit" label-width="100px" class="demo-ruleForm">
                <el-form-item label="岗位名称" prop="rg_name">
                    <el-input v-model="editDialog.ruleForm.rg_name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="editJob('ruleFormEdit')">确认编辑</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import {list, add, edit, del, isSwitch } from '../../../api/job'

    export default {
        name: 'index',
        data(){
            return {
                requestData: {
                    page: 1,
                    rg_name: ''
                },
                responseData: {
                    count: 0,
                    data: []
                },

                addDialog: {
                    visible: false,
                    ruleForm: {
                        rg_name: '',
                    },
                    rules: {
                        rg_name: [
                            { required: true, message: '请输入岗位名称', trigger: 'blur' },
                        ],
                    },
                },
                editDialog: {
                    visible: false,
                    ruleForm: {
                        id: '',
                        rg_name: '',
                    },
                    rules: {
                        rg_name: [
                            { required: true, message: '请输入岗位名称', trigger: 'blur' },
                        ],
                    },
                },
            }
        },
        methods: {
            // 添加 新增
            addJob(formName) {
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

            // 删除
            deleteJob(scope){
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
                    });
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
            // 获取列表
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200){
                        this.responseData = res.data
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            //是否启用操作
            isSwitchJob(scope){
                const requestData = {
                    id: scope.id,
                    is_switch: scope.is_switch ? 1 : 0
                };
                isSwitch(requestData).then(res => {
                    if (res.code === 200){
                        this.$message.success('操作成功');
                    } else {
                        scope.is_switch = scope.is_switch ? 0 : 1;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            // 编辑
            editJob(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        edit(this.editDialog.ruleForm).then(res => {
                            if (res.code === 200) {
                                this.editDialog.visible = false;
                                this.getList();
                                this.$message.success('编辑成功！');
                            }
                        }).catch(err => {
                            console.log(err)
                        });
                    } else {
                        return false;
                    }
                });
            },

        },
        beforeMount() {
            this.getList();
        }

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
