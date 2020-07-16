<template>
    <div class="user-list">
        <div class="container">
            <div class="search-div">
                <div class="SearchBar">
                     <div>
                        <el-input  placeholder="请输入手机号" style="width: 220px; margin-right: 10px;" v-model="number" type="number" min="0" max="9"></el-input>
                         <el-select v-model="stores" placeholder="请选择门店"  style=" margin-right: 10px;" >
                            <!-- <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option> -->
                        </el-select>
                        <el-button style="background:#1ABC9C;color:#fff;">搜索</el-button>
                    </div>
                    <div>
                        <el-button>导出数据</el-button>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span>数据列表</span>
                        <div>
                            <el-button  style="background:#1ABC9C;color:#fff;" @click="flag = true">群发短信</el-button>
                            <el-button  style="background:#1ABC9C;color:#fff;" @click="rod = true">微信推送</el-button>
                            <el-button  style="background:#1ABC9C;color:#fff;">赠送优惠券</el-button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%;"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                        type="selection"
                        width="55">
                        </el-table-column>
                        <el-table-column
                        label="用户ID"
                        width="120"
                        prop="id"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="所属门店"
                        width="120"
                        prop="shop_code"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="会员昵称"
                        prop="nickname"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="会员电话"
                        prop="mobile"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="普通余额"
                        prop="money"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="线上余额"
                        prop="online_money"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="限时余额"
                        prop="money_expire"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="会员等级"
                        prop="level_name"
                        align="center">
                        </el-table-column>

                        <el-table-column
                        label="操作"
                        width="120"
                        align="center">
                            <template slot-scope="scope">
                                <el-button @click="toView(scope.row)" style="color:#1ABC9C" v-if="$_has('edit')" type="text" size="small">查看</el-button>
                                <el-button @click="reduction(scope.row)" style="color:#1ABC9C" v-if="$_has('edit')" type="text" size="small">编辑</el-button>
                                <el-button @click="open(scope.row)" style="color:#1ABC9C" type="text" size="small" v-if="$_has('del')">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer" >
                        <div class="block">
                            <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"         
                            layout="total, prev, pager, next, jumper"
                            :page-size="10"
                            :total="total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mass" v-if="flag">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>群发短信</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="flag = false">X</el-button>
                    </div>
                    <div class="smsContent">
                        <el-form>
                            <el-form-item label="发送对象：">
                                <span>共<span style="color:red;">{{allPerson}}</span>个对象</span>
                            </el-form-item>
                            <el-form-item label="短信内容：">
                                <el-input type="textarea" v-model="messageContent" style="width:215px"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="requestBtn">
                        <el-button @click="cancel">取消</el-button>
                        <el-button style="background:#1ABC9C;color:#FFF" @click="confirm">确定</el-button>
                    </div>
                </el-card>
            </div>
            <div class="mass" v-if="rod">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>微信推送</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="rod = false">X</el-button>
                    </div>
                    <div class="smsContent">
                        <el-form v-model="wxMsg">
                            <el-form-item label="发送对象：">
                                <span>共<span style="color:red;">{{allPerson}}</span>个对象</span>
                            </el-form-item>
                            <el-form-item label="通知标题">
                                <el-input  v-model="wxMsg.title" style="width:215px"></el-input>
                            </el-form-item>
                            <el-form-item label="通知摘要">
                                <el-input v-model="wxMsg.Abstract" style="width:215px"></el-input>
                            </el-form-item>
                            <el-form-item label="通知时间">
                                <el-input  v-model="wxMsg.time" style="width:215px"></el-input>
                            </el-form-item>
                            <el-form-item label="详细描述">
                                <el-input  v-model="wxMsg.desc" style="width:215px"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="requestBtn">
                        <el-button @click="abolish">取消</el-button>
                        <el-button style="background:#1ABC9C;color:#FFF" @click="Pushwx">确定</el-button>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>    
    import {memberList,sendMsgs,shopList} from "@/api/user/index"
    export default {
        created(){
            this.getUserList()
            this.getShopList()
        },
        data(){
            return{
                currentPage: 1,//当前页
                total:1,//商品总个数
                stores:'',//门店
                number:'',//联系电话
                tableData:[],//用户数据
                telNumbers:[],//电话集

                //群发短信
                messageContent:'',//短信内容
                flag:false,//短信开关
                rod:false,//微信推送开关
                clusters:[],//统计群发人数
                wxMsg:{
                    title:'',
                    Abstract:'',
                    time:'',
                    desc:'',
                }
            }
        },
        methods:{
            //获取用户列表
            getUserList(){
                memberList().then(res=>{
                   this.tableData = res.data.data
                   this.total = res.data.total
                })
            },
            //获取门店列表
            getShopList(){
                shopList().then(res=>{
                    console.log(res)
                })
            },
            handleSelectionChange(val){
                let arr = [];
                val.map(v=>{
                   arr.push(v.mobile)
                })
               this.clusters = arr
            },
            // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                    page:val,
                    limit:10,
                    title:this.goods_name,
                    item_val:this.title
               }
                CollageList(data).then((res)=>{
                    this.tableData=res.data.data
                })
            },
            //查看
            toView(val){
                console.log(val)
                this.$router.push({
                    path:'/checkUser'
                })
            },
            //编辑
            reduction(val){
                console.log(val)
                this.$router.push({
                    path:'/editUser',
                    query:{
                        info:val
                    }
                })
            },
            //删除
            delete(val){
                console.log(val)
                CollageDel({id:val.id}).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:"success"
                        })
                        this.getgoods()
                    }
                })
            },
            //取消发送短信
            cancel(){
                this.flag = false
            },
            //取消微信推送
            abolish(){
                this.rod = false
            },
            //确定发送
            confirm(){
                let mobile = Object.values(this.clusters).join(',')
                let data={
                    mobile:mobile,
                    msg:this.messageContent,
                }
                sendMsgs(data).then(res=>{
                    if(res.code === 200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                    }
                })
            },
            //推送微信
            Pushwx(){

            },
            open(val) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.delete(val)
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            }
        },
        computed:{
            allPerson(){
                return this.clusters.length
            }
        }    
    }
</script>

<style lang="scss" scoped>
    .user-list{
        .container{
            width: 100%;
            box-sizing: border-box;
            position: relative;
            .search-div{
                width: 100%;
                .SearchBar{
                    border: 1px solid rgb(224, 224, 224);
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    line-height: 30px;
                    >div{
                        margin-left: 5px;
                        display: flex;
                    }
                }
                .goodsBox{
                    margin-top: 20px;  
                    .mTitle{
                        border: 1px solid rgb(236, 236, 236);
                        border-bottom: none;
                        display: flex;
                        justify-content: space-between;
                        line-height: 32px;
                        background: rgba(240, 240, 240,0.3);
                        padding: 10px 5px;
                        >span{
                            margin-left: 10px;
                        }
                    }
                    .footer{
                        text-align: right;
                        margin-right: 20px;
                        padding: 10px;
                    }
                }
            }
            .mass{
                width:500px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 100;
                .smsContent{
                    border-bottom: 1px solid rgb(235, 235, 235);
                }
            }
            .requestBtn{
                margin-top: 30px;
                text-align: right;
            }
        }
    }
</style>