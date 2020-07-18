<template>
    <div class="editUser">
        <div class="container">
            <p>编辑资料</p>
            <div class="main">
                <el-form v-model="form" label-width="100px" class="form">
                    <el-form-item label="手机号码：">
                        <el-input type="number" placeholder="请输入手机号码" style="width:215px" v-model="form.telNumber"></el-input>
                    </el-form-item>
                     <el-form-item label="用户昵称：">
                        <el-input placeholder="请输入用户昵称" style="width:215px;" v-model="form.nickName"></el-input>
                    </el-form-item>
                    <el-form-item label="门店编码：">
                        <el-input placeholder="请输入门店编号" style="width:215px;" v-model="form.StoresNumber"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="background:#1ABC9C;color:#FFF; width:100px;height:30px" @click="submit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {editMember} from "@/api/user/index"
    export default {
        created(){
            this.getInfo()
        },
        data(){
            return{
                form:{
                    id:'',
                    telNumber:'',
                    nickName:'',
                    StoresNumber:'',
                }
            }
        },
        methods:{
            getInfo(){
                let a = this.$route.query.info;
                this.form.id = a.id;
                this.form.telNumber = a.mobile;
                this.form.nickName = a.nickname;
                this.form.StoresNumber = a.shop_code;
            },
            submit(){
                let data={
                    id:this.form.id,
                    mobile:this.form.telNumber,
                    nickname:this.form.nickName,
                    shop_code:this.form.StoresNumber,
                }
                editMember(data).then(res=>{
                    if(res.code === 200){
                        this.$message({
                        message:res.msg,
                        type:'success'
                        })
                    }
                   
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.editUser{
    height: 100%;
    .container{
        padding: 0;
        margin: 0;
        height: 100%;
        p{
          background: #f3f3f3;
          padding:20px 10px;
          color: #7c7c7c;
          font-size: 14px;
          border-radius: 0;
        }
        .main{
            width: 400px;
            // margin:0 auto;
            margin-top: 20px;
        }
    }
}
</style>