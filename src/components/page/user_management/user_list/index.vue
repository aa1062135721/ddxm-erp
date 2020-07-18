<template>
    <div class="user-list">
        <div class="container">
            <div class="search-div">
                <div class="SearchBar">
                    <div>
                        <el-input
                            placeholder="请输入手机号"
                            style="width: 220px; margin-right: 10px;"
                            v-model="number"
                            type="number"
                            min="0"
                            max="9"
                            clearable
                        ></el-input>
                        <el-select
                            v-model="stores"
                            placeholder="请选择门店"
                            style=" margin-right: 10px;"
                            v-loadmore="loadMore"
                            @change="changeStores"
                            clearable=""
                        >
                            <el-option
                            v-for="item in storesList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.code">
                            </el-option>
                        </el-select>
                        <el-button style="background:#1ABC9C;color:#fff;" @click="searchList">搜索</el-button>
                    </div>
                    <div>
                        <el-button>导出数据</el-button>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span style="color:#666">数据列表</span>
                        <div>
                            <el-button style="background:#1ABC9C;color:#fff;" @click="flag = true">群发短信</el-button>
                            <el-button style="background:#1ABC9C;color:#fff;" @click="rod = true">微信推送</el-button>
                            <el-button style="background:#1ABC9C;color:#fff;" @click="mark=true">赠送优惠券</el-button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border=""
                        tooltip-effect="dark"
                        style="width: 100%;"
                        @selection-change="handleSelectionChange"
                    >
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column label="用户ID" width="120" prop="id" align="center"></el-table-column>
                        <el-table-column label="所属门店" width="120" prop="shop_name" align="center"></el-table-column>
                        <el-table-column label="会员昵称" prop="nickname" align="center"></el-table-column>
                        <el-table-column label="会员电话" prop="mobile" align="center"></el-table-column>
                        <el-table-column label="普通余额" prop="money" align="center"></el-table-column>
                        <el-table-column label="线上余额" prop="online_money" align="center"></el-table-column>
                        <el-table-column label="限时余额" prop="money_expire" align="center"></el-table-column>
                        <el-table-column label="会员等级" prop="level_name" align="center"></el-table-column>
                        <el-table-column label="操作" width="120" align="center">
                            <template slot-scope="scope">
                                <el-button
                                    @click="toView(scope.row)"
                                    style="color:#1ABC9C"
                                    v-if="$_has('edit')"
                                    type="text"
                                    size="small"
                                >查看</el-button>
                                <el-button
                                    @click="reduction(scope.row)"
                                    style="color:#1ABC9C"
                                    v-if="$_has('edit')"
                                    type="text"
                                    size="small"
                                >编辑</el-button>
                                <el-button
                                    @click="open(scope.row)"
                                    style="color:#1ABC9C"
                                    type="text"
                                    size="small"
                                    v-if="$_has('del')"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer">
                        <div class="block">
                            <el-pagination
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                layout="total, prev, pager, next, jumper"
                                :page-size="10"
                                :total="total"
                            ></el-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 群发短信 -->
            <div class="mass" v-if="flag">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>群发短信</span>
                    </div>
                    <div class="smsContent">
                        <el-form>
                            <el-form-item label="发送对象：">
                                <span>共
                                    <span style="color:red;">{{pushMsg}}</span>个对象
                                </span>
                            </el-form-item>
                            <el-form-item label="添加对象：">
                                <el-select v-model="groupMsg" multiple placeholder="请选择" v-loadmore="loading"> 
                                    <div style="text-align:center;">
                                        <el-input placeholder="请输入手机号" style="width:200px;" v-model="phoneNumber" clearable></el-input>
                                        <el-button style="margin-left:10px" @click="searchUser">搜索</el-button>
                                    </div>
                                    <el-option
                                        v-for="item in extended"
                                        :key="item.mobile"
                                        :label="item.nickname"
                                        :value="item.mobile"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="短信内容：">
                                <el-input
                                    type="textarea"
                                    v-model="messageContent"
                                    style="width:215px"
                                ></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="requestBtn">
                        <el-button @click="cancel">取消</el-button>
                        <el-button style="background:#1ABC9C;color:#FFF" @click="confirm">确定</el-button>
                    </div>
                </el-card>
            </div>
            <!-- 微信消息推送 -->
            <div class="mass" v-if="rod">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>微信推送</span>
                    </div>
                    <div class="smsContent">
                        <el-form :model="wxMsg">
                            <el-form-item label="发送对象：">
                                <span>共
                                    <span style="color:red;">{{allPerson}}</span>个对象
                                </span>
                               <span style="color:#1ABC9C;font-weight:bold;margin-left:10px;" @click="addObj=true">点击添加对象</span>
                            </el-form-item>
                            <el-form-item label="拓展对象：" v-if="addObj">
                                <el-select v-model="wxMsg.addPerson" multiple placeholder="请选择" v-loadmore="loading">
                                     <div style="text-align:center;">
                                        <el-input placeholder="请输入手机号" style="width:200px;" v-model="phoneNumber" clearable></el-input>
                                        <el-button style="margin-left:10px" @click="searchUser">搜索</el-button>
                                    </div>
                                    <el-option
                                        v-for="item in extended"
                                        :key="item.id"
                                        :label="item.nickname"
                                        :value="item.openid"
                                        no-match-text='暂无数据'
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="通知标题：">
                                <el-input v-model="wxMsg.title" style="width:215px"></el-input>
                            </el-form-item>
                            <el-form-item label="通知摘要：">
                                <el-input
                                    type="textarea"
                                    v-model="wxMsg.Abstract"
                                    style="width:215px"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="通知时间：">
                                <el-date-picker
                                    v-model="wxMsg.time"
                                    type="datetimerange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    style="width:215px;"
                                    value-format="yyyy/MM/dd"
                                    clearable
                                ></el-date-picker>
                            </el-form-item>
                            <el-form-item label="详细描述：">
                                <el-input type="textarea" v-model="wxMsg.desc" style="width:215px"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="requestBtn">
                        <el-button @click="abolish">取消</el-button>
                        <el-button style="background:#1ABC9C;color:#FFF" @click="Pushwx">确定</el-button>
                    </div>
                </el-card>
            </div>
            <!-- 赠送优惠券 -->
            <div class="coupon" v-if="mark">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>赠送优惠券</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="mark=false">X</el-button>
                    </div>
                    <div class="headline">
                        <el-input placeholder="优惠券名称/优惠券编码" style="width:260px"></el-input>
                        <el-button><i class="el-icon-search"></i></el-button>
                    </div>
                    <el-table>
                        <el-table-column
                            type="selection"
                            width="55">
                        </el-table-column>
                        <el-table-column label="优惠券名称"></el-table-column>
                        <el-table-column label="面额"></el-table-column>
                        <el-table-column label="剩余张数"></el-table-column>
                        <el-table-column label="使用条件"></el-table-column>
                        <el-table-column label="有效期"></el-table-column>
                    </el-table>
                    <div style="text-align:right;margin:10px 5px;">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
                   
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>    
    import {memberList,sendMsgs,shopList,sendWxMsgs} from "@/api/user/index"
