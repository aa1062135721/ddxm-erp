<template>
    <div>
        <div class="container">
            <div class="search-div">
                <div class="goodsBox">
                    <div class="mTitle">
                        <span>数据列表 <span @click="returnNext" v-if="flag" style="color:red; font-size:14px; margin-left:30px">返回>></span></span>
                       
                        <div>
                            <el-button @click="add()" v-if="$_has('edit')">添加</el-button>
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
                        prop="sales"
                        width="260">
                            <template slot-scope="scope">
                                <div class="sorting">
                                    <span  @click="handleClick(scope.row)" v-if="$_has('edit')">新增下级</span>
                                    <span  @click="findClass(scope.row)" v-if="$_has('find')">查看下级</span>
                                    <span @click="rod=true;transfer(scope.row)" >转移商品</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                        width="130"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button style="color:#1ABC9C" @click="handleClick(scope.row)" v-if="$_has('edit')" type="text" size="small">编辑</el-button>
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
                            :page-size="20"
                            :total="total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div class="transfer" v-if="rod">
                <el-card class="box-card">
                    <div slot="header" class="clearfix" style="display: flex;justify-content: space-between;">
                        <span>转移商品</span>
                        <div @click="rod=false">
                              <span style=" font-weight: bold">X</span>
                        </div>
                    </div>
                    <div class="section">
                        <div>
                            <p>原商品分类:</p>
                            <el-input disabled style="width:210px" v-model="original_id"></el-input>
                        </div>
                         <div>
                            <p>目标商品分类:</p>
                             <el-select v-model="chooseGoodsclass" placeholder="请选择商品分类">
                                <el-option
                                v-for="item in tableData"
                                :key="item.id"
                                :label="item.gc_name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="cardFoot">
                        <el-button @click="rod=false">取消</el-button>
                        <el-button @click="startTransfer" style="background:#1ABC9C;color:#fff;">开始转移</el-button>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {getGoodsList,findGoodsList} from '@/api/goods/goods_list.js'
    import {goodsListDel,shiftGoods,goodsSwitch} from '@/api/goods/goods_classification.js'
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
                total:1,//总页数
                flag:false,//默认关闭
                rod:false,//控制转移商品
                original_goods:null,//原商品分类
                original_id:null,//原商品分类
                chooseGoodsclass:'',//选择商品分类
            }
        }, 
        methods:{
            //新增下级
             handleClick(row) {
                console.log(row);
                this.$router.push({
                    path: '/addClass',
                       query: {
                       id:row.id,
                       gc_level:parseInt(row.gc_level)+1
                    }
                })
            },
            //查看下级
            findClass(row){
                let data={
                    id:row.id
                }
                findGoodsList(data).then((res)=>{
                    this.tableData=res.data.data
                })
                this.flag=true
            },
            //返回一级
            returnNext(){
                this.getgoods()
                this.flag=false
            },
            //添加商品
            add(){
                this.$router.push({
                    path: '/addClass',
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
                     this.total=res.data.total//获取总页数
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
                let data = {
                    id:val.id,
                    gc_status:val.gc_status
                }
                goodsSwitch(data).then((res)=>{
                    console.log(res)
                })
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
            },
            //转移商品
            transfer(row){
                this.original_goods=row.id
                this.original_id=row.gc_name
            },
            //开始转移
            startTransfer(){
                console.log(this.chooseGoodsclass)
                let data={
                    start_id:this.chooseGoodsclass,
                    end_id:this.original_goods
                }
                shiftGoods(data).then((res)=>{
                    console.log(res)
                })
            },
        },
    }
</script>

<style scoped lang="scss">
    .container{
        width: 90%;
        position: relative;
        .search-div{
            width: 100%;
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
        .transfer{
            width: 600px;
            height: 400px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            .box-card{
                .section{
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 30px;
                    margin-bottom: 20px;
                    p{
                        margin-bottom: 20px;
                    }
                }
                .cardFoot{
                    border-top: 1px solid rgb(236, 236, 236);
                    padding-top: 30px;
                    text-align: right;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>
