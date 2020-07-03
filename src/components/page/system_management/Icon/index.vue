<template>
    <div class="icon">
        <div class="container">
             <div class="title">
                <el-button @click="addIcon">添加首页图标</el-button>
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
                prop="thumb"
                label="缩略图"
                width="140"
                align="center">
                <template slot-scope="scope" >
                    <div id="img">
                        <img :src="scope.row.thumb">
                    </div>
                </template>
                </el-table-column>
                 <el-table-column
                prop="title"
                label="是否禁用"
                align="center">
                </el-table-column>
                <el-table-column
                prop="type"
                label="跳转类型"
                width="100"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="url"
                label="跳转地址"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="value"
                label="跳转参数"
                align="center">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button style="color:#1ABC9C" @click="edit(scope.row)"  type="text" size="small">编辑</el-button>
                    <!-- <el-button style="color:#1ABC9C" @click="deleteGoods(scope.row)" type="text" size="small">删除</el-button> -->
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
                        <span>编辑图片</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="flag=false">X</el-button>
                    </div>
                    <div class="form">
                        <el-form  ref="form"  label-width="80px" v-model="form">
                            <el-form-item label="商品图">
                                <span>只能上传一张</span>
                                <bannerUpImg v-model="form.imgUrl" @getImgUrls="setImg"></bannerUpImg>
                            </el-form-item>
                            <el-form-item label="图标类型">
                                <template>
                                    <el-radio-group v-model="form.radio" @change="change">
                                        <el-radio :label="1">不跳转</el-radio>
                                        <el-radio :label="2">跳转外部页面</el-radio>
                                        <el-radio :label="3">跳转内部页面</el-radio>
                                    </el-radio-group>
                                </template>
                            </el-form-item>
                            <el-form-item label="图标名称" v-if="rod">
                            <el-input style="width:200px" v-model="form.title"></el-input>
                            </el-form-item>
                            <el-form-item label="页面地址" v-if="rod1">
                            <el-input style="width:200px" v-model="form.address"></el-input>
                            </el-form-item>
                            <el-form-item label="页面参数" v-if="rod2">
                            <el-input style="width:200px" v-model="form.param"></el-input>
                            </el-form-item>
                            <el-form-item label="序号">
                            <el-input style="width:200px" v-model="form.num"></el-input>
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
                            <span>添加轮播</span>
                            <el-button style="float: right; padding: 3px 0" type="text" @click="flag1=false">X</el-button>
                        </div>
                        <div class="form">
                            <el-form  ref="form"  label-width="80px" v-model="form">
                                <el-form-item label="商品图">
                                    <span>只能上传一张</span>
                                    <bannerUpImg v-model="form.imgUrl" @getImgUrls="setImg"></bannerUpImg>
                                </el-form-item>
                                <el-form-item label="图标类型">
                                    <template>
                                        <el-radio-group v-model="form.radio" @change="change">
                                            <el-radio :label="1">不跳转</el-radio>
                                            <el-radio :label="2">跳转外部页面</el-radio>
                                            <el-radio :label="3">跳转内部页面</el-radio>
                                        </el-radio-group>
                                    </template>
                                </el-form-item>
                                <el-form-item label="图标名称" v-if="rod">
                                <el-input style="width:200px" v-model="form.title"></el-input>
                                </el-form-item>
                                <el-form-item label="页面地址" v-if="rod1">
                                <el-input style="width:200px" v-model="form.address"></el-input>
                                </el-form-item>
                                <el-form-item label="页面参数" v-if="rod2">
                                <el-input style="width:200px" v-model="form.param"></el-input>
                                </el-form-item>
                                <el-form-item label="序号">
                                <el-input style="width:200px" v-model="form.num"></el-input>
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
    import {iconList,iconEdit,iconAdd} from '@/api/system/index'
    import bannerUpImg from '@/components/common/bannerUpImg'
import { constants } from 'zlib';
import { fstat } from 'fs';
    export default {
        data(){
            return{
                tableData:[],
                currentPage: 1,//当前页
                total:1,
                rod:true,//控制轮播类型
                rod1:false,//控制轮播类型
                rod2:false,//控制轮播类型
                flag:false,//编辑
                flag1:false,//添加
                form:{
                    id:'',
                    title:'',
                    imgUrl:'',
                    radio:1,
                    address:'',
                    param:'',
                    num:'',
                }
            }
        },
        components:{
            bannerUpImg
        },
        methods:{
            getBannerList(){
                iconList().then(res=>{
                    console.log(res)
                    this.tableData = res.data.data
                    this.total = res.data.count
                })
            },
            //是否禁用
            // isdisable(val){
            //     let data={
            //         id:val.id,
            //         status:val.status
            //     }
            //     bannerSwitch(data).then(res=>{
            //         if(res.code==200){
            //             this.$message({
            //                 message:res.msg,
            //                 type:'success'
            //             })
            //             this.getBannerList()
            //         }
            //     })
            // },
            //编辑
            edit(val){
                this.form.id = val.id
                this.form.title = val.title
                this.form.radio = val.type
                this.form.address = val.url
                this.form.param = val.value
                this.form.num = val.sort
                // this.form.imgUrl
                this.flag = true;
                console.log(val)
            },
            // deleteGoods(val){
            //     // console.log(val)
            //     let data={
            //         id:val.id
            //     }
            //     console.log(data)
            //     bannerDel(data).then(res=>{
            //         if(res.code==200){
            //             this.$message({
            //                 message:res.msg,
            //                 type:'success'
            //             })
            //             this.getBannerList()
            //         }
            //     })
            // },
            //监听轮播类型
            change(val){
                if(val == 1){
                    this.rod = true
                    this.rod1 = false
                    this.rod2 = false
                }else if(val == 2){
                     this.rod = true
                    this.rod1 = true
                    this.rod2 = false
                }else if(val == 3){
                    this.rod = true
                    this.rod1 = true
                    this.rod2 = true
                }
            },
            //编辑提交
            submitEdit(){
                console.log(this.form)
                let data={
                    id:this.form.id,
                    title: this.form.title,
                    type:this.form.radio,
                    thumb:this.form.imgUrl,
                    sort:this.form.num,
                    url:this.form.address,
                }
                iconEdit(data).then(res=>{
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
            addIcon(){
                this.flag1 = true
                this.form.id = ''
                this.form.title = ''
                this.form.address = ''
                this.form.param = ''
                this.form.num = ''
            },
            //添加提交
            submitAdd(){
                let data={
                    title: this.form.title,
                    type:this.form.radio,
                    thumb:this.form.imgUrl,
                    sort:this.form.num,
                    url:this.form.address,
                    value:this.form.param,
                }
                console.log(data)
                iconAdd(data).then(res=>{
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
            //上传图片
            setImg(val){
                this.form.imgUrl = val
            },
             // 上下页
            handleCurrentChange(val) {
                console.log(val)
               let data ={
                   page:val
               }
                bannerList(data).then(res=>{
                    this.tableData = res.data.data
                    this.total = res.data.count
                })
            },
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