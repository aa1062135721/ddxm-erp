<template>
    <div class="goods_list">
        <div class="container">
            <div class="search-div">
                <!-- <div class="choose">
                    <el-button  @click="all_goods" class="active">全部商品<span>({{total}})</span></el-button>
                    <el-button  >已上架</el-button>
                    <el-button  >未上架</el-button>
                    <el-button  >待审核</el-button>
                    <el-button  >未通过</el-button>
                </div>-->
                <div class="SearchBar">
                    <div style="color:#666;"><label for="main">输入搜索：</label>
                        <el-input
                            placeholder="商品名称/条形码(回车键查看)"
                            style="width: 220px; margin-right: 10px;"
                            v-model="goods_id"
                            @keyup.enter="searchGoods"
                            id="main"
                        ></el-input>
                    </div>
                    <!-- <div>
                        商品分类：<Classification v-model="requestData.title"></Classification>
                    </div>-->

                    <div style="color:#666;">商品品牌：
                        <Brand v-model="requestData.brand" @input="input"></Brand>
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
                        width="80"
                        >
                        </el-table-column>-->
                        <el-table-column label="编号" width="120" prop="id"></el-table-column>
                        <el-table-column label="商品图片" width="120">
                            <template slot-scope="scope">
                                <el-avatar :size="60" :src="scope.row.imgurl"></el-avatar>
                            </template>
                        </el-table-column>
                        <el-table-column prop="g_title" label="商品名称" show-overflow-tooltip></el-table-column>
                        <el-table-column label="价格/货号" width="200">
                            <template slot-scope="props">
                                <p>价格：{{props.row.price}}</p>
                                <p>货号：{{props.row.code}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="标签" width="120">
                            <template slot-scope="scope">
                                <div>
                                    <span>上架：</span>
                                    <el-switch
                                        v-model="scope.row.is_shelf"
                                        :active-value="1"
                                        :inactive-value="0"
                                        active-color="#1ABC9C"
                                        inactive-color="#ff4949"
                                        @change="changeSwitch(scope.row)"
                                    ></el-switch>
                                </div>
                                <!-- <div>
                                   <span>新品：</span>
                                    <el-switch
                                    v-model="scope.row.status1"
                                    :active-value="1"
                                    :inactive-value="2"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    @change="changeSwitch(scope.row)"/>
                               </div>
                                -->
                                <div>
                                    <span>显示：</span>
                                    <el-switch
                                        v-model="scope.row.is_show"
                                        :active-value="1"
                                        :inactive-value="0"
                                        active-color="#1ABC9C"
                                        inactive-color="#ff4949"
                                        @change="changeShow(scope.row)"
                                    ></el-switch>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="排序" width="120" prop="w_stock"></el-table-column>
                        <el-table-column label="SUK库存" width="80">
                            <template slot-scope="scope">
                                <i
                                    @click="flag=true;changeClick(scope.row)"
                                    style="font-size:30px; color:#1ABC9C;cursor: pointer;"
                                    class="el-icon-edit-outline"
                                ></i>
                            </template>
                        </el-table-column>
                        <el-table-column label="销量" width="120" prop="sales"></el-table-column>
                        <el-table-column label="操作" width="120">
                            <template slot-scope="scope">
                                <!-- <el-button style="color:#1ABC9C" @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                                <el-button
                                    style="color:#1ABC9C"
                                    type="text"
                                    size="small"
                                    @click="editGooods(scope.row)"
                                >编辑</el-button>
                                <el-button
                                    style="color:#1ABC9C"
                                    @click="open(scope.row)"
                                    v-if="$_has('del')"
                                    type="text"
                                    size="small"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="SUK_ku" v-if="flag">
                        <el-card class="box-card">
                            <div
                                slot="header"
                                class="clearfix"
                                style="display:flex;justify-content: space-between;"
                            >
                                <span>编辑货品信息</span>
                                <span @click="flag=false" style="cursor: pointer;">X</span>
                            </div>
                            <div class="kucun_info">
                                <div style="display:flex; line-height:40px;">
                                    <span>商品货号：</span>
                                    <span
                                        v-for="(item,index) in sukinfo"
                                        :key="index"
                                        v-if="index<1"
                                    >
                                        <span>{{item.bar_code}}</span>
                                    </span>
                                    <div class="seach_bar">
                                        <el-input style="width:200px;" placeholder="按SUK编码搜索"></el-input>
                                        <el-button>
                                            <i class="el-icon-search"></i>
                                        </el-button>
                                    </div>
                                </div>
                                <div class="edit_box">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>SUK编码</td>
                                                <td>规格名称</td>
                                                <td>推荐价格</td>
                                                <td>
                                                    <span style="color:red;">*</span>销售价格
                                                </td>
                                                <td>
                                                    <span style="color:red;">*</span>商品库存
                                                </td>
                                                <td>
                                                    <span style="color:red;">*</span>库存预警值
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in sukinfo" :key="index">
                                                <td>
                                                    <el-input
                                                        style="width:130px;"
                                                        disabled
                                                        :value="item.bar_code"
                                                    ></el-input>
                                                </td>
                                                <td>{{item.key_name}}</td>
                                                <td>
                                                    <el-input
                                                        style="width:80px;"
                                                        v-model="recommendedPrice"
                                                        :value="item.recommendprice"
                                                    ></el-input>
                                                </td>
                                                <td>
                                                    <el-input
                                                        style="width:80px;"
                                                        v-model="salesPrice"
                                                        :value="item.price"
                                                    ></el-input>
                                                </td>
                                                <td>
                                                    <el-input
                                                        style="width:80px;"
                                                        disabled
                                                        :value="item.stock"
                                                    ></el-input>
                                                </td>
                                                <td>
                                                    <el-input
                                                        style="width:80px;"
                                                        v-model="warning"
                                                        :value="item.warning_value"
                                                    ></el-input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="confirm">
                                <el-button @click="flag=false;">取消</el-button>
                                <el-button
                                    @click="modify_goods"
                                    style="background:#1ABC9C; color:#fff"
                                >确定</el-button>
                            </div>
                        </el-card>
                    </div>
                    <div class="footer">
                        <!-- <el-button @click="toggleSelection(tableData)">全选</el-button> -->
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
import Brand from '@/components/common/Brand.vue';
import { goodsList, goodsInfo, goodsSwitch, goodsShow, goodsDel } from '@/api/goods/goods_list.js';
import { goodsListDel } from '@/api/goods/goods_classification.js';
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
            goods_id: '',
            requestData: {
                title: '', //商品名称/商品条形码
                brand: '' //商品品牌
            },
            tableData: [], //商品列表
            total: 1, //商品总个数
            flag: false, //控制suk图层开关
            sukinfo: [],
            recommendedPrice: '', //推荐价格
            salesPrice: '', //销售价格
            warning: '', //预警值
            brandVal: '' //商品品牌
        };
    },
    components: {
        // Classification,
        Brand
    },
    methods: {
        // 获取全部商品
        // all_goods(){
        //   goodsList().then((res)=>{
        //       this.tableData=res.data.data
        //       console.log(res.data.data)
        //   })
        // },
        // 控制全选与不全选
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        //操作--查看
        handleClick(row) {
            console.log(row);
        },
        // 标签下的上架与推荐
        changeSwitch(row) {
            console.log(row);
            let data = { is_shelf: row.is_shelf, id: row.id };
            goodsSwitch(data).then(res => {
                //   this.$message({
                //         message: res.msg,
                //         type: 'success'
                //     });
                console.log(res);
            });
        },
        changeShow(val) {
            console.log(val);
            let data = {
                id: val.id,
                is_show: val.is_show
            };
            goodsShow(data).then(res => {
                console.log(res);
            });
        },
        // 获取商品列表数据
        getgoods() {
            goodsList().then(res => {
                this.tableData = res.data.data; //获取商品列表
                this.total = res.data.total; //获取总条数
                this.currentPage = res.data.currentPage;
                console.log(res);
            });
        },
        // 上下页
        handleCurrentChange(val) {
            var data = {};
            if (this.goods_id) {
                data = {
                    page: val,
                    search_val: this.goods_id
                };
            } else if (this.brandVal) {
                data = {
                    page: val,
                    gb_title: this.brandVal
                };
            } else {
                data = {
                    page: val
                };
            }
            goodsList(data).then(res => {
                this.tableData = res.data.data;

                console.log(res);
            });
        },
        // 搜索商品
        searchGoods() {
            let data = {
                search_val: this.goods_id
            };
            goodsList(data).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.total; //获取总条数
                this.currentPage = res.data.currentPage;
                console.log(res);
            });
        },
        //获取子组件传递的id
        input(val) {
            this.brandVal = val;
            let data = { gb_title: val };
            goodsList(data).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.total; //获取总条数
                this.currentPage = res.data.currentPage;
                console.log(res);
            });
        },
        //点击suk获取对应id
        changeClick(row) {
            let data = { id: row.id };
            goodsInfo(data).then(res => {
                this.sukinfo = res.data;
                res.data.forEach(v => {
                    sessionStorage.setItem('goods_id', v.id);
                    this.recommendedPrice = v.recommendprice;
                    this.salesPrice = v.price;
                    this.warning = v.warning_value;
                });
            });
        },
        //确定修改商品信息
        modify_goods() {
            let data = {
                id: sessionStorage.getItem('goods_id'),
                recommendprice: this.recommendedPrice,
                price: this.salesPrice,
                warning_value: this.warning
            };
            goodsInfo(data).then(res => {
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            });
        },
        //删除商品
        delGoods(val) {
            console.log(val);
            goodsDel({ id: val.id }).then(res => {
                if (res.code == 200) {
                    this.getgoods();
                }
            });
        },
        //编辑商品
        editGooods(val) {
            console.log(val);
            this.$router.push({
                path: '/goods_management/goods_add',
                query: { type: 2, val }
            });
        },
        open(val) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'warning'
            }).then(() => {
                this.delGoods(val)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    },
    computed: {
        // 计算全部商品个数
        allGoods() {
            return this.tableData.length;
        }
    }
};
</script>

