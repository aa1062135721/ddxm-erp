<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>发货单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
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
                    <el-table-column label="收货信息" width="280">
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
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_goods_key_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="购买数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="发货数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_sent_num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="货物状态">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_sent_num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="下单时间" prop="create_time"></el-table-column>
                    <el-table-column label="状态">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.og_send_status_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="sendGoodsDialogShow(scope.row)">发货</el-button>
                            <el-button type="text" @click="sendGoodsLogDialogShow(scope.row)">发货记录</el-button>
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

        <el-dialog v-dialogDrag  class="send-goods-dialog" title="发货" center :visible.sync="sendGoodsDialog.isShow" width="50%">
            <div class="send-goods-dialog-item">
                <el-divider content-position="left">收货信息</el-divider>
                <div>
                    <div>收件人：{{sendGoodsDialog.responseData.address.o_receiving_realname}} </div>
                    <div>联系方式：{{sendGoodsDialog.responseData.address.o_receiving_mobile}} </div>
                    <div>收货地址：{{sendGoodsDialog.responseData.address.o_receiving_address}} </div>
                </div>
            </div>
            <div class="send-goods-dialog-item">
                <el-divider content-position="left">填写发货信息</el-divider>
                <el-form label-width="150px" :model="sendGoodsDialog.requestData" :rules="sendGoodsDialog.rules" ref="sendGoods" class="search-div">
                    <el-form-item label="请选择发货仓库" prop="warehouse_id">
                        <depot v-model="sendGoodsDialog.requestData.warehouse_id"></depot>
                    </el-form-item>
                    <el-form-item label="请选择快递" prop="os_logistics_code">
                        <LogisticsCompany v-model="sendGoodsDialog.requestData.os_logistics_code"></LogisticsCompany>
                    </el-form-item>
                    <el-form-item label="请输入单号" prop="os_logistics_sn">
                        <el-input v-model="sendGoodsDialog.requestData.os_logistics_sn" placeholder="请输入单号" class="my-input"></el-input>
                    </el-form-item>
                    <el-form-item label="请输入运费" prop="">
                        <el-input v-model="sendGoodsDialog.requestData.os_freight" placeholder="无运费则不输入" class="my-input"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="sendGoodsDialogSubmit('sendGoods')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="send-goods-dialog-item">
                <el-divider content-position="left">填写发货商品</el-divider>
                <el-table :data="sendGoodsDialog.responseData.items" style="width: 100%" border>
                    <el-table-column prop="og_goods_title" label="商品名"></el-table-column>
                    <el-table-column prop="og_goods_key" label="规格"></el-table-column>
                    <el-table-column prop="os_send_num_already" label="待发货量"></el-table-column>
                    <el-table-column label="发货量">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.os_send_num"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="sendGoodsDialog.responseData.items.splice(scope.$index, 1)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-dialog>

        <el-dialog v-dialogDrag  class="send-goods-dialog" title="发货记录" center :visible.sync="sendGoodsLogDialog.isShow" width="50%">
            <div class="send-goods-dialog-item">
                <el-divider content-position="left">收货信息</el-divider>
                <div class="box">
                    <div>收件人：{{sendGoodsLogDialog.address.o_receiving_realname}} </div>
                    <div>联系方式：{{sendGoodsLogDialog.address.o_receiving_mobile}} </div>
                    <div>收货地址：{{sendGoodsLogDialog.address.o_receiving_address}} </div>
                </div>
            </div>
            <div class="send-goods-dialog-item" v-for="(item, index) in sendGoodsLogDialog.responseData" :key="index">
                <el-divider content-position="left">发货信息</el-divider>
                <div class="box">
                    <div>发货人：{{item.os_operator}}</div>
                    <div>发货时间：{{item.create_time}}</div>
                    <div>快递：{{item.title}}</div>
                    <div>单号：{{item.sn}}</div>
                    <div>运费：{{item.os_freight}}</div>
                    <div>
                        <el-button type="text" @click="sendGoodsLogDialogViewerLogisticsDialogShow(item.code, item.sn)">查看物流</el-button>
                    </div>
                </div>
                <el-table :data="item.items" style="width: 100%" border>
                    <el-table-column prop="og_goods_title" label="商品名"></el-table-column>
                    <el-table-column prop="og_goods_key_name" label="规格"></el-table-column>
                    <el-table-column prop="os_send_num" label="发货量"></el-table-column>
                </el-table>
            </div>
        </el-dialog>

        <logistics :isShow.sync="sendGoodsLogDialog.viewerLogisticsDialog.isShow"
                   :code="sendGoodsLogDialog.viewerLogisticsDialog.code"
                   :sn="sendGoodsLogDialog.viewerLogisticsDialog.sn">
        </logistics>
    </div>
</template>

