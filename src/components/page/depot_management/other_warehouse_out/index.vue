<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>其他出库单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input v-model="requestData.seach_val" placeholder="商品名/条形码/单号" class="my-input"></el-input>
                <depot v-model="requestData.warehouse_id"></depot>
                <el-select placeholder="状态" v-model="requestData.status" clearable class="my-input">
                    <el-option label="已取消" value="0"></el-option>
                    <el-option label="已入库" value="1"></el-option>
                </el-select>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" plain @click="addDialog.isShow = true" v-if="$_has('add')">新增</el-button>
                <el-button type="primary" plain @click="myExport" v-if="$_has('export')">导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" :data="responseData.data" border>
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column label="出库信息" width="200">
                        <template slot-scope="scope">
                            <p>订单号：{{ scope.row.wo_code }}</p>
                            <p>出库仓库：{{ scope.row.w_name }}</p>
                            <p>出库人：{{ scope.row.a_username }}</p>
                            <p>出库时间：{{ scope.row.create_time }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="顾客信息" width="155">
                        <template slot-scope="scope">
                            <p>姓名：{{ scope.row.contacts }}</p>
                            <p>联系方式：{{ scope.row.mobile }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名" width="200">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.goods" :key="index">{{ item.wo_title }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="条形码" width="150">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.goods" :key="index">{{ item.wo_bar_code }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="规格">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.goods" :key="index">{{ item.wo_attr_name }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="出库量">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.goods" :key="index">{{ item.wo_num }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="出库单价">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.goods" :key="index">{{ item.wo_price }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="出库数量">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.goods" :key="index">{{ item.wo_num }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="出库总金额">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.goods" :key="index">{{ item.wo_num * item.wo_price }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="desc" label="备注"></el-table-column>
                    <el-table-column prop="status_tilte" label="状态"></el-table-column>
                    <el-table-column prop="is_reconciliation_title" label="是否对账"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" v-if="scope.row.status === 1 && $_has('cancel')" @click="myCancel(scope.row.id)">取消出库</el-button>
                            <el-button type="text" v-if="scope.row.is_reconciliation === 0 && $_has('reconciliation')" @click="myReconciliation(scope.row.id)">对账</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="responseData.total">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="新增其他出库单" center :visible.sync="addDialog.isShow" width="50%">
            <div  class="search-div">
                <depot v-model="addDialog.requestData.warehouse_out.warehouse_id"></depot>
                <el-select placeholder="选择客户" v-model="addDialog.requestData.warehouse_out.customer_id" clearable class="my-input">
                    <el-option v-for="item in addDialog.responseData" :key="item.id" :label="item.contacts" :value="item.id"></el-option>
                </el-select>
                <el-input v-model="addDialog.requestData.warehouse_out.desc" placeholder="请输入备注" class="my-input"></el-input>
                <el-button type="primary" style="margin: 0 0 10px 10px;" plain v-show="addDialog.isShow" @click="addDialog.choosesGoodsDialogIsShow = true">选择商品</el-button>
            </div>
            <el-table style="width: 100%" height="300" :data="addDialog.requestData.warehouse_out_goods">
                <el-table-column label="序号" type="index"></el-table-column>
                <el-table-column prop="wo_bar_code" label="条形码"></el-table-column>
                <el-table-column prop="wo_title" label="商品名称"></el-table-column>
                <el-table-column label="图片">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.wo_pic" :preview-src-list="[scope.row.wo_pic]"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="wo_attr_name" label="规格"></el-table-column>
                <el-table-column prop="kuchun" label="库存"></el-table-column>
                <el-table-column label="出库单价">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.wo_price"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="出库数量">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.wo_num"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="合计金额">
                    <template slot-scope="scope">
                        {{ scope.row.wo_num * scope.row.wo_price || 0}}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="addDialogDelGoods(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="info" @click="addDialog.isShow = false">取消</el-button>
                <el-button type="primary" @click="addDialogSubmit">提交</el-button>
            </div>
        </el-dialog>
        <chooses-goods :visible.sync="addDialog.choosesGoodsDialogIsShow" @sendChoosesGoods="addDialogGetChoosesGoods" />
    </div>
</template>

<script>
    import {list, add, cancel, exportFile, reconciliation } from '@/api/depot/otherWarehouseOut.js';
    import { customerList } from '@/api/index.js';
    import depot from '../../purchase_management/components/depot/index';
    import choosesGoods from '@/components/common/ChoosesGoods.vue';
    import { downloadFile } from '@/utils/index.js';

    export default {
        name: 'index',
        data() {
            return {
                responseData:{
                    total: 0,
                    per_page: 10,
                    current_page: 1,
                    last_page: 1,
                    data: [],
                },
                requestData: {
                    page: 1,
                    limit: 10,
                    seach_val: '',
                    warehouse_id: '',
                    status: '', //状态：0已取消、1已入库（查询时传）
                },

                addDialog: {
                    isShow: false,
                    responseData: [], // 客户资料
                    requestData: {
                        warehouse_out_goods: [
                            // {
                            //     wo_title: "测试名称", //商品名称
                            //     wo_pic: "img11111",//图片（可以为空）
                            //     wo_attr_ids: "0",//规格（无规格默认为0）
                            //     wo_attr_name: "规格名称",//规格名称
                            //     wo_bar_code: "1223334",//商品条形码
                            //     wo_price: 10,//商品单价
                            //     wo_num: 1,//出库数量
                            //     goods_id: 1//商品ID
                            // }
                        ],
                        warehouse_out: {
                            customer_id: '', //客户ID
                            warehouse_id: '', //仓库ID
                            desc: '',// 备注
                        }
                    },

                    choosesGoodsDialogIsShow: false, // 选择商品弹框
                },
            }
        },
        methods: {
            // 获取列表
            getList(){
              list(this.requestData).then(res => {
                  if (res.code === 200) {
                      this.responseData = res.data
                  }
              }).catch(err => {
                  console.log(err);
              })
            },
            // 列表中分页
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
            // 导出
            myExport(){
                exportFile().then(res => {
                    downloadFile(res, 'file.xlsx');
                })
            },
            // 取消其他出库
            myCancel(id){
                this.$confirm('你正在取消其他出库操作, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    cancel({id}).then(res => {
                        if (res.code === 200) {
                            this.getList();
                            this.$message({
                                type: 'success',
                                message: '取消成功!'
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(() => {});

            },
            // 对账操作
            myReconciliation(id){
                this.$confirm('你正在对该出库单做对账操作, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    reconciliation({id}).then(res => {
                        if (res.code === 200) {
                            this.getList();
                            this.$message({
                                type: 'success',
                                message: '对账成功!'
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(() => {});
            },


            // 新增弹框 得到选择的商品
            addDialogGetChoosesGoods(data){
                let nowChoosesArr = [], allChoosesArr = [];
                for (const item of data) {
                    nowChoosesArr.push({
                        goods_id: item.id,//商品ID
                        wo_title: item.g_title, //商品名称
                        wo_pic: item.imgurl,//图片（可以为空）
                        wo_attr_ids: item.key || 0,//规格（无规格默认为0）
                        wo_attr_name: item.key_name,//规格名称
                        wo_bar_code: item.code,//商品条形码
                        kuchun: item.w_stock,// 商品库存
                        wo_price: '',//出库单价 ----- 需要输入
                        wo_num: "",//出库数量 ----- 需要输入
                    })
                }
                allChoosesArr = [...this.addDialog.requestData.warehouse_out_goods, ...nowChoosesArr];
                // 去重
                let obj = {};
                this.addDialog.requestData.warehouse_out_goods = allChoosesArr.reduce(function(item, next) {
                    obj[next.goods_id + next.wo_attr_ids] ? '' : obj[next.goods_id + next.wo_attr_ids] = true && item.push(next);
                    return item;
                }, []);
            },
            // 新增弹框 删除已选择的商品
            addDialogDelGoods(index){
                this.addDialog.requestData.warehouse_out_goods.splice(index, 1);
            },
            // 新增弹框, 确定新增
            addDialogSubmit(){
                if (!this.addDialog.requestData.warehouse_out.customer_id) {
                    this.$message.error('请选择客户');
                    return;
                }
                if (!this.addDialog.requestData.warehouse_out.warehouse_id) {
                    this.$message.error('请选择仓库');
                    return;
                }
                if (this.addDialog.requestData.warehouse_out_goods.length === 0) {
                    this.$message.error('请至少选择一个商品');
                    return;
                }
                let flag = true;
                for (const item of this.addDialog.requestData.warehouse_out_goods) {
                    if (!item.wo_price) {
                        flag = false;
                        this.$message.error(`【${item.wo_title}】的出库单价有误`);
                        break
                    }
                    if (!item.wo_num) {
                        flag = false;
                        this.$message.error(`【${item.wo_title}】的出库数量有误`);
                        break
                    }
                }
                if (flag) {
                    add(this.addDialog.requestData).then(res => {
                        if (res.code === 200) {
                            this.getList();
                            this.addDialog.isShow = false;
                            this.addDialog.requestData = {
                                warehouse_out_goods: [],
                                warehouse_out: {
                                    customer_id: '', //客户ID
                                    warehouse_id: '', //仓库ID
                                    desc: '',
                                }
                            };
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            },
        },
        created() {
            this.getList();
            customerList().then(res => {
                if (res.code === 200) {
                    this.addDialog.responseData = res.data;
                }
            }).catch(err => {
                console.log(err);
            });
        },
        components: {
            depot,
            choosesGoods,
        },
    };
</script>

<style scoped lang="scss">
    .search-div{
        display: flex;
        flex-wrap: wrap;
        .my-input{
            width: 150px;
            margin-right: 10px;
        }
    }
</style>
