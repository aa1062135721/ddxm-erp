<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input class="my-input" placeholder="仓库名" v-model="requestData.seach_val" clearable></el-input>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" plain @click="addDialog.isShow = true" v-if="$_has('add')">新增</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" :data="responseData.data">
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="w_name" label="仓库名"></el-table-column>
                    <el-table-column prop="w_address" label="仓库地址"></el-table-column>
                    <el-table-column prop="w_contacts" label="仓库联系人"></el-table-column>
                    <el-table-column prop="w_contacts_phone" label="仓库联系方式"></el-table-column>
                    <el-table-column prop="update_time" label="更新时间"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="myEditDialogShow(scope.row)" v-if="$_has('edit')">编辑</el-button>
                            <el-button type="text" @click="myDelete(scope.row)" v-if="$_has('del')">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="responseData.total">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="新增仓库" center :visible.sync="addDialog.isShow" width="30%">
            <el-form label-width="100px" :model="addDialog.requestData" :rules="addDialog.rules" ref="addDialog">
                <el-form-item label="仓库名字" prop="w_name">
                    <el-input v-model="addDialog.requestData.w_name" placeholder="请输入仓库名字" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="联系人名字" prop="w_contacts">
                    <el-input v-model="addDialog.requestData.w_contacts" placeholder="请输入仓库联系人名字" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="联系人电话" prop="w_contacts_phone">
                    <el-input v-model="addDialog.requestData.w_contacts_phone" placeholder="请输入仓库联系人电话" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="仓库地址" prop="w_address">
                    <el-input v-model="addDialog.requestData.w_address" placeholder="请输入仓库地址" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="desc">
                    <el-input v-model="addDialog.requestData.desc" placeholder="请输入备注信息" class="my-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addDialogSubmit('addDialog')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog v-dialogDrag title="编辑仓库" center :visible.sync="editDialog.isShow" width="30%">
            <el-form label-width="100px" :model="editDialog.requestData" :rules="editDialog.rules" ref="editDialog">
                <el-form-item label="仓库名字" prop="w_name">
                    <el-input v-model="editDialog.requestData.w_name" placeholder="请输入仓库名字" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="联系人名字" prop="w_contacts">
                    <el-input v-model="editDialog.requestData.w_contacts" placeholder="请输入仓库联系人名字" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="联系人电话" prop="w_contacts_phone">
                    <el-input v-model="editDialog.requestData.w_contacts_phone" placeholder="请输入仓库联系人电话" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="仓库地址" prop="w_address">
                    <el-input v-model="editDialog.requestData.w_address" placeholder="请输入仓库地址" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="desc">
                    <el-input v-model="editDialog.requestData.desc" placeholder="请输入备注信息" class="my-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="editDialogSubmit('editDialog')">修改</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import {list, add, edit, del } from '@/api/depot/depot.js'

    export default {
        name: 'index',
        data() {
            return {
                responseData:{
                    total: 0,
                    per_page: 10,
                    current_page: 1,
                    last_page: 1,
                    data: [],
                },
                requestData: {
                    page: 1,
                    seach_val: '',
                },

                addDialog: {
                    isShow: false,
                    rules: {
                        w_name: [
                            { required: true, message: '请输入仓库名', trigger: 'blur' },
                            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                        w_contacts: [
                            { required: true, message: '请输入仓库联系人名', trigger: 'blur' },
                        ],
                        w_contacts_phone: [
                            { required: true, message: '请输入仓库联系人电话', trigger: 'blur' },
                        ],
                        w_address: [
                            { required: true, message: '请输入仓库地址', trigger: 'blur' },
                        ],
                    },
                    requestData: {
                        w_name: '',// 仓库名
                        w_contacts: '',// 仓库联系人名
                        w_contacts_phone: '',// 电话
                        w_address: '',// 地址
                        desc: '',// 备注
                    }
                },
                editDialog: {
                    isShow: false,
                    rules: {
                        w_name: [
                            { required: true, message: '请输入仓库名', trigger: 'blur' },
                            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                        w_contacts: [
                            { required: true, message: '请输入仓库联系人名', trigger: 'blur' },
                        ],
                        w_contacts_phone: [
                            { required: true, message: '请输入仓库联系人电话', trigger: 'blur' },
                        ],
                        w_address: [
                            { required: true, message: '请输入仓库地址', trigger: 'blur' },
                        ],
                    },
                    requestData: {
                        id: '',
                        w_name: '',// 仓库名
                        w_contacts: '',// 仓库联系人名
                        w_contacts_phone: '',// 电话
                        w_address: '',// 地址
                        desc: '',// 备注
                    }
                },
            }
        },
        methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            addDialogSubmit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        add(this.addDialog.requestData).then(res => {
                            if (res.code === 200) {
                                this.resetForm(formName);
                                this.addDialog.isShow = false;
                                this.getList();
                                this.$message.success('新增成功！');
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } else {
                        return false;
                    }
                });
            },

            getList(){
              list(this.requestData).then(res => {
                  if (res.code === 200) {
                      this.responseData = res.data
                  }
              }).catch(err => {
                  console.log(err);
              })
            },

            // 删除
            myDelete(scope){
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

            // 编辑
            myEditDialogShow(scope){
                this.editDialog.requestData.id = scope.id;
                this.editDialog.requestData.w_name = scope.w_name;
                this.editDialog.requestData.w_contacts = scope.w_contacts;
                this.editDialog.requestData.w_contacts_phone = scope.w_contacts_phone;
                this.editDialog.requestData.w_address = scope.w_address;
                this.editDialog.requestData.desc = scope.desc;
                this.editDialog.isShow = true;
            },
            editDialogSubmit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        edit(this.editDialog.requestData).then(res => {
                            if (res.code === 200) {
                                this.resetForm(formName);
                                this.editDialog.isShow = false;
                                this.getList();
                                this.$message.success('修改成功');
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } else {
                        return false;
                    }
                });
            },

            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
        },
        created() {
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
