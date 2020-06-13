<template>
    <div>
       <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <div class="SearchBar">
                    <div>
                        输入搜索：<el-input  placeholder="评价关键词(回车键查看)" style="width: 220px; margin-right: 10px;" v-model="goods_id" @keyup.enter="searchGoods"></el-input>
                    </div>
                    <div>
                        手机号：<el-input placeholder="输入用户手机号"  style="width: 220px; margin-right: 10px;" v-model="goods_Mobile"></el-input>
                        <el-button @click="mobilePhone">搜索</el-button>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span>数据列表</span>
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
                        label="用户昵称"
                        width="120"
                        prop='nickname'
                        >
                        </el-table-column>
                        <el-table-column
                        prop="goods.g_title"
                        label="商品名称"
                        show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                        label="评论"
                        width="200">
                            <template  slot-scope="scope">
                                <el-rate
                                 v-model="scope.row.level"
                                disabled
                                text-color="#ff9900"
                                score-template="{value}"
                                 >
                                </el-rate>
                            </template>
                        </el-table-column>

                        <el-table-column
                        label="评论时间"
                        prop="add_time">
                        </el-table-column>

                         <el-table-column
                        label="电话号码"
                        prop="mobile">
                        </el-table-column>

                        <el-table-column                      
                        label="是否显示"
                        width="120">
                        <template  slot-scope="scope">
                             <el-switch
                                v-model="scope.row.is_switch"
                                :active-value="1"
                                :inactive-value="2"
                                active-color="#1ABC9C"
                                inactive-color="#ff4949"
                                @change="changeSwitch(scope.row)"
                              >
                            </el-switch>
                        </template>
                        </el-table-column>
                        <el-table-column
                        width="130"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button style="color:#1ABC9C" @click="handleClick(scope.row)" v-if="$_has('find')" type="text" size="small">查看</el-button>
                                <el-button style="color:#1ABC9C" type="text" size="small">删除</el-button>
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
    import {goodsComment,goodsList} from '@/api/goods/goods_list.js'
    import {commentSwitch} from '@/api/goods/goods_classification.js'
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
                goods_id:'',//绑定商品id
                goods_Mobile:'',//绑定用户手机号
                tableData: [],//商品列表
                recommendedPrice:'',//推荐价格
                salesPrice:'',//销售价格
                warning:'',//预警值
                value:1,//显示
                total:1,//计算总页数
            }
        }, 
        methods:{
            //操作--查看
             handleClick(row) {
                console.log(row);
                this.$router.push({
                      path: '/toView',
                      query: {
                       id:row.id
                    }
                })
            },
            // 获取商品列表数据
            getgoods(){
                goodsComment().then((res)=>{
                    this.tableData=res.data.data//获取商品列表
                    this.total=res.data.total
                    console.log(res)
                })  
            },
            // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                   page:val
               }
                goodsComment(data).then((res)=>{
                    this.tableData=res.data.data
                })
            },
            // 搜索商品
            searchGoods(){
                let data={
                    search_val:this.goods_id
                }
                goodsComment(data).then((res)=>{
                    console.log(res)
                   this.tableData=res.data.data
                })
            },
            //搜索用户昵称
            mobilePhone(){
               let data={
                   mobile:this.goods_Mobile
               }
               goodsComment(data).then((res)=>{
                   this.tableData=res.data.data
               })
            },
            //是否显示
            changeSwitch(val){
                let data={
                    id:val.id,
                    is_switch:val.is_switch
                }
                commentSwitch(data).then((res)=>{
                    console.log(res)
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
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
                    border: 1px solid rgb(224, 224, 224);
                    display: flex;
                    justify-content: space-between;
                    line-height: 32px;
                    background: rgb(230, 230, 230);
                    padding: 5px;
                    >span{
                        margin-left: 10px;
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
