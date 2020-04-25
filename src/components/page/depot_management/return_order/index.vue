<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>退货单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-select placeholder="状态" v-model="requestData.status" clearable class="my-input">
                    <el-option label="0待入库" value="0"></el-option>
                    <el-option label="1部分入库" value="1"></el-option>
                    <el-option label="2已完成" value="2"></el-option>
                </el-select>
                <el-input v-model="requestData.seach_val" clearable placeholder="商品名称|条形码|退货人手机" class="my-input" style="width: 250px;"></el-input>
            </div>
            <div>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%" border>
                    <el-table-column label="退货人信息" width="280">
                        <template slot-scope="scope">
                            <div>收件人：{{scope.row.o_receiving_realname}}</div>
                            <div>手机号：{{scope.row.o_receiving_mobile}}</div>
                            <div>收货地址：{{scope.row.o_receiving_address}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名称" width="150">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_goods_title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品条形码" width="100">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_goods_code}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品规格">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_goods_key}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="退货数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.ot_number}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="退货信息" width="200">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">
                                已退：{{item.ot_entry_num}}——
                                待退：{{item.stay_num}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="物流信息" width="500">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">
                                物流单号:{{item.ot_logistics_sn}}
<!--                                物流公司编号:{{item.ot_logistics_code}}-->
                                <el-button type="text" @click="viewerLogisticsDialogShow(item.ot_logistics_sn, item.ot_logistics_code)">查看物流</el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" prop="status"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="warehousingDialogShow(scope.row)">入库</el-button>
                            <el-button type="text" @click="warehousingLogDialogShow(scope.row)">入库记录</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        :total="responseData.total"
                        @current-change="handleCurrentChange"
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag  class="send-goods-dialog" title="入库" center :visible.sync="warehousingDialog.isShow" width="50%">
            <el-table :data="warehousingDialog.requestData" style="width: 100%" border>
                <el-table-column prop="goods_title" label="商品名"></el-table-column>
                <el-table-column prop="goods_code" label="条形码"></el-table-column>
                <el-table-column prop="specs_id" label="规格"></el-table-column>
                <el-table-column prop="total_retun_num" label="退货数量"></el-table-column>
                <el-table-column prop="already_num" label="已入库"></el-table-column>
                <el-table-column prop="stay_num" label=" 剩余数量"></el-table-column>
                <el-table-column label="退货数量">
                   <template slot-scope="scope">
                       <el-input v-model="scope.row.return_num"></el-input>
                   </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 50px;text-align: center">
                <el-button type="primary" @click="warehousingDialogSubmit">提交</el-button>
            </div>
        </el-dialog>
        <el-dialog v-dialogDrag  class="send-goods-dialog" title="入库记录" center :visible.sync="warehousingLogDialog.isShow" width="50%">
            <div class="send-goods-dialog-item" v-for="(item, index) in warehousingLogDialog.responseData" :key="index">
                <div class="box">
                    <div>
                        入库仓库：{{item.w_name}}
                    </div>
                    <div>
                        入库人员：{{item.a_username}}
                    </div>
                    <div>
                        入库时间：{{item.create_time}}
                    </div>
                    <div>
                        <el-button type="text" @click="viewerLogisticsDialogShow(item.ot_logistics_sn, item.ot_logistics_code)">查看物流</el-button>
                    </div>
                </div>
                <el-table :data="item.goods_info" style="width: 100%" border>
                    <el-table-column prop="goods_title" label="商品名"></el-table-column>
                    <el-table-column prop="goods_code" label="条形码"></el-table-column>
                    <el-table-column prop="specs_key" label="规格"></el-table-column>
                    <el-table-column prop="ot_num" label="退货总量"></el-table-column>
                    <el-table-column prop="join_num" label="入库量"></el-table-column>
                </el-table>
            </div>
        </el-dialog>
        <logistics :isShow.sync="viewerLogisticsDialog.isShow"
                   :code="viewerLogisticsDialog.code"
                   :sn="viewerLogisticsDialog.sn">
        </logistics>
    </div>
</template>

<script>
    import { list, deliverLog, orderReturnDeliver } from '@/api/depot/returnOrder';
    import logistics from '@/components/common/logistics';

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    status: "", // 状态查询【搜索传】：0待入库、1部分入库、2已完成（三个状态固定死的）
                    seach_val: '',
                    page: 1,
                    limit: 10,
                },
                responseData: {
                    total: 1,
                    per_page: 10,
                    current_page: 1,
                    last_page: 1,
                    data:[]
                },

                // 查看物流弹框
                viewerLogisticsDialog: {
                    isShow: false,
                    code: '',
                    sn: ''
                },

                // 入库弹框
                warehousingDialog: {
                    isShow: false,
                    requestData: [
                        // {
                        //     "specs_id": "",//规格
                        //     "goods_id": 1,//商品id
                        //     "return_num": 1,//退货数量
                        //     "stay_num": 1,//待退数量
                        //     "already_num": 1,//已退数量
                        //     "total_retun_num": 1,//总退货量
                        //     "order_id": 32,//订单ID
                        //     "og_id": 39,//订单商品表ID
                        //     "ot_id": 1,//退货表ID
                        //     "goods_title": "1123213",//商品名称
                        //     "goods_code": "xx1234443",//条形码
                        //     "ot_logistics_code": "23123213",//物流公司编号
                        //     "ot_logistics_sn": "dsdsadsa22222"//物流单号
                        // }
                    ]
                },

                //入库记录
                warehousingLogDialog: {
                    isShow: false,
                    responseData: []
                }
            }
        },
        methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields();
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

            // 查询物流信息弹框
            viewerLogisticsDialogShow(sn, code){
                this.viewerLogisticsDialog = {
                    isShow: true,
                    code: code,
                    sn: sn
                }
            },


            // 入库弹框---显示
            warehousingDialogShow(data){
                let arr = []
                for (const datum of data.items) {
                    arr.push({
                        specs_id: datum.og_goods_key,//规格
                        goods_id: datum.goods_id,//商品id
                        return_num: '',//退货数量, TODO 这个字段是输入的
                        stay_num: datum.stay_num,//待退数量
                        already_num: datum.ot_entry_num,//已退数量
                        total_retun_num: datum.ot_number,//总退货量
                        order_id: datum.order_id,//订单ID
                        og_id: datum.id,//订单商品表ID
                        ot_id: datum.ot_id,//退货表ID
                        goods_title: datum.og_goods_title,//商品名称
                        goods_code: datum.og_goods_code,//条形码
                        ot_logistics_code: datum.ot_logistics_code,//物流公司编号
                        ot_logistics_sn: datum.ot_logistics_sn//物流单号
                    });
                }
                this.warehousingDialog.requestData = arr
                this.warehousingDialog.isShow = true
            },
            // 入库弹框---提交数据
            warehousingDialogSubmit(){
                let flag = false
                for (const argument of this.warehousingDialog.requestData) {
                    if (!argument.return_num || parseInt(argument.return_num) <= 0 || parseInt(argument.return_num) > parseInt(argument.stay_num)){
                        this.$message.error(`【${argument.goods_title}】的退货数量有误！`)
                        flag = true
                        break
                    }
                }
                if (flag) {
                    return
                }
                orderReturnDeliver(this.warehousingDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.getList()
                        this.warehousingDialog.isShow = false
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            // 入库记录弹框--显示
            warehousingLogDialogShow(data){
                const requestData = {
                    order_id: data.id,//订单ID
                };
                deliverLog(requestData).then(res => {
                    if (res.code === 200) {
                        this.warehousingLogDialog.responseData = res.data
                        this.warehousingLogDialog.isShow = true
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
        },
        beforeMount() {
            this.getList();
        },
        components: {
            logistics,
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
            margin-bottom: 10px;
        }
    }

    .send-goods-dialog{
        .send-goods-dialog-item{
            margin-bottom: 50px;
            .box{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                div{
                    margin-right: 20px;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
