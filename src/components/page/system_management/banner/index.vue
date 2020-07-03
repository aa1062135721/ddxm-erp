<template>
    <div class="banner">
        <div class="container">
             <div class="title">
                <el-button>添加轮播</el-button>
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
                prop="img"
                label="缩略图"
                width="200"
                align="center">
                <template slot-scope="scope">
                   <div v-html="scope.row.img" id="img"></div>
                </template>
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
                prop="address"
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button style="color:#1ABC9C" @click="edit(scope.row)"  type="text" size="small">编辑</el-button>
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
                            <bannerUpImg v-model="form.imgUrl"></bannerUpImg>
                        </el-form-item>
                        <el-form-item label="轮播类型">
                            <template>
                                <el-radio-group v-model="form.radio">
                                    <el-radio :label="1">不跳转</el-radio>
                                    <el-radio :label="2">跳转外部页面</el-radio>
                                    <el-radio :label="3">跳转内部页面</el-radio>
                                </el-radio-group>
                            </template>
                        </el-form-item>
                         <el-form-item label="轮播位置">
                            <template>
                                <el-radio-group v-model="form.ad_place">
                                    <el-radio :label="0">上</el-radio>
                                    <el-radio :label="1">下</el-radio>
                                </el-radio-group>
                            </template>
                        </el-form-item>
                         <el-form-item label="标题名称">
                          <el-input style="width:200px" v-model="form.title"></el-input>
                        </el-form-item>
                        <el-form-item label="页面地址">
                          <el-input style="width:200px" v-model="form.address"></el-input>
                        </el-form-item>
                        <el-form-item label="页面参数">
                          <el-input style="width:200px" v-model="form.param"></el-input>
                        </el-form-item>
                         <el-form-item label="序号">
                          <el-input style="width:200px" v-model="form.num"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="background:#1ABC9C;color:#fff" @click="submit">立即提交</el-button>
                            <el-button type="info" @click="flag=false">返回</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
        </div>
    </div>
</template>

<script>
    import {bannerList,bannerEdit} from '@/api/system/index'
    import bannerUpImg from '@/components/common/bannerUpImg'
    export default {
        data(){
            return{
                tableData:[],
                currentPage: 1,//当前页
                total:1,
                
                flag:false,
                form:{
                    id:'',
                    title:'',
                    imgUrl:'',
                    radio:1,
                    address:'',
                    param:'',
                    num:'',
                    ad_place:0,
                }
            }
        },
        components:{
            bannerUpImg
        },
        methods:{
            getBannerList(){
                bannerList().then(res=>{
                    console.log(res)
                    this.tableData = res.data.data
                    this.total = res.data.total
                })
            },
            isdisable(val){
                console.log(val)
            },
            //编辑
            edit(val){
                bannerEdit({id:val.id}).then(res=>{
                    console.log(res)
                let a = res.data
                this.form.id = a.id
                this.form.title = a.title
                this.form.ad_place = a.ad_place
                this.form.radio = a.status
                this.form.address = a.url
                this.form.param =a.value
                this.form.num = a.sort
                })
                this.flag = true;
                // console.log(val)
            },
            //立即提交
            submit(){
                let data={
                    id:this.form.id,
                    title: this.form.title,
                    type:this.form.radio,
                    // thumb:this.
                }
                bannerEdit().then(res=>{

                })
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
.banner{
    .container{
        position: relative;
        table{
            #img{
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