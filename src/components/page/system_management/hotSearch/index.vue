<template>
    <div class="icon">
        <div class="container">
             <div class="title">
                <el-button @click="addsearch">添加热搜</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                style="width: 100%"
                :cell-style="{'text-align':'center'}"
               >
                <el-table-column
                prop="id"
                label="ID"
                width="180"
                align="center">
                </el-table-column>
                  <el-table-column
                prop="title"
                label="名称"
                width="180"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="status"
                label="是否禁用"
                align="center">
                <template slot-scope="scope">
                    <el-switch
                        v-model="scope.row.status"
                        :active-value="1"
                        :inactive-value="2"
                        active-color="#1ABC9C"
                        inactive-color="#ff4949"
                        @change="isdisable(scope.row)">
                    </el-switch>
                </template>
                </el-table-column>
                <el-table-column
                prop="sort"
                label="排序"
                width="100"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button style="color:#1ABC9C" @click="edit(scope.row)"  type="text" size="small">编辑</el-button>
                    <el-button style="color:#1ABC9C" @click="open(scope.row)" type="text" size="small">删除</el-button>
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
            <div class="editBanner" v-if="flag">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>编辑热搜</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="flag=false">X</el-button>
                    </div>
                    <div class="form">
                        <el-form  ref="form"  label-width="80px" v-model="form">
                                <el-form-item label="名称">
                                <el-input style="width:200px" v-model="form.title"></el-input>
                                </el-form-item>
                                <el-form-item label="排序">
                                <el-input style="width:200px" v-model="form.sort"></el-input>
                                </el-form-item>
                                <el-form-item label="是否禁用" >
                                    <el-radio-group v-model="form.status">
                                        <el-radio :label="1">正常</el-radio>
                                        <el-radio :label="2">禁用</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <!-- <el-form-item label="搜索" >
                                    <el-radio-group v-model="form.type">
                                        <el-radio :label="1">热门搜索</el-radio>
                                        <el-radio :label="2">历史搜索</el-radio>
                                    </el-radio-group>
                                </el-form-item> -->
                                <el-form-item>
                                    <el-button style="background:#1ABC9C;color:#fff" @click="submitEdit">立即提交</el-button>
                                    <el-button type="info" @click="flag=false">返回</el-button>
                                </el-form-item>
                            </el-form>
                    </div>
                </el-card>
            </div>
                <div class="editBanner" v-if="flag1">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>添加热搜</span>
                            <el-button style="float: right; padding: 3px 0" type="text" @click="flag1=false">X</el-button>
                        </div>
                        <div class="form">
                            <el-form  ref="form"  label-width="80px" v-model="form">
                                <el-form-item label="名称">
                                <el-input style="width:200px" v-model="form.title"></el-input>
                                </el-form-item>
                                <el-form-item label="排序">
                                <el-input style="width:200px" v-model="form.sort"></el-input>
                                </el-form-item>
                                <el-form-item label="是否禁用" >
                                    <el-radio-group v-model="form.status">
                                        <el-radio :label="true">正常</el-radio>
                                        <el-radio :label="false">禁用</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <!-- <el-form-item label="搜索" >
                                    <el-radio-group v-model="form.type">
                                        <el-radio :label="1">热门搜索</el-radio>
                                        <el-radio :label="2">历史搜索</el-radio>
                                    </el-radio-group>
                                </el-form-item> -->
                                <el-form-item>
                                    <el-button style="background:#1ABC9C;color:#fff" @click="submitAdd">立即提交</el-button>
                                    <el-button type="info" @click="flag1=false">返回</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </div>
        </div>
    </div>
</template>

<script>
    import {hotList,hotEdit,hotAdd,hotDel,hotIsSwitch} from '@/api/system/index'
    export default {
        data(){
            return{
                tableData:[],
                currentPage: 1,//当前页
                total:1,
                flag:false,//编辑
                flag1:false,//添加
                form:{
                    id:'',
                    title:'',
                    sort:'',
                    status:'',
                    type:'',
                }
            }
        },
        methods:{
            getBannerList(){
                hotList().then(res=>{
                    console.log(res)
                    this.tableData = res.data.data
                    this.total = res.data.count
                })
            },
            //是否禁用
            isdisable(val){
                let data={
                    id:val.id,
                    status:val.status
                }
                hotIsSwitch(data).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                        this.getBannerList()
                    }
                })
            },
            //编辑
            edit(val){
                console.log(this.tableData)
                this.form.id = val.id
                this.form.title = val.title
                this.form.sort = val.sort
                this.form.status = val.status
                // this.form.type = val.type
                // this.form.imgUrl
                this.flag = true;
            },
            deleteGoods(val){
                console.log(val)
                let data={
                    id:val.id
                }
                console.log(data)
                hotDel(data).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                        this.getBannerList()
                    }
                })
            },
            //编辑提交
            submitEdit(){
                console.log(this.form)
                let data={
                    id:this.form.id,
                    title: this.form.title,
                    // type:this.form.type,
                    status: this.form.status,
                    sort:this.form.sort,
                }
                hotEdit(data).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                        this.flag = false
                        this.getBannerList()
                    }
                })
            },
              // 添加banner
            addsearch(){
                this.flag1 = true
                this.form.title = ''
                this.form.sort = ''
                this.form.status = ''
                this.form.type = ''
            },
            //添加提交
            submitAdd(){
                let data={
                    title: this.form.title,
                    // type:this.form.type,
                    status: this.form.status,
                    sort:this.form.sort,
                }
                // console.log(data)
                hotAdd(data).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                        this.flag = false
                        this.getBannerList()
                    }
                    // console.log(res)
                })
            },
             // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                   page:val
               }
                hotList(data).then(res=>{
                    this.tableData = res.data.data
                    this.total = res.data.count
                })
            },
            open(val) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.deleteGoods(val)
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            }
        },
        created(){
            this.getBannerList()
        }
    }
</script>

<style lang="scss">
.icon{
    .container{
        .title{
            margin-bottom: 20px;
            button{
                background: #1ABC9C;
                color:#fff;
            }
        }
        position: relative;
        table{
            #img{
                 width: 100px;
                height: 80px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .editBanner{
        width: 500px;
        min-height: 600px;
        position: absolute;
        z-index: 100;
        top: 10%;
        left: 35%;
        .box-card{
            .form{
                .el-upload--text{
                    width: 85px;
                    height: 35px;
                }
            }
        }
    }
}
</style>