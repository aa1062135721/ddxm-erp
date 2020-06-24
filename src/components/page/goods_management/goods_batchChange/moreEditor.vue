<template>
    <div>
       <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>统一编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <p style="margin:20px 0;">商品信息</p>
                <div class="goodsBox">
                    <el-table
                        ref="multipleTable"
                        border
                        tooltip-effect="dark"
                        :data="tableData"
                        style="width: 100%;">
                        <el-table-column
                        label="货号"
                        width="300"
                        prop="code">
                        </el-table-column>
                        <el-table-column
                        label="商品名称"
                        prop="g_title"
                        >
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="EditInfo">
                <p style="margin:20px 0;">编辑信息</p>
                   <table class="table">
                       <thead>
                           <tr>
                               <td>货号</td>
                               <td>商品数量</td>
                               <td>销售价格</td>
                               <td>推荐价格</td>
                               <td>预警值</td>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>多个货号</td>
                               <td>{{all}}</td>
                               <td><el-input v-model="changeInfo.price"></el-input></td>
                               <td><el-input v-model="changeInfo.recommendprice"></el-input></td>
                               <td><el-input v-model="changeInfo.warning"></el-input></td>
                           </tr>
                       </tbody>
                   </table>
            </div>
             <div class="foot">
                <el-button @click="submit">确定</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {batchChange} from "@/api/goods/goods_list"
export default {
      data(){
          return{
              tableData:{},
              changeInfo:{
                  id:[],
                  price:null,
                  recommendprice:null,
                  warning:null,
              }
          }
      },
      computed:{
          all(){
              return this.tableData.length
          }
      },
      methods:{
          submit(){
              let data={
                  end_type:2,
                  ids:this.changeInfo.id,
                  recommendprice:this.changeInfo.recommendprice,
                  price:this.changeInfo.price,
                  warning_value:this.changeInfo.warning
              }
              console.log(data)
             batchChange(data).then(res=>{
                 console.log(res)
             })
          }
      },
      created(){
        this.tableData = this.$route.query.data
        this.tableData.forEach(v => {
            this.changeInfo.id.push(v.gsp_id)
        });
        // console.log(this.tableData)
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
