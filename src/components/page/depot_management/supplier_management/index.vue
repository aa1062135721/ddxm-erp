<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>供应商管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input class="my-input" placeholder="供应商名" clearable></el-input>
                <el-button type="primary">查询</el-button>
                <el-button type="primary" plain @click="addDialog.isShow = true">新增</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%">
                    <el-table-column prop="a_account" label="ID"></el-table-column>
                    <el-table-column prop="a_username" label="供应商名"></el-table-column>
                    <el-table-column prop="rg_name" label="付款方式"></el-table-column>
                    <el-table-column prop="r_name" label="发货方式"></el-table-column>
                    <el-table-column prop="r_name" label="更新人"></el-table-column>
                    <el-table-column prop="create_time" label="更新时间"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text">编辑</el-button>
                            <el-button type="text">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="新增供应商" center :visible.sync="addDialog.isShow" width="30%">
            <el-form label-width="100px">
                <el-form-item label="供应商名字">
                    <el-input v-model="addDialog.requestData.name" placeholder="供应商名字" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="付款方式">
                    <el-select  placeholder="请选择">
                        <el-option label="item.r_name" value="item.id"></el-option>
                        <el-option label="item.r_name" value="item.id"></el-option>
                        <el-option label="item.r_name" value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="发货方式">
                    <el-select  placeholder="请选择">
                        <el-option label="item.r_name" value="item.id"></el-option>
                        <el-option label="item.r_name" value="item.id"></el-option>
                        <el-option label="item.r_name" value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="addDialog.requestData.desc" placeholder="仓库地址" class="my-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        name: 'index',
        data() {
            return {
                addDialog: {
                    isShow: false,
                    requestData: {
                        depotName: '',// 仓库名
                        userName: '',// 仓库联系人名
                        userMoblie: '',// 电话
                        address: '',// 地址
                        desc: '',// 备注
                    }
                }
            }
        },
        methods: {}
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