<script>
    import { list, sendGoods, sendGoodsLog } from '@/api/depot/sendOrder';
    import depot from '../../purchase_management/components/depot/index'
    import LogisticsCompany from '@/components/common/LogisticsCompany.vue'
    import logistics from '@/components/common/logistics';

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    o_send_status: '', // 发货状态：0未发货、1部分发货、2已发货
                    page: 1,
                    limit: 10,
                },
                responseData: {
                    count: 0,
                    data: []
                },

                // 发货
                sendGoodsDialog: {
                    isShow: false,
                    responseData: {
                        address: {
                            o_receiving_realname: '',
                            o_receiving_mobile: '',
                            o_receiving_address: '',
                        },
                        order_id: '',
                        items: []
                    },
                    requestData: {
                        order_id: 0, //订单ID
                        os_logistics_sn: "",    //物流编号
                        os_logistics_code: "",  //物流公司码
                        os_freight: '',// 运费
                        warehouse_id: '',  //发货仓库
                        items: [  //选择的发货商品
                            // {
                            //     "order_goods_id": 38,   //订单商品数据的ID
                            //     "os_send_num": 2    //需要发货的数量
                            // }
                        ]
                    },
                    rules: {
                        os_logistics_sn: [
                            { required: true, message: '请输入物流编号', trigger: 'blur' },
                        ],
                        os_logistics_code: [
                            { required: true, message: '请选择物流公司码', trigger: 'blur' },
                        ],
                        warehouse_id: [
                            { required: true, message: '请选择发货仓库', trigger: 'blur' },
                        ],
                    },
                },
                // 发货记录
                sendGoodsLogDialog: {
                    isShow: false,
                    address: {
                        o_receiving_realname: '',
                        o_receiving_mobile: '',
                        o_receiving_address: '',
                    },
                    responseData: [
                        // {   der_id: 37,
                        //     o_receiving_mobile: "18125098134",
                        //     o_receiving_realname: "小红",
                        //     o_receiving_address: "重庆,重庆市,江北区江北区",
                        //     os_operator: "admin",
                        //     sn: "WLDH1232132132132132131",
                        //     code: "JD",
                        //     title: "京东",
                        //     os_freight: "88.00",
                        //     create_time: "2020-04-24 16:08:35",
                        //     items:[
                        //         {
                        //             id: 16,
                        //             og_goods_title: "红蜻蜓  香菜油5L/桶 非转基因物理压榨食用油居家大桶装",
                        //             og_goods_key_name: null,
                        //             og_goods_code: null,
                        //             os_send_num: 2,
                        //         },
                        //     ]
                        // }
                    ],

                    viewerLogisticsDialog: {
                        isShow: false,
                        code:'',
                        sn: '',
                    }
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

            // 发货对话框显示
            sendGoodsDialogShow(data){
                let result = {
                    address: {
                        o_receiving_realname: data.o_receiving_realname,
                        o_receiving_mobile: data.o_receiving_mobile,
                        o_receiving_address: data.o_receiving_address,
                    },
                    order_id: data.id,
                    items: []
                };
                for (const item of data.items) {
                    result.items.push({
                        og_goods_title: item.og_goods_title,//商品名
                        og_goods_key: item.og_goods_key,// 规格
                        order_goods_id: item.id,// 子订单id
                        os_send_num_already: parseInt(item.og_num) - parseInt(item.og_sent_num),//购买数量 -  已发货数量 =  待发货数量
                        os_send_num: '',// 需要发货数量
                    })
                }
                this.sendGoodsDialog.responseData = Object.assign(this.sendGoodsDialog.responseData, result)
                this.sendGoodsDialog.isShow = true
            },
            // 发货对话框 提交
            sendGoodsDialogSubmit(formName){
                let flag = false, items = [];
                for (const item of this.sendGoodsDialog.responseData.items) {
                    if (!item.os_send_num || parseInt(item.os_send_num) <= 0 || parseInt(item.os_send_num) > parseInt(item.os_send_num_already)){
                        this.$message.error(`【${item.og_goods_title}】的发货数量有误！`)
                        flag = true
                        break
                    } else {
                        items.push({
                            order_goods_id: item.order_goods_id,   //订单商品数据的ID
                            os_send_num: item.os_send_num    //需要发货的数量
                        })
                    }
                }
                if (flag){
                    return
                }
                if (items.length===0){
                    this.$message.error('没有要发货的商品')
                    return
                }
                this.sendGoodsDialog.requestData.order_id = this.sendGoodsDialog.responseData.order_id;
                this.sendGoodsDialog.requestData.items = items;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        sendGoods(this.sendGoodsDialog.requestData).then(res => {
                            if (res.code === 200) {
                                this.resetForm(formName);
                                this.sendGoodsDialog.isShow = false;
                                this.sendGoodsDialog.requestData.os_freight = '';
                                this.sendGoodsDialog.requestData.items = [];
                                this.getList();
                                this.$message.success('发货成功');
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } else {
                        return false;
                    }
                });
            },

            // 发货记录对话框--显示
            sendGoodsLogDialogShow(data) {
                this.sendGoodsLogDialog.address = {
                    o_receiving_realname: data.o_receiving_realname,
                    o_receiving_mobile: data.o_receiving_mobile,
                    o_receiving_address: data.o_receiving_address,
                };
                sendGoodsLog({order_id: data.id}).then(res => {
                    this.sendGoodsLogDialog.responseData = res.data
                    this.sendGoodsLogDialog.isShow = true
                }).catch(err => {
                    console.log(err);
                })
            },
            // 发货记录对话框--查看物流
            sendGoodsLogDialogViewerLogisticsDialogShow(code, sn){
                this.sendGoodsLogDialog.viewerLogisticsDialog = {
                    isShow: true,
                    code,
                    sn
                }
            },

        },
        beforeMount() {
            this.getList();
        },
        components: {
            depot,
            LogisticsCompany,
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
