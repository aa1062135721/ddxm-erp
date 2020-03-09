<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>采购记录</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input
                        class="my-input"
                        placeholder="商品名称/条形码"
                        clearable>
                </el-input>
                <supplier @change="supplierChange"></supplier>
                <el-date-picker
                        class="my-input"
                        style="width: 300px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="采购时间"
                        end-placeholder="采购时间">
                </el-date-picker>
                <depot @change="supplierChange" placeholder="采购到达仓库"></depot>
                <el-button type="primary">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table  style="width: 100%">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column prop="a_username" label="采购信息"></el-table-column>
                    <el-table-column prop="l_ip" label="供应商"></el-table-column>
                    <el-table-column prop="create_time" label="商品名称"></el-table-column>
                    <el-table-column prop="create_time" label="规格"></el-table-column>
                    <el-table-column prop="l_browser" label="条形码"></el-table-column>
                    <el-table-column prop="l_browser" label="采购成本"></el-table-column>
                    <el-table-column prop="l_browser" label="采购数量"></el-table-column>
                    <el-table-column prop="l_browser" label="退货数量"></el-table-column>
                    <el-table-column prop="l_browser" label="运费"></el-table-column>
                    <el-table-column prop="l_browser" label="合计金额"></el-table-column>
                    <el-table-column prop="l_browser" label="备注"></el-table-column>
                    <el-table-column prop="l_browser" label="状态"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="myEditDialogShow(scope.row)">编辑</el-button>
                            <el-button type="text" @click="myDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import supplier from '../components/supplier/index'
    import depot from '../components/depot/index'
    export default {
        name: 'index',
        data() {
            return {

            }
        },
        methods: {
            supplierChange(e){
              console.log(e)
            },
        },
        components: {
            supplier,
            depot,
        },
        beforeMount() {
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
