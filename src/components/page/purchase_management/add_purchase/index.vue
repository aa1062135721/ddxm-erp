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
                <el-input placeholder="备注信息" v-model="requestData[tabIndex].remarks" clearable class="my-input" style="min-width: 300px;"></el-input>
                <el-input placeholder="采购单实际支付金额 (不包含运费)" v-model="requestData[tabIndex].amount" clearable class="my-input" style="min-width: 300px;"></el-input>
            </div>
            <div class="addBox">
                <el-button class="addInput" type="primary" plain @click="addSupplierDialog.isShow = true">新增供货商</el-button>
                <el-button class="addInput" type="primary" plain v-if="requestData.length" @click="choosesGoodsDialog.isShow = true">选择商品</el-button>
                <el-button type="primary" plain>批量导入</el-button>
                <el-button type="primary" v-show="requestData.length !== 0" @click="addPurchaseOrderSubmit">提交并保存</el-button>
            </div>
            <el-tabs
                v-model="tabIndex"
                type="card"
                closable
                @tab-remove="removeTab"
                @tab-click="tabClick">
                <el-tab-pane
                    v-for="(item, index) in requestData"
                    :key="index"
                    v-bind:label="supplierIdToName(item.sup_id)"
                    :name="'' + index">
                    <div style="margin: 40px 0;">
                        <el-table style="width: 100%" :data="item.items">
                            <el-table-column type="index" label="序号"></el-table-column>
                            <el-table-column prop="g_title" label="商品名称"></el-table-column>
                            <el-table-column label="图片">
                                <template slot-scope="scope">
                                    <el-image
                                            class="table-td-thumb"
                                            :src="scope.row.imgurl"
                                            :preview-src-list="[scope.row.imgurl]"
                                    ></el-image>
                                </template>
                            </el-table-column>
                            <el-table-column prop="key_name" label="规格"></el-table-column>
                            <el-table-column prop="code" label="条形码"></el-table-column>
                            <el-table-column prop="w_stock" label="库存"></el-table-column>
                            <el-table-column label="采购单价">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.price" placeholder="请输入采购单价"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="noGoodsNum" label="缺货量"></el-table-column>
                            <el-table-column label="采购数量">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.num" placeholder="请输入采购数量"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="合计金额">
                                <template slot-scope="scope">
                                    {{parseFloat(scope.row.num) * parseFloat(scope.row.price) || '待计算'}}
                                </template>
                            </el-table-column>
                            <el-table-column label="备注">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.remarks" placeholder="请输入备注"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="purchaseHistoryDialogShow(scope.row)">采购历史</el-button>
                                    <el-button type="text" @click="addPurchaseOrderDeleteGoods(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
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
                <el-table ref="multipleTable" max-height="400" :data="choosesGoodsDialog.responseData.data" @selection-change="choosesGoodsDialogChooseGoods">
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

        <!-- 采购历史记录 -->
        <el-dialog title="采购历史" :visible.sync="purchaseHistoryDialog.isShow" width="40%" center>
            <div style="margin-bottom: 20px;">
                <el-date-picker
                        v-model="purchaseHistoryDialog.requestData.time"
                        @change="purchaseHistoryDialogChangeRequestTime"
                        class="my-input"
                        style="max-width: 300px;margin-right: 10px;"
                        type="datetimerange"
                        value-format="yyyy-MM-dd"
                        range-separator="至"
                        start-placeholder="采购开始时间"
                        end-placeholder="采购结束时间">
                </el-date-picker>
                <el-button type="primary" @click="purchaseHistoryDialogSearchBtn">搜索</el-button>
            </div>
            <div style="margin-bottom: 20px;">
                <el-tag type="danger" style="margin-right: 10px;">平均单价：{{purchaseHistoryDialog.responseData.meanPrice}}</el-tag>
                <el-tag type="danger" style="margin-right: 10px;">平均采购量：{{purchaseHistoryDialog.responseData.meanNum}}</el-tag>
                <el-tag type="danger" style="margin-right: 10px;">总采购量：{{purchaseHistoryDialog.responseData.allNum}}</el-tag>
            </div>
            <div style="margin-bottom: 20px;">
                <el-table style="width: 100%" max-height="500px" :data="purchaseHistoryDialog.responseData.data">
                    <el-table-column prop="sup_name" label="供应商名称"></el-table-column>
                    <el-table-column prop="num" label="采购的数量"></el-table-column>
                    <el-table-column prop="price" label="采购的单价"></el-table-column>
                    <el-table-column prop="create_time" label="采购的时间"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        :total="purchaseHistoryDialog.responseData.count"
                        @current-change="purchaseHistoryDialogHandleCurrentChange"
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getGoods } from '@/api/common/index';
import { listAll as supplierAllList } from '@/api/depot/supplier';
import { addPurchase, getShortageNum, purchaseHistoryList, } from '@/api/purchase/addPurchase';

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
                //     amount: "", //采购单实际支付金额 (不包含运费)
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
            },

            // 采购历史
            purchaseHistoryDialog: {
                isShow: false,
                requestData: {
                    page: 1,
                    limit: 10,
                    item_id: '',// 商品id
                    attr_ids: '',// 规格ID组
                    start_time: '', //开始日期
                    end_time: '', //开始日期
                    time: '',
                },
                responseData: {
                    count: 0, //总条数/总采购次数
                    meanPrice: 0,//平均单价
                    meanNum: 0, //平均采购量
                    allNum: 0,       //总采购量
                    data: [],
                },
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
                let supplier;
                this.addSupplierDialog.responseData.map(item => {
                    if (item.id === this.addSupplierDialog.id) {
                        supplier = item
                    }
                });
                let temp = {
                    sup_id: this.addSupplierDialog.id,    //供应商ID
                    is_price_firse: '' + supplier.pay_type, //是否先打款：1先打款再发货，0先发货再打款
                    pick_way: '' + supplier.send_type,    //发货方式：1发给仓库，2自提，3发给客户
                    postage: '',    //运费
                    remarks: '', // 备注
                    amount: '',// 该供应商下 单实际支付金额 (不包含运费)
                    items: [],
                };
                this.requestData.push(temp);
                this.addSupplierDialog.id = '';
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
                    res.data.data.map((item, index) => {
                        item.num = ''; // 采购数量
                        item.remarks = ''; // 采购备注
                        item.price = ''; // 采购备注
                    });
                    this.choosesGoodsDialog.responseData = res.data;
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
        choosesGoodsDialogChooseGoods(val) {
            this.choosesGoodsDialog.choosesGoods = val;
        },
        //选择商品弹框 确定选择
        async choosesGoodsDialogConfirmOk() {
            let requestData = [];// 这个数组用来去获取  缺货数量
            this.choosesGoodsDialog.choosesGoods.map((item) => {
               requestData.push({
                   item_id: item.id,
                   attr_ids: item.key,
               });
            });
            await getShortageNum(requestData).then(res => {
                if (res.code === 200) {
                    this.choosesGoodsDialog.choosesGoods.map((item) => {
                        res.data.map(resItem => {
                           if (item.id === resItem.item_id && item.key === resItem.attr_ids){
                               item.noGoodsNum = resItem.num;
                               item.price = resItem.price;
                           }
                        });
                    });
                }
            }).catch(err => {
                console.log(err);
            });


            this.requestData[this.tabIndex].items.push(... this.choosesGoodsDialog.choosesGoods);
            // 去重
            let obj = {};
            this.requestData[this.tabIndex].items = this.requestData[this.tabIndex].items.reduce(function(item, next) {
                obj[next.id + next.key] ? '' : obj[next.id + next.key] = true && item.push(next);
                return item;
            }, []);
            this.choosesGoodsDialog.choosesGoods = [];
            this.choosesGoodsDialog.responseData.data = [];
            this.choosesGoodsDialog.responseData.total = 0;
            this.choosesGoodsDialog.requestData.page = 1;
            this.choosesGoodsDialog.isShow = false;
        },


        // 采购历史  弹框展示
        purchaseHistoryDialogShow(scope){
            this.purchaseHistoryDialog.requestData.item_id = scope.id;
            this.purchaseHistoryDialog.requestData.attr_ids = scope.key;
            this.purchaseHistoryDialogSearchBtn();
        },
        // 采购历史  选择 开始时间和结束时间
        purchaseHistoryDialogChangeRequestTime(e){
            this.purchaseHistoryDialog.requestData.start_time = e[0];
            this.purchaseHistoryDialog.requestData.end_time = e[1];
        },
        // 采购历史  页面切换
        purchaseHistoryDialogHandleCurrentChange(e){
            this.purchaseHistoryDialog.requestData.page = e;
            this.purchaseHistoryDialogSearchBtn();
        },
        // 采购历史  搜索按钮
        purchaseHistoryDialogSearchBtn(){
            purchaseHistoryList(this.purchaseHistoryDialog.requestData).then(res => {
                if (res.code === 200) {
                    this.purchaseHistoryDialog.responseData = res.data;
                    this.purchaseHistoryDialog.isShow = true;
                }
            }).catch(err => {
                console.log(err);
            })
        },

        // 移除 某个供应商里的某个采购商品
        addPurchaseOrderDeleteGoods(index){
            this.requestData[parseInt(this.tabIndex)].items.splice(index, 1);
        },
        // 提交保存按钮
        addPurchaseOrderSubmit(){
            let flag = true, requestData = [];
            for(const item of this.requestData) {
                let requestObj = {
                    sup_id: item.sup_id,
                    is_price_firse: item.is_price_firse,
                    pick_way: item.pick_way,
                    postage: item.postage,
                    amount: item.amount,
                    remarks: item.remarks,
                    items: [],
                };
                if (!item.is_price_firse) {
                    this.$message.error(`请选择【${this.supplierIdToName(item.sup_id)}】供应商的是否先打款！`);
                    flag = false;
                    break;
                }
                if (!item.pick_way) {
                    this.$message.error(`请选择【${this.supplierIdToName(item.sup_id)}】供应商的发货方式！`);
                    flag = false;
                    break;
                }
                if (item.items.length === 0) {
                    this.$message.error(`【${this.supplierIdToName(item.sup_id)}】供应商没有要采购的商品！`);
                    flag = false;
                    break;
                }
                for (const goods of item.items) {
                    if(!/^[0-9]*[1-9][0-9]*$/.test(goods.num)) {
                        this.$message.error(`【${this.supplierIdToName(item.sup_id)}】供应商的【${goods.g_title}】商品的采购数量有误！`);
                        flag = false;
                        break;
                    }
                    if(!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(goods.price)) {
                        this.$message.error(`【${this.supplierIdToName(item.sup_id)}】供应商的【${goods.g_title}】商品的采购单价有误！`);
                        flag = false;
                        break;
                    }
                    let goodsObj = {
                        item_id: goods.id,
                        title: goods.g_title,
                        pic: goods.imgurl,
                        attr_name: goods.key_name,
                        attr_ids: goods.attr_ids,
                        bar_code: goods.code,
                        price: goods.price,
                        num: goods.num,
                        remarks: goods.remarks
                    };
                    requestObj.items.push(goodsObj);
                };
                requestData.push(requestObj);
            }
            if (flag) {
                console.log("通过验证，且要提交点数据：", requestData);
                addPurchase(requestData).then(res => {
                    if (res.code === 200) {
                        this.requestData = [];
                        this.$message.success('新增采购单成功！')
                    }
                })
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
