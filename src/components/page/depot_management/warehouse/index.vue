<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>入库单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <supplier v-model="requestData.sup_id"></supplier>
                <el-select placeholder="状态" v-model="requestData.status" clearable class="my-input">
                    <el-option label="待付款" value="0"></el-option>
                    <el-option label="待入库" value="1"></el-option>
                    <el-option label="部分入库" value="2"></el-option>
                    <el-option label="全部入库" value="3"></el-option>
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
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column label="商品来源"></el-table-column>
                    <el-table-column label="采购信息" width="280">
                        <template slot-scope="scope">
                            <div>采购人：{{scope.row.user_name}}</div>
                            <div>采购单ID：{{scope.row.id}}</div>
                            <div>采购单订单编号：{{scope.row.sn}}</div>
                            <div>采购时间：{{scope.row.create_time}}</div>
                        </template>
                    </el-table-column>
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
                    <el-table-column label="入库信息">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">
                                已入库：{{item.deliver_num}}
                                待入库：{{item.num - item.deliver_num}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status_name" label="状态"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="warehouseDialogShow(scope.row)">入库</el-button>
                            <el-button type="text" @click="warehouseLogDialogShow(scope.row)">入库记录</el-button>
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

        <!-- 入库 -->
        <el-dialog title="入库" :visible.sync="warehouseDialog.isShow" @close="warehouseDialogClose" width="50%" center>
            <div style="margin-bottom: 20px;">
                <depot placeholder="选择所入仓库" v-model="warehouseDialog.requestData.shop_id"></depot>
            </div>
            <div style="margin-bottom: 20px;">
                <el-table style="width: 100%" max-height="500px" :data="warehouseDialog.responseData">
                    <el-table-column prop="title" label="商品名"></el-table-column>
                    <el-table-column prop="bar_code" label="条形码"></el-table-column>
                    <el-table-column prop="attr_name" label="规格"></el-table-column>
                    <el-table-column prop="num" label="采购数量"></el-table-column>
                    <el-table-column prop="deliver_num" label="已入库数量"></el-table-column>
                    <el-table-column label="剩余数量">
                        <template slot-scope="scope">
                            {{scope.row.num - scope.row.deliver_num}}
                        </template>
                    </el-table-column>
                    <el-table-column label="入库数量">
                        <template slot-scope="scope">
                            <el-input placeholder="请输入入库数量" type="number" min="1" :max="scope.row.num - scope.row.deliver_num" v-model="scope.row.rukushuliang"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="warehouseDialogDeleteGoods(scope.$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div style="text-align: center;">
                <el-button type="primary" @click="warehouseDialogSubmit">确定入库</el-button>
            </div>
        </el-dialog>

        <!-- 入库记录 -->
        <el-dialog title="入库记录" :visible.sync="warehouseLogDialog.isShow" @close="warehouseLogDialogClose" width="50%" center>
            <div style="margin-bottom: 30px;">
                <el-divider content-position="left">
                    采购清单
                </el-divider>
                <el-table style="width: 100%;" max-height="250px" :data="warehouseLogDialog.responseData.purchase_list.items">
                    <el-table-column prop="title" label="商品名"></el-table-column>
                    <el-table-column prop="bar_code" label="条形码"></el-table-column>
                    <el-table-column prop="attr_name" label="规格"></el-table-column>
                    <el-table-column prop="num" label="采购数量"></el-table-column>
                    <el-table-column prop="deliver_num" label="已入库数量"></el-table-column>
                    <el-table-column label="剩余数量">
                        <template slot-scope="scope">
                            {{scope.row.num - scope.row.deliver_num}}
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div style="margin-bottom: 30px;" v-for="(item, index) in warehouseLogDialog.responseData.pur_deliver_list" :key="index">
                <el-divider content-position="left">
                    所入仓库：{{item.shop_name}} &nbsp;&nbsp;<el-divider direction="vertical"></el-divider>
                    入库人员：{{item.user_name}}&nbsp;&nbsp;<el-divider direction="vertical"></el-divider>
                    入库时间：{{item.create_time}}&nbsp;&nbsp;<el-divider direction="vertical"></el-divider>
                    <el-button type="text" @click="warehouseLogDialogCancel(item.id)">取消入库</el-button>
                </el-divider>
                <el-table style="width: 100%;" max-height="250px" :data="item.items">
                    <el-table-column prop="title" label="商品名"></el-table-column>
                    <el-table-column prop="bar_code" label="条形码"></el-table-column>
                    <el-table-column prop="attr_name" label="规格"></el-table-column>
                    <el-table-column prop="num" label="入库数量"></el-table-column>
                </el-table>
            </div>
            <div style="text-align: center;">
                <el-pagination
                        :total="warehouseLogDialog.responseData.count"
                        @current-change="warehouseLogDialogHandleCurrentChange"
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import supplier from '@/components/page/purchase_management/components/supplier/index'
    import depot from '@/components/page/purchase_management/components/depot/index'
    import { list, deliver, deliverLog, deliverCancel } from '@/api/depot/warehouse';
    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    sup_id: '',//供应商ID
                    time:'',
                    start_time: '', //采购开始日期
                    end_time: '', //采购结束日期
                    status: '', //状态：0待付款，1待入库，2部分入库，3全部入库
                    page: 1,
                    limit: 10,
                },
                responseData: {
                    count: 0,
                    data: []
                },
                warehouseDialog: {
                    isShow: false,
                    responseData: [],
                    requestData: {
                        pur_id: '', // 采购单ID
                        shop_id: '', // 所入仓库ID
                        items: [],// 要入库的商品信息
                    }
                },
                warehouseLogDialog: {
                    isShow: false,
                    requestData: {
                      page: 1,
                      limit: 10,
                      pur_id: '',//采购单ID
                    },
                    responseData: {
                        count: 0,
                        purchase_list: {
                            items: []
                        },
                        pur_deliver_list: [],
                    },
                },

            }
        },
        methods: {
            // 选择时间
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

            // 入库对话框  显示
            warehouseDialogShow(scope){
                let arr = [];
                scope.items.map(item => {
                    if (item.deliver_status != 2) {
                        arr.push(Object.assign({}, item, {rukushuliang: ''}));
                    }
                });
                this.warehouseDialog.requestData.pur_id = scope.id;
                this.warehouseDialog.responseData = arr;
                this.warehouseDialog.isShow = true;
            },
            // 入库对话框  关闭
            warehouseDialogClose(){
              this.warehouseDialog.requestData.shop_id = '';
              this.warehouseDialog.requestData.pur_id = '';
              this.warehouseDialog.requestData.items = [];
            },
            // 入库对话框 删除 入库的商品
            warehouseDialogDeleteGoods(index){
                this.warehouseDialog.responseData.splice(index, 1);
            },
            // 入库对话框 单击确定入库按钮
            async warehouseDialogSubmit(){
                if (!this.warehouseDialog.requestData.shop_id) {
                    this.$message.error('请选择要入的仓库');
                    return;
                }
                let requestArr = [];
                for (const item of this.warehouseDialog.responseData) {
                    if (parseInt(item.rukushuliang) % 1 === 0 &&
                        parseInt(item.rukushuliang) >= 1 &&
                        parseInt(item.rukushuliang) <= parseInt(item.num) - parseInt(item.deliver_num)
                    ) {
                        requestArr.push({
                            id:  item.id,
                            num:  item.rukushuliang,
                        });
                    } else {
                        this.$message.error(`【${item.title}】商品的入库数量有误！`);
                        break;
                    }
                }
                if (requestArr.length !== this.warehouseDialog.responseData.length) {
                    return;
                }
                this.warehouseDialog.requestData.items = requestArr;
                await deliver(this.warehouseDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.getList();
                        this.$message.success('入库成功！');
                        this.warehouseDialog.isShow = false;
                    }
                })
            },

            // 入库记录对话框 查询记录
            warehouseLogDialogGetList(){
                deliverLog(this.warehouseLogDialog.requestData).then(res => {
                    if (res.code === 200){
                        this.warehouseLogDialog.responseData = res.data;
                        this.warehouseLogDialog.isShow = true;
                    }
                });
            },
            // 入库记录对话框  显示
            async warehouseLogDialogShow(scope){
                this.warehouseLogDialog.requestData.pur_id = scope.id;
                this.warehouseLogDialogGetList();
            },
            // 入库记录对话框  关闭
            warehouseLogDialogClose(){
                this.warehouseLogDialog.requestData.pur_id = '';
                this.warehouseLogDialog.requestData.page = 1;
                this.warehouseLogDialog.responseData = {
                    count: 0,
                        purchase_list: {
                        items: []
                    },
                    pur_deliver_list: [],
                };
            },
            // 入库记录对话框 分页
            warehouseLogDialogHandleCurrentChange(val) {
                this.warehouseLogDialog.requestData.page = val;
                this.warehouseLogDialogGetList();
            },
            // 入库记录对话框 取消入库
            warehouseLogDialogCancel(id){
                const requestData = {
                    war_ids: [id]
                };
                this.$confirm('本次操作将取消入库, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deliverCancel(requestData).then(res => {
                        if (res.code === 200) {
                            this.warehouseLogDialogGetList();
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消取消入库操作'
                    });
                });
            },

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
