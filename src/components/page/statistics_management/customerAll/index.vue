<template>
    <div>
        <div class="container">
            <div class="search-div">
                <div class="SearchBar">
                     <div  style="color:#666;">
                          <el-button @click="add" style="background:#1ABC9C;color:#fff;margin-right:10px;">添加客户</el-button>
                       <el-input  placeholder="请输入客户名称/手机号码" style="width: 220px; margin-right: 10px;" v-model="title"></el-input>
                        <el-button style="background:#1ABC9C;color:#fff;" @click="searchGoods">搜索</el-button>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span  style="color:#666;">数据列表</span>
                       
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%;">
                        <el-table-column
                        label="ID"
                        width="120"
                        prop="id">
                        </el-table-column>
                        <el-table-column
                        label="客户名称"
                        width="120"
                        prop="supplier_name"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="contacts"
                        label="联系人"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="mobile"
                        label="联系电话"
                       >
                        </el-table-column>
                        <el-table-column
                        prop="remarks"
                        label="备注"
                        >
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="120">
                            <template slot-scope="scope">
                                <el-button @click="reduction(scope.row)" style="color:#1ABC9C" v-if="$_has('edit')" type="text" size="small">编辑</el-button>
                                <el-button @click="open(scope.row)" style="color:#1ABC9C" type="text" size="small" v-if="$_has('del')">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer" >
                        <div class="block">
                            <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"         
                            layout="total, prev, pager, next, jumper"
                            :page-size="10"
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
    import {activityList,delWarehouse} from '@/api/salesPromotion/index'
    import {warehouse} from '@/api/statistics/customerAll'
    export default {
        created(){
            this.getgoods()
            document.onkeydown = (e)=>{
                var key = e.key;
                if(key === "Enter"){
                    this.searchAcitity()
                }
            }
        },
        data(){
            return{
                currentPage: 1,//当前页
                goods_name:'', //活动名称
                title:'',//商品名称
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
                warehouse({type:2,limit:10}).then((res)=>{
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
                    limit:10,
                    title:this.goods_name,
                    item_val:this.title
               }
                warehouse(data).then((res)=>{
                    this.tableData=res.data.data
                })
            },
            //编辑
            reduction(val){
                console.log(val)
            },
            //添加
            add(){
                console.log(11)
            },
            //删除
            deleteKill(val){
                console.log(val)
                delWarehouse({id:val.id}).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:"success"
                        })
                        this.getgoods()
                    }
                })
            },
            // 搜索活动
            searchAcitity(){
                let data={
                    title:this.goods_name
                }
                warehouse(data).then((res)=>{
                    console.log(res)
                    this.tableData=res.data.data
                    this.total= res.data.count//获取总条数
                })
            },
            //搜索商品
            searchGoods(){
                let data={
                    item_val:this.title
                }
                warehouse(data).then((res)=>{
                    console.log(res)
                    this.tableData=res.data.data
                    this.total= res.data.count//获取总条数
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