import { constants } from 'buffer';
import { publicEncrypt } from 'crypto';
    export default {
        created(){
            this.getUserList()
            this.getShopList()
        },
        data(){
            return{
                currentPage: 1,//当前页
                total:1,//商品总个数
                pageIndex:2,
                pageMore:2,
                stores:'',//门店
                number:'',//联系电话
                tableData:[],//用户数据
                telNumbers:[],//电话集
                storesList:[],//保存门店数据

                phoneNumber:null,//手机号搜索
                //群发短信
                groupMsg:[],//群发短信添加对象
                messageContent:'',//短信内容
                
                mark:false,//优惠券开关
                flag:false,//短信开关
                rod:false,//微信推送开关
                addObj:false,//扩展对象


                clusters:[],//统计群发人数
                extended:[],//保存初始对象
                choose:[],//选中对象
                checked:[],//保存选中数据
                wxMsg:{
                    addPerson:[],//添加群发对象
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
                    console.log(res)
                    this.tableData = res.data.data
                    this.total = res.data.total
                    this.extended =JSON.parse(JSON.stringify(res.data.data)) 
                })
            },
            //获取门店列表
            getShopList(){
                shopList().then(res=>{
                    this.storesList = res.data.data
                })
            },
            handleSelectionChange(val){
                let arr = []; 
                let temp = []; 
                let arr1=[];
                val.map(v=>{
                    arr.push(v.mobile)
                    temp.push(v)
                    arr1.push(v.openid)
                })
                this.checked = arr1
                this.clusters = arr;
                this.choose = temp;
                this.extended=this.arrayRepeat(this.choose,this.extended)
            },
            arrayRepeat (array1, array2) {
                return array2.filter(i => !array1.map(j => j.id).includes(i.id));
            },
            //手机号码查询
            searchList(){
                let data={
                    mobile:this.number
                }
                memberList(data).then(res=>{
                    this.tableData = res.data.data
                    this.total = res.data.total
                })
            },
            // 门店查询
            changeStores(){
                memberList({shop_code:this.stores}).then(res=>{
                   this.tableData = res.data.data
                   this.total = res.data.total
                })
            },
            // 上下页
            handleCurrentChange(val) {
               let data ={
                    page:val,
                    shop_code:this.stores
               }
                memberList(data).then((res)=>{
                    this.tableData = res.data.data
                    this.total = res.data.total
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
                // this.getUserList()
                this.flag = false;
                this.addObj = false;

                //清空输入项
                this.groupMsg = [];
                this.messageContent = ''
            },
            //取消微信推送
            abolish(){
                this.rod = false;
                this.addObj = false;
                // this.getUserList()
                this.clearContent()
            },
            //清空输入项
            clearContent(){
                let a = this.wxMsg;
                    a.addPerson = [];
                    a.title = '';
                    a.Abstract = '';
                    a.time = '';
                    a.desc = '';
            },
            //短信推送
            confirm(){
                let number = this.clusters.concat(this.groupMsg)
                let str = number.join(',')
                let data={
                    mobile:str,
                    msg:this.messageContent,
                }
                console.log(data)
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
                this.JoinTime() 
                let check = this.checked.concat(this.wxMsg.addPerson)
                let data={
                    openid:check,
                    title:this.wxMsg.title,
                    content:this.wxMsg.Abstract,
                    time:this.wxMsg.time,
                    remark:this.wxMsg.desc
                }
                sendWxMsgs(data).then(res=>{
                   if(res.code === 200 ){
                       this.$message({
                           message:res.msg,
                           type:'success'
                       })
                   }
                })
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
            },
            //下拉加载门店数据
            loadMore(){
                let data={
                    page:this.pageIndex++
                }
                shopList(data).then(res=>{
                    this.storesList =this.storesList.concat(res.data.data) 
                })
            },
            //下拉加载客户数据
            loading(){
               let data={
                   page:this.pageMore++
               }
               memberList(data).then(res=>{
                   this.extended =this.extended.concat(res.data.data)
               })
            },
            //搜索用户
            searchUser(){
                let data={
                    mobile:this.phoneNumber
                }
                memberList(data).then(res=>{
                   this.extended = res.data.data;
                   if(res.data.total===0){
                       setTimeout(() => {
                           memberList().then(res=>{this.extended = res.data.data})
                       }, 1000);
                   }
               })
            },
            // 拼接时间
            JoinTime(){
                if(this.wxMsg.time){
                    this.wxMsg.time = this.wxMsg.time[0] + '-' + this.wxMsg.time[1]
                }
            },
            morePersonMsg(){
                if(this.extended.length === 0){
                    memberList({page:2}).then(res=>{
                        this.extended =this.extended.concat(res.data.data)
                    })
                }
            }
        },
        computed:{
            allPerson(){
                return this.clusters.length + this.wxMsg.addPerson.length
            },
            pushMsg(){
                return this.clusters.length + this.groupMsg.length
            }
        },
        updated(){
            this.morePersonMsg()
        }    
    }
</script>

<style lang="scss" scoped>
.user-list {
    .container {
        width: 100%;
        box-sizing: border-box;
        position: relative;
        .search-div {
            width: 100%;
            .SearchBar {
                border: 1px solid rgb(224, 224, 224);
                padding: 10px;
                display: flex;
                justify-content: space-between;
                line-height: 30px;
                > div {
                    margin-left: 5px;
                    display: flex;
                }
            }
            .goodsBox {
                margin-top: 20px;
                .mTitle {
                    border: 1px solid rgb(236, 236, 236);
                    border-bottom: none;
                    display: flex;
                    justify-content: space-between;
                    line-height: 32px;
                    background: rgba(240, 240, 240, 0.3);
                    padding: 10px 5px;
                    > span {
                        margin-left: 10px;
                    }
                }
                .footer {
                    text-align: right;
                    margin-right: 20px;
                    padding: 10px;
                }
            }
        }
        .mass {
            width: 500px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
            .smsContent {
                border-bottom: 1px solid rgb(235, 235, 235);
            }
        }
        .requestBtn {
            margin-top: 30px;
            text-align: right;
        }
        .coupon{
            width: 900px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .headline{
                margin-bottom: 15px;
            }
        }
    }
}
</style>