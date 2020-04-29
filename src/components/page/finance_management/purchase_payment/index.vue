<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>采购打款单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <supplier v-model="requestData.sup_id"></supplier>
                <el-select placeholder="是否先打款" v-model="requestData.is_price_firse" clearable class="my-input">
                    <el-option label="是" value="1"></el-option>
                    <el-option label="否" value="0"></el-option>
                </el-select>
                <el-select placeholder="发货方式" v-model="requestData.pick_way" clearable class="my-input">
                    <el-option label="自提" value="2"></el-option>
                    <el-option label="发给仓库" value="1"></el-option>
                    <el-option label="发给客户" value="3"></el-option>
                </el-select>
                <el-date-picker
                        v-model="requestData.time"
                        value-format="yyyy-MM-dd"
                        @change="changeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="采购开始时间"
                        end-placeholder="采购结束时间">
                </el-date-picker>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" v-if="$_has('export')" @click="myExport" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column label="采购单信息" width="280">
                        <template slot-scope="scope">
                            <div>采购人：{{scope.row.user_name}}</div>
                            <div>供应商：{{scope.row.sup_name}}</div>
                            <div>采购单订单编号：{{scope.row.sn}}</div>
                            <div>采购时间：{{scope.row.create_time}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price_firse" label="是否先打款"></el-table-column>
                    <el-table-column label="商品条形码" width="200">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.bar_code}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名称" width="200">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品规格">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.attr_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="采购数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="postage" label="运费"></el-table-column>
                    <el-table-column label="合计金额">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.amount}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remarks" label="备注"></el-table-column>
                    <el-table-column prop="status_name" label="状态"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">
                                <el-button type="text" v-if="$_has('purItemRecord')" @click="purchaseHistoryDialogShow(item)">采购历史</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        :total="responseData.count"
                        @current-change="handleCurrentChange"
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </div>

        <!-- 采购历史记录 -->
        <el-dialog title="采购历史" :visible.sync="purchaseHistoryDialog.isShow" width="40%" center>
            <div style="margin-bottom: 20px;">
                <el-date-picker
                        v-model="purchaseHistoryDialog.requestData.time"
                        @change="purchaseHistoryDialogChangeRequestTime"
                        class="my-input"
                        style="max-width: 300px;margin-right: 10px;"
                        type="datetimerange"
                        value-format="yyyy-MM-dd"
                        range-separator="至"
                        start-placeholder="采购开始时间"
                        end-placeholder="采购结束时间">
                </el-date-picker>
                <el-button type="primary" @click="purchaseHistoryDialogSearchBtn">搜索</el-button>
            </div>
            <div style="margin-bottom: 20px;">
                <el-tag type="danger" style="margin-right: 10px;">平均单价：{{purchaseHistoryDialog.responseData.meanPrice}}</el-tag>
                <el-tag type="danger" style="margin-right: 10px;">平均采购量：{{purchaseHistoryDialog.responseData.meanNum}}</el-tag>
                <el-tag type="danger" style="margin-right: 10px;">总采购量：{{purchaseHistoryDialog.responseData.allNum}}</el-tag>
            </div>
            <div style="margin-bottom: 20px;">
                <el-table style="width: 100%" max-height="500px" :data="purchaseHistoryDialog.responseData.data">
                    <el-table-column prop="sup_name" label="供应商名称"></el-table-column>
                    <el-table-column prop="num" label="采购的数量"></el-table-column>
                    <el-table-column prop="price" label="采购的单价"></el-table-column>
                    <el-table-column prop="create_time" label="采购的时间"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        :total="purchaseHistoryDialog.responseData.count"
                        @current-change="purchaseHistoryDialogHandleCurrentChange"
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import supplier from '../../purchase_management/components/supplier/index'
    import depot from '../../purchase_management/components/depot/index'
    import { list, costOrRecord, exportFile } from '@/api/finance/purchase';
    import { downloadFile } from '@/utils/index.js'

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    sup_id: '',//供应商ID
                    is_price_firse: '', //是否先打款：1是0否
                    time:'',
                    start_time: '', //采购时间
                    end_time: '', //采购时间
                    pick_way: '', //发货方式：1发给仓库，2自提，3发给客户
                    page: 1,
                    limit: 10,
                },
                responseData: {
                    count: 0,
                    data: []
                },

                // 采购历史
                purchaseHistoryDialog: {
                    isShow: false,
                    requestData: {
                        page: 1,
                        limit: 10,
                        item_id: '',// 商品id
                        attr_ids: '',// 规格ID组
                        start_time: '', //开始日期
                        end_time: '', //开始日期
                        time: '',
                    },
                    responseData: {
                        count: 0, //总条数/总采购次数
                        meanPrice: 0,//平均单价
                        meanNum: 0, //平均采购量
                        allNum: 0,       //总采购量
                        data: [],
                    },
                }
            }
        },
        methods: {
            changeRequestTime(e){
                this.requestData.start_time = e[0];
                this.requestData.end_time = e[1];
            },
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200) {
                        this.responseData =  res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            // 分页
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },

            // 采购历史  弹框展示
            purchaseHistoryDialogShow(scope){
                this.purchaseHistoryDialog.requestData.item_id = scope.item_id;
                this.purchaseHistoryDialog.requestData.attr_ids = scope.attr_ids;
                this.purchaseHistoryDialogSearchBtn();
            },
            // 采购历史  选择 开始时间和结束时间
            purchaseHistoryDialogChangeRequestTime(e){
                this.purchaseHistoryDialog.requestData.start_time = e[0];
                this.purchaseHistoryDialog.requestData.end_time = e[1];
            },
            // 采购历史  页码切换
            purchaseHistoryDialogHandleCurrentChange(e){
                this.purchaseHistoryDialog.requestData.page = e;
                this.purchaseHistoryDialogSearchBtn();
            },
            // 采购历史  搜索按钮
            purchaseHistoryDialogSearchBtn(){
                costOrRecord(this.purchaseHistoryDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.purchaseHistoryDialog.responseData = res.data;
                        this.purchaseHistoryDialog.isShow = true;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },


            // 我的导出
            myExport(){
                exportFile().then(res => {
                    downloadFile(res, 'file.xlsx');
                })
            }
        },
        components: {
            supplier,
            depot,
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
