<template>
    <div class="library">
        <div class="container">
            <div class="search-div">
                <div style="display:flex;  border: 1px solid rgb(224, 224, 224); padding:10px;">
                    <span style="padding-top:4px;color:#666666;">输入搜索：</span>
                    <el-input style="width:200px" placeholder="相册名称" v-model="imgVal"></el-input>
                    <el-button style="margin-left:10px" @click="searchImg">搜索</el-button>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span style="color:#666666">数据列表</span>
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
                        <el-table-column label="编号" width="120" prop="goods_id"></el-table-column>
                        <el-table-column label="相册名称" prop="g_title"></el-table-column>
                        <el-table-column label="封面" prop="gr_url" width="120">
                            <template slot-scope="scope">
                                <el-avatar :size="60" :src="scope.row.gr_url"></el-avatar>
                            </template>
                        </el-table-column>
                        <el-table-column label="图片数量" prop="count"></el-table-column>
                        <el-table-column label="排序" width="200" prop="gr_sort"></el-table-column>
                        <el-table-column width="130" label="操作">
                            <template slot-scope="scope">
                                <el-button
                                    style="color:#1ABC9C"
                                    @click="checkClick(scope.row)"
                                    v-if="$_has('find')"
                                    type="text"
                                    size="small"
                                >查看</el-button>
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
import { resourceList, resourceDel } from '@/api/common/index';
export default {
    created() {
        this.getgoods();
    },
    data() {
        return {
            currentPage: 1, //当前页
            total: 1,
            tableData: [],
            imgVal: '',
            child: []
            // number:{},//存储图片数量
        };
    },
    methods: {
        //添加商品
        add() {
            this.$router.push({
                path: '/addBrand'
            });
        },
        // 获取图片列表数据
        getgoods() {
            resourceList().then(res => {
                this.tableData = res.data.data;
                this.total = res.data.count;
                console.log(res);
                this.tableData.forEach((v, index) => {
                    v.count = v.child.length;
                });
            });
        },
        // 查看图片
        checkClick(val) {
            console.log(val);
            this.$router.push({
                path: '/photoAlbumList',
                query: {
                    data: val
                }
            });
        },
        // 删除图片
        deleteGoods(val) {
            let arr = [];
            val.child.forEach(v => {
                arr.push(v.id);
            });
            console.log(arr);
            let data = {
                ids: arr
            };
            resourceDel(data).then(res => {
                this.getgoods();
            });
        },
        //搜素相册名称
        searchImg() {
            let data = {
                title: this.imgVal
            };
            resourceList(data).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.count;
                console.log(res);
                this.tableData.forEach((v, index) => {
                    v.count = v.child.length;
                });
            });
        },
        // 上下页
        handleCurrentChange(val) {
            let data = {
                page: val,
                title: this.imgVal
            };
            resourceList(data).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.count;
                console.log(res);
                this.tableData.forEach((v, index) => {
                    v.count = v.child.length;
                });
            });
        }
    }
};
</script>

<style scoped lang="scss">
.library {
     font-family: '微软雅黑';
    .container {
        box-sizing: border-box;
        position: relative;
        .search-div {
            width: 100%;
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
