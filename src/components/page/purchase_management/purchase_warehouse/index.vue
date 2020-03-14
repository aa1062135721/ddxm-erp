<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>采购入库单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <supplier v-model="requestData.sup_id"></supplier>
                <el-select placeholder="发货方式" v-model="requestData.status" clearable class="my-input">
                    <el-option label="待付款" value="0"></el-option>
                    <el-option label="待发货" value="1"></el-option>
                    <el-option label="待入库" value="3"></el-option>
                    <el-option label="部分入库" value="4"></el-option>
                    <el-option label="全部入库" value="5"></el-option>
                </el-select>
                <el-date-picker
                        v-model="requestData.time"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        @change="changeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="采购开始时间"
                        end-placeholder="采购结束时间">
                </el-date-picker>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" plain @click="logisticsDialog.isShow = true">导出</el-button>
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

        <logistics :isShow.sync="logisticsDialog.isShow" :code="logisticsDialog.code" :sn="logisticsDialog.sn"></logistics>
        <el-dialog v-dialogDrag title="入库记录" center :visible.sync="warehouseLogDialog.isShow" width="40%">
            <div v-for="(item, index) in warehouseLogDialog.responseData" :key="index">
                <div>
                    所入仓库：sss
                    入库人员：{{item.p_user_name}}
                    入库时间：{{item.create_time}}
                    查看物流:
                    <el-button type="text">编辑</el-button>
                    <el-button type="text">取消入库</el-button>
                </div>
                <el-table :data="item.items" style="width: 100%">
                    <el-table-column prop="title" label="商品名"></el-table-column>
                    <el-table-column prop="bar_code" label="条形码"></el-table-column>
                    <el-table-column prop="attr_name" label="规格"></el-table-column>
                    <el-table-column prop="num" label="采购数量"></el-table-column>
                    <el-table-column prop="war_num" label="入库数量"></el-table-column>
                </el-table>
            </div>
        </el-dialog>
        <el-dialog v-dialogDrag title="发货" center :visible.sync="sendGoodsDialog.isShow" width="40%">
            <el-form :model="sendGoodsDialog.requestData" :rules="sendGoodsDialog.rules" ref="sendGoodsDialog" label-width="100px" :inline="true">
                <el-form-item label="选择仓库" prop="depot">
                    <depot v-model="sendGoodsDialog.requestData.depot"></depot>
                </el-form-item>
                <el-form-item label="选择快递" prop="">
                    <el-select placeholder="选择快递" clearable>
                        <el-option label="京东" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择快递" prop="">
                    <el-input placeholder="请输入运单号"></el-input>
                </el-form-item>
                <el-form-item label="选择快递" prop="">
                    <el-input placeholder="运费"></el-input>
                </el-form-item>
            </el-form>
            <el-table style="width: 100%;margin: 10px 0;">
                <el-table-column prop="title" label="商品名"></el-table-column>
                <el-table-column prop="bar_code" label="条形码"></el-table-column>
                <el-table-column prop="attr_name" label="规格"></el-table-column>
                <el-table-column prop="num" label="待发货量"></el-table-column>
                <el-table-column label="发货数量"></el-table-column>
            </el-table>
            <div>
                <el-button type="primary">发货</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import depot from '../components/depot/index'
    import supplier from '../components/supplier/index'
    import logistics from '../../../common/logistics'
    import { list, } from '../../../../api/purchase/purchaseWarehouse';
    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    sup_id: '',//供应商ID
                    time:'',
                    start_time: '', //采购时间
                    end_time: '', //采购时间
                    status: '', //状态：0待付款，1待发货，3待入库，4部分入库，5全部入库
                    page: 1,
                    limit: 10,
                },
                responseData: {
                    count: 0,
                    data: []
                },
                warehouseLogDialog: {
                    isShow: false,
                    responseData: []
                },
                logisticsDialog: {
                    isShow: false,
                    code: 'jd',
                    sn: 'JDVE008653429281111'
                },
                sendGoodsDialog: {
                    isShow: true,
                    rules: {
                        depot: [
                            { required: true, message: '请选择仓库', trigger: 'blur' },
                        ]
                    },
                    requestData: {
                        depot: ''
                    },
                },
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
            logistics,
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
