<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>新增采购</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div" v-if="requestData.length">
                <el-select v-model="requestData[tabIndex].is_price_firse" placeholder="是否先打款" clearable class="my-input">
                    <el-option label="先发货再打款" value="0"></el-option>
                    <el-option label="先打款再发货" value="1"></el-option>
                </el-select>
                <el-select v-model="requestData[tabIndex].pick_way" placeholder="发货方式" clearable class="my-input">
                    <el-option label="发给仓库" value="1"></el-option>
                    <el-option label="自提" value="2"></el-option>
                    <el-option label="发给客户" value="3"></el-option>
                </el-select>
                <el-input placeholder="请输入运费" v-model="requestData[tabIndex].postage" clearable class="my-input"></el-input>
                <el-input placeholder="备注信息" v-model="requestData[tabIndex].re" clearable class="my-input" style="min-width: 300px;"></el-input>
            </div>
            <div class="addBox">
                <el-button class="addInput" type="primary" plain @click="addSupplierDialog.isShow = true">新增供货商</el-button>
                <el-button class="addInput" type="primary" plain v-if="requestData.length" @click="choosesGoodsDialog.isShow = true">选择商品</el-button>
                <el-button type="primary" plain v-show="requestData.length !== 0">保存为草稿</el-button>
                <el-button type="primary" plain>批量导入</el-button>
                <el-button type="primary" v-show="requestData.length !== 0">提交并保存</el-button>
            </div>
            <el-tabs
                v-model="tabIndex"
                type="card"
                closable
                @tab-remove="removeTab"
                @tab-click="tabClick"
            >
                <el-tab-pane
                    v-for="(item, index) in requestData"
                    :key="index"
                    v-bind:label="supplierIdToName(item.sup_id)"
                    :name="'' + index"
                >
                    <div style="margin: 40px 0;">
                        <el-table style="width: 100%" :data="item.items">
                            <el-table-column prop="id" label="ID"></el-table-column>
                            <el-table-column prop="g_title" label="商品名称"></el-table-column>
                            <el-table-column prop label="规格"></el-table-column>
                            <el-table-column prop="code" label="条形码"></el-table-column>
                            <el-table-column prop="w_stock" label="库存"></el-table-column>
                            <el-table-column prop label="采购单价"></el-table-column>
                            <el-table-column prop label="缺货量"></el-table-column>
                            <el-table-column prop label="采购数量"></el-table-column>
                            <el-table-column prop label="合计金额"></el-table-column>
                            <el-table-column prop label="备注"></el-table-column>
                            <el-table-column prop label="操作"></el-table-column>
                        </el-table>
                    </div>
                    <div>
                        <el-pagination background layout="prev, pager, next"></el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <!-- 选择商品 -->
        <el-dialog :visible.sync="choosesGoodsDialog.isShow" v-dialogDrag title="选择商品" center width="40%">
            <el-input placeholder="商品名称/条形码" class="input" v-model="choosesGoodsDialog.requestData.seach_val" clearable></el-input>
            <el-select placeholder="供应商" v-model="choosesGoodsDialog.requestData.supplier_id" clearable class="input">
                <el-option v-for="(item, index) in addSupplierDialog.responseData" :key="index" :label="item.s_name" :value="item.id"></el-option>
            </el-select>
            <el-button type="primary" @click="choosesGoodsDialogSearchBtn">搜索</el-button>
            <div style="margin: 40px 0;">
                <el-table ref="multipleTable" max-height="400" :data="choosesGoodsDialog.responseData.data" @selection-change="choosesGoodsDialogChosesGoods">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="code" label="条形码"></el-table-column>
                    <el-table-column prop="g_title" label="商品名称"></el-table-column>
                    <el-table-column prop="key_name" label="规格"></el-table-column>
                    <el-table-column prop="s_name" label="供应商"></el-table-column>
                    <el-table-column prop="w_stock" label="库存"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                    layout="prev, pager, next"
                    background
                    small
                    @current-change="choosesGoodsDialogHandleCurrentChange"
                    :total="choosesGoodsDialog.responseData.total"
                ></el-pagination>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="choosesGoodsDialog.isShow = false">取 消</el-button>
                <el-button type="primary" @click="choosesGoodsDialogConfirmOk">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 新增供货商 -->
        <el-dialog title="新增供货" :visible.sync="addSupplierDialog.isShow" width="20%" center>
            <el-select style="width:150px;margin-left:90px;" v-model="addSupplierDialog.id" clearable class="my-input">
                <el-option v-for="(item, index) in addSupplierDialog.responseData"
                    :key="index"
                    :label="item.s_name"
                    :value="item.id">
                </el-option>
            </el-select>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addSupplierDialog.isShow = false">取 消</el-button>
                <el-button type="primary" @click="addTab">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getGoods } from '../../../../api/common/index';
