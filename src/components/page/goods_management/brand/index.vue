<template>
    <div class="brand">
        <div class="container">
            <div class="search-div">
                <div style="display:flex;  border: 1px solid rgb(224, 224, 224);padding:10px;">
                    <span style="padding-top:4px;color:#666666;">输入搜索：</span>
                    <el-input style="width:200px" placeholder="品牌名称/关键词" v-model="brandVal"></el-input>
                    <el-button style="margin-left:10px" @click="searchBrand">搜索</el-button>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span style="color:#666666;">数据列表</span>
                        <div>
                            <el-button @click="add()" v-if="$_has('add')">添加</el-button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border=""
                        tooltip-effect="dark"
                        style="width: 100%;"
                    >
                        <el-table-column label="编号" width="120" prop="id"></el-table-column>
                        <el-table-column label="品牌名称" prop="gb_title"></el-table-column>
                        <el-table-column label="品牌首字母" width="120" prop="gb_tag"></el-table-column>
                        <el-table-column label="排序" width="100" prop="gb_sort"></el-table-column>
                        <el-table-column label="是否显示" width="120" prop="gb_status">
                            <template slot-scope="scope">
                                <el-switch
                                    v-model="scope.row.gb_status"
                                    :active-value="1"
                                    :inactive-value="2"
                                    active-color="#1ABC9C"
                                    inactive-color="#ff4949"
                                    @change="changeSwitch(scope.row)"
                                ></el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column label="相关" width="120" prop="goods_num comment_number">
                            <template slot-scope="scope">
                                <span style="margin-right:10px">商品:
                                    <span style="color:#1ABC9C">{{scope.row.goods_num}}</span>
                                </span>
                                <span>评论:
                                    <span style="color:#1ABC9C">{{scope.row.comment_number}}</span>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column width="130" label="操作">
                            <template slot-scope="scope">
                                <el-button
                                    style="color:#1ABC9C"
                                    @click="handleClick(scope.row)"
                                    v-if="$_has('edit')"
                                    type="text"
                                    size="small"
                                >编辑</el-button>
                                <el-button
                                    style="color:#1ABC9C"
                                    @click="deleteGoods(scope.row)"
                                    type="text"
                                    size="small"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer">
                        <div class="block">
                            <el-pagination
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                layout="total, prev, pager, next, jumper"
                                :total="total"
                            ></el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBrand, delBrand } from '@/api/common/index';
import { brandSwitch } from '@/api/goods/goods_classification.js';
export default {
    created() {
        this.getgoods();
    },
    data() {
        return {
            currentPage: 1, //当前页
            total: 1,
            tableData: [],
            brandVal: ''
        };
    },
    methods: {
        //添加商品
        add() {
            this.$router.push({
                path: '/addBrand'
            });
        },
        // 获取商品列表数据
        getgoods() {
            getBrand().then(res => {
                console.log(res);
                this.tableData = res.data.data;
                this.total = res.data.total;
            });
        },
        // 编辑品牌
        handleClick(val) {
            this.$router.push({
                path: '/editBrand',
                query: {
                    data: val
                }
            });
        },
        // 删除品牌
        deleteGoods(val) {
            let data = {
                id: val.id
            };
            delBrand(data).then(res => {
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            });
        },
        //搜素品牌
        searchBrand() {
            let data = {
                seach_val: this.brandVal
            };
            getBrand(data).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.total;
            });
        },
        // 上下页
        handleCurrentChange(val) {
            console.log(val);
            let data = {
                page: val
            };
            getBrand(data).then(res => {
                console.log(res.data.data);
                this.tableData = res.data.data;
            });
        },
        //是否显示
        changeSwitch(val) {
            console.log(val);
            let data = {
                id: val.id
            };
            brandSwitch(data).then(res => {
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            });
        }
    }
};
</script>

<style scoped lang="scss">
.brand {
     font-family: '微软雅黑';
    .container {
        position: relative;
        box-sizing: border-box;
        .search-div {
             
            .goodsBox {
                margin-top: 20px;
                .mTitle {
                    border: 1px solid rgb(224, 224, 224);
                    display: flex;
                    justify-content: space-between;
                    line-height: 32px;
                    background: rgb(230, 230, 230);
                    padding: 5px;
                    > span {
                        margin-left: 10px;
                    }
                    > div {
                        button {
                            border: 1px solid rgb(175, 175, 175);
                        }
                    }
                }
                .sorting {
                    display: flex;
                    justify-content: space-around;
                    span {
                        color: #1abc9c;
                    }
                }
                .footer {
                    text-align: right;
                    padding: 10px;
                    padding-right: 40px;
                }
            }
        }
    }
}
</style>
