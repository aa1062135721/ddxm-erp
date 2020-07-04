<template>
    <div>
        <div class="container">
            <div class="search-div">
                <div class="SearchBar">
                    <div>
                        活动名称 ：<el-input  placeholder="活动名称(回车键查看)" style="width: 220px; margin-right: 10px;" v-model="goods_name" @keyup.enter="searchGoods"></el-input>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span>数据列表</span>
                        <el-button @click="add">添加</el-button>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%;">
                        <el-table-column
                        label="商品ID"
                        width="120"
                        prop="id">
                        </el-table-column>
                        <el-table-column
                        label="活动标题"
                        width="120"
                        prop="title"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="people_num"
                        label="限购"
                        show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                        label="开始时间"
                        prop="start_time"
                        :formatter="formatDate">
                        </el-table-column>
                        
                        <el-table-column
                        label="结束时间"
                        prop="end_time"
                        :formatter="endmatDate">
                        </el-table-column>

                        <el-table-column                      
                        label="是否免邮">
                           <template slot-scope="scope">
                                 <el-switch
                                        v-model="scope.row.postage_way"
                                        :active-value="1"
                                        :inactive-value="0"
                                        active-color="#1ABC9C"
                                        inactive-color="#ff4949"
                                        @change="isMail(scope.row)">
                                    </el-switch>
                            </template>
                        </el-table-column>
                         <el-table-column                      
                        label="是否显示">
                            <template slot-scope="scope">
                                 <el-switch
                                        v-model="scope.row.status"
                                        :active-value="1"
                                        :inactive-value="0"
                                        active-color="#1ABC9C"
                                        inactive-color="#ff4949"
                                        @change="changeSwitch(scope.row)">
                                    </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="120">
                            <template slot-scope="scope">
                                <el-button @click="reduction(scope.row)" style="color:#1ABC9C" v-if="$_has('edit')" type="text" size="small">编辑</el-button>
                                <el-button @click="open(scope.row)" style="color:#1ABC9C" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer" >
                        <div class="block">
                            <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"         
                            layout="total, prev, pager, next, jumper"
                            :page-size="20"
                            :total="total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {activityList,activityDel} from '@/api/salesPromotion/index'
    export default {
        created(){
            this.getgoods()
            document.onkeydown = (e)=>{
                var key = e.key;
                if(key === "Enter"){
                    this.searchGoods()
                }
            }
        },
        data(){
            return{
                currentPage: 1,//当前页
                goods_name:'', //商品id
                requestData: {
                    title: '', //商品名称/商品条形码
                    brand:'',//商品品牌
                },
                tableData: [],//商品列表
                total:1,//商品总个数
            }
        }, 
        methods:{
            //获取秒杀列表
            getgoods(){
                activityList({type:2,limit:20}).then((res)=>{
                    this.tableData=res.data.data//获取商品列表
                    this.total= res.data.count//获取总条数
                    // console.log(res)
                })
            },
            // //时间戳转换
            //开始时间
            formatDate(row, column) {
                let date = new Date(parseInt(row.start_time) * 1000);
                let Y = date.getFullYear() + '-';
                let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
                let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                return Y + M + D + h + m + s;
            },
            //结束时间
            endmatDate(row,column){
                let date = new Date(parseInt(row.end_time) * 1000);
                let Y = date.getFullYear() + '-';
                let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
                let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                return Y + M + D + h + m + s;
            },
            //是否显示
            changeSwitch(row){
                console.log(row)
            },
            //是否免邮
            isMail(row){
                console.log(row)
            },
            // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                    page:val,
                    limit:20
               }
                activityList(data).then((res)=>{
                    this.tableData=res.data.data
                })
            },
            //编辑
            reduction(val){
                this.$router.push({
                    path:'/editSales',
                    query:{value:val}
                })
            },
            //添加
            add(){
                this.$router.push({
                    path:'/addSales',
                })
            },
            //删除
            deleteKill(val){
                console.log(val)
                activityDel({id:val.id}).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:"success"
                        })
                        this.getgoods()
                    }
                })
            },
            // 搜索商品
            searchGoods(){
                let data={
                    item_val:this.goods_name
                }
                activityList(data).then((res)=>{
                    console.log(res)
                    this.tableData=res.data.data
                    this.total= res.data.total//获取总条数
                })
            },
            open(val) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.deleteKill(val)
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            }
        },
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        box-sizing: border-box;
        .search-div{
            width: 100%;
            .SearchBar{
                border: 1px solid rgb(224, 224, 224);
                padding: 10px;
                display: flex;
                justify-content: left;
                line-height: 30px;
                >div{
                    margin-left: 5px;
                    display: flex;
                }
            }
            .goodsBox{
                border: 1px solid rgb(236, 236, 236);
                margin-top: 20px;  
                .mTitle{
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(224, 224, 224);
                    line-height: 32px;
                    background: rgb(230, 230, 230);
                    padding: 5px;
                    >span{
                        margin-left: 10px;
                    }
                }
                .footer{
                    text-align: right;
                    margin-right: 20px;
                    padding: 10px;
                }
            }
        }
    }
</style>
