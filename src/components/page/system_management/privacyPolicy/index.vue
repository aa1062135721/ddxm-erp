<template>
    <div>
        <div class="editPartition">
            <div class="singer">
                <span style="margin-right:10px;">标题 :</span>
                <el-input placeholder="请输入分区名称" style="width:400px;" v-model="name"></el-input>
            </div>
             <div class="singer1">
                <p>内容 :</p>
                <Editor style="width:800px; margin-left:10px;" v-model="content"></Editor>
            </div>
            <div style="margin-top:150px; text-align:center" >
                <el-button style="background:#1ABC9C;color:#fff; width:100px; height:36px;" @click="submit">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from '@/components/common/Editor'
    import {privacy,privacyEdit} from '@/api/system/index'
    export default {
        data(){
            return{
                name:'',//分区名称
                content:'',
                id:null,//分区ID
            }
        },
        components:{
            Editor
        },
        created(){
            this.getPartitionInfo()
        },
        methods:{
            getPartitionInfo(){
                privacy().then(res=>{
                      this.name = res.data.title
                      this.content = res.data.content
                      this.id = res.data.id
               })
            },
            submit(){
                let data = {
                    title:this.name,
                    content:this.content,
                    id:this.id
                }
                privacyEdit(data).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:"success"
                        })
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .editPartition{
         font-family: '微软雅黑';
        width: 1000px;
        min-height: 600px;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 4px;
        margin: auto;
        .singer1{
            display: flex;
            margin-top: 20px;
        }
    }
</style>