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
                        输入搜索：<el-input  placeholder="商品名称/条形码(回车键查看)" style="width: 220px; margin-right: 10px;" v-model="goods_id" @keyup.enter="searchGoods"></el-input>
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
                        prop="g_title"
                        label="商品名称"
                        show-overflow-tooltip>
                        </el-table-column>
                         <el-table-column
                        label="价格"
                        width="200">
                            <template slot-scope="props">
                                <p>价格：{{props.row.price}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="货号"
                        width="200">
                            <template slot-scope="props">
                                <p>货号：{{props.row.code}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="上架时间"
                        width="120">
                            <template slot-scope="scope" >
                              
                            </template>                  
                        </el-table-column>

                        <el-table-column
                        label="下架时间"
                        width="120"
                        prop="gb_title">
                        </el-table-column>

                        <el-table-column
                        label="操作"
                        width="120">
                            <template slot-scope="scope">
                                <el-button style="color:#1ABC9C" @click="handleClick(scope.row)" type="text" size="small">撤销</el-button>
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
    //商品分类
    // import Classification from '@/components/common/Classification.vue';
    //商品品牌
    import Brand from '@/components/common/Brand.vue';
    import {goodsList,goodsInfo} from '@/api/goods/goods_list.js'
    import {goodsListDel} from '@/api/goods/goods_classification.js'
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
                total:1,//商品总个数
            }
        }, 
        components: {
            Brand,
        },
        methods:{
            // 获取全部商品
            all_goods(){
              goodsList().then((res)=>{
                  this.tableData=res.data.data
              })
            },
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
            // 获取商品列表数据
            getgoods(){
                goodsList().then((res)=>{
                    this.tableData=res.data.data//获取商品列表
                    this.total= res.data.total//获取总条数
                    // console.log(res)
                })
            },
            // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                   page:val
               }
                goodsList(data).then((res)=>{
                    this.tableData=res.data.data
                })
            },
            // 搜索商品
            searchGoods(){
                let data={
                    search_val:this.goods_id
                }
                goodsList(data).then((res)=>{
                   this.tableData=res.data.data
                })
            },
            //获取子组件传递的id
            input(val){
                console.log(val)
               let data={gb_title:val }
                goodsList(data).then((res)=>{
                  this.tableData=res.data.data
                    // console.log(res.data.data)
                })
            },
        },
        computed:{
            // 计算全部商品个数
            allGoods(){
                return this.tableData.length
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
