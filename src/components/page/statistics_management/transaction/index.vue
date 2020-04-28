<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>交易统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-date-picker
                        v-model="requestData.time"
                        value-format="yyyy-MM-dd"
                        @change="changeRequestTime"
                        style="margin-right: 10px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间">
                </el-date-picker>
                <depot placeholder="仓库" v-model="requestData.warehouse_id"></depot>
                <el-button type="primary" @click="getList">搜索</el-button>
            </div>
            <div style="margin: 40px 0;">
                <div class="my-content">
                    <el-card class="box-card" v-for="(item, index) in responseData" :key="index">
                        <div slot="header" class="clearfix">
                            <span>{{item.name}}</span>
                        </div>
                        <h1>
                            {{item.data}}
                        </h1>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { list, } from '@/api/statistics/transaction';
    import depot from '@/components/page/purchase_management/components/depot/index'

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    time:'',
                    o_pay_time_start: '', //时间
                    o_pay_time_end: '', //时间
                    warehouse_id: '',// 仓库
                },
                responseData: []
            }
        },
        methods: {
            changeRequestTime(e){
                this.requestData.o_pay_time_start = e[0];
                this.requestData.o_pay_time_end = e[1];
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
        },
        beforeMount() {
            this.getList();
        },
        components: {
            depot
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

    .my-content {
        flex: 1;
        display: flex;
        margin: auto;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;
        overflow: hidden;

        .box-card {
            height: 140px;
            width: 200px;
            margin: 10px 20px 10px 0;

            .el-card__body {
                h1 {
                    text-align: center;
                }
            }
        }
    }
</style>
