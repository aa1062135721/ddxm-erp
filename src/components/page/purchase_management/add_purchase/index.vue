<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>新增采购</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <!-- <supplier @change="supplierChange"></supplier>
                <supplier @change="supplierChange"></supplier>-->
                <el-select v-model="value1" placeholder="是否先打款" class="my-input">
                    <el-option
                        v-for="(item,index) in payMoney"
                        :key="index"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="value2" placeholder="采购到达" class="my-input">
                    <el-option
                        v-for="(item,index) in purchase"
                        :key="index"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-input placeholder="请输入运费" class="my-input"></el-input>
                <el-button type="primary">提交并保存</el-button>
                <el-button type="primary">保存为草稿</el-button>
                <el-button type="primary" plain>批量导入</el-button>
            </div>
            <div class="addBox">
                <el-button class="addInput" type="primary" @click="chooeseGoods">选择商品</el-button>
                <el-button
                    class="addInput"
                    type="primary"
                    @click="supplierDialog.isShow = true"
                >新增供货商</el-button>
            </div>
            <el-tabs
                v-model="editableTabsValue"
                type="card"
                closable
                @tab-remove="removeTab"
                @tab-click="tabClick"
            >
                <el-tab-pane
                    v-for="(item, index) in editableTabs"
                    :key="index"
                    :label="item.title"
                    :name="item.name"
                >
                    <div style="margin: 40px 0;">
                        <el-table style="width: 100%" :data="item.data">
                            <el-table-column prop="id" label="序号"></el-table-column>
                            <el-table-column prop="g_title" label="商品名称"></el-table-column>
                            <el-table-column prop label="图片"></el-table-column>
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
        <el-dialog
            v-dialogDrag
            title="选择商品"
            center
            :visible.sync="setGoodsDialog.isShow"
            width="40%"
        >
            <el-select v-model="value3" placeholder="商品分类" class="input">
                <el-option
                    v-for="(item,index) in payMoney"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value4" placeholder="供应商" class="input">
                <el-option
                    v-for="(item,index) in purchase"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-input placeholder="商品名称/条形码" class="input"></el-input>
            <el-button type="primary">搜索</el-button>
            <div style="margin: 40px 0;">
                <el-table
                    ref="multipleTable"
                    :data="setGoodsDialog.data"
                    max-height="400"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="s_name" label="供应商"></el-table-column>
                    <el-table-column prop="order_sn" label="分类"></el-table-column>
                    <el-table-column prop="g_title" label="商品名称"></el-table-column>
                    <el-table-column prop="key_name" label="规格"></el-table-column>
                    <el-table-column prop="code" label="条形码"></el-table-column>
                    <el-table-column prop="w_stock" label="库存"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                    layout="prev, pager, next"
                    :total="setGoodsDialog.count"
                    :page-size="setGoodsDialog.page_size"
                    background
                    small
                    @current-change="handleCurrentChange"
                ></el-pagination>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="setGoodsDialog.isShow = false">取 消</el-button>
                <el-button type="primary" @click="chooeseComfim">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 新增供货商 -->
        <el-dialog title="新增供货" :visible.sync="supplierDialog.isShow" width="20%" center @close="supplierDialog.idx = null">
            <el-select
                v-model="supplierDialog.idx"
                placeholder="请选择供应商"
                style="width:150px;margin-left:90px;"
            >
                <el-option
                    v-for="(item,index) in purchase"
                    :key="index"
                    :label="item.label"
                    :value="index"
                ></el-option>
            </el-select>
            <div slot="footer" class="dialog-footer">
                <el-button @click="supplierDialog.isShow = false">取 消</el-button>
                <el-button type="primary" @click="addTab">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import supplier from '../components/supplier/index';
import { getGoods } from '@/api/common/index';
export default {
    name: 'index',
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            // 是否打款数据
            payMoney: [
                {
                    value: 'yes',
                    label: '是'
                },
                {
                    value: 'no',
                    label: '否'
                }
            ],
            // 采购到达数据
            purchase: [
                {
                    value: '0',
                    label: '界石仓库'
                },
                {
                    value: '1',
                    label: '供应商'
                }
            ],

            // 选择商品临时数组
            goodArr: [],

            // 供货商标签相关数据
            editableTabsValue: 0,
            editableTabs: [],
            tabIndex: 0,
            activeIdx: 0,

            // 选择商品
            setGoodsDialog: {
                isShow: false,
                reqData: {
                    page: 1
                },
                data: [
                    {
                        order_sn: 0,
                        num: 0,
                        create_time: 0
                    }
                ],
                time: null,
                count: 1,
                page_size: 0
            },

            // 新增供货商
            supplierDialog: {
                isShow: false,
                idx: null
            }
        };
    },
    created() {
        this.getAllgoods();
    },
    methods: {
        supplierChange() {
            console.log(1);
        },

        // 获取所有商品
        getAllgoods() {
            getGoods(this.setGoodsDialog.reqData).then(res => {
                if (res.code == 200) {
                    this.setGoodsDialog.data = res.data.data;
                    this.setGoodsDialog.count = res.data.total;
                    this.setGoodsDialog.page_size = res.data.per_page;
                }
            });
        },

        // 标签点击
        tabClick(target) {
            let idx = target.index;
            this.activeIdx = idx;
        },

        // 新增标签
        addTab(targetName) {
            if (this.editableTabs.length == 0) {
                this.tabInsert();
            } else {
                let index = this.supplierDialog.idx
                let id = this.purchase[index].value
                this.editableTabs.forEach(item => {
                    if (item.id == id) {
                        console.log('重复',item)
                        this.$message({
                            message: '该供货商已新增,请重新选择',
                            type: 'warning'
                        });
                        throw new Error()
                    }
                });
                this.tabInsert()
            }
        },
        tabInsert() {
            let newTabName = ++this.tabIndex + '';
            let index = this.supplierDialog.idx;
            let tabName = this.purchase[index].label;
            let id = this.purchase[index].value;
            this.editableTabs.push({
                id,
                title: tabName,
                name: newTabName,
                content: 'New Tab content',
                data: []
            });
            this.editableTabsValue = newTabName;
            this.supplierDialog.idx = null;
            this.supplierDialog.isShow = false;
        },
        removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        },

        // 选择商品
        chooeseGoods() {
            if (this.editableTabs.length == 0) {
                this.$message({
                    message: '请先选择供货商再选择商品!',
                    type: 'warning'
                });
            } else {
                this.setGoodsDialog.isShow = true;
            }
        },

        // 选择确定
        chooeseComfim() {
            this.activeIdx = this.tabIndex - 1;
            let idx = this.activeIdx;
            console.log(idx);
            this.goodArr.forEach(item => {
                this.editableTabs[idx].data.push(item);
            });
            console.log(this.editableTabs[idx].data);
            this.goodArr = [];
            this.setGoodsDialog.isShow = false;
        },

        handleCurrentChange(val) {
            this.setGoodsDialog.reqData.page = val;
            this.getAllgoods();
        },
        handleSelectionChange(val) {
            this.goodArr = val;
        }
    },
    beforeMount() {
        // noGoodsStatus().then(res => {
        //     if (res.code === 200) {
        //         this.setNoGoodsDialog.responseData.noGoodsStatusList = res.data.data;
        //     }
        // }).catch(err => {
        //     console.log(err);
        // });
    },
    components: {
        supplier
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
