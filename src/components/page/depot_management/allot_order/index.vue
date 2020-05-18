<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>调拨单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-select placeholder="调拨单状态" v-model="requestData.status" clearable class="my-input">
                    <el-option label="待发货" value="1"></el-option>
                    <el-option label="调拨中(已发货)" value="2"></el-option>
                    <el-option label="已完成" value="3"></el-option>
                </el-select>
                <el-input v-model="requestData.a_sn" clearable placeholder="调拨单号" class="my-input" style="width: 250px;"></el-input>
                <depot v-model="requestData.warehouse_id_in" placeholder="调入仓库" class="my-input"></depot>
                <depot v-model="requestData.warehouse_id_out" placeholder="调出仓库" class="my-input"></depot>
            </div>
            <div>
                <el-button type="primary" @click="requestData.page = 1; getList()">搜索</el-button>
                <el-button type="primary" plain @click="addDialog.isShow = true">新增调拨单</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%" border>
                    <el-table-column label="序号" type="index"></el-table-column>
                    <el-table-column label="调拨单号" prop="a_sn"></el-table-column>
                    <el-table-column label="调出仓库" prop="warehouse_out_name"></el-table-column>
                    <el-table-column label="调入仓库" prop="warehouse_in_name"></el-table-column>
                    <el-table-column label="操作人" prop="create_name"></el-table-column>
                    <el-table-column label="备注" prop="remarks"></el-table-column>
                    <el-table-column label="入库时间" prop="warehousing_time"></el-table-column>
                    <el-table-column label="状态" prop="status_name"></el-table-column>
                    <el-table-column label="商品名称" width="250">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品条形码" width="150">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.bar_code}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品规格">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.attr_name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="调拨数量">
                        <template slot-scope="scope">
                            <div v-for="(item, index) in scope.row.items" :key="index">{{item.num}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" fixed="right">
                        <template slot-scope="scope">
                            <el-button type="text" v-if="scope.row.status === 1" @click="editDialogShow(scope.row)">编辑</el-button>
                            <el-button type="text" v-if="scope.row.status === 2" @click="allotConfirm(scope.row.id)">确认入库</el-button>
                            <el-button type="text" v-if="scope.row.status === 1" @click="allotSendGoods(scope.row.id)">调拨单发货</el-button>
                            <el-button type="text" v-if="scope.row.status === 2" @click="allotSendGoodsCancel(scope.row.id)">调拨单取消发货</el-button>
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

        <el-dialog v-dialogDrag  class="send-goods-dialog" title="新增调拨单" center :visible.sync="addDialog.isShow" width="50%">
            <el-button type="primary" @click="addDialogGetChoosesGoodsDialogShow" style="margin-bottom: 10px;">选择商品</el-button>
            <div class="search-div">
                <depot v-model="addDialog.requestData.warehouse_id_out" placeholder="调出仓库" class="my-input"></depot>
                <depot v-model="addDialog.requestData.warehouse_id_in" placeholder="调入仓库" class="my-input"></depot>
                <el-input v-model="addDialog.requestData.remarks" placeholder="调拨单备注，选填" class="my-input"></el-input>
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
                <el-table-column label="调拨数量">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.num"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="addDialog.requestData.items.splice(scope.$index, 1)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 50px;text-align: center">
                <el-button type="primary" @click="addDialogSubmit">提交</el-button>
            </div>
        </el-dialog>
        <choosesGoods :visible.sync="addDialog.choosesGoodsDialog.isShow"
                      @sendChoosesGoods="addDialogGetChoosesGoods"
                      :requestData="{warehouse_id: addDialog.requestData.warehouse_id_out}"
        ></choosesGoods>

        <el-dialog v-dialogDrag  class="send-goods-dialog" title="编辑调拨单" center :visible.sync="editDialog.isShow" width="50%">
            <el-button type="primary" @click="editDialog.choosesGoodsDialog.isShow = true" style="margin-bottom: 10px;">选择商品</el-button>
            <el-form label-width="80px" :inline="true">
                <el-form-item label="调出仓库">
                    <el-input disabled :value="editDialog.responseData.warehouse_out_name" placeholder="调出仓库" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="调入仓库">
                    <el-input disabled :value="editDialog.responseData.warehouse_in_name" placeholder="调入仓库" class="my-input"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="addDialog.requestData.remarks" placeholder="" class="my-input"></el-input>
                </el-form-item>
            </el-form>
            <el-table :data="editDialog.requestData.items" style="width: 100%" border max-height="400">
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
                <el-table-column label="调拨数量">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.num"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="editDialog.requestData.items.splice(scope.$index, 1)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 50px;text-align: center">
                <el-button type="primary" @click="editDialogSubmit">提交</el-button>
            </div>
        </el-dialog>
        <choosesGoods :visible.sync="editDialog.choosesGoodsDialog.isShow"
                      @sendChoosesGoods="editDialogGetChoosesGoods"
                      :requestData="{warehouse_id: editDialog.requestData.warehouse_id_out}"
        ></choosesGoods>
    </div>
</template>

<script>
    import { list, add, confirm, sendGoods, sendGoodsCancel, edit, } from '@/api/depot/allotOrder';
    import depot from '@/components/common/Depot.vue'
    import choosesGoods from '@/components/common/ChoosesGoods.vue'

    export default {
        name: 'index',
        data() {
            return {
                requestData: {
                    a_sn: "", // 调拨单号
                    status: "", // 调拨单状态：1待发货，2调拨中(已发货),3已完成'
                    warehouse_id_in: "", // 调入仓库ID
                    warehouse_id_out: "", // 调出仓库ID
                    page: 1,
                    limit: 10,
                },
                responseData: {
                    count: 0,
                    data:[]
                },

                addDialog: {
                    isShow: false,

                    requestData: {
                        warehouse_id_in: 0,   //调入仓库ID
                        warehouse_id_out: 0,  //调出仓库ID
                        remarks: "",   //备注
                        items: [
                            // {
                            //     "item_id": 1726,    //商品ID
                            //     "title": "商品名称",    //商品名称
                            //     "pic": "",  //商品图片
                            //     "attr_ids": 1726,   //商品规格
                            //     "attr_name": "红色",    //商品规格名
                            //     "bar_code": "ba172612321312",   //商品条形码
                            //     "num": 12   //调拨数量
                            // },
                        ],
                    },
                    choosesGoodsDialog: {
                        isShow: false,
                    },
                },
                editDialog: {
                    isShow: false,
                    requestData: {
                        id: 0,
                        warehouse_id_in: 0,   //调入仓库ID
                        warehouse_id_out: 0,  //调出仓库ID
                        remarks: "",   //备注
                        items: [
                            // {
                            //     "item_id": 1726,    //商品ID
                            //     "title": "商品名称",    //商品名称
                            //     "pic": "",  //商品图片
                            //     "attr_ids": 1726,   //商品规格
                            //     "attr_name": "红色",    //商品规格名
                            //     "bar_code": "ba172612321312",   //商品条形码
                            //     "num": 12   //调拨数量
                            // },
                        ],
                    },
                    responseData: {
                        warehouse_in_name: '',
                        warehouse_out_name: '',
                    },
                    choosesGoodsDialog: {
                        isShow: false,
                    },
                }
            }
        },
        methods: {
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

            // 新增调拨单弹框---选择商品弹框--- 显示
            addDialogGetChoosesGoodsDialogShow(){
                if (!this.addDialog.requestData.warehouse_id_out) {
                    this.$message.error('请选择调出仓库后再选商品');
                    return;
                }
                this.addDialog.choosesGoodsDialog.isShow = true;
            },
            // 新增调拨单弹框---选择商品弹框---确定选择
            addDialogGetChoosesGoods(goods){
                let arr = [], allChoosesArr = [];
                for (const good of goods) {
                    if (parseInt(good.w_stock) > 0) {
                        arr.push({
                            item_id: good.id,    //商品ID
                            title: good.g_title,  //商品名称
                            pic: good.imgurl,   //商品图片
                            attr_ids: good.key, //规格ID
                            attr_name: good.key_name,    //规格名称
                            bar_code: good.code,  //条形码
                            kuchun: good.w_stock, //库存
                            num: ''    //调拨数量 TODO 需要用户输入
                        });
                    } else {
                        // this.$message.error(`商品【${good.g_title}】，因库存不足，无法调拨`)
                    }
                }
                allChoosesArr = [...this.addDialog.requestData.items, ...arr];
                // 去重
                let obj = {};
                this.addDialog.requestData.items = allChoosesArr.reduce(function(item, next) {
                    obj[next.item_id + next.attr_ids] ? '' : obj[next.item_id + next.attr_ids] = true && item.push(next);
                    return item;
                }, []);
            },
            // 新增调拨单弹框---新增调拨
            addDialogSubmit(){
                let flag = false
                if (!this.addDialog.requestData.warehouse_id_out) {
                    this.$message.error('请选择调出仓库');
                    return;
                }
                if (!this.addDialog.requestData.warehouse_id_in) {
                    this.$message.error('请选择调入仓库');
                    return;
                }
                if (this.addDialog.requestData.items.length === 0) {
                    this.$message.error('请选择商品');
                    return;
                }
                for (const goods of this.addDialog.requestData.items) {
                    if (parseInt(goods.num) <= 0 || parseInt(goods.num) > parseInt(goods.kuchun)) {
                        this.$message.error(`【${goods.title}】的调拨数量有误！`);
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    return;
                }
                add(this.addDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.addDialog.isShow = false;
                        this.requestData.page = 1;
                        this.getList();
                        this.$message.success('新增调拨单成功');
                    }
                }).catch(err => {
                    console.log(err);
                })
            },


            // 编辑调拨单弹框---显示
            editDialogShow(item){
                let arr = []
                for (const good of item.items) {
                    arr.push({
                        item_id: good.item_id,    //商品ID
                        title: good.title,  //商品名称
                        pic: good.pic,   //商品图片
                        attr_ids: good.attr_ids, //规格ID
                        attr_name: good.attr_name,    //规格名称
                        bar_code: good.bar_code,  //条形码
                        kuchun: good.num, //库存
                        num: good.num    //调拨数量 TODO 需要用户输入
                    });
                }
                this.editDialog.responseData = {
                    warehouse_in_name: item.warehouse_in_name,
                    warehouse_out_name: item.warehouse_out_name,
                }
                this.editDialog.requestData = {
                    id: item.id,
                    warehouse_id_in: item.warehouse_id_in,   //调入仓库ID
                    warehouse_id_out: item.warehouse_id_out,  //调出仓库ID
                    remarks: item.remarks,   //备注
                    items: arr,
                }
                this.editDialog.isShow = true
            },
            // 编辑调拨单弹框---选择商品弹框---确定选择
            editDialogGetChoosesGoods(goods){
                let arr = [], allChoosesArr = [];
                for (const good of goods) {
                    if (parseInt(good.w_stock) > 0) {
                        arr.push({
                            item_id: good.id,    //商品ID
                            title: good.g_title,  //商品名称
                            pic: good.imgurl,   //商品图片
                            attr_ids: good.key, //规格ID
                            attr_name: good.key_name,    //规格名称
                            bar_code: good.code,  //条形码
                            kuchun: good.w_stock, //库存
                            num: ''    //破损数量 TODO 需要用户输入
                        });
                    } else {
                        // this.$message.error(`商品【${good.g_title}】，因库存不足，无法调拨`)
                    }
                }
                allChoosesArr = [...this.editDialog.requestData.items, ...arr];
                // 去重
                let obj = {};
                this.editDialog.requestData.items = allChoosesArr.reduce(function(item, next) {
                    obj[next.item_id + next.attr_ids] ? '' : obj[next.item_id + next.attr_ids] = true && item.push(next);
                    return item;
                }, []);
            },
            // 新增调拨单弹框---新增调拨
            editDialogSubmit(){
                let flag = false
                if (this.editDialog.requestData.items.length === 0) {
                    this.$message.error('请选择商品');
                    return;
                }
                for (const goods of this.editDialog.requestData.items) {
                    if (parseInt(goods.num) <= 0 || parseInt(goods.num) > parseInt(goods.kuchun)) {
                        this.$message.error(`【${goods.title}】的调拨数量有误！`);
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    return;
                }
                edit(this.editDialog.requestData).then(res => {
                    if (res.code === 200) {
                        this.editDialog.isShow = false;
                        this.getList();
                        this.$message.success('编辑调拨单成功');
                    }
                }).catch(err => {
                    console.log(err);
                })
            },


            // 调拨单确认入库
            allotConfirm(id){
                this.$confirm('调拨单确认入库, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    confirm({id}).then(res => {
                        if (res.code === 200) {
                            this.getList()
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消确认入库'
                    });
                });
            },
            // 调拨单发货
            allotSendGoods(id){
                this.$confirm('调拨单发货, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    sendGoods({id}).then(res => {
                        if (res.code === 200) {
                            this.getList()
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消确认入库'
                    });
                });
            },
            // 调拨单取消发货
            allotSendGoodsCancel(id){
                this.$confirm('调拨单取消发货, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    sendGoodsCancel({id}).then(res => {
                        if (res.code === 200) {
                            this.getList()
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消确认入库'
                    });
                });
            },
        },
        beforeMount() {
            this.getList();
        },
        components: {
            depot,
            choosesGoods,
        },
        watch: {
            "addDialog.requestData.warehouse_id_out": function(newValue, oldValue) {
                this.addDialog.requestData.items = []
            },
            "addDialog.isShow": function(newValue, oldValue) {
                if (!newValue) {
                    this.addDialog.requestData = {
                        warehouse_id_in: 0,   //调入仓库ID
                        warehouse_id_out: 0,  //调出仓库ID
                        remarks: "",   //备注
                        items: [],
                    }
                }
            }

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
