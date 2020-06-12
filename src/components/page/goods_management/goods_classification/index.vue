<template>
    <div>
        <div class="container">
            <div class="search-div">
                <div class="goodsBox">
                    <div class="mTitle">
                        <span>数据列表</span>
                        <div>
                            <el-button>修改基本信息</el-button>
                            <el-button>修改商品详情</el-button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%;">
                        <el-table-column
                        label="编号"
                        width="120"
                        prop="id">
                        </el-table-column>
                        <el-table-column
                        label="分类名称"
                        width="120"
                        prop="gc_name"
                        >
                        </el-table-column>
                        <el-table-column
                        label="级别"
                        prop="gc_level">
                        </el-table-column>
                        
                        <el-table-column
                        label="商品数量"
                        width="200"
                        prop="goods_num">
                        </el-table-column>
                        <el-table-column
                        label="数量单位">
                            <template>
                                <span>件</span>
                            </template>              
                        </el-table-column>

                        <el-table-column
                        label="是否显示">
                            <template slot-scope="scope">
                                <el-switch
                                    v-model="scope.row.gc_status"
                                    :active-value="1"
                                    :inactive-value="2"
                                    active-color="#1ABC9C"
                                    inactive-color="#ff4949"
                                    @change="changeSwitch(scope.row)">
                                </el-switch>
                            </template>
                        </el-table-column>

                        <el-table-column                      
                        label="排序"
                        width="120"
                        prop="gc_sort">
        
                        </el-table-column>
                        <el-table-column                      
                        label="设置"
                        prop="sales">
                            <template>
                                <div class="sorting">
                                    <span>新增下级</span>
                                    <span>查看下级</span>
                                    <span>转移商品</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                        width="130"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button style="color:#1ABC9C" @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                                <el-button style="color:#1ABC9C" @click="deleteGoods(scope.row)" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer" >
                        <div class="block">
                            <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"         
                            layout="total, prev, pager, next, jumper"
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
    import {getGoodsList} from '@/api/goods/goods_list.js'
    import {goodsListDel} from '@/api/goods/goods_classification.js'
    export default {
        created(){
            this.getgoods()
        },
        data(){
            return{
                currentPage: 1,//当前页
                tableData: [],//商品列表
                total:1,//商品总个数
                recommendedPrice:'',//推荐价格
                salesPrice:'',//销售价格
                warning:'',//预警值
                rate:null,//绑定评分
                value:1,//显示
            }
        }, 
        methods:{
            //操作--查看
             handleClick(row) {
                console.log(row);
                this.$router.push({
                      path: '/toView',
                })
            },
            // 获取商品列表数据
            getgoods(){
                let data={
                    is_shelf:this.is_shelf
                }
                getGoodsList(data).then((res)=>{
                    console.log(res)
                    this.tableData=res.data.data//获取商品列表
                })
            },
            // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                   page:val
               }
                getGoodsList(data).then((res)=>{
                    this.tableData=res.data.data
                })
            },
            //是否显示
            changeSwitch(val){
                console.log(val)
            },
            //删除
            deleteGoods(val){
                let data={id:val.id}
                goodsListDel(data).then((res)=>{
                     this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                })
                this.getgoods()
            }
        },
    }
</script>

<style scoped lang="scss">
    .container{
        .search-div{
            .goodsBox{
                border: 1px solid rgb(236, 236, 236);
                margin-top: 20px;  
                .mTitle{
                    border: 1px solid rgb(224, 224, 224);
                    display: flex;
                    justify-content: space-between;
                    line-height: 32px;
                    background: rgb(230, 230, 230);
                    padding: 5px;
                    >span{
                        margin-left: 10px;
                    }
                    >div{
                        button{
                            border: 1px solid rgb(175, 175, 175);
                        }
                    }
                }
                .sorting{
                    display: flex;
                    justify-content: space-around;
                    span{
                        color: #1ABC9C;
                    }
                }
                .footer{
                    text-align: right;
                    padding: 10px;
                    padding-right: 40px;
                }
            }
        }
    }
</style>
