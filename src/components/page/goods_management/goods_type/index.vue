<template>
    <div class="goodsType">
        <div class="container">
            <div class="search-div">
                <div class="goodsBox">
                    <div class="mTitle">
                        <span style="color:#666">数据列表</span>
                        <div>
                            <el-button @click="cancel">刷新</el-button>
                            <el-button @click="add()" v-if="$_has('add')">添加</el-button>
                        </div>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border=""
                        tooltip-effect="dark"
                        style="width: 100%;"
                    >
                        <el-table-column label="编号" width="120" prop="id"></el-table-column>
                        <el-table-column label="类型名称" prop="gs_title" width="120"></el-table-column>
                        <el-table-column label="属性列表" prop="son_name"></el-table-column>
                        <el-table-column width="130" label="操作">
                            <template slot-scope="scope">
                                <el-button
                                    style="color:#1ABC9C"
                                    @click="editClick(scope.row)"
                                    v-if="$_has('edit')"
                                    type="text"
                                    size="small"
                                >编辑</el-button>
                                <el-button
                                    style="color:#1ABC9C"
                                    @click="open(scope.row)"
                                    v-if="$_has('del')"
                                    type="text"
                                    size="small"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="footer">
                        <div class="block">
                            <el-pagination
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                layout="total, prev, pager, next, jumper"
                                :total="total"
                            ></el-pagination>
                        </div>
                    </div>
                </div>
                <div class="edit" v-if="flag">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>添加类型</span>
                            <el-button
                                style="float: right; padding: 3px 0"
                                type="text"
                                @click="flag=false,cancel"
                            >X</el-button>
                        </div>
                        <div class="addedit">
                            <el-form v-model="form">
                                <el-form-item label="类型名称:" label-width="80px">
                                        <el-input style="width:260px" v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="类型说明:" label-width="80px">
                                    <el-input style="width:260px" type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>
                                    <el-form-item label="类型属性:" label-width="80px">
                                        <div v-for="(item,index) in form.typeName" :key="index" style="width:160px;margin:0;padding:0;margin-left:10px;">
                                            <el-input style="width:160px;margin-top:10px;" v-model="item.gs_title"></el-input>
                                        </div>
                                    </el-form-item>
                            </el-form>
                        </div>
                        <div style="text-align:right;margin-top:20px;">
                            <el-button @click="cancel">取消</el-button>
                            <el-button @click="sureEdit" style="background:#1ABC9C;color:#fff;">确定</el-button>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { resourceList, resourceDel } from '@/api/common/index';
import { goodsSpecs, editSpecs, delSpecs } from '@/api/goods/goods_list.js';
export default {
    created() {
        this.getgoods();
    },
    data() {
        return {
            currentPage: 1, //当前页
            total: 1,
            tableData: [],
            imgVal: '',
            flag: false,
            form: {
                desc: '',
                name: '',
                id: null,
                gs_pid: null,
                typeName:[],//保存编辑规格名
            },
           
        };
    },
    methods: {
        //添加商品
        add() {
            this.$router.push({
                path: '/addType'
            });
        },
        // 获取商品类型
        getgoods() {
            goodsSpecs().then(res => {
                this.tableData = res.data.data;
                this.total = res.data.count;
                this.tableData.forEach(v => {
                    v.son_name = '';
                    v.child.forEach(item => {
                        
                        v.son_name += item.gs_title + '  ';
                    });
                });
               
            });
        },
        //编辑类型
        editClick(val) {
            if (!this.flag) {
                this.flag = true;
            }
            console.log(val)
            this.form.name = val.gs_title;
            this.form.desc = val.gs_desc;
            this.form.id = val.id;
            this.form.gs_pid = val.gs_pid;
            this.form.typeName = val.child
        },
        // 确定编辑
        sureEdit() {
            let data = {
                gs_title: this.form.name,
                id: this.form.id,
                gs_desc: this.form.desc,
                gs_pid: this.form.gs_pid,
                child:this.form.typeName
            };
            editSpecs(data).then(res => {
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            });
        },
        //取消编辑
        cancel() {
            this.flag = false;
            this.getgoods();
        },
        // 上下页
        handleCurrentChange(val) {
            let data = {
                page: val
            };
            goodsSpecs(data).then(res => {
                this.tableData = res.data.data;
                this.tableData.forEach(v => {
                    v.son_name = '';
                    v.child.forEach(item => {
                        v.son_name += item.gs_title + '  ';
                    });
                });
            });
        },
        //删除
        deleteGoods(val) {
            let data = {
                ids: [val.id]
            };
            delSpecs(data).then(res => {
                this.$message({
                    meaasge: res.msg,
                    type: 'success'
                });
            });
            this.getgoods();
        },
        open(val) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.deleteGoods(val)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    }
};
</script>

<style scoped lang="scss">
.goodsType {
     font-family: '微软雅黑';
    .container {
        position: relative;
        box-sizing: border-box;
        .search-div {
            position: relative;
            .goodsBox {
                margin-top: 20px;
                .mTitle {
                    border: 1px solid rgb(224, 224, 224);
                    display: flex;
                    justify-content: space-between;
                    line-height: 32px;
                    background: rgb(230, 230, 230);
                    padding: 5px;
                    > span {
                        margin-left: 10px;
                    }
                    > div {
                        button {
                            border: 1px solid rgb(175, 175, 175);
                        }
                    }
                }
                .footer {
                    text-align: right;
                    padding: 10px;
                    padding-right: 40px;
                }
            }
            .edit {
                width: 400px;
                min-height: 100px;
                position: absolute;
                z-index: 100;
                top: 25%;
                left: 35%;
                .addedit {
                    text-align: center;
                }
            }
        }
    }
}
</style>
