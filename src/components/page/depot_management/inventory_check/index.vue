<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>库存查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input class="my-input" placeholder="商品名/条形码" clearable v-model="requestData.seach_val"></el-input>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" plain v-if="$_has('export')" @click="myExport">导出</el-button>
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
                    <el-table-column prop="key_name" label="规格"></el-table-column>
                    <el-table-column prop="w_stock" label="库存"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" v-if="$_has('costLocus')" @click="goodsCostLocusDialogShow(scope.row)">商品成本轨迹</el-button>
                            <el-button type="text" v-if="$_has('goodsLocus')" @click="goodsLocusDialogShow(scope.row)">商品轨迹</el-button>
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

        <el-dialog v-dialogDrag :title="goodsCostLocusDialog.goods_name + '的成本轨迹'" center width="30%" :visible.sync="goodsCostLocusDialog.isShow">
            <div style="margin: 40px 0;">
                <el-table style="width: 100%"  height="300" :data="goodsCostLocusDialog.responseData.data">
                    <el-table-column prop="wpc_cost" label="成本"></el-table-column>
                    <el-table-column prop="create_time" label="时间"></el-table-column>
                </el-table>
            </div>
            <div style="text-align: center;">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="goodsCostLocusDialogHandleCurrentChange"
                        :total="goodsCostLocusDialog.responseData.total">
                </el-pagination>
            </div>
        </el-dialog>

        <el-dialog v-dialogDrag :title="goodsLocusDialog.goods_name + '的商品轨迹'" center width="30%" :visible.sync="goodsLocusDialog.isShow">
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" height="300" :data="goodsLocusDialog.responseData.data">
                    <el-table-column prop="num" label="数量"></el-table-column>
                    <el-table-column prop="type" label="进入/进出"></el-table-column>
                    <el-table-column prop="status" label="方式"></el-table-column>
                    <el-table-column prop="create_time" label="时间"></el-table-column>
                </el-table>
            </div>
            <div style="text-align: center;">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="goodsLocusDialogHandleCurrentChange"
                        :total="goodsLocusDialog.responseData.total">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { list, costLocus, goodsLocus, exportFile} from '@/api/depot/inventoryCheck';
    import depot from '@/components/common/Depot.vue';
    import { downloadFile } from '@/utils/index.js';

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
                // 商品轨迹
                goodsLocusDialog: {
                    goods_name: '',
                    isShow: false,
                    requestData: {
                        page: 1,
                        limit: 10,
                        goods_id: 0,//商品ID
                        specs_key: "",//规格（没有规格，默认传""）
                        warehouse_id: 0,//仓库id
                    },
                    responseData: {
                        total: 0,
                        data: []
                    }
                },

                // 商品成本轨迹
                goodsCostLocusDialog: {
                    goods_name: '',
                    isShow: false,
                    requestData: {
                        page: 1,
                        limit: 10,
                        goods_id: 0,//商品ID
                        specs_key: "",//规格
                        warehouse_id: 0,//仓库id
                    },
                    responseData: {
                        total: 0,
                        data: []
                    }
                }
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
            // 导出
            myExport(){
                exportFile().then(res => {
                    downloadFile(res, 'file.xlsx');
                })
            },

            // 商品轨迹对话框   显示
            goodsLocusDialogShow(scope){
                console.log(scope);
                this.goodsLocusDialog.goods_name = scope.g_title;
                this.goodsLocusDialog.requestData = {
                    page: 1,
                    limit: 10,
                    warehouse_id: scope.id,
                    goods_id: scope.goods_id,
                    specs_key: scope.specs_id || "",
                };
                this.goodsLocusDialogGetList();
            },
            // 商品轨迹对话框   获取列表
            goodsLocusDialogGetList(){
                goodsLocus(this.goodsLocusDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.goodsLocusDialog.responseData = res.data;
                        this.goodsLocusDialog.isShow = true;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            // 商品轨迹对话框  页码切换
            goodsLocusDialogHandleCurrentChange(val){
                this.goodsLocusDialog.requestData.page = val;
                this.goodsLocusDialogGetList();
            },


            // 商品成本轨迹对话框   显示
            goodsCostLocusDialogShow(scope){
                this.goodsCostLocusDialog.goods_name = scope.g_title;
                this.goodsCostLocusDialog.requestData = {
                    page: 1,
                    limit: 10,
                    warehouse_id: scope.id,
                    goods_id: scope.goods_id,
                    specs_key: scope.specs_id || "",
                };
                this.goodsCostLocusDialogGetList();
            },
            // 商品成本轨迹对话框   获取列表
            goodsCostLocusDialogGetList(){
                costLocus(this.goodsCostLocusDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.goodsCostLocusDialog.responseData = res.data;
                        this.goodsCostLocusDialog.isShow = true;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            // 商品成本轨迹对话框  页码切换
            goodsCostLocusDialogHandleCurrentChange(val){
                this.goodsCostLocusDialog.requestData.page = val;
                this.goodsCostLocusDialogGetList();
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
