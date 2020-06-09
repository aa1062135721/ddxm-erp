<template>
    <div>
         <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>添加商品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div class="steps">
                <el-steps :active="active" finish-status="success"  align-center>
                <el-step title="选择商品分类" ></el-step>
                <el-step title="填写商品信息" ></el-step>
                <el-step title="填写商品属性" ></el-step>
                </el-steps>
            </div>
        </div>
        <keep-alive>
          <Classification v-if="flag===1"></Classification>
        </keep-alive>
          <Information v-if="flag===2"></Information>
          <Attribute v-if="flag===3"></Attribute>
       
        
         <div v-if="flag===1">
            <el-button class="next" style="margin-top: 12px;" @click="next">下一步,填写商品信息</el-button>
         </div>
       <div v-else-if="flag===2">
          <el-button class="last" style="margin-top: 12px;" @click="last">上一步,选择商品分类</el-button>
          <el-button class="next" style="margin-top: 12px;" @click="next">下一步,填写商品属性</el-button>   
       </div>
        <div v-else>
           <el-button class="last" style="margin-top: 12px;" @click="last">上一步,填写商品信息</el-button>
          <el-button class="next" style="margin-top: 12px;" @click="next">完成提交商品</el-button>
         
       </div>
    </div>
</template>

<script>
import Classification from './secondary_add/Classification'
import Information from './secondary_add/Information'
import Attribute from './secondary_add/Attribute'

export default {
    data() {
      return {
        active: 0,
        flag:1,
        num:1,//用于计算步骤页
      };
    },
    methods: {
      next() {
        this.num++;
        if (this.active++ > 3) this.active = 0;
        if(this.num===2){
          this.flag=2
        }else if(this.num===3){
          this.flag=3
        }
      },
      last() {
        this.num--;
        if (this.active-- > 3) this.active = 0;
        if(this.num===1){
          this.flag=1
        }else if(this.num===2){
          this.flag=2
        }
      }
    },
    components:{
        Classification,
        Information,
        Attribute
    }
  }
</script>

<style scoped lang="scss">
    .next{
      position: relative;
      left: 45%;
      width: 200px;
      height: 40px;
      background-color: #47C9AF;
      color: #fff;
    }
    .last{
      position: relative;
      left: 40%;
      width: 200px;
      height: 40px;
      background-color: #47C9AF;
      color: #fff;
    }
</style>
