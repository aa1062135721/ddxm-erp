<template>
    <div>
        <div class="container">
            <div class="search-div">
                <div class="goodsBox">
                    <div class="mTitle">
                        <span>数据列表</span>
                        <div>
                            <el-button @click="add()" v-if="$_has('add')">添加</el-button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%;">
                        <el-table-column
                        label="分区ID"
                        prop="id"
                         width="120"
                        >
                        </el-table-column>
                        <el-table-column
                        label="分区名称"
                        prop="gt_title"
                        >
                        </el-table-column>
                        <!-- <el-table-column
                        label="购买须知"
                        prop="gt_content"
                        >
                        </el-table-column>                        -->
                        <!-- <el-table-column
                        label="是否显示"
                        width="200"
                        prop="gt_status">
                        </el-table-column> -->
                        <el-table-column
                        width="130"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button style="color:#1ABC9C" @click="edit(scope.row)" v-if="$_has('edit')" type="text" size="small">编辑</el-button>
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
    import { resourceList,resourceDel} from '@/api/common/index';
    import {goodsTypeList,goodsTypeDel} from '@/api/goods/goods_list'
    export default {
        created(){
            this.getgoods()
        },
        data(){
            return{
                currentPage: 1,//当前页
                total:1,
                tableData:[],
                imgVal:'',
                child:[],
            }
        }, 
        methods:{
            //添加商品
            add(){
                this.$router.push({
                    path: '/addPartition',
                })
            },
            // 获取图片列表数据
            getgoods(){
                goodsTypeList().then(res=>{
                    this.tableData = res.data.data
                    this.total = res.data.count
                    console.log(res)
                })
            },
            // 编辑
            edit(val){
                 this.$router.push({
                    path: '/editPartition',
                    query:{val}
                })
            },
            // 删除
            deleteGoods(val){
                let data = {
                    id:val.id
                }
                goodsTypeDel(data).then(res=>{
                    if(res.code ==200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                        this.getgoods()
                    }
                   
                })
            },
            // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                   page:val
               }
                resourceList(data).then(res=>{
                    this.tableData = res.data.data
                    this.total = res.data.count
                })
            },
        },
    }
</script>

<style scoped lang="scss">
    .container{
        width: 80%;
        margin: auto;
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
    }
</style>
