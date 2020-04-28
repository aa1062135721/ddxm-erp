<template>
    <!-- 选择商品 -->
    <el-dialog :visible.sync="choosesGoodsDialog.isShow" v-dialogDrag title="选择商品" center width="40%">
        <el-input placeholder="商品名称/条形码" class="input" v-model="choosesGoodsDialog.requestData.seach_val" clearable></el-input>
        <supplier v-model="choosesGoodsDialog.requestData.supplier_id" placeholder="供应商"></supplier>
        <el-button type="primary" @click="choosesGoodsDialogSearchBtn">搜索</el-button>
        <div style="margin: 40px 0;">
            <el-table ref="multipleTable" max-height="400"
                      :data="choosesGoodsDialog.responseData.data"
                      @selection-change="choosesGoodsDialogChooseGoods"
                      :row-key="getRowKey">
                <el-table-column type="selection" :reserve-selection="true"></el-table-column>
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
</template>

<script>
    import { getGoods } from '@/api/common/index';
    import supplier from '@/components/page/purchase_management/components/supplier/index.vue';

    export default {
        name: 'ChoosesGoods',
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            requestData: {
                type: Object,
                default: {}
            },
        },
        watch: {
            visible: {
                immediate: true,
                handler: function(newVal) {
                    this.choosesGoodsDialog.isShow = newVal;
                    if (newVal) {
                        this.choosesGoodsDialogSearchBtn();
                    }
                }
            },
            "choosesGoodsDialog.isShow": function(newVal, oldValue) {
                if (!newVal) {
                    this.$emit("update:visible", false); // 当弹出层被关闭的时候，发送消息给父组件，取消显示对话框
                }
            },
            requestData: {
                handler:function(val, oldval){
                    if (val.warehouse_id) {
                        this.choosesGoodsDialog.requestData.warehouse_id = val.warehouse_id
                    }
                    if (val.supplier_id) {
                        this.choosesGoodsDialog.requestData.supplier_id = val.supplier_id
                    }
                },
                deep:true//对象内部的属性监听，也叫深度监听
            }
        },
        data() {
            return {
                // 选择商品弹框
                choosesGoodsDialog: {
                    isShow: false,
                    requestData: {
                        page: 1,
                        seach_val:'',
                        supplier_id: '',
                        warehouse_id: '',
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
            };
        },
        methods: {
            // 选择商品弹框 搜索按钮
            choosesGoodsDialogSearchBtn(){
                getGoods(this.choosesGoodsDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.choosesGoodsDialog.responseData = res.data;
                        this.$nextTick(() => {
                            this.choosesGoodsDialog.responseData.data.forEach((item,i)=>{
                                this.choosesGoodsDialog.choosesGoods.forEach((multItem,j)=>{
                                    if(item.id + '_' + item.key == multItem.id + '_' + multItem.key){
                                        this.$refs.multipleTable.toggleRowSelection(this.choosesGoodsDialog.responseData.data[i], true);//这步操作是让  页面显示选中的数据
                                    }
                                })
                            })
                        });
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
                this.$emit('sendChoosesGoods', this.choosesGoodsDialog.choosesGoods);
                this.choosesGoodsDialogNoShow()
            },
            // 解决 table表格选中并切换下一页之前选中数据消失的问题
            getRowKey(row){
                return row.id + '_' + row.key
            },
            //选择商品弹框隐藏
            choosesGoodsDialogNoShow() {
                this.choosesGoodsDialog = {
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
                };
                this.$refs.multipleTable.clearSelection();
            }
        },
        components: {
            supplier,
        },

    };
</script>

<style scoped>
    .input {
        width: 150px;
        margin-right: 10px;
    }
</style>
