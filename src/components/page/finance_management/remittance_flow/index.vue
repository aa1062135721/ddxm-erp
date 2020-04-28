<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>来往款项</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-select placeholder="请选择供应商" v-model="requestData.seach_val" clearable class="my-input">
                    <el-option v-for="(item, index) in addDialog.supplier"
                               :key="index"
                               :label="item.s_name"
                               :value="item.id">
                    </el-option>
                </el-select>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" plain v-if="$_has('add')" @click="addDialog.isShow = true;">新增</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" :data="responseData.data">
                    <el-table-column type="index" label="序号"></el-table-column>
                    <el-table-column prop="s_name" label="供应商">
                        <template slot-scope="scope">
                            <p>姓名： {{scope.row.s_name}}</p>
                            <p>手机号： {{scope.row.s_phone}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="amount" label="金额"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" v-if="$_has('find')" @click="detailsDialogShow(scope.row.supplier_id)">查看明细</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="responseData.total">
                </el-pagination>
            </div>
        </div>

        <el-dialog title="新增打款" :visible.sync="addDialog.isShow" width="50%" center>
            <div style="margin-bottom: 20px; display: flex;justify-content: flex-start;align-items: center;">
                <el-select placeholder="请选择供应商" v-model="addDialog.table.requestData.sup_id" @change="supplierChange" class="my-input">
                    <el-option v-for="(item, index) in addDialog.supplier"
                            :key="index"
                            :label="item.s_name"
                            :value="item.id">
                    </el-option>
                </el-select>
                <div style="margin-left: 20px;">
                    <span style="margin-right: 20px;">总采购金额：<el-tag type="danger">{{addDialog.requestData.remittance.r_total_amount}}</el-tag></span>
                    <span style="margin-right: 20px;">总打款金额：<el-tag type="danger">{{addDialog.requestData.remittance.r_total_remittance}}</el-tag></span>
                    <span style="margin-right: 20px;">总抵扣金额：<el-tag type="danger">{{addDialog.requestData.remittance.r_deduct_amount}}</el-tag></span>
                    <span style="margin-right: 20px;" v-if="addDialog.r_deduct_amount">可抵扣金额：<el-tag type="danger">{{addDialog.r_deduct_amount}}</el-tag></span>
                </div>
            </div>
            <div style="margin-bottom: 20px;">
                <el-table style="width: 100%"
                          max-height="250px"
                          :data="addDialog.table.responseData.data"
                          @selection-change="handleSelectionChange"
                          ref="multipleTable"
                          :row-key="getRowKey">
                    <el-table-column type="selection" width="55" :reserve-selection="true"></el-table-column>
                    <el-table-column label="采购单号" width="150" prop="sn"></el-table-column>
                    <el-table-column label="商品条形码" width="150">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.bar_code}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名称" width="150">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品规格" width="100">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.attr_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="采购单价">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.price}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="采购数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="邮费" prop="postage"></el-table-column>
                    <el-table-column label="总金额">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.amount}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="采购时间" width="150" prop="create_time"></el-table-column>
                    <el-table-column label="打款金额" width="100" fixed="right">
                        <template slot-scope="scope">
                            <el-input placeholder="打款金额" v-model="scope.row.rf_amount"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="抵扣金额" width="100" fixed="right">
                        <template slot-scope="scope">
                            <el-input placeholder="抵扣金额" v-model="scope.row.rf_deduct_amount"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: right;margin-top: 10px;">
                    <el-pagination
                            :total="addDialog.table.responseData.count"
                            @current-change="addDialogGetTableListHandleCurrentChange"
                            background
                            layout="prev, pager, next">
                    </el-pagination>
                </div>
            </div>
            <div style="margin-bottom: 20px;display: flex;flex-wrap: wrap;justify-content: flex-start;">
                <upload-img @getImgUrls="getUploadImgUrl" />
                <el-input style="margin-left: 20px;width: 200px;height: 148px;" v-model="addDialog.requestData.remittance.desc" type="textarea" placeholder="备注"></el-input>
            </div>
            <div>
                <el-button type="primary" @click="addDialogConfirm">新增打款</el-button>
            </div>
        </el-dialog>
        <el-dialog title="查看明细" :visible.sync="detailsDialog.isShow" width="50%" center>
            <div style="margin-bottom: 20px; display: flex;justify-content: flex-start;align-items: center;">
                <el-select placeholder="请选择供应商" v-model="detailsDialog.requestData.id" class="my-input" style="margin-right: 10px;">
                    <el-option v-for="(item, index) in addDialog.supplier"
                               :key="index"
                               :label="item.s_name"
                               :value="item.id">
                    </el-option>
                </el-select>
                <el-date-picker
                        v-model="detailsDialog.requestData.time"
                        value-format="yyyy-MM-dd"
                        @change="detailsDialogChangeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="打款时间开始"
                        end-placeholder="打款时间结束">
                </el-date-picker>
                <el-button type="primary" @click="detailsDialogGetList">搜索</el-button>
            </div>
            <div style="margin-bottom: 20px;">
                <el-table style="width: 100%" max-height="250px" :data="detailsDialog.responseData.data">
                    <el-table-column label="序号" type="index"></el-table-column>
                    <el-table-column label="采购金额"  prop="purchase_amount"></el-table-column>
                    <el-table-column label="打款金额"  prop="rf_amount"></el-table-column>
                    <el-table-column label="抵扣金额"  prop="rf_deduct_amount"></el-table-column>
                    <el-table-column label="打款时间" width="150" prop="create_time"></el-table-column>
                    <el-table-column label="备注" width="150" prop="desc"></el-table-column>
                    <el-table-column label="打款人" prop="a_username"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" v-if="$_has('removeRemittance')" @click="detailsDialogCancel(scope.row.id, scope.row.purchase_id)">取消打款</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: right;margin-top: 10px;">
                    <el-pagination
                            :total="detailsDialog.responseData.total"
                            @current-change="detailsDialogHandleCurrentChange"
                            background
                            layout="prev, pager, next">
                    </el-pagination>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {list, add, details, cancel} from '@/api/finance/remittance';
    import {list as purchaseLog } from '@/api/purchase/purchaseLog';
    import { listAll as supplierAll } from '@/api/depot/supplier';
    import uploadImg from '@/components/common/uploadImg.vue'

    export default {
        name: 'index',
        data() {
            return {
                responseData:{
                    total: 0,
                    per_page: 10,
                    current_page: 1,
                    last_page: 1,
                    data: [],
                },
                requestData: {
                    page: 1,
                    limit: 10,
                    seach_val: '',
                },

                addDialog: {
                    isShow: false,
                    supplier: [],// 供应商列表
                    r_deduct_amount: '', // 当前选择的供应商的总抵扣金额
                    table: {
                        requestData: {
                            sup_id: '',// 供应商
                            page: 1,
                            limit: 10,
                        },
                        responseData: {
                            count: 0,
                            data: []
                        },
                        multipleSelectionAll: [],
                    },
                    requestData: {
                        remittance: {
                            r_total_amount: 0,//总采购金额
                            r_total_remittance: 0,//总打款金额
                            r_deduct_amount: 0,//抵扣金额
                            r_voucher_img: "",//凭证图片(字符串以逗号隔开)
                            supplier_id: 0, //供应商ID
                            desc: '',//备注
                        },
                        remittance_flow: []
                    },
                },
                detailsDialog: {
                    isShow: false,
                    requestData: {
                        id: '',//供应商id
                        time: '',
                        start_time: '',//供应商id
                        end_time: '',//供应商id
                        page: 1,
                    },
                    responseData: {
                        total: 0,
                        data: []
                    }
                }
            }
        },
        methods: {
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200) {
                        this.responseData = res.data
                    }
                })
            },

            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },


            // 新增弹框   获取 表格里的数据
            addDialogGetTableList(){
                purchaseLog(this.addDialog.table.requestData).then(res => {
                    if (res.code === 200) {
                        //请求回来数据后,进行两次循环，循环tableData 以及 multipleSelectionAll
                        res.data.data.forEach((item,i)=>{
                            res.data.data[i].rf_amount='';// 采购金额
                            if (parseFloat(this.addDialog.r_deduct_amount) <= 0) {
                                res.data.data[i].rf_deduct_amount= '0';// 抵扣金额
                            }else {
                                res.data.data[i].rf_deduct_amount='';// 抵扣金额
                            }
                            this.addDialog.table.multipleSelectionAll.forEach((multItem, j)=>{
                                if(res.data.data[i].id == this.addDialog.table.multipleSelectionAll[j].id){
                                    this.$refs.multipleTable.toggleRowSelection(res.data.data[i], true);//这步操作是让表格显示选中的数据
                                }
                            })
                        })
                        this.addDialog.table.responseData =  res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            // 新增弹框 获取 表格里的数据  分页
            addDialogGetTableListHandleCurrentChange(val) {
                this.addDialog.table.requestData.page = val;
                this.addDialogGetTableList();
            },
            // 上传图片
            getUploadImgUrl(urls) {
                this.addDialog.requestData.remittance.r_voucher_img = urls.join(',')
            },
            // 选择单元格
            handleSelectionChange(val){
                this.addDialog.table.multipleSelectionAll = val //这步是将页面选中的数据赋值给 multipleSelectionALL ,选中的数据都存储在这个变量里面
            },
            getRowKey(row){
                return row.id
            },
            // 新增弹框 供应商改变
            supplierChange(e){
                this.addDialog.table.requestData.page = 1;
                this.addDialog.table.multipleSelectionAll = [];
                this.$refs.multipleTable.clearSelection();
                this.addDialogGetTableList();

                this.addDialog.supplier.map(item => {
                    if (item.id == e){
                        this.addDialog.r_deduct_amount = item.s_balance;
                    }
                })
            },
            // 新增弹框 新增打款按钮 确定
            addDialogConfirm(){
                this.addDialog.requestData.remittance.supplier_id = this.addDialog.table.requestData.sup_id;
                if (!this.addDialog.table.multipleSelectionAll.length){
                    this.$message.error('请选择采购单并输入打款和折扣金额');
                    return;
                }
                if (parseFloat(this.addDialog.r_deduct_amount) < parseFloat(this.addDialog.requestData.remittance.r_deduct_amount)){
                    this.$message.error(`新增的打款单总折扣金额大于可用的折扣金额`);
                    return;
                }
                let remittance_flow = [
                    // {
                    //     purchase_id: 1111,//采购订单ID
                    //     purchase_amount: 220,//采购金额
                    //     rf_amount: 33,//打款金额
                    //     rf_deduct_amount: 10//抵扣金额
                    // },
                ], flag = false;
                for (const item of this.addDialog.table.multipleSelectionAll) {
                    if (!item.rf_amount || (parseFloat(item.rf_amount) < 0)) {
                        flag = true;
                        this.$message.error(`请正确输入【${item.sn}】采购单的打款金额`);
                        break;
                    }
                    if (!item.rf_deduct_amount || (parseFloat(item.rf_deduct_amount) < 0)){
                        flag = true;
                        this.$message.error(`请正确输入【${item.sn}】采购单的折扣金额`);
                        break;
                    }
                    remittance_flow.push({
                        purchase_id: item.id,
                        purchase_amount: item.items.reduce((totalPrice, goods) => totalPrice + parseFloat(goods.amount), 0),
                        rf_amount: parseFloat(item.rf_amount),
                        rf_deduct_amount: parseFloat(item.rf_deduct_amount),
                        supplier_id: this.addDialog.table.requestData.sup_id,
                    })
                }
                if (remittance_flow.length !== this.addDialog.table.multipleSelectionAll.length) {
                    flag = true;
                }
                if (flag) {
                    return;
                }
                this.addDialog.requestData.remittance_flow = remittance_flow;
                this.$confirm('您确定新增打款吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    add(this.addDialog.requestData).then(res => {
                        if (res.code === 200) {
                            this.addDialog.isShow = false;
                            this.getList();
                            this.$message({
                                type: 'success',
                                message: '新增成功!'
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                        this.$message.error('操作失败');
                    });
                }).catch(err => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                })

            },


            // 明细弹框 显示
            detailsDialogShow(supplier_id){
                this.detailsDialog.requestData.id = supplier_id;
                this.detailsDialog.isShow = true;
                this.detailsDialog.requestData.page = 1;
                this.detailsDialogGetList();
            },
            // 明细弹框   选择时间
            detailsDialogChangeRequestTime(e){
                this.detailsDialog.requestData.start_time = e[0];
                this.detailsDialog.requestData.end_time = e[1];
            },
            // 明细弹框 页码切换
            detailsDialogHandleCurrentChange(val) {
                this.detailsDialog.requestData.page = val;
                this.detailsDialogGetList();
            },
            // 明细弹框 查询列表
            detailsDialogGetList(){
                details(this.detailsDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.detailsDialog.responseData = res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            // 明细弹框 取消打款
            detailsDialogCancel(id, purchase_id){
                this.$confirm('本次操作将取消打款, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    cancel({id, purchase_id}).then(res => {
                        if (res.code === 200) {
                            this.detailsDialogGetList();
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消取消打款操作'
                    });
                })
            },


        },
        created() {
            this.getList();
            supplierAll().then(res => {
                if (res.code === 200) {
                    this.addDialog.supplier = res.data;
                }
            })
        },
        watch: {
            "addDialog.table.multipleSelectionAll": {
                deep:true, //深度监听设置为 true
                handler:function(newV,oldV){
                    let r_total_amount= 0,//总采购金额
                        r_total_remittance= 0,//总打款金额
                        r_deduct_amount= 0;//抵扣金额
                    newV.map(item => {
                        item.items.map(goods => {
                            r_total_amount += parseFloat(goods.amount);
                        });
                        r_total_remittance += parseFloat(item.rf_amount);
                        r_deduct_amount += parseFloat(item.rf_deduct_amount);
                    });
                    this.addDialog.requestData.remittance.r_total_amount = r_total_amount || 0;
                    this.addDialog.requestData.remittance.r_total_remittance = r_total_remittance || 0;
                    this.addDialog.requestData.remittance.r_deduct_amount = r_deduct_amount || 0;
                }
            }
        },
        components: {
            uploadImg,
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
