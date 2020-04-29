<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input placeholder="收货人姓名/收货人手机号码/收货地址" style="width: 300px;" v-model="requestData.memberSearch" clearable class="my-input"></el-input>
                <el-input placeholder="订单编号/商品名称/条形码" style="width: 300px;" v-model="requestData.orderSearch" clearable class="my-input"></el-input>
                <el-date-picker
                        v-model="requestData.time"
                        value-format="yyyy-MM-dd"
                        @change="changeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="支付开始日期"
                        end-placeholder="支付结束时间">
                </el-date-picker>
                <el-select placeholder="支付方式" v-model="requestData.o_pay_type" clearable class="my-input">
                    <el-option label="微信支付" value="1"></el-option>
                    <el-option label="支付宝支付" value="2"></el-option>
                    <el-option label="余额支付" value="3"></el-option>
                </el-select>
                <el-select placeholder="订单类型" v-model="requestData.o_type" clearable class="my-input">
                    <el-option label="普通订单" value="0"></el-option>
                    <el-option label="拼团订单" value="1"></el-option>
                    <el-option label="抢购订单" value="2"></el-option>
                    <el-option label="限时抢购" value="3"></el-option>
                </el-select>
                <el-select placeholder="发货状态" v-model="requestData.o_send_status" clearable class="my-input">
                    <el-option label="未发货" value="0"></el-option>
                    <el-option label="部分发货" value="1"></el-option>
                    <el-option label="已发货" value="2"></el-option>
                </el-select>
            </div>
            <div>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%" border>
                    <el-table-column label="订单信息" width="280">
                        <template slot-scope="scope">
                            <div>订单ID：{{scope.row.id}}</div>
                            <div>订单号：{{scope.row.o_sn}}</div>
                            <div>订单类型：{{scope.row.type_name}}</div>
                            <div>付款金额(包含运费)：{{scope.row.o_pay_amount}}</div>
                            <div>订单运费：{{scope.row.o_freight}}</div>
                            <div>付款方式：{{scope.row.pay_type_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="收货信息" width="280">
                        <template slot-scope="scope">
                            <div>收件人：{{scope.row.o_receiving_realname}}</div>
                            <div>手机号：{{scope.row.o_receiving_mobile}}</div>
                            <div>下单时间：{{scope.row.create_time}}</div>
                            <div>收货地址：{{scope.row.o_receiving_address}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名称" width="150">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_goods_title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品规格">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_goods_key_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品条形码" width="100">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_goods_code}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="单价">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_price}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="购买数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="订单金额" width="150">
                        <template slot-scope="scope">
                            <div>订单金额：{{scope.row.o_total_amount}}</div>
                            <div>支付金额：{{scope.row.o_total_amount - scope.row.o_discount_amount}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态">
                        <template slot-scope="scope">
                            <div>支付状态：{{scope.row.pay_status_name}}</div>
                            <div>发货状态：{{scope.row.send_status_name}}</div>
                            <div>订单状态：{{scope.row.order_process_status_name.name}}</div>
                        </template>
                    </el-table-column>
<!--                    <el-table-column label="操作">-->
<!--                        <template slot-scope="scope">-->
<!--                            <el-button type="text">查看订单</el-button>-->
<!--                            <el-button type="text">关闭订单</el-button>-->
<!--                            <el-button type="text">订单跟踪</el-button>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
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
    </div>
</template>

<script>
    import { list, } from '@/api/order/list';

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    o_pay_type: '', //（商城后台）支付方式：1微信支付、2支付宝支付、3余额支付
                    o_type:'',//（商城后台）订单类型：0普通订单、1拼团订单、2抢购订单、3限时抢购
                    warehouse_id:'', //（商城后台）订单归属门店：
                    memberSearch: '',//（商城后台）收货人信息搜索：收货人姓名、收货手机号码、收货地址
                    orderSearch: '',//（商城后台）订单信息搜索：订单编号、商品名称、商品条形码
                    time: '',
                    o_pay_time_start: '',//（商城后台）支付开始日期
                    o_pay_time_end: '',//（商城后台）支付结束日期
                    o_send_status: '',//（仓库）发货状态：0未发货、1部分发货、2已发货'
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
            // 选择日期
            changeRequestTime(e){
                this.requestData.o_pay_time_start = e[0];
                this.requestData.o_pay_time_end = e[1];
            },
            // 获取列表
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
            margin-bottom: 10px;
        }
    }
</style>
