<template>
    <div class="container">
        <div style="text-align:right;">
            <el-button style="background:#1ABC9C;color:#fff" @click="delAll">删除选中照片</el-button>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item,index) in imglist" :key="index" >
                    <img :src="item.gr_url">
                    <p>
                        <span @click="choose(item)"> 
                            <i v-if="item.gr_type===2"></i>
                        </span>
                        <span @click="findimg(item)">删除图片</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { resourceDel } from '@/api/common/index';
    export default {
        data(){
            return{
                imglist:[],//图片数据
                imgids:[],//存储选择图片ID
            }
        },
        methods:{
            getimglist(){
                this.imglist = this.$route.query.data.child
                console.log(this.imglist)
            },
            findimg(val){
                let arr=[]
                arr.push(val.id)
                let data={
                    ids:arr
                }
                resourceDel(data).then(res=>{
                    this.$message({
                        message:res.msg,
                        type:"success"
                    })
                })
            },
            delAll(){
                let data={
                    ids:this.imgids
                }
                resourceDel(data).then(res=>{
                    this.$message({
                        message:res.msg,
                        type:"success"
                    })
                })
            },
            choose(val){
                if(val.gr_type===1){
                    val.gr_type=2
                }else{
                    val.gr_type=1
                }
                this.imgids.push(val.id)
           }
        },
        mounted(){
            this.getimglist()
        }
    }
</script>

<style lang="scss" scoped>
    .list{
        ul{
            list-style: none;
            justify-content: space-around;
            display: flex;
            flex-wrap: wrap;
            li{
                background: #f2f2f2;
                padding: 10px;
                margin: 20px;
                img{
                    width: 200px;
                    height: 200px;
                }
                >p{
                    text-align: center;
                    font-size: 14px;
                    color: #1ABC9C;
                    span:first-of-type{
                        width: 10px;
                        height: 10px;
                        border: 1px solid #1ABC9C;
                        display: inline-block;
                        margin-right: 6px;
                        position: relative;
                        i{
                            width: 6px;
                            height: 6px;
                            display: inline-block;
                            background: #1ABC9C;
                            border-radius: 50%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                        }
                    }
                    >span:hover{
                        text-decoration: underline;
                    }
                    .action{
                        background: #1ABC9C;
                    }
                }
            }
        }
    }
</style>