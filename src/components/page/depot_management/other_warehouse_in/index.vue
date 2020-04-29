<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>其他入库单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input v-model="requestData.seach_val" placeholder="商品名/条形码/单号" class="my-input"></el-input>
                <depot v-model="requestData.shop_id"></depot>
                <supplier v-model="requestData.sup_id"></supplier>
                <el-select placeholder="状态" v-model="requestData.status" clearable class="my-input">
                    <el-option label="正常" value="1"></el-option>
                    <el-option label="已取消" value="2"></el-option>
                </el-select>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" plain @click="addDialog.isShow = true">新增</el-button>
                <el-button type="primary" plain @click="myExport" v-if="$_has('export')">导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table style="width: 100%" :data="responseData.data" border>
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column label="出库信息" width="200">
                        <template slot-scope="scope">
                            <p>订单号：{{ scope.row.sn }}</p>
                            <p>供应商：{{ scope.row.sup_name }}</p>
                            <p>入库人：{{ scope.row.user_name }}</p>
                            <p>入库仓库：{{ scope.row.w_name }}</p>
                            <p>入库时间：{{ scope.row.create_time }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名" width="200">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.items" :key="index">{{ item.title }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="条形码" width="150">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.items" :key="index">{{ item.bar_code }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="规格">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.items" :key="index">{{ item.attr_name }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="入库量">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.items" :key="index">{{ item.num }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="入库单价">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.items" :key="index">{{ item.price }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="合计金额">
                        <template slot-scope="scope">
                            <p v-for="(item, index) in scope.row.items" :key="index">{{ item.num * item.price }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remarks" label="备注"></el-table-column>
                    <el-table-column prop="status_name" label="状态"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" v-if="scope.row.status === 1" @click="myCancel(scope.row.id)">取消入库</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="responseData.count">
                </el-pagination>
            </div>
        </div>

        <el-dialog v-dialogDrag title="新增其他入库单" center :visible.sync="addDialog.isShow" width="50%">
            <div  class="search-div">
                <depot v-model="addDialog.requestData.shop_id"></depot>
                <supplier ref="supplier" v-model="addDialog.requestData.sup_id"></supplier>
                <el-input v-model="addDialog.requestData.remarks" placeholder="请输入备注" class="my-input"></el-input>
                <el-button type="primary" style="margin: 0 0 10px 10px;" plain v-show="addDialog.isShow" @click="addDialog.choosesGoodsDialogIsShow = true">选择商品</el-button>
            </div>
            <el-table style="width: 100%" height="300" :data="addDialog.requestData.items">
                <el-table-column label="序号" type="index"></el-table-column>
                <el-table-column prop="bar_code" label="条形码"></el-table-column>
                <el-table-column prop="title" label="商品名称"></el-table-column>
                <el-table-column label="图片">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.pic" :preview-src-list="[scope.row.pic]"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="attr_name" label="规格"></el-table-column>
                <el-table-column prop="kuchun" label="库存"></el-table-column>
                <el-table-column label="入库单价">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.price"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="入库数量">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.num"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="合计金额">
                    <template slot-scope="scope">
                        {{ scope.row.num * scope.row.price || 0}}
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
    import { list, add, cancel, exportFile} from '@/api/depot/otherWarehouseIn.js';
    import depot from '@/components/common/Depot.vue';
    import supplier from '@/components/common/Supplier.vue';
    import choosesGoods from '@/components/common/ChoosesGoods.vue';
    import { downloadFile } from '@/utils/index.js';

    export default {
        name: 'index',
        data() {
            return {
                responseData:{
                    count: 0,
                    data: [],
                },
                requestData: {
                    page: 1,
                    limit: 10,
                    search_val: '',
                    shop_id: '',// 仓库id
                    sup_id: '',// 供应商id
                    status: '', //状态：0已取消、1已入库（查询时传）
                },

                addDialog: {
                    isShow: false,
                    responseData: [], // 客户资料
                    requestData: {
                        sup_id: '',    //供应商ID
                        sup_name: "",   //供应商名称
                        shop_id: '',   //仓库ID
                        remarks:"",// 备注
                        items: [
                            // {
                            //     "item_id": 2304,    //商品ID
                            //     "title": "红蜻蜓  香菜油5L/桶 非转基因物理压榨食用油居家大桶装",    //商品名称
                            //     "pic": "989be201910311057067525.jpg",   //图片
                            //     "attr_ids":"",  //规格组ID
                            //     "attr_name": "",    //规格名称
                            //     "bar_code": "6902681252508",    //条形码
                            //     "price": "601", //单价
                            //     "num": 1,   //数量
                            // },
                        ]
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
            // 分页
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
            // 导出
            myExport(){
                exportFile().then(res => {
                    downloadFile(res, '其他入库单.xlsx');
                })
            },
            // 取消其他入库
            myCancel(id){
                this.$confirm('你正在取消其他入库操作, 是否继续?', '提示', {
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


            // 新增弹框 得到选择的商品
            addDialogGetChoosesGoods(data){
                let nowChoosesArr = [], allChoosesArr = [];
                for (const item of data) {
                    nowChoosesArr.push({
                        item_id: item.id,//商品ID
                        title: item.g_title, //商品名称
                        pic: item.imgurl,//图片（可以为空）
                        attr_ids: item.key || 0,//规格（无规格默认为0）
                        attr_name: item.key_name,//规格名称
                        bar_code: item.code,//商品条形码
                        kuchun: item.w_stock,// 商品库存
                        price: item.price || 0,//入库单价 ----- 需要输入
                        num: "",//入库数量 ----- 需要输入
                    })
                }
                allChoosesArr = [...this.addDialog.requestData.items, ...nowChoosesArr];
                // 去重
                let obj = {};
                this.addDialog.requestData.items = allChoosesArr.reduce(function(item, next) {
                    obj[next.item_id + next.attr_ids] ? '' : obj[next.item_id + next.attr_ids] = true && item.push(next);
                    return item;
                }, []);
            },
            // 新增弹框 删除已选择的商品
            addDialogDelGoods(index){
                this.addDialog.requestData.items.splice(index, 1);
            },
            // 新增弹框, 确定新增
            addDialogSubmit(){
                if (!this.addDialog.requestData.sup_id) {
                    this.$message.error('请选择供应商');
                    return;
                }
                if (!this.addDialog.requestData.shop_id) {
                    this.$message.error('请选择仓库');
                    return;
                }
                this.$refs.supplier.list.forEach(item => {
                   if (this.addDialog.requestData.sup_id == item.id) {
                       this.addDialog.requestData.sup_name = item.s_name;
                   }
                });
                if (this.addDialog.requestData.items.length === 0) {
                    this.$message.error('请至少选择一个商品');
                    return;
                }
                let flag = true;
                for (const item of this.addDialog.requestData.items) {
                    if (!item.price) {
                        flag = false;
                        this.$message.error(`【${item.title}】的入库单价有误`);
                        break
                    }
                    if (!item.num) {
                        flag = false;
                        this.$message.error(`【${item.title}】的入库数量有误`);
                        break
                    }
                }
                if (flag) {
                    add(this.addDialog.requestData).then(res => {
                        if (res.code === 200) {
                            this.getList();
                            this.addDialog.isShow = false;
                            this.addDialog.requestData = {
                                sup_id: '',    //供应商ID
                                sup_name: "",   //供应商名称
                                shop_id: '',   //仓库ID
                                remarks:"",// 备注
                                items: []
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
        },
        components: {
            depot,
            supplier,
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
