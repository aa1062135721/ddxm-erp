<template>
    <div class="banner">
        <div class="container">
             <div class="title">
                <el-button @click="flag1=true">添加</el-button>
                <div class="SearchBar"> 
                    <el-input  oninput="if(value.length>11)value=value.slice(0,11)" placeholder="手机号" style="width: 220px; margin-right: 10px;" v-model="telNumber" type="number" clearable></el-input>
                    <el-select v-model="choose" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-date-picker
                        v-model="applyTime"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        style="margin:0 10px;"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        clearable 
                        >
                    </el-date-picker>
                    <el-button style="background:#1ABC9C;color:#fff;" @click="search">搜索</el-button>
                </div>
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
                prop="member"
                label="会员账号"
                width="100"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="price"
                label="提现金额"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="status"
                label="处理状态"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="create_time"
                label="申请时间"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="update_time"
                label="处理时间"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button style="color:#1ABC9C" @click="edit(scope.row)"  type="text" size="small">处理</el-button>
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
                        <span>审核提现</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="flag=false">X</el-button>
                    </div>
                    <div class="form">
                        <el-form  ref="form"  label-width="80px" v-model="form">
                            <el-form-item label="确认">
                                    <el-select v-model="form.ad_place" placeholder="请选择">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        format=yyyy-MM-dd>
                                        </el-option>
                                    </el-select>
                            </el-form-item>
                            <el-form-item label="审核原由">
                                <el-input placeholder="请输入理由" type="textarea" style="width:220px" v-model="form.content"></el-input>
                            </el-form-item>
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
                        <span>添加提现</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="flag1=false">X</el-button>
                    </div>
                    <div class="form">
                        <el-form  ref="formAdd"  label-width="80px" v-model="formAdd">
                           <el-form-item label="手机号">
                               <el-input placeholder="手机号"  oninput="if(value.length>11)value=value.slice(0,11)" v-model="formAdd.num" type="number"></el-input>
                           </el-form-item>
                           <el-form-item label="提现金额">
                               <el-input placeholder="提现金额" v-model="formAdd.money"></el-input>
                           </el-form-item>
                           <el-form-item label="备注">
                               <el-input placeholder="备注" type="textarea" v-model="formAdd.note"></el-input>
                           </el-form-item>
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
    import {cashout,cashoutEdit,cashoutAdd} from '@/api/salesPromotion/index'
    export default {
        data(){
            return{
                tableData:[],
                currentPage: 1,//当前页
                total:1,
                flag:false,//编辑
                flag1:false,//编辑
                telNumber:'',//手机号码,
                choose:'',//请选择
                applyTime:'',//申请时间
                form:{
                    ad_place:0,
                    content:"",
                },
                formAdd:{
                    num:'',
                    money:'',
                    note:''
                },
                 options: [{
                    value: 1,
                    label: '同意'
                    }, {
                    value: 2,
                    label: '拒绝'
                }],
                options1: [{
                    value: 1,
                    label: '同意'
                    }, {
                    value: 2,
                    label: '拒绝'
                }],
            }
        },
        methods:{
            getBannerList(){
                cashout().then(res=>{
                    console.log(res)
                    this.tableData = res.data.data
                    this.total = res.data.total
                })
            },
            //编辑
            edit(val){
                this.form.id = val.id
                this.form.ad_place = val.ad_place
                this.flag = true;
            },
            deleteGoods(val){
                let data={
                    id:val.id
                }
                console.log(data)
                bannerDel(data).then(res=>{
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
                let data={
                    id:this.form.id,
                    status:this.form.ad_place,
                    remarks:this.form.content
                }
                cashoutEdit(data).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                        this.getBannerList()
                    }
                    console.log(res)
                })
            },
            //搜索
            search(){
                this.time()
                let data={
                    status:this.choose,
                    member:this.telNumber,
                    time:this.applyTime
                }
                cashout(data).then(res=>{
                   this.tableData = res.data.data
                })
            },
            //新增
            submitAdd(){
                let data={
                    mobile:this.formAdd.num,
                    price:this.formAdd.money,
                    remarks:this.formAdd.note
                }
                cashoutAdd(data).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:"success"
                        })
                        this.flag1 = false
                        this.getBannerList()
                    }
                })
            },
             // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                   page:val
               }
                cashout(data).then(res=>{
                    this.tableData = res.data.data
                    this.total = res.data.total
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
            },
            //连接时间
            time(){
               if (this.applyTime) {
                this.applyTime =  this.applyTime[0]+'-'+this.applyTime[1]
               }
             
            }
        },
        created(){
            this.getBannerList()
        }
    }
</script>

<style lang="scss">
.banner{
    .container{
        .SearchBar{
            margin-bottom: 10px;
        }
        .title{
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            button{
                background: #1ABC9C;
                color:#fff;
            }
        }
        position: relative;
        table{
            #img{
                 width: 200px;
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