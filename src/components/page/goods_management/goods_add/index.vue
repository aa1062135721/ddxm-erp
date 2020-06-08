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
                <el-step title="选择商品关联" ></el-step>
                </el-steps>
            </div>
            <div class="container">
                <div class="asider">
                    <div class="box">
                        <p>选择分类</p>
                        <div class="kailong"></div>
                    </div>
                    
                </div>
                <div class="section">
                    <div class="classification">
                        <span>您最近使用的商品分类：</span>
                        <el-select v-model="chooseGoods" placeholder="请选择">
                            <!-- <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option> -->
                        </el-select>
                    </div>
                    <div class="choose_class">
                        <div class="left_class">
                           <el-table
                            style="width: 100%">
                            <el-table-column
                                label="选择一级分类"
                                width="200"
                               >
                            </el-table-column>
                            </el-table>
                        </div>
                        <div class="right_class">
                            <ul>
                               <p>选择二级分类</p>
                               <li>服装</li>
                               <li>餐厨</li>
                               <li>配件</li>
                               <li>居家</li>
                               <li>洗护</li>
                               <li>婴童</li>
                               <li>杂货</li>
                           </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>

<script>
   export default {
    data() {
      return {
        active: 0,
        chooseGoods:'',
        tableData: []
      };
    },

    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
      }
    }
  }
</script>

<style scoped lang="scss">
    .container{
        display: flex;
        padding: 0;
        .asider{
            width: 200px;
            min-height: 400px;
            border-right: 1px solid #ccc;
            .box{
                position: relative;
                top: 50px;
                p{
                    padding-left:30px;
                    box-sizing: border-box; 
                    text-align: left;
                    line-height: 50px;
                    width: 200px;
                    height: 50px;
                    background: rgb(161, 174, 194);
                    color: #fff;
                }
                .kailong{
                    position: absolute;
                    top:0;
                    left:200px;
                    width:0;
                    height:0;
                    border-top:25px solid transparent;
                    border-left:25px solid rgb(161, 174, 194);
                    border-bottom:25px solid transparent;

                } 
            }       
        }
        .section{
            flex-grow: 1;
            padding: 60px 100px;
            .classification{
                >span{
                color: rgb(129, 128, 128);
                font-size: 14px;
                }
            }
            .choose_class{
                display: flex;
                justify-content: space-around;
                .left_class{
                    ul{
                        width: 200px;
                        background: rgb(221, 224, 235);
                        list-style: none;
                        p{
                            padding: 10px 25px;
                            border-bottom: 1px solid #ccc;
                        }
                        li{
                            background: #fff;
                            padding: 10px;
                            background: rgb(243, 243, 243);
                            border-bottom: 1px solid #ccc;
                        }
                    }
                }
            }
        }
    }
</style>
