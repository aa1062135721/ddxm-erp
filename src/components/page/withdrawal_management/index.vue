<template>
    <div class="banner">
        <div class="container">
             <div class="title">
                <el-button @click="flag1=true">添加</el-button>
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
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
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
                               <el-input placeholder="手机号" v-model="formAdd.num" type="number"></el-input>
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
    import {cashout,cashoutEdit} from '@/api/salesPromotion/index'
    export default {
        data(){
            return{
                tableData:[],
                currentPage: 1,//当前页
                total:1,
                flag:false,//编辑
                flag1:false,//编辑
                form:{
                    ad_place:0,
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
                console.log(this.form)
                let data={
                    id:this.form.id,
                    ad_place:this.form.ad_place,
                }
                cashoutEdit(data).then(res=>{
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
            //新增
            submitAdd(){
                console.log(this.formAdd)
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