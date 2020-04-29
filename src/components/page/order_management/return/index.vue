<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>订单退款</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input placeholder="收货人/收货人电话" style="width: 300px;" v-model="requestData.consignee" clearable class="my-input"></el-input>
                <el-input placeholder="退货单号" style="width: 300px;" v-model="requestData.ot_sn" clearable class="my-input"></el-input>
                <el-date-picker
                        v-model="requestData.time"
                        value-format="yyyy-MM-dd H:i:s"
                        @change="changeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="申请退款开始时间"
                        end-placeholder="申请退款结束时间">
                </el-date-picker>
                <el-select placeholder="状态" v-model="requestData.ot_type" clearable class="my-input">
                    <el-option label="电商拒绝" value="-1"></el-option>
                    <el-option label="待处理" value="0"></el-option>
                    <el-option label="电商确认" value="10"></el-option>
                    <el-option label="待寄货" value="20"></el-option>
                    <el-option label="寄货中" value="30"></el-option>
                    <el-option label="仓库确认" value="40"></el-option>
                    <el-option label="电商确认打款" value="50"></el-option>
                    <el-option label="退款成功" value="60"></el-option>
                </el-select>
            </div>
            <div>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%" border>
                    <el-table-column label="退款单号" prop="ot_sn"></el-table-column>
                    <el-table-column label="申请时间" prop="create_time"></el-table-column>
                    <el-table-column label="申请人" prop="o_receiving_realname"></el-table-column>
                    <el-table-column label="申请人联系方式" prop="o_receiving_mobile"></el-table-column>
                    <el-table-column label="退款金额" prop="og_price"></el-table-column>
                    <el-table-column label="状态" prop="system_status"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="detailsDialogShow(scope.row.id)">查看详情</el-button>
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

        <el-dialog v-dialogDrag title="查看详情" center width="50%" :visible.sync="detailsDialog.isShow">
            <div class="dialog-item">
                <el-divider content-position="left">售后商品详情</el-divider>
                <el-table :data="detailsDialog.responseData" style="width: 100%" border>
                    <el-table-column label="商品名称" prop="og_goods_title"></el-table-column>
                    <el-table-column label="规格" prop="og_goods_key_name"></el-table-column>
                    <el-table-column label="商品图片">
                        <template slot-scope="scope">
                            <el-image class="table-td-thumb" style="width: 50px;height: 50px; margin: 10px;" :src="scope.row.og_goods_pic" :preview-src-list="[scope.row.og_goods_pic]"></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="价格" prop="og_price"></el-table-column>
                    <el-table-column label="数量" prop="og_num"></el-table-column>
                    <el-table-column label="小计">
                        <template slot-scope="scope">
                            {{scope.row.og_price * scope.row.og_num}}
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="dialog-item">
                <el-divider content-position="left">服务单信息</el-divider>
                <el-table :data="detailsDialog.responseData" style="width: 100%" border>
                    <el-table-column label="退款单号" prop="ot_sn"></el-table-column>
                    <el-table-column label="申请状态" prop="system_status"></el-table-column>
                    <el-table-column label="售后类型">
                        <template slot-scope="scope">
                            {{scope.row.ot_type == 1 ? '退货退款' : ''}}
                            {{scope.row.ot_type == 2 ? '退款' : ''}}
                        </template>
                    </el-table-column>
                    <el-table-column label="申请时间" prop="create_time"></el-table-column>
                    <el-table-column label="申请人" prop="o_receiving_realname"></el-table-column>
                    <el-table-column label="申请人电话" prop="o_receiving_mobile"></el-table-column>
                    <el-table-column label="退货理由" prop="ot_reason"></el-table-column>
                    <el-table-column label="上传凭证" width="300px">
                        <template slot-scope="scope">
                            <div v-if="scope.row.pics" style="display: flex;">
                                <el-image class="table-td-thumb" style="width: 50px;height: 50px; margin: 10px;" v-for="(item, index) in scope.row.pics.split(',')" :key="index" :src="item" :preview-src-list="scope.row.pics.split(',')"></el-image>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="dialog-item">
                <el-divider content-position="left">填写退货信息</el-divider>
                <el-input placeholder="请输入备注" v-model="detailsDialog.requestData.desc"></el-input>
            </div>
            <div style="display: flex;justify-content: center;" v-if="!(detailsDialog.responseData[0].ot_type == -1 || detailsDialog.responseData[0].ot_status == 60)">
                <el-button type="primary" v-if="detailsDialog.responseData[0].ot_status == 0" @click="detailsDialogSubmit(10)">确认退货</el-button>
                <el-button type="danger" v-if="detailsDialog.responseData[0].ot_status == 0" @click="detailsDialogSubmit(-1)">拒绝退货</el-button>
                <el-button type="success" v-if="detailsDialog.responseData[0].ot_status == 40 && detailsDialog.responseData[0].ot_type == 1" @click="detailsDialogSubmit(50)">电商确定打款</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { list, details, orderTrueHandle } from '@/api/order/return';

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    ot_type: '',//状态【搜索传，查询全部不传】：-1电商拒绝、0待处理、10电商确认、20待寄货、30寄货中、40仓库确认、50电商确认打款、60退款成功
                    ot_sn: '',//退货单号（搜索传）
                    consignee: '',//收货人/收货人电话（搜索传）
                    page: 1,
                    limit: 10,
                    time: '',
                    time_start: '',
                    time_end: '',
                },
                responseData: {
                    total: 2,
                    per_page: 10,
                    current_page: 1,
                    last_page: 1,
                    data: []
                },

                //退货查看详情
                detailsDialog: {
                    isShow: false,
                    responseData: [
                        {
                            id: 5,
                            og_goods_pic: "http://picture.ddxm661.com/adac9201912101904231773.JPG",
                            og_goods_title: "儿童婴童乳胶枕护颈枕头",
                            og_num: 4,
                            og_price: "48.60",
                            og_goods_key: "931",
                            ot_status: 0,
                            pics: 'http://picture.ddxm661.com/adac9201912101904231773.JPG,http://picture.ddxm661.com/adac9201912101904231773.JPG,http://picture.ddxm661.com/adac9201912101904231773.JPG',
                            ot_reason: "地址/电话信息填写错误",
                            ot_sn: "TH2020042295752121",
                            create_time: "2020-04-22 10:47:06",
                            o_receiving_mobile: "18125098134",
                            o_receiving_realname: "小红",
                            o_sn: "WM20200420975256497690",
                            ot_remarks: "",
                            ot_number: 4,
                            order_id: 31,
                            ot_type: 1,
                            o_pay_type: 3,
                            member_id: 7690,
                            order_goods_id: 38,
                            warehouse_id: 47,
                            ot_entry_num: 0,
                            desc: null,
                            system_status: "待处理",
                            shop_status: "待处理",
                        }
                    ],

                    //确认退货，拒绝退货，电商部确认
                    requestData: {
                        desc: '',
                    }
                }
            }
        },
        methods: {
            // 选择日期
            changeRequestTime(e){
                this.requestData.time_start = e[0];
                this.requestData.time_end = e[1];
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

            // 查看详情弹框--显示
            detailsDialogShow(id){
                details({id}).then(res => {
                    if (res.code === 200) {
                        this.detailsDialog.responseData = [res.data]
                        this.detailsDialog.isShow = true
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            // 查看详情弹框--提交
            detailsDialogSubmit(ot_status){
                const requestData = {
                    id: this.detailsDialog.responseData[0].id,
                    ot_status,
                    desc: this.detailsDialog.requestData.desc
                }
                orderTrueHandle(requestData).then(res => {
                    if (res.code === 200) {
                        this.detailsDialog.requestData.desc = ''
                        this.detailsDialog.isShow = false
                    }
                }).catch(err => {
                    console.log(err);
                })
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

    .dialog-item{
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
</style>