<style scoped lang="scss">
.goods_list {
     font-family: '微软雅黑';
    .container {
        box-sizing: border-box;
        .search-div {
            .choose {
                display: flex;
                margin-bottom: 10px;
                button {
                    margin-right: 10px;
                }
            }
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
                border: 1px solid rgb(236, 236, 236);
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
                .SUK_ku {
                    position: fixed;
                    top: 30%;
                    left: 30%;

                    .box-card {
                        width: 800px;
                        .kucun_info {
                            padding-bottom: 20px;
                            border-bottom: 1px solid #ccc;
                            .seach_bar {
                                position: relative;
                                margin-left: 30px;
                                .el-input__inner {
                                    border-radius: 0;
                                    outline: none;
                                }
                                .el-input__inner:focus {
                                    outline: none;
                                }
                                button {
                                    height: 32px;
                                    background: rgb(209, 209, 209);
                                    position: absolute;
                                    top: 5px;
                                    left: 90%;
                                }
                            }
                            .edit_box {
                                margin-top: 20px;
                                table {
                                    border-collapse: collapse;
                                    thead {
                                        td {
                                            background: rgb(243, 243, 243);
                                            font-weight: bold;
                                        }
                                    }
                                    td {
                                        padding: 10px;
                                        text-align: center;
                                        border: 1px solid #ccc;
                                        width: 120px;
                                    }
                                }
                            }
                        }
                        .confirm {
                            margin-top: 20px;
                            text-align: right;
                            padding-right: 20px;
                        }
                    }
                }
                .footer {
                    text-align: right;
                    padding: 10px;
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
