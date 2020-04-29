<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>待采购单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input v-model="requestData.title" class="my-input" placeholder="商品名称/条形码" clearable></el-input>
                <supplier v-model="requestData.sup_id"></supplier>
                <el-date-picker
                        v-model="requestData.time"
                        @change="changeRequestTime"
                        class="my-input"
                        style="min-width: 400px;"
                        type="datetimerange"
                        value-format="yyyy-MM-dd"
                        range-separator="至"
                        start-placeholder="缺货开始"
                        end-placeholder="缺货结束">
                </el-date-picker>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" plain v-if="$_has('export')">导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table  style="width: 100%" :data="responseData.data">
                    <el-table-column prop="sup_name" label="供应商"></el-table-column>
                    <el-table-column prop="item_id" label="商品ID"></el-table-column>
                    <el-table-column prop="title" label="商品名称"></el-table-column>
                    <el-table-column prop="attr_name" label="规格"></el-table-column>
                    <el-table-column label="图片">
                        <template slot-scope="scope">
                            <el-image
                                    style="width: 80px;height: 80px;margin: 10px;"
                                    class="table-td-thumb"
                                    :src="scope.row.pic"
                                    :preview-src-list="[scope.row.pic]"
                            ></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column prop="bar_code" label="条形码"></el-table-column>
                    <el-table-column prop="num" label="缺货量"></el-table-column>
                    <el-table-column prop="l_browser" label="操作信息">
                        <template slot-scope="scope">
<!--                            <el-button type="text">立即采购</el-button>-->
<!--                            <el-button type="text" @click="setNoGoodsDialogShow(scope.row)">设置无货</el-button>-->
                            <el-button type="text" @click="noGoodsTrackDialogShow(scope.row)">缺货轨迹</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        :total="responseData.count"
                        @current-change="handleCurrentChange"
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="缺货轨迹" center :visible.sync="noGoodsTrackDialog.isShow" width="30%">
            <el-form label-width="100px">
                <el-form-item label="择缺货时间">
                    <el-date-picker
                            v-model="noGoodsTrackDialog.requestData.time"
                            @change="noGoodsTrackDialogChangeRequestTime"
                            class="my-input"
                            style="max-width: 300px;"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="缺货开始"
                            end-placeholder="缺货结束">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="合计缺货数量">
                    <el-tag type="danger" size="medium">{{noGoodsTrackDialog.responseData.allNum}}</el-tag>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="noGoodsTrackDialogGetList">提交</el-button>
                </el-form-item>
            </el-form>
            <div style="margin: 40px 0;">
                <el-table max-height="100" :data="noGoodsTrackDialog.responseData.data">
                    <el-table-column prop="order_sn" label="订单编号"></el-table-column>
                    <el-table-column prop="num" label="缺货数量"></el-table-column>
                    <el-table-column prop="create_time" label="缺货时间"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        layout="prev, pager, next"
                        @current-change="noGoodsTrackDialogHandleCurrentChange"
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
                            @change="setNoGoodsDialogChangeRequestTime"
                            class="my-input"
                            style="max-width: 300px;"
                            type="datetimerange"
                            value-format="yyyy-MM-dd"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="setNoGoodsDialogSubmit('setNoGoodsDialog')">提交</el-button>
                    <el-button @click="resetForm('setNoGoodsDialog')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import supplier from '@/components/common/Supplier.vue';
    import { noGoodsStatus, setNoGoods, list, noGoodsTrail, } from '@/api/purchase/shouldPurchase';

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
                    isShow: false,
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
                        allNum: 0,
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

                requestData: {
                    page: 1,
                    limit: 10,
                    sup_id: '', //供应商ID
                    title: '', //商品名称/商品条形码
                    start_time: '', //开始日期
                    end_time: '', //开始日期
                    time: '',
                },
                responseData: {
                    count: 0,
                    data: []
                }
            }
        },
        methods: {
            // 重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },


            // 设置无货    对话框显示
            setNoGoodsDialogShow(e){
                this.setNoGoodsDialog.requestData.sup_id = e.sup_id;
                this.setNoGoodsDialog.requestData.item_id = e.item_id;
                this.setNoGoodsDialog.requestData.attr_ids = e.attr_ids;
                this.setNoGoodsDialog.isShow = true
            },
            // 设置无货  选择 开始时间和结束时间
            setNoGoodsDialogChangeRequestTime(e){
                this.setNoGoodsDialog.requestData.start_time = e[0];
                this.setNoGoodsDialog.requestData.end_time = e[1];
            },
            // 设置无货 提交表单
            setNoGoodsDialogSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log("设置无货提交的参数：",this.setNoGoodsDialog.requestData);
                        setNoGoods(this.setNoGoodsDialog.requestData).then(res => {
                            if (res.code === 200) {
                                this.getList();
                                this.$message.success('设置成功！');
                                this.setNoGoodsDialog.isShow =  false;
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } else {
                        return false;
                    }
                });
            },



            // 缺货轨迹 对话框显示
            noGoodsTrackDialogShow(e){
                this.noGoodsTrackDialog.requestData.item_id = e.item_id;
                this.noGoodsTrackDialog.requestData.attr_ids = e.attr_ids;
                this.noGoodsTrackDialogGetList();
            },
            // 缺货轨迹  选择 开始时间和结束时间
            noGoodsTrackDialogChangeRequestTime(e){
                this.noGoodsTrackDialog.requestData.start_time = e[0];
                this.noGoodsTrackDialog.requestData.end_time = e[1];
            },
            // 缺货轨迹   改变页码
            noGoodsTrackDialogHandleCurrentChange(val) {
                this.noGoodsTrackDialog.requestData.page = val;
                this.noGoodsTrackDialogGetList();
            },
            // 缺货轨迹  获取列表
            noGoodsTrackDialogGetList(){
                noGoodsTrail(this.noGoodsTrackDialog.requestData).then(res => {
                    if (res.code == 200) {
                        this.noGoodsTrackDialog.responseData = res.data;
                        this.noGoodsTrackDialog.isShow = true;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },


            // 选择缺货开始时间和结束时间
            changeRequestTime(e){
                this.requestData.start_time = e[0];
                this.requestData.end_time = e[1];
            },
            // 改变页码
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
            // 获取列表
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200) {
                        this.responseData = res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        beforeMount() {
            this.getList();
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
