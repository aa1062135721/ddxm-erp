<template>
    <div class="container">
        <div class="box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="参数名称">
                    <el-input placeholder="必填" style="width:214px" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="规格说明">
                    <el-input style="width:214px" type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                 <el-form-item label="输入规格">
                    <el-input style="width:214px" v-model="form.add"></el-input>
                    <el-button style="margin-left:6px;" @click="addtype">添加</el-button>
                </el-form-item>
                <div class="typeval">
                    <p>选中规格</p>
                    <ul>
                        <li v-for="(item,index) in this.list" :key="index">
                            <span>{{item}}</span>
                            <span @click="del(index)">x</span>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </el-form>
            <div style="margin:20px 0 0 80px;">
                <el-button style="background:#1ABC9C;color:#fff;" @click="submit">提交</el-button>   
            </div>
            
        </div>
       
    </div>
</template>

<script>
    import {addSpecs} from "@/api/goods/goods_list"
    export default {
        data(){
            return{
                form:{
                    name:'',
                    desc:'',
                    add:'',
                },
                list:[]
            }
        },
        methods:{
            addtype(){
               this.list.push(this.form.add)
               this.form.add='';
            },
            del(index){
                this.list.splice(index,1)
            },
            submit(){
                let data={
                    gs_title:this.form.name,
                    gs_desc:this.form.desc,
                    child:this.list
                }
               addSpecs(data).then(res=>{
                   if(res.code===200){
                       this.$message({
                       message:res.msg,
                       type:"success"
                   })
                   }
               })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        width: 500px;
        margin: auto
    }
    
    .typeval{
        margin-left: 10px;
        font-size: 15px;
        width: 500px;
        // display: flex;
        // justify-content: space-between;
        p{
            color: rgb(97, 96, 96);
            float: left;
        }
        ul{
            width: 214px;
            float: left;
            margin-left: 10px;
            list-style: none;
            border: 1px solid #ccc;
            padding: 10px;
            box-sizing: border-box;
            min-height: 30px;
            border-radius: 5px;
            li{
                padding: 5px;
                border: 1px solid #ccc;
                margin: 6px;
                display: flex;
                justify-content: space-between;
                span:last-child{
                    border: 1px solid rgb(82, 82, 82);
                    border-radius: 50%;
                    color: rgb(131, 131, 131);
                    width: 12px;
                    text-align: center;
                    line-height: 13px;
                }
            }
        }
    }
    .clearfix{
        clear: both;
    }
</style>