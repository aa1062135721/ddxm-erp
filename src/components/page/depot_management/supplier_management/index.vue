<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>供应商管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input class="my-input" placeholder="供应商名" clearable v-model="requestData.seach_val"></el-input>
                <el-button type="primary">查询</el-button>
                <el-button type="primary" plain @click="addDialogShow()">新增</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" :data="responseData.data">
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="s_code" label="供应商编号"></el-table-column>
                    <el-table-column prop="s_name" label="供应商名"></el-table-column>
                    <el-table-column prop="s_phone" label="联系方式"></el-table-column>
                    <el-table-column prop="pay_type" label="付款方式"></el-table-column>
                    <el-table-column prop="send_type" label="发货方式"></el-table-column>
                    <el-table-column prop="desc" label="备注"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="editDialogShow(scope.row)">编辑</el-button>
                            <el-button type="text" @click="myDelete(scope.row)">删除</el-button>
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

        <el-dialog v-dialogDrag title="新增供应商" center :visible.sync="addDialog.isShow" width="30%">
            <el-form label-width="120px" :model="addDialog.requestData" :rules="addDialog.rules" ref="addDialog">
                <el-form-item label="供应商编码" prop="s_code">
                    <el-input v-model="addDialog.requestData.s_code" placeholder="供应商编码" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="供应商名字" prop="s_name">
                    <el-input v-model="addDialog.requestData.s_name" placeholder="供应商名字" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="供应商联系方式" prop="s_phone">
                    <el-input v-model="addDialog.requestData.s_phone" placeholder="供应商联系方式" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="付款方式" prop="pay_type">
                    <el-select  placeholder="请选择" v-model="addDialog.requestData.pay_type">
                        <el-option v-for="item in addDialog.responseData.pay_list" :key="item.id" :label="item.pay_type" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="付款时间" prop="pay_time">
                    <el-input v-model="addDialog.requestData.pay_time" placeholder="付款时间" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="发货方式" prop="send_type">
                    <el-select  placeholder="请选择" v-model="addDialog.requestData.send_type">
                        <el-option v-for="item in addDialog.responseData.send_list" :key="item.id" :label="item.send_type" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="desc">
                    <el-input v-model="addDialog.requestData.desc" placeholder="备注" class="my-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addDialogSubmit('addDialog')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog v-dialogDrag title="编辑供应商" center :visible.sync="editDialog.isShow" width="30%">
            <el-form label-width="120px" :model="editDialog.requestData" :rules="editDialog.rules" ref="editDialog">
                <el-form-item label="供应商编码" prop="s_code">
                    <el-input v-model="editDialog.requestData.s_code" placeholder="供应商编码" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="供应商名字" prop="s_name">
                    <el-input v-model="editDialog.requestData.s_name" placeholder="供应商名字" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="供应商联系方式" prop="s_phone">
                    <el-input v-model="editDialog.requestData.s_phone" placeholder="供应商联系方式" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="付款方式" prop="pay_type">
                    <el-select  placeholder="请选择" v-model="editDialog.requestData.pay_type">
                        <el-option v-for="item in editDialog.responseData.pay_list" :key="item.id" :label="item.pay_type" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="付款时间" prop="pay_time">
                    <el-input v-model="editDialog.requestData.pay_time" placeholder="付款时间" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="发货方式" prop="send_type">
                    <el-select  placeholder="请选择" v-model="editDialog.requestData.send_type">
                        <el-option v-for="item in editDialog.responseData.send_list" :key="item.id" :label="item.send_type" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="desc">
                    <el-input v-model="editDialog.requestData.desc" placeholder="备注" class="my-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="editDialogSubmit('editDialog')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import { list, edit, del, add, } from '@/api/depot/supplier';

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    page: 1,
                    seach_val: '',
                },
                responseData: {
                    total: 1,
                    data: []
                },

                addDialog: {
                    isShow: false,
                    responseData: {
                        pay_list: [],
                        send_list: [],
                    },
                    rules: {
                        s_code: [
                            { required: true, message: '供应商编码', trigger: 'blur' },
                        ],
                        s_name: [
                            { required: true, message: '请输入供应商名', trigger: 'blur' },
                        ],
                        s_phone: [
                            { required: true, message: '请输入供应商联系方式', trigger: 'blur' },
                        ],
                        pay_type: [
                            { required: true, message: '请选择付款方式', trigger: 'blur' },
                        ],
                        pay_time: [
                            { required: true, message: '请选择付款时间', trigger: 'blur' },
                        ],
                        send_type: [
                            { required: true, message: '发货方式', trigger: 'blur' },
                        ],
                    },
                    requestData: {
                        s_name: '',
                        s_phone: '',
                        pay_type: '',
                        pay_time: '',
                        send_type: '',
                        s_code: '',
                        desc: '',// 备注
                    }
                },
                editDialog: {
                    isShow: false,
                    responseData: {
                        pay_list: [],
                        send_list: [],
                    },
                    rules: {
                        s_code: [
                            { required: true, message: '供应商编码', trigger: 'blur' },
                        ],
                        s_name: [
                            { required: true, message: '请输入供应商名', trigger: 'blur' },
                        ],
                        s_phone: [
                            { required: true, message: '请输入供应商联系方式', trigger: 'blur' },
                        ],
                        pay_type: [
                            { required: true, message: '请选择付款方式', trigger: 'blur' },
                        ],
                        pay_time: [
                            { required: true, message: '请选择付款时间', trigger: 'blur' },
                        ],
                        send_type: [
                            { required: true, message: '发货方式', trigger: 'blur' },
                        ],
                    },
                    requestData: {
                        s_name: '',
                        s_phone: '',
                        pay_type: '',
                        pay_time: '',
                        send_type: '',
                        s_code: '',
                        desc: '',// 备注
                    }
                },
            }
        },
        methods: {
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200) {
                        this.responseData = res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 新增
            addDialogShow(){
                add().then(res => {
                    if (res.code === 200) {
                        this.addDialog.responseData = res.data;
                        this.addDialog.isShow = true;
                    }
                }).catch(err => {
                    console.log(err);
                })
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

            //编辑
            editDialogShow(scope){
                edit({id: scope.id}).then(res => {
                    if (res.code === 200) {
                        this.editDialog.responseData = res.data;
                        // this.editDialog.requestData.id = scope.id;
                        this.editDialog.requestData = Object.assign(this.editDialog.requestData, res.data.info);
                        this.editDialog.isShow = true;
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            editDialogSubmit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        edit(this.editDialog.requestData).then(res => {
                            if (res.code === 200) {
                                this.resetForm(formName);
                                this.editDialog.isShow = false;
                                this.getList();
                                this.$message.success('编辑成功！');
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } else {
                        return false;
                    }
                });
            },

            // 分页
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
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
