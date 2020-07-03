<template>
<div class="addType">
  <div class="container">
        <div class="title">
            <p>新增规格</p>
        </div>
        <div class="box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="参数名称">
                    <el-input placeholder="必填" style="width:260px" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="规格说明">
                    <el-input style="width:260px" type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                 <el-form-item label="输入规格">
                    <el-input style="width:260px" v-model="form.add"></el-input>
                    <el-button style="margin-left:6px;" @click="addtype">添加</el-button>
                </el-form-item>
                 <el-form-item label="选中规格" class="typeval">
                    <!-- <el-input style="width:214px" v-model="form.add"></el-input>
                    <el-button style="margin-left:6px;" @click="addtype">添加</el-button> -->
                     <ul>
                        <li v-for="(item,index) in this.list" :key="index">
                            <span>{{item}}</span>
                            <span @click="del(index)">x</span>
                        </li>
                    </ul>
                </el-form-item>
                <!-- <div class="typeval">
                    <p>选中规格</p>
                    <ul>
                        <li v-for="(item,index) in this.list" :key="index">
                            <span>{{item}}</span>
                            <span @click="del(index)">x</span>
                        </li>
                    </ul>
                </div> -->
                <div class="clearfix"></div>
            </el-form>
            <div style="margin:20px 0 0 80px;">
                <el-button style="background:#1ABC9C;color:#fff;" @click="submit">提交</el-button>   
            </div>
            
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
.addType{
    height: 100%;
     font-family: '微软雅黑';
    .container{
        width: 100%;
        padding: 0;
        margin: 0;
          .title {
            background: rgb(238, 238, 238);
            padding: 15px;
            color: rgb(61, 61, 61);
            font-size: 14px;
        }
    }
      .box{
        width: 600px;
        padding: 50px 0;
        margin: auto;
        }
    
    .typeval{
        p{
            color: rgb(97, 96, 96);
      
        }
        ul{
            width: 260px;
            list-style: none;
            border: 1px solid #ccc;
            padding: 10px;
            box-sizing: border-box;
            min-height: 30px;
            border-radius: 5px;
            li{
                padding: 5px 10px;
                border: 1px solid #ccc;
                margin: 6px;
                display: flex;
                justify-content: space-between;
                span:last-child{
                  color: rgb(165, 4, 4);
                    text-align: center;
                    line-height: 30px;
                }
            }
        }
    }
    // .clearfix{
    //     clear: both;
    // }
}
</style>