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
                </el-select>
                <depot placeholder="选择仓库"></depot>
                <el-input class="my-input" placeholder="商品名/条形码" clearable v-model="requestData.seach_val"></el-input>
                <el-button type="primary">查询</el-button>
                <el-button type="primary" plain v-if="$_has('export')">导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" :data="responseData.data">
                    <el-table-column prop="w_name" label="仓库"></el-table-column>
                    <el-table-column prop="g_code" label="条形码"></el-table-column>
                    <el-table-column prop="g_title" label="商品名"></el-table-column>
                    <el-table-column label="图片">
                        <template slot-scope="scope">
                            <el-image
                                    class="table-td-thumb"
                                    :src="scope.row.gr_url[0]"
                                    :preview-src-list="scope.row.gr_url"
                            ></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column prop="gs_title" label="规格"></el-table-column>
                    <el-table-column prop="w_stock" label="库存"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text">商品轨迹</el-button>
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

        <el-dialog v-dialogDrag title="某某商品成本轨迹" center width="30%">
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

        <el-dialog v-dialogDrag title="某某商品轨迹" center width="30%">
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
                        @current-change=""
                        :total="100">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { list, } from '../../../../api/depot/inventoryCheck';
    import depot from '../../purchase_management/components/depot/index';

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    page: 1,
                    seach_val: '',
                },
                responseData: {
                    total: 0,
                    data: []
                },
            }
        },
        methods: {
            // 改变页码
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
            // 列表
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200) {
                        this.responseData = res.data;
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
        },
        mounted() {
            this.getList();
        },
        components: {
            depot,
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