import { listAll as supplierAllList } from '../../../../api/depot/supplier';
export default {
    name: 'index',
    data() {
        return {
            tabIndex: "0",
            requestData: [
                // {
                //     sup_id: '1',    //供应商ID
                //     is_price_firse: '',    //是否先打款：1先打款再发货，0先发货再打款
                //     pick_way: '',    //发货方式：1发给仓库，2自提，3发给客户
                //     postage: '',    //运费
                //     remarks: '', // 备注
                //     items: [ //选择的商品
                //         {
                //             item_id: 1,   //商品ID
                //             title: "商品标题",    //商品标题
                //             pic: "商品图片的地址",    //图片地址
                //             attr_ids: "12-14",    //规格对应的ID组
                //             attr_name: "规格中文名,没有就不传",   //
                //             bar_code: "BR10545",  //条形码
                //             price: 100,   //采购单价
                //             num: 1,       //采购数量
                //             remarks: "商品的备注" //商品的备注
                //         }
                //     ],
                // },
            ],

            // 新增供货商弹框
            addSupplierDialog: {
                isShow: false,
                id: '', //  当前选择的供货商id
                responseData: [], // 供应商列表
            },

            // 选择商品弹框
            choosesGoodsDialog: {
                isShow: false,
                requestData: {
                    page: 1,
                    seach_val:'',
                    supplier_id: ''
                },
                responseData: {
                    total: 0,
                    per_page: 0,
                    current_page: 0,
                    last_page: 0,
                    data: []
                },
                choosesGoods: []
            }
        };
    },
    created() {
        supplierAllList().then(res => {
            if (res.code === 200) {
                this.addSupplierDialog.responseData = res.data
            }
        })
    },
    methods: {
        // 标签点击
        tabClick(target) {
            this.tabIndex = target.index;
        },
        // 新增标签
        addTab() {
            let isFlag = false;
            if (this.addSupplierDialog.id) {
                this.requestData.map(item => {
                    if (item.sup_id == this.addSupplierDialog.id){
                        this.$message({
                            message: '该采购单已存在你选择点供应商,请重新选择',
                            type: 'warning'
                        });
                        isFlag = true;
                    }
                })
                if (isFlag) {
                    return
                }
                let temp = {
                    sup_id: this.addSupplierDialog.id,    //供应商ID
                    is_price_firse: '', //是否先打款：1先打款再发货，0先发货再打款
                    pick_way: '',    //发货方式：1发给仓库，2自提，3发给客户
                    postage: '',    //运费
                    remarks: '', // 备注
                    items: [],
                };
                this.requestData.push(temp);
                this.addSupplierDialog.isShow = false;
            } else {
                this.$message({
                    message: '请选择供应商',
                    type: 'error'
                });
            }
        },
        // 移除标签
        removeTab(targetName) {
            this.$confirm('本次新增采购单将移除此供应商, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.requestData.splice(targetName, 1);
                this.tabIndex = this.requestData.length ? (this.requestData.length - 1 + "") : "0";
                this.$message({
                    type: 'success',
                    message: '移除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消移除'
                });
            });
        },

        // 供应商id转为供应商名
        supplierIdToName(value){
            let returnData = '';
            this.addSupplierDialog.responseData.map(item => {
                if (item.id == value) {
                    returnData = item.s_name
                }
            })
            return returnData;
        },

        // 选择商品弹框 搜索按钮
        choosesGoodsDialogSearchBtn(){
            getGoods(this.choosesGoodsDialog.requestData).then(res => {
                if (res.code === 200) {
                    this.choosesGoodsDialog.responseData = res.data
                }
            }).catch(err => {
                console.log(err);
            })
        },
        //选择商品弹框 改变页码
        choosesGoodsDialogHandleCurrentChange(val) {
            this.choosesGoodsDialog.requestData.page = val;
            this.choosesGoodsDialogSearchBtn();
        },
        //选择商品弹框 选择商品
        choosesGoodsDialogChosesGoods(val) {
            this.choosesGoodsDialog.choosesGoods = val;
        },
        //选择商品弹框 确定选择
        choosesGoodsDialogConfirmOk() {
            if (this.requestData.length) {
                this.requestData[this.tabIndex].items.push(... this.choosesGoodsDialog.choosesGoods);
                // 去重
                let obj = {};
                this.requestData[this.tabIndex].items = this.requestData[this.tabIndex].items.reduce(function(item, next) {
                    obj[next.id] ? '' : obj[next.id] = true && item.push(next);
                    return item;
                }, []);
                this.choosesGoodsDialog.choosesGoods = []
                this.choosesGoodsDialog.responseData.data = []
                this.choosesGoodsDialog.responseData.total = 0
                this.choosesGoodsDialog.isShow = false
            } else {
                this.$message.error('请选择供应商后添加商品');
            }
        },
    },
    components: {

    }
};
</script>

<style scoped lang="scss">
.search-div {
    display: flex;
    flex-wrap: wrap;
    .my-input {
        width: 150px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
.addBox {
    display: flex;
    flex: wrap;
    margin: 20px 0;
    .addInput {
        margin-right: 10px;
    }
}
.input {
    width: 150px;
    margin-right: 10px;
}
</style>
