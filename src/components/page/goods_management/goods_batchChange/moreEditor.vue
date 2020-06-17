<template>
    <div>
       <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>逐个编辑</el-breadcrumb-item>
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
                  <el-table
                        border
                        tooltip-effect="dark"
                        :data="goodsData"
                        style="width: 100%;">
                        <el-table-column
                        label="货号"
                        width="150"
                        >
                        <template>
                            <span>多个货号</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="商品数量"
                        width="200"
                        prop="num"
                        >
                        </el-table-column>
                        <el-table-column
                        label="销售价格"
                        show-overflow-tooltip>
                            <template>
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="促销价格"
                        width="200">
                            <template >
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                         <el-table-column
                        label="赠送优币"
                        width="200">
                            <template>
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                         <el-table-column
                        label="优币购买金额"
                        width="200">
                            <template>
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                         <el-table-column
                        label="库存"
                        width="200">
                            <template>
                                <el-input></el-input>
                            </template>
                        </el-table-column>
                         <el-table-column
                        label="品牌">
                           <template>
                                <Brand></Brand>
                           </template>
                        </el-table-column>
                    </el-table>
            </div>
             <div class="foot">
                <el-button>确定</el-button>
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
              goodsData:[{id:'多个货号',num:0}]
          }
      },
      components:{
          Brand,
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
