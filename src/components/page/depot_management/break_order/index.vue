<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>破损单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-select placeholder="状态" v-model="requestData.status" clearable class="my-input">
                    <el-option label="待审核" value="1"></el-option>
                    <el-option label="审核通过" value="2"></el-option>
                    <el-option label="审核不通过" value="3"></el-option>
                </el-select>
                <el-input v-model="requestData.search_val" clearable placeholder="商品名称|条形码" class="my-input" style="width: 250px;"></el-input>
                <el-input v-model="requestData.dl_sn" clearable placeholder="订单号" class="my-input" style="width: 250px;"></el-input>
                <depot v-model="requestData.warehouse_id"></depot>
            </div>
            <div>
                <el-button type="primary" @click="getList">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
                <el-button type="primary" plain @click="addDialog.isShow = true">新增破损单</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%" border>
                    <el-table-column label="序号" type="index"></el-table-column>
                    <el-table-column label="仓库" prop="warehouse_name"></el-table-column>
                    <el-table-column label="申请人" prop="applicant_name"></el-table-column>
                    <el-table-column label="申请时间" prop="create_time"></el-table-column>
                    <el-table-column label="审核时间" prop="update_time"></el-table-column>
                    <el-table-column label="商品名称" width="150">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品条形码" width="100">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.bar_code}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品规格">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.attr_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="破损数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="破损原因" width="200">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">
                                {{item.reason}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" prop="status_name"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="examineDialogShow(scope.row.id)">审核</el-button>
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

        <el-dialog v-dialogDrag  class="send-goods-dialog" title="新增破损单" center :visible.sync="addDialog.isShow" width="50%">
            <div style="margin-bottom: 10px;">
                <depot v-model="addDialog.requestData.warehouse_id"></depot>
                <el-button type="primary" @click="addDialogGetChoosesGoodsDialogShow">选择商品</el-button>
            </div>
            <el-table :data="addDialog.requestData.items" style="width: 100%" border max-height="400">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="title" label="商品名称"></el-table-column>
                <el-table-column prop="bar_code" label="条形码"></el-table-column>
                <el-table-column prop="attr_name" label="规格"></el-table-column>
                <el-table-column label="图片">
                    <template scope="scope">
                        <el-image class="table-td-thumb" style="width: 50px;height: 50px; margin: 10px;"  :src="scope.row.pic" :preview-src-list="[scope.row.pic]"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="kuchun" label="库存"></el-table-column>
                <el-table-column label="破损数量">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.num"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="原因">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.reason"></el-input>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 50px;text-align: center">
                <el-button type="primary" @click="addDialogSubmit">提交</el-button>
            </div>
        </el-dialog>
        <choosesGoods :visible.sync="addDialog.choosesGoodsDialog.isShow" :requestData="{warehouse_id: addDialog.requestData.warehouse_id}" @sendChoosesGoods="addDialogGetChoosesGoods"></choosesGoods>

        <el-dialog v-dialogDrag title="审核" center :visible.sync="examineDialog.isShow" width="30%">
            <el-form :model="examineDialog.requestData" :rules="examineDialog.rules" ref="examineDialog" label-width="150px">
                <el-form-item label="审核状态" prop="status">
                    <el-radio-group v-model="examineDialog.requestData.status">
                        <el-radio label="2">同意</el-radio>
                        <el-radio label="3">拒绝</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="examineDialog.requestData.examine_reason"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="examineDialogSubmit('examineDialog')">确定</el-button>
                    <el-button @click="examineDialogCancel('examineDialog')">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import { list, add, examine } from '@/api/depot/breakOrder';
    import depot from '@/components/common/Depot.vue'
    import choosesGoods from '@/components/common/ChoosesGoods.vue'

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    dl_sn: "", // 订单号
                    status: "", // 状态：状态：1待审核，2审核通过，3审核不通过
                    warehouse_id: "", // 仓库ID
                    search_val: "", // 商品名称/商品条形码
                    page: 1,
                    limit: 10,
                },
                responseData: {
                    count: 0,
                    data:[]
                },

                // 新增破损单
                addDialog: {
                    isShow: false,
                    requestData: {
                        warehouse_id: '',
                        items: [
                            // {
                            //     item_id: 4402,    //商品ID
                            //     title: "4402商品名",  //商品名称
                            //     pic: "4402pic",   //商品图片
                            //     attr_ids: "", //规格ID
                            //     attr_name: "",    //规格名称
                            //     bar_code: "br_code",  //条形码
                            //     reason: "我是破损原因",   //破损原因
                            //     kuchun: 100, //库存
                            //     num: 8    //破损数量
                            // },
                        ]
                    },

                    choosesGoodsDialog: {
                        isShow: false,
                    }
                },

                // 审核破损单
                examineDialog: {
                    isShow: false,
                    rules: {
                        status: [{ required: true, message: '请同意或拒绝', trigger: 'blur' }],
                    },
                    requestData: {
                        id: '',//破损单ID
                        status: '',//审核状态：2同意。3拒接
                        examine_reason: '',//审核原因
                    }
                }
            }
        },
        watch: {
            "addDialog.requestData.warehouse_id": function(newValue, oldValue) {
                this.addDialog.requestData.items = []
            }
        },
        methods: {
            // 重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 获取列表
            getList(){
                list(this.requestData).then(res => {
                    if (res.code === 200) {
                        this.responseData =  res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            // 分页
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },

            // 新增破损单弹框---选择商品弹框--- 显示
            addDialogGetChoosesGoodsDialogShow(){
                if (!this.addDialog.requestData.warehouse_id) {
                    this.$message.error('请选择仓库');
                    return;
                }
                this.addDialog.choosesGoodsDialog.isShow = true;
            },

            // 新增破损单弹框---选择商品弹框---确定选择
            addDialogGetChoosesGoods(goods){
                let arr = [], allChoosesArr = [];
                for (const good of goods) {
                    arr.push({
                        item_id: good.id,    //商品ID
                        title: good.g_title,  //商品名称
                        pic: good.imgurl,   //商品图片
                        attr_ids: good.key, //规格ID
                        attr_name: good.key_name,    //规格名称
                        bar_code: good.code,  //条形码
                        reason: "",   //破损原因 TODO 需要用户输入
                        kuchun: good.w_stock, //库存
                        num: ''    //破损数量 TODO 需要用户输入
                    });
                }
                allChoosesArr = [...this.addDialog.requestData.items, ...arr];
                // 去重
                let obj = {};
                this.addDialog.requestData.items = allChoosesArr.reduce(function(item, next) {
                    obj[next.item_id + next.attr_ids] ? '' : obj[next.item_id + next.attr_ids] = true && item.push(next);
                    return item;
                }, []);
            },
            // 新增破损单弹框---新增破损单
            addDialogSubmit(){
                let flag = false
                if (!this.addDialog.requestData.warehouse_id) {
                    this.$message.error('请选择仓库');
                    return;
                }
                for (const goods of this.addDialog.requestData.items) {
                    if (parseInt(goods.num) <= 0 || parseInt(goods.num) > parseInt(goods.kuchun)) {
                        this.$message.error(`【${goods.title}】的破损数量有误！`);
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    return;
                }
                add(this.addDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.getList();
                        this.addDialog.isShow = false;
                        this.$message.success('新增破损单成功');
                        this.addDialog.requestData = {
                            warehouse_id: '',
                            items: []
                        }
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            // 审核破损单
            examineDialogShow(id){
                this.examineDialog.requestData.id = id;
                this.examineDialog.isShow = true;
            },
            // 审核破损单对话框  提交
            examineDialogSubmit(formName){
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        examine(this.examineDialog.requestData).then(res => {
                            if (res.code == 200) {
                                this.getList();
                                this.$message.success('审核成功');
                                this.resetForm(formName);
                                this.examineDialog.isShow = false;
                            }
                        });
                    } else {
                        return false;
                    }
                });
            },
            // 审核破损单对话框  隐藏
            examineDialogCancel(formName){
                this.resetForm(formName);
                this.examineDialog.isShow = false;
            },

        },
        beforeMount() {
            this.getList();
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
            margin-bottom: 10px;
        }
    }

    .send-goods-dialog{
        .send-goods-dialog-item{
            margin-bottom: 50px;
            .box{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                div{
                    margin-right: 20px;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
