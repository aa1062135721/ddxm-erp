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
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%;">
                        <el-table-column
                        label="货号"
                        width="150"
                        prop="code">
                        </el-table-column>
                        <el-table-column
                        label="商品名称"
                        width="200"
                        prop="g_title"
                        >
                        </el-table-column>
                        <el-table-column
                        label="销售价格"
                        prop="price"
                        width="120"
                        show-overflow-tooltip>
                            <template>
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="促销价格"
                        width="120">
                            <template  slot-scope="scope">
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                         <el-table-column
                        label="赠送优币"
                        width="120">
                            <template  slot-scope="scope">
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                         <el-table-column
                        label="优币购买金额"
                        width="120">
                            <template  slot-scope="scope">
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                         <el-table-column
                        label="库存"
                        width="120">
                            <template  slot-scope="scope">
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="品牌">
                           <template>
                                <Brand @input="input"></Brand>
                           </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="foot">
                    <el-button>确定</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Brand from "@/components/common/Brand"
export default {
      data(){
          return{
              tableData:{},
          }
      },
      components:{
          Brand
      },
      methods:{
          input(val){
              console.log(val)
          }
      },
      created(){
        this.tableData = this.$route.query.data
        console.log(this.tableData)
      }
  }
</script>

<style scoped lang="scss">
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
