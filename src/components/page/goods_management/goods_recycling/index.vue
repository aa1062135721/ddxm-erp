<template>
    <div class="recycling">
        <div class="container">
            <div class="search-div">
                <div class="SearchBar">
                    <div style="color:#666;">输入搜索：
                        <el-input
                            placeholder="商品名称/条形码(回车键查看)"
                            style="width: 220px; margin-right: 10px;"
                            v-model="goods_id"
                            @keyup.enter="searchGoods"
                        ></el-input>
                    </div>
                    <!-- <div>
                        商品分类：<Classification v-model="requestData.title"></Classification>
                    </div>-->

                    <div style="color:#666;">商品品牌：
                        <recyclingBrand v-model="requestData.brand" @input="input"></recyclingBrand>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span style="color:#666;">数据列表</span>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border=""
                        tooltip-effect="dark"
                        style="width: 100%;"
                    >
                        <!-- <el-table-column
                        type="selection"
                        width="60">
                        </el-table-column>-->
                        <el-table-column label="编号" width="120" prop="id"></el-table-column>
                        <el-table-column label="商品图片" width="120">
                            <template slot-scope="scope">
                                <el-avatar :size="60" :src="scope.row.imgurl"></el-avatar>
                            </template>
                        </el-table-column>
                        <el-table-column prop="g_title" label="商品名称" show-overflow-tooltip></el-table-column>
                        <el-table-column label="商品分类" width="200">
                            <template>服装>外套</template>
                        </el-table-column>
                        <el-table-column label="价格">
                            <template slot-scope="props">
                                <p>价格：{{props.row.price}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="货号">
                            <template slot-scope="props">
                                <p>货号：{{props.row.code}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="120">
                            <template slot-scope="scope">
                                <el-button
                                    @click="reduction(scope.row)"
                                    style="color:#1ABC9C"
                                    type="text"
                                    size="small"
                                >还原</el-button>
                                <el-button
                                    @click="delete_goods(scope.row)"
                                    style="color:#1ABC9C"
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
//商品分类
// import Classification from '@/components/common/Classification.vue';
//商品品牌
import recyclingBrand from '@/components/common/recyclingBrand.vue';
import { goodsRecycle, goodsReduction, deleteGoods } from '@/api/goods/goods_list.js';
export default {
    created() {
        this.getgoods();
        document.onkeydown = e => {
            var key = e.key;
            if (key === 'Enter') {
                this.searchGoods();
            }
        };
    },
    data() {
        return {
            currentPage: 1, //当前页
            goods_id: '', //商品id
            requestData: {
                title: '', //商品名称/商品条形码
                brand: '' //商品品牌
            },
            tableData: [], //商品列表
            total: 1 //商品总个数
        };
    },
    components: {
        // Classification,
        recyclingBrand
    },
    methods: {
        // // 控制全选与不全选
        // toggleSelection(rows) {
        //     if (rows) {
        //     rows.forEach(row => {
        //         this.$refs.multipleTable.toggleRowSelection(row);
        //     });
        //     } else {
        //         this.$refs.multipleTable.clearSelection();
        //     }
        //  },
        // 获取商品列表数据
        getgoods() {
            goodsRecycle().then(res => {
                this.tableData = res.data.data; //获取商品列表
                this.total = res.data.total; //获取总条数
            });
        },
        // 上下页
        handleCurrentChange(val) {
            console.log(val);
            let data = {
                page: val,
                search_val: this.goods_id
            };
            goodsRecycle(data).then(res => {
                this.tableData = res.data.data;
            });
        },
        // 搜索商品
        searchGoods() {
            let data = {
                search_val: this.goods_id
            };
            goodsRecycle(data).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.total; //获取总条数
            });
        },
        //获取子组件传递的商品名称
        input(val) {
            console.log(val);
            let data = { br_id: val };
            goodsRecycle(data).then(res => {
                this.tableData = res.data.data;
            });
        },
        // 还原商品
        reduction(val) {
            let data = {
                id: val.id
            };
            goodsReduction(data).then(res => {
                if (res.code == 200) {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.getgoods();
                }
            });
            this.getgoods();
        },
        // 删除商品
        delete_goods(val) {
            let data = {
                id: val.id
            };
            deleteGoods(data).then(res => {
                if (res.code == 200) {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.getgoods();
                }
            });
        }
    },
    computed: {}
};
</script>

<style scoped lang="scss">
.recycling {
     font-family: '微软雅黑';
    .container {
        box-sizing: border-box;
        .search-div {
            width: 100%;
            .SearchBar {
                border: 1px solid rgb(224, 224, 224);
                padding: 10px;
                display: flex;
                justify-content: left;
                line-height: 30px;
                > div {
                    margin-left: 5px;
                    display: flex;
                }
            }
            .goodsBox {
                margin-top: 20px;
                .mTitle {
                    border: 1px solid rgb(224, 224, 224);
                    line-height: 32px;
                    background: rgb(230, 230, 230);
                    padding: 5px;
                    > span {
                        margin-left: 10px;
                    }
                }
                .footer {
                    text-align: right;
                    margin-right: 20px;
                    padding: 10px;
                }
            }
        }
    }
}
</style>
