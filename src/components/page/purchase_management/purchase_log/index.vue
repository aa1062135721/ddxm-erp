<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>采购记录</el-breadcrumb-item>
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
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%">
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <el-table-column label="采购单信息" width="280">
                        <template slot-scope="scope">
                            <div>采购人：{{scope.row.user_name}}</div>
                            <div>采购单ID：{{scope.row.id}}</div>
                            <div>采购单订单编号：{{scope.row.sn}}</div>
                            <div>采购时间：{{scope.row.create_time}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="供应商" width="200">
                        <template slot-scope="scope">
                            <div>供应商：{{scope.row.sup_name}}</div>
                            <div>是否先打款：{{scope.row.price_firse}}</div>
                            <div>采购到达：{{scope.row.pick_way_name}}</div>
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
                    <el-table-column label="退货数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.refund_num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="合计金额">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.amount}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="postage" label="运费"></el-table-column>
                    <el-table-column prop="remarks" label="备注"></el-table-column>
                    <el-table-column prop="status_name" label="状态"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="cancel(scope.row)">取消采购</el-button>
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
    </div>
</template>

<script>
    import supplier from '../components/supplier/index'
    import depot from '../components/depot/index'
    import { list, purCancel, } from '../../../../api/purchase/purchaseLog';
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
            },
            // 分页
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
            cancel(scope){
                const requestData = {
                    id: scope.id
                };
                this.$confirm('此操作将取消该采购单, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    purCancel(requestData).then(res => {
                        if (res.code === 200) {
                            this.$message.success('取消成功');
                            this.getList();
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消取消采购单操作！'
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
