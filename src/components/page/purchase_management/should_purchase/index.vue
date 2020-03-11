<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>待采购单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input
                        class="my-input"
                        placeholder="商品名称/条形码"
                        clearable>
                </el-input>
                <supplier @change="supplierChange"></supplier>
                <el-date-picker
                        class="my-input"
                        style="width: 300px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="缺货开始"
                        end-placeholder="缺货结束">
                </el-date-picker>
                <el-select placeholder="状态" class="my-input">
                    <el-option  label=".label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                </el-select>
                <el-select placeholder="下单状态" class="my-input">
                    <el-option  label=".label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                </el-select>
                <el-button type="primary">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table  style="width: 100%">
                    <el-table-column prop="a_username" label="供应商"></el-table-column>
                    <el-table-column prop="l_ip" label="商品名称"></el-table-column>
                    <el-table-column prop="create_time" label="图片"></el-table-column>
                    <el-table-column prop="l_browser" label="条形码"></el-table-column>
                    <el-table-column prop="l_browser" label="缺货量"></el-table-column>
                    <el-table-column prop="l_browser" label="状态"></el-table-column>
                    <el-table-column prop="l_browser" label="操作信息"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </div>


        <el-dialog v-dialogDrag title="缺货轨迹" center :visible.sync="noGoodsTrackDialog.isShow" width="30%">
            <el-form label-width="100px">
                <el-form-item label="状态">
                    <el-select placeholder="请选择状态" class="my-input">
                        <el-option  label=".label" value="item.value"></el-option>
                        <el-option  label="item.label" value="item.value"></el-option>
                        <el-option  label="item.label" value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="择缺货时间">
                    <el-date-picker
                            v-model="noGoodsTrackDialog.requestData.time"
                            class="my-input"
                            style="max-width: 300px;"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="缺货开始"
                            end-placeholder="缺货结束">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="合计缺货数量">
                    <el-tag type="danger" size="medium">100</el-tag>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                </el-form-item>
            </el-form>
            <div style="margin: 40px 0;">
                <el-table max-height="100" :data="noGoodsTrackDialog.responseData.data">
                    <el-table-column prop="order_sn" label="订单编号"></el-table-column>
                    <el-table-column prop="num" label="缺货量"></el-table-column>
                    <el-table-column label="状态"></el-table-column>
                    <el-table-column prop="create_time" label="采购时间"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        layout="prev, pager, next"
                        @current-change=""
                        :total="noGoodsTrackDialog.responseData.count"
                        background>
                </el-pagination>
            </div>
        </el-dialog>
        <el-dialog v-dialogDrag title="设置无货" center :visible.sync="setNoGoodsDialog.isShow" width="30%">
            <el-form label-width="100px" :model="setNoGoodsDialog.requestData" :rules="setNoGoodsDialog.rules" ref="setNoGoodsDialog">
                <el-form-item label="无货状态" prop="sup_explain">
                    <el-select placeholder="请选择无货状态状态" class="my-input" clearable v-model="setNoGoodsDialog.requestData.sup_explain" >
                        <el-option v-for="(item, index) in setNoGoodsDialog.responseData.noGoodsStatusList"
                                :key="index"
                                :label="item.name"
                                :value="item.key">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="无货时间" prop="time" :inline-message="true" v-show="setNoGoodsDialog.requestData.sup_explain == 1">
                    <el-date-picker
                            v-model="setNoGoodsDialog.requestData.time"
                            class="my-input"
                            style="max-width: 300px;"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="setNoGoods('setNoGoodsDialog')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import supplier from '../components/supplier/index';
    import { noGoodsStatus, } from '../../../../api/purchase/shouldPurchase';
    export default {
        name: 'index',
        data() {
            var validateSetNoGoodsDialogTime = (rule, value, callback) => {
                if (this.setNoGoodsDialog.requestData.sup_explain == 1) {
                    this.setNoGoodsDialog.requestData.time.length === 0 ? callback(new Error('请选择时间')) : callback();
                } else {
                    callback();
                }
            };

            return {

                // 缺货轨迹
                noGoodsTrackDialog: {
                    isShow: true,
                    requestData: {
                        item_id: '',//商品ID
                        attr_ids: '',//商品对应的规格ID组
                        time: '',// start_time， end_time
                        start_time: '',//商品对应的规格ID组
                        end_time: '',//商品对应的规格ID组
                        page: 1,
                        limit: 10,
                    },
                    responseData: {
                        count: 0,
                        data: []
                    },
                },
                // 设置无货
                setNoGoodsDialog: {
                    isShow: false,
                    responseData: {
                        noGoodsStatusList: []
                    },
                    rules: {
                        sup_explain: [
                            { required: true, message: '请选择无货状态说明', trigger: 'blur' },
                        ],
                        time: [
                            { validator: validateSetNoGoodsDialogTime, trigger: 'blur' }
                        ]
                    },
                    requestData: {
                        sup_id: '', //供应商ID
                        item_id: '', //商品ID
                        attr_ids: '',//商品规格ID组
                        sup_explain: '',//无货说明：supExplain接口key
                        time: '',//start_time , end_time
                        start_time: '',//当 sup_explain的值为1时（固定时间），则为固定时间的开始时间（日期格式）
                        end_time: '',//当 sup_explain的值为1时（固定时间），则为固定时间的结束时间（日期格式）
                    }
                },
            }
        },
        methods: {
            // 设置无货
            setNoGoods(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        console.log(this.setNoGoodsDialog.requestData);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 缺货轨迹
        },
        beforeMount() {
            noGoodsStatus().then(res => {
                if (res.code === 200) {
                    this.setNoGoodsDialog.responseData.noGoodsStatusList = res.data.data;
                }
            }).catch(err => {
                console.log(err);
            });
        },
        components: {
            supplier,
        }
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
