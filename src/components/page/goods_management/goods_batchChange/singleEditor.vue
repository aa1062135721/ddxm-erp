<template>
    <div>
       <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>逐个编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <div class="goodsBox">
                   <table class="table">
                       <thead>
                           <tr>
                               <td>货号</td>
                               <td>商品名称</td>
                               <td>销售价格</td>
                               <td>推荐价格</td>
                               <td>预警值</td>
                           </tr>
                       </thead>
                       <tbody>
                           <tr v-for="(item,index) in tableData" :key="index">
                               <td>{{item.code}}</td>
                               <td>{{item.g_title}}</td>
                               <td><el-input v-model="item.is_show"></el-input></td>
                               <td><el-input v-model="item.is_shelf"></el-input></td>
                               <td><el-input v-model="item.w_stock"></el-input></td>
                           </tr>
                       </tbody>
                   </table>
                </div>
                <div class="foot">
                    <el-button @click="submit">确定</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {batchChange} from "@/api/goods/goods_list"
export default {
      data(){
          return{
              tableData:[],
              
          }
      },

      methods:{
          /*
            [
                {
                    id:'0',
                    recommendprice:0,
                    price:0,
                    warning_value:0
                }
            ]
          */
          submit(){
              let data={end_type:1,datas:[]}
            
              this.tableData.forEach(v=>{
                 let temp={
                    id:v.id,
                    price:v.is_show,
                    recommendprice:v.is_shelf,
                    warning_value:v.w_stock
                  }
                data.datas.push(temp)
              })
            batchChange(data).then((res)=>{
                if(res.code===200){
                    this.$message({
                        message:res.msg,
                        type:"success"
                    })
                }
            })
          }
      },
      created(){
          this.$route.query.data.forEach(v => {
             this.tableData.push(v)
             console.log(v)
          });
      }
  }
</script>

<style scoped lang="scss">
    .table{
        border-collapse: collapse;
        margin:5px;
        thead{
            >tr{
                td{
                    border: 1px solid #ccc;
                    background: #F9FAFC;
                    width: 300px;
                    padding: 10px;
                    text-align: center;
                    font-weight: bold;
                }
            }
        }
        >tbody{
            >tr{
                td{
                    border: 1px solid #ccc;
                    width: 300px;
                    padding: 10px;
                    text-align: center;
                }
            }
        }
    }
   .foot{
       text-align: center;
       padding-top: 20px;
       button{
            background: #42c6ac;
            color: #fff;
            width: 110px;
            height: 40px;
       }
      
   }
</style>
