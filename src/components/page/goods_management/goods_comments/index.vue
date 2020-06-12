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
                    <!-- <div>
                        商品分类：<Classification v-model="requestData.title"></Classification>
                    </div> -->
                    <div>
                        商品品牌：<Brand v-model="requestData.brand" @input='input'></Brand>
                    </div>
                </div>
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
                        type="selection"
                        width="60">
                        </el-table-column>
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
                                <el-button style="color:#1ABC9C" @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button style="color:#1ABC9C" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer" >
                        <el-button @click="toggleSelection(tableData)">全选</el-button>
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
    //商品品牌
    import Brand from '@/components/common/Brand.vue';
    import {goodsComment} from '@/api/goods/goods_list.js'
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
                goods_id:'',
                requestData: {
                    title: '', //商品名称/商品条形码
                    brand:'',//商品品牌
                },
                tableData: [],//商品列表
                recommendedPrice:'',//推荐价格
                salesPrice:'',//销售价格
                warning:'',//预警值
                value:1,//显示
                total:1,//计算总页数
            }
        }, 
        components: {
            // Classification,
            Brand,
        },
        methods:{
            // 控制全选与不全选
            toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
             },
            //操作--查看
             handleClick(row) {
                console.log(row);
                this.$router.push({
                      path: '/toView',
                })
            },
            // 获取商品列表数据
            getgoods(){
                goodsComment().then((res)=>{
                    this.tableData=res.data.data//获取商品列表
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
            //获取子组件传递的id
            input(val){
                console.log(val)
               let data={gb_title:val }
                goodsComment(data).then((res)=>{
                  this.tableData=res.data.data
                    // console.log(res.data.data)
                })
            },
            //是否显示
            changeSwitch(val){
                console.log(val)
            }
        },
    }
</script>

<style scoped lang="scss">
    .container{
        .search-div{
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
                    >div{
                        button{
                            border: 1px solid rgb(175, 175, 175);
                        }
                    }
                }
                .footer{
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                }
            }
        }
    }

</style>
