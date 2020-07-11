<template>
    <div class="login-wrap">
        <div style="width:100%;text-align:center;padding-top:120px;">
            <img src="@/assets/img/login_logo.png">
            <!-- <p style="font-size:18px;">捣蛋熊猫后台管理系统</p> -->
        </div>
        <div class="ms-login">
            <div style="display:flex">
                 <div class="ms-title "   @click="erp">erp系统</div>
                 <div class="ms-title action"   @click="shop">shop系统</div>
                 <div class="ms-title"  >门店系统</div>
            </div>
            <el-form :model="ErpParam" :rules="rules" ref="login" label-width="0px" class="ms-content" v-if="flag == 1">
                <el-form-item prop="account">
                    <el-input v-model="ErpParam.account" placeholder="username" clearable>
<!--                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>-->
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="ErpParam.password"
                        @keyup.enter.native="submitForm()"
                        clearable
                    >
                       <!-- <el-button slot="prepend" icon="el-icon-lx-lock"></el-button> -->
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
               <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
            </el-form>
            <el-form :model="ShopParam" :rules="rules" ref="login" label-width="0px" class="ms-content" v-if="flag == 2">
                <el-form-item prop="account">
                    <el-input v-model="ShopParam.account" placeholder="username" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="ShopParam.password"
                        @keyup.enter.native="submitShop()"
                        clearable
                    >
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitShop()">登录</el-button>
                </div>
            </el-form>
            <!-- <el-form :model="StoresParam" :rules="rules" ref="login" label-width="0px" class="ms-content" v-if="flag == 3">
                <el-form-item prop="account">
                    <el-input v-model="StoresParam.account" placeholder="username" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="StoresParam.password"
                        @keyup.enter.native="submitForm()"
                        clearable
                    >
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form> -->
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import { loginErp,loginShop } from '@/api/user.js';
export default {
    data: function() {
        return {
            flag:2,
            ErpParam: {
                account: 'admin',
                password: '123456',
            },
            ShopParam: {
                account: 'admin1',
                password: '123456',
            },
            StoresParam: {
                account: 'admin2',
                password: '123456',
            },
            rules: {
                account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods: {
        ...mapMutations(['setUserInfo']),
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    const requestData = {
                        ...this.ErpParam,
                        username: this.ErpParam.account,// 这儿为了兼容shop系统
                    };
                    loginErp(requestData).then(res => {
                        if (res.code === 200){
                            this.$message({
                                duration:1000,
                                message:'登录成功',
                                type:'success'
                            })
                            this.setUserInfo(res.data);
                            this.$router.push('/');
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    this.$message.error('请输入账号和密码');
                    return false;
                }
            });
        },
        submitShop(){
            this.$refs.login.validate(valid => {
            if (valid) {
                const requestData = {
                    ...this.ShopParam,
                    username: this.ShopParam.account,// 这儿为了兼容shop系统
                };
                loginShop(requestData).then(res => {
                    if (res.code === 200){
                        this.$message({
                            duration:1000,
                            message:'登录成功',
                            type:'success'
                        })
                        this.setUserInfo(res.data);
                        this.$router.push('/');
                    }
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.$message.error('请输入账号和密码');
                return false;
            }
            });
        },
        erp(){
            window.location.href='http://testadmin2.ddxm661.com/erp/#/login'
            console.log(123)
        },
        shop(){
            window.location.href="http://ddxm661.com:8088/shop/#/login"
            console.log(456)
        }
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
.action{
    background: #fff;
    color: black;
}
</style>
