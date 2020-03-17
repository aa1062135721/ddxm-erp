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
                <el-select placeholder="是否有货" v-model="requestData.is_price_firse" clearable class="my-input">
                    <el-option label="是" value="1"></el-option>
                    <el-option label="否" value="0"></el-option>
                </el-select>
                <el-select placeholder="选择状态" v-model="requestData.pick_way" clearable class="my-input">
                    <el-option label="待发货" value="2"></el-option>
                </el-select>
                <el-date-picker
                        v-model="requestData.time"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        @change="changeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="下单开始时间"
                        end-placeholder="下单结束时间">
                </el-date-picker>
                <el-date-picker
                        v-model="requestData.time"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        @change="changeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="发货开始时间"
                        end-placeholder="发货结束时间">
                </el-date-picker>
                <depot placeholder="采购到达仓库" v-model="requestData.sup_id"></depot>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column prop="id" label="采购单ID"></el-table-column>
                    <el-table-column prop="sn" label="采购单订单编号"></el-table-column>
                    <el-table-column prop="sup_name" label="供应商"></el-table-column>
                    <el-table-column label="采购单商品信息">
                        <template slot-scope="scope">
                            <el-table :data="scope.row.items" style="width: 100%">
                                <el-table-column type="index" label="序号"></el-table-column>
                                <el-table-column prop="item_id" label="商品ID"></el-table-column>
                                <el-table-column prop="bar_code" label="条形码"></el-table-column>
                                <el-table-column prop="title" label="商品名"></el-table-column>
                                <el-table-column prop="price" label="采购成本"></el-table-column>
                                <el-table-column prop="num" label="采购数量"></el-table-column>
                                <el-table-column prop="amount" label="采购总计"></el-table-column>
                                <el-table-column prop="refund_num" label="退货数量"></el-table-column>
                                <el-table-column prop="deliver_status" label="发货状态"></el-table-column>
                                <el-table-column prop="refund_status" label="退货状态"></el-table-column>
                                <el-table-column prop="deliver_num" label="已发货数量"></el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price_firse" label="是否先打款"></el-table-column>
                    <el-table-column prop="pick_way_name" label="采购到达"></el-table-column>
                    <el-table-column prop="postage" label="运费"></el-table-column>
                    <el-table-column prop="amount" label="采购单总金额（包含运费）"></el-table-column>
                    <el-table-column prop="remarks" label="采购单备注"></el-table-column>
                    <el-table-column prop="is_pay" label="是否已经打款"></el-table-column>
                    <el-table-column prop="status_name" label="采购单状态"></el-table-column>
                    <el-table-column prop="refund_status" label="采购单退货状态"></el-table-column>
                    <el-table-column prop="create_time" label="采购时间"></el-table-column>
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
                        :total="responseData.count"
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
    import { list, del, } from '../../../../api/purchase/purchaseLog';
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
