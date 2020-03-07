<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>库存查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-select placeholder="选择商品一级分类" style="margin-right: 10px;">
                    <el-option label="item.r_name" value="item.id"></el-option>
                    <el-option label="item.r_name" value="item.id"></el-option>
                    <el-option label="item.r_name" value="item.id"></el-option>
                </el-select>
                <el-select placeholder="选择商品二级分类" style="margin-right: 10px;">
                    <el-option label="item.r_name" value="item.id"></el-option>
                    <el-option label="item.r_name" value="item.id"></el-option>
                    <el-option label="item.r_name" value="item.id"></el-option>
                </el-select>
                <el-select placeholder="选择仓库" style="margin-right: 10px;">
                    <el-option label="item.r_name" value="item.id"></el-option>
                    <el-option label="item.r_name" value="item.id"></el-option>
                    <el-option label="item.r_name" value="item.id"></el-option>
                </el-select>
                <el-input class="my-input" placeholder="商品名/条形码" clearable></el-input>
                <el-button type="primary">查询</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%">
                    <el-table-column prop="a_account" label="ID"></el-table-column>
                    <el-table-column prop="a_username" label="仓库"></el-table-column>
                    <el-table-column prop="rg_name" label="商品名"></el-table-column>
                    <el-table-column prop="rg_name" label="条形码"></el-table-column>
                    <el-table-column prop="rg_name" label="一级分类"></el-table-column>
                    <el-table-column prop="rg_name" label="二级分类"></el-table-column>
                    <el-table-column prop="rg_name" label="库存"></el-table-column>
                    <el-table-column prop="rg_name" label="平均成本"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text">编辑</el-button>
                            <el-button type="text">商品轨迹</el-button>
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

        <el-dialog v-dialogDrag title="某某商品成本轨迹" center :visible.sync="isShow" width="30%">
            <div style="margin: 40px 0;">
                <el-table style="width: 100%"  height="300">
                    <el-table-column prop="a_account" label="成本"></el-table-column>
                    <el-table-column prop="a_username" label="时间"></el-table-column>
                </el-table>
            </div>
            <div style="text-align: center;">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100">
                </el-pagination>
            </div>
        </el-dialog>

        <el-dialog v-dialogDrag title="某某商品轨迹" center :visible.sync="isShow" width="30%">
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" height="300">
                    <el-table-column prop="a_account" label="数量"></el-table-column>
                    <el-table-column prop="a_account" label="进入/进出"></el-table-column>
                    <el-table-column prop="a_account" label="方式"></el-table-column>
                    <el-table-column prop="a_username" label="时间"></el-table-column>
                </el-table>
            </div>
            <div style="text-align: center;">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        name: 'index',
        data() {
            return {
                isShow: true
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
