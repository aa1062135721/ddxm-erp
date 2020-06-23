<template>
    <div class="container">
        <div class="box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="参数名称">
                    <el-input placeholder="必填" style="width:214px" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="规格说明">
                    <el-input style="width:214px" v-model="form.name"></el-input>
                </el-form-item>
                 <el-form-item label="参数列表">
                    <el-input style="width:214px" v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
       
    </div>
</template>

<script>
    export default {
        data(){
            return{
                form:{
                    name:'',
                    desc:'',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        width: 500px;
        margin: auto
    }
</style>