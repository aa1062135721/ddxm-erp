<template>
    <div class="multipleIsup">
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
                        商品品牌：<recyclingBrand v-model="requestData.brand" @input='input'></recyclingBrand>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span>数据列表</span>
                        <div>
                            <el-button style="background:#1ABC9C;color:#fff;" @click="flag=true">批量上架</el-button>
                            <el-button style="background:#1ABC9C;color:#fff;" @click="rod=true">批量下架</el-button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        @selection-change="handleSelectionChange"
                        style="width: 100%;">
                        <el-table-column
                        type="selection"
                        width="60">
                        </el-table-column>
                        <el-table-column
                        prop="g_title"
                        label="商品名称"
                       >
                        </el-table-column>
                        <el-table-column
                        label="图片"
                       >
                            <template slot-scope="scope">
                               <el-image
                                    style="width: 80px;height: 80px;margin: 10px;"
                                    class="table-td-thumb"
                                    :src="scope.row.imglist[0]"
                                    :preview-src-list="scope.row.imglist"
                            ></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="上架时间"
                        width="200"
                        prop="up_time"
                        >
                        </el-table-column>

                        <el-table-column
                        label="下架时间"
                        width="200"
                        prop="down_time"
                        >
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
                    <div class="shelves" v-if="flag">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>上架时间</span>
                                <el-button style="float: right; padding: 3px 0" type="text" @click="flag=false">X</el-button>
                            </div>
                            <div class="block" style="text-align:center; margin-top:40px;">
                                <span class="demonstration" style="margin-right:20px;">上架时间:</span>
                                <el-date-picker
                                v-model="upTime"
                                type="datetime"
                             
                                value-format="yyyy-MM-dd HH:mm:ss"
                                placeholder="选择日期时间">
                                </el-date-picker>
                            </div>
                            <div style="text-align:right;margin-top:40px;">
                                <el-button @click="flag = false">取消</el-button>
                                <el-button style="background:#1ABC9C;color:#fff;" @click="submit">确定</el-button>
                            </div>
                        </el-card>
                    </div>
                     <div class="shelves" v-if="rod">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>下架时间</span>
                                <el-button style="float: right; padding: 3px 0" type="text" @click="rod=false">X</el-button>
                            </div>
                            <div class="block" style="text-align:center; margin-top:40px;">
                                <span class="demonstration" style="margin-right:20px;">下架时间:</span>
                                <el-date-picker
                                v-model="downTime"
                                type="datetime"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                placeholder="选择日期时间">
                                </el-date-picker>
                            </div>
                            <div style="text-align:right;margin-top:40px;">
                                <el-button @click="rod = false">取消</el-button>
                                <el-button style="background:#1ABC9C;color:#fff;" @click="submitDowm" >确定</el-button>
                            </div>
                        </el-card>
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
    import recyclingBrand from '@/components/common/recyclingBrand.vue';
    import {goodsBulkShelfList} from '@/api/goods/goods_list.js'
    import {goodsBulkShelf} from '@/api/goods/goods_classification.js'
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
                upTime:null,//上架时间
                downTime:null,//下架时间
                flag:false,//控制上架蒙层
                rod:false,//控制下架蒙层
                ids:[],
            }
        }, 
        components: {
            recyclingBrand,
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
            // 获取商品列表数据
            getgoods(){
                goodsBulkShelfList().then((res)=>{
                    this.tableData=res.data.data//获取商品列表
                    this.total= res.data.total//获取总条数
                    //处理图片数据
                    this.tableData.forEach(v=>{
                        v.imglist = []
                        v.g_img.forEach(i=>{
                            v.imglist.push(i.gr_url)
                        })
                    })
                    console.log(this.tableData)
                })
            },
            // 选中checkbox
             handleSelectionChange(val) {
                let arr=[]
                val.forEach(v=>{
                   arr.push(v)
                })
                this.ids = arr
            },
            // 提交上架
            submit(){
                console.log(this.ids)
                let data=[]
                this.ids.forEach(v=>{
                    if(v.gbs_id===null){
                        var temp={
                            goods_id:v.id,
                            up_time:this.upTime,
                        }
                    }else{
                        var temp={
                            goods_id:v.id,
                            up_time:this.upTime,
                            id:v.gbs_id
                        }
                    }
                    data.push(temp)
               
                })
                goodsBulkShelf(data).then(res=>{
                    if(res.code==200){
                         this.$message({
                            message:res.msg,
                            type:"success"
                        })
                        this.getgoods()
                    }
                   
                })
            },
            //提交下架
            submitDowm(){
                let data=[]
                this.ids.forEach(v=>{
                         let temp={
                            goods_id:v.id,
                            down_time:this.downTime,
                            id:v.gbs_id,
                            up_time:v.up_time
                         }
                    data.push(temp)
                    console.log(v)
               
                })
                goodsBulkShelf(data).then(res=>{
                    if(res.code==200){
                         this.$message({
                            message:res.msg,
                            type:"success"
                        })
                        this.getgoods()
                    }
                   console.log(res)
                })
            },
            // 上下页
            handleCurrentChange(val) {
               let data ={
                   page:val
               }
                goodsBulkShelfList(data).then((res)=>{
                    this.tableData=res.data.data
                    this.currentPage=res.data.current_page
                    this.tableData.forEach(v=>{
                        v.imglist = []
                        v.g_img.forEach(i=>{
                            v.imglist.push(i.gr_url)
                        })
                    })
                })
            },
            // 搜索商品
            searchGoods(){
                let data={
                    search_val:this.goods_id
                }
                goodsBulkShelfList(data).then((res)=>{
                    this.tableData=res.data.data
                    this.total= res.data.total
                    this.tableData.forEach(v=>{
                        v.imglist = []
                        v.g_img.forEach(i=>{
                            v.imglist.push(i.gr_url)
                        })
                    })
                })
            },
            //获取子组件传递的id
            input(val){
                let data={br_id:val }
                goodsBulkShelfList(data).then((res)=>{
                    this.tableData=res.data.data
                    this.total= res.data.total
                    this.tableData.forEach(v=>{
                        v.imglist = []
                        v.g_img.forEach(i=>{
                            v.imglist.push(i.gr_url)
                        })
                    })
                    console.log(res)
                })
            },
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
                .shelves{
                    width: 500px;
                    position: fixed;
                    top: 40%;
                    left: 50%;
                    margin: auto;
                    margin-left: -250px;
                }
            }
        }
    }
</style>
