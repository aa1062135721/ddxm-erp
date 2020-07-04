<template>
    <div class="time">
        <div class="container">
            <el-form ref="form" :model="form" label-width="160px" class="form">
             <el-form-item label="待付款超时">
                <el-input v-model="form.payovertime" style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">小时（只针对普通订单）</span>
            </el-form-item>
            <el-form-item label="拼团待付款超时">
                <el-input v-model="form.spellpayovertime"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">小时（只针对拼团订单）</span>
            </el-form-item>
            <el-form-item label="抢购待付款超时">
                <el-input v-model="form.snapup"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">分钟（只针对抢购订单）</span>
            </el-form-item>
            <el-form-item label="自动收货超时">
                <el-input v-model="form.automatic"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">天（商城自营）</span>
            </el-form-item>
            <el-form-item label="跨境购-自动收货超时">
                <el-input v-model="form.crossborder"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">天（跨境购）</span>
            </el-form-item>
            <el-form-item label="自动评论超时">
                <el-input v-model="form.comments"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">天（确认收货后开始计时）</span>
            </el-form-item>
            <el-form-item label="未成团成功超时">
                <el-input v-model="form.noclouds"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">小时</span>
            </el-form-item>
            <el-form-item label="自动拼团">
                <el-input v-model="form.automaticspell"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">分（从拼团结束时间--倒计时时间）</span>
            </el-form-item>
            <el-form-item label="分销结算">
                <el-input v-model="form.distribution"  style="width:260px;" type="number"></el-input>
                <span style="color:#666;margin-left:10px;">天（完成收货之后多少天结算）</span>
            </el-form-item>
            <el-form-item>
                <!-- <el-button type="primary" @click="onSubmit">立即创建</el-button> -->
                <el-button style="background:#1ABC9C;color:#FFF;" @click="submit">保存更改</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {timeSet,timeSetOut} from '@/api/system/index'
    export default {
        data(){
            return{
                form:{
                    payovertime:'',
                    spellpayovertime:'',
                    snapup:'',
                    automatic:'',
                    crossborder:'',
                    comments:'',
                    noclouds:'',
                    automaticspell:'',
                    distribution:'',
                }
            }
        },
        methods:{
            getTimeList(){
                timeSet().then(res=>{
                    let a = res.data.data;
                    this.form.payovertime = a.set_waitpay_time
                    this.form.spellpayovertime = a.set_group_waitpay_time
                    this.form.snapup = a.set_rob_waitpay_time
                    this.form.automatic = a.set_takedelivery_time
                    this.form.crossborder = a.set_ca_takedelivery_time
                    this.form.comments = a.set_comment_time
                    this.form.noclouds = a.set_assemble_fail_time
                    this.form.automaticspell = a.set_assemble_success_time
                    this.form.distribution = a.set_retai_order_time
                })
            },
            submit(){
                let data={
                    set_waitpay_time:this.form.payovertime, 
                    set_group_waitpay_time:this.form.spellpayovertime,
                    set_rob_waitpay_time:this.form.snapup,
                    set_takedelivery_time:this.form.automatic, 
                    set_ca_takedelivery_time:this.form.crossborder, 
                    set_comment_time:this.form.comments,
                    set_assemble_fail_time:this.form.noclouds,
                    set_assemble_success_time:this.form.automaticspell,
                    set_retai_order_time:this.form.distribution,
                }
                timeSetOut(data).then(res=>{
                    // console.log(res)
                    if(res.code==200){
                        this.$message({
                            message:res.msg,
                            type:'success'
                        })
                    }
            })
            }
        },
        created(){
            this.getTimeList()
        }
    }
</script>

<style lang="scss" scoped>
    .timeout{
        .container{
            box-sizing: border-box;
        }
    }
</style>