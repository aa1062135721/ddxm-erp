<template>
    <div class="customerAll">
        <div class="container">
            <div class="search-div">
                <div class="SearchBar">
                    <div style="color:#666;">
                        <el-button
                            @click="add"
                            style="background:#1ABC9C;color:#fff;margin-right:10px;"
                        >添加客户</el-button>
                        <el-input
                            placeholder="请输入客户名称"
                            style="width: 220px; margin-right: 10px;"
                            v-model="searchName"
                        ></el-input>
                        <el-input
                            placeholder="请输入手机号码"
                            style="width: 220px; margin-right: 10px;"
                            v-model="searchNumber"
                        ></el-input>
                        <el-button style="background:#1ABC9C;color:#fff;" @click="searchGoods">搜索</el-button>
                    </div>
                </div>
                <div class="goodsBox">
                    <div class="mTitle">
                        <span style="color:#666;">数据列表</span>
                    </div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border=""
                        tooltip-effect="dark"
                        style="width: 100%;"
                    >
                        <el-table-column label="ID" width="120" prop="id"></el-table-column>
                        <el-table-column label="客户名称" width="120" prop="supplier_name"></el-table-column>
                        <el-table-column prop="contacts" label="联系人"></el-table-column>
                        <el-table-column prop="mobile" label="联系电话"></el-table-column>
                        <el-table-column prop="remarks" label="备注"></el-table-column>
                        <el-table-column label="操作" width="120">
                            <template slot-scope="scope">
                                <el-button
                                    @click="reduction(scope.row)"
                                    style="color:#1ABC9C"
                                    v-if="$_has('edit')"
                                    type="text"
                                    size="small"
                                >编辑</el-button>
                                <el-button
                                    @click="open(scope.row)"
                                    style="color:#1ABC9C"
                                    type="text"
                                    size="small"
                                    v-if="$_has('del')"
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
                                :page-size="10"
                                :total="total"
                            ></el-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div class="addCustomer" v-if="flag">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{text}}</span>
                        <el-button
                            style="float: right; padding: 3px 0"
                            type="text"
                            @click="flag=false"
                        >X</el-button>
                    </div>
                    <div class="edit">
                        <div class="title"><span>编辑仓库</span></div>
                        <el-form label-width="120px" :rules="rules" :model="form" ref="form">
                            <el-form-item label="客户名称:" prop="customerName">
                                <el-input
                                    style="width:220px"
                                    v-model="form.customerName"
                                    placeholder="请输入客户名称"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="联系人:" prop="contact">
                                <el-input
                                    style="width:220px"
                                    v-model="form.contact"
                                    placeholder="请输入联系人"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="联系人电话:" prop="contactNumber">
                                <el-input
                                    style="width:220px"
                                    v-model="form.contactNumber"
                                    placeholder="请输入电话号码"
                                    type="number"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="备注:" prop="note">
                                <el-input type="textarea" style="width:220px" v-model="form.note"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('form')" style="background:#1ABC9C;color:#fff;">立即创建</el-button>
                                <el-button @click="resetForm('form')">返回</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import { warehouse ,delWarehouse,addWarehouse,editWarehouse} from '@/api/statistics/customerAll';
export default {
    created() {
        this.getgoods();
        document.onkeydown = e => {
            var key = e.key;
            if (key === 'Enter') {
                this.searchAcitity();
            }
        };
    },
    data() {
        return {
            currentPage: 1, //当前页
            goods_name: '', //活动名称
            searchName: '', //客户名称
            searchNumber:'',//客户电话
            tableData: [], //商品列表
            total: 1, //商品总个数
            flag: false, //添加、编辑
            text:'',
            type:1,
            form: {
                id:null,
                customerName: '',
                contact: '',
                contactNumber: '',
                note: ''
            },
            rules: {
                customerName: [
                    { required: true, message: '请输入客户名称', trigger: 'blur' },
                    { min: 2, max: 100, message: '名称至少两个字', trigger: 'blur' }
                ],
                contact: [
                    { required: true, message: '请输入联系人', trigger: 'blur' },
                    { min: 2, max: 100, message: '名称至少两个字', trigger: 'blur' }
                ],
                contactNumber: [
                    { required: true, message: '请输入联系人电话号码', trigger: 'blur' },
                ]
            }
        };
    },
    methods: {
        //获取客户列表
        getgoods() {
            warehouse({ type: 2, limit: 10 }).then(res => {
                this.tableData = res.data.data; 
                this.total = res.data.count; 
                // console.log(res)
            });
        },
        // 上下页
        handleCurrentChange(val) {
            console.log(val);
            let data = {
                page: val,
                limit: 10,
                supplier_name: this.searchName,
                mobile: this.searchNumber
            };
            warehouse(data).then(res => {
                this.tableData = res.data.data;
            });
        },
        //编辑
        reduction(val) {
            this.flag = true;
            this.type = 2;
            this.text = '编辑客户'
            this.form.id = val.id
            this.form.customerName = val.supplier_name;
            this.form.contact = val.contacts;
            this.form.contactNumber = val.mobile;
            this.form.note = val.remarks
        },
        //添加
        add() {
            this.flag = true;
            this.type = 1;
            this.text ='添加规格';
            this.form.id = null;
            this.form.customerName = '';
            this.form.contact = '';
            this.form.contactNumber = '';
            this.form.note = '';
        },
        //提交新建客户
        submitForm(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    if(this.type == 1){
                        let data={
                        supplier_name:this.form.customerName,
                        contacts:this.form.contact,
                        mobile:this.form.contactNumber,
                        remarks:this.form.note
                        }
                        addWarehouse(data).then(res=>{
                            if(res.code==200){
                                this.$message({
                                    message:"添加成功",
                                    type:'success'
                                })
                                this.flag = false;
                                this.getgoods()
                                this.$refs[form].resetFields();
                            }
                        })
                    }else if(this.type == 2){
                        let data={
                        id:this.form.id,
                        supplier_name:this.form.customerName,
                        contacts:this.form.contact,
                        mobile:this.form.contactNumber,
                        remarks:this.form.note
                        }
                        editWarehouse(data).then(res=>{
                             if(res.code==200){
                                this.$message({
                                    message:"添加成功",
                                    type:'success'
                                })
                                this.flag = false;
                                this.getgoods()
                                this.$refs[form].resetFields();
                            }
                        })
                    }
                   
                } else {
                    console.log(456)
                    return false;
                }
            });
        },
        //返回
        resetForm(form) {
            this.$refs[form].resetFields();
            this.flag = false;
            this.rod = false;
        },
        //删除
        deleteKill(val) {
            delWarehouse({ id: val.id }).then(res => {
                if (res.code == 200) {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.getgoods();
                }
            });
        },
        //搜索商品
        searchGoods() {
            let data = {
                supplier_name: this.searchName,
                mobile:this.searchNumber
            };
            warehouse(data).then(res => {
                console.log(res);
                this.tableData = res.data.data;
                this.total = res.data.count; //获取总条数
            });
        },
        open(val) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                this.deleteKill(val);
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }
};
</script>

<style  lang="scss">
.customerAll {
    .container {
        width: 100%;
        box-sizing: border-box;
        .search-div {
            width: 100%;
            .SearchBar {
                border: 1px solid rgb(224, 224, 224);
                padding: 10px;
                display: flex;
                justify-content: left;
                line-height: 30px;
                > div {
                    margin-left: 5px;
                    display: flex;
                }
            }
            .goodsBox {
                border: 1px solid rgb(236, 236, 236);
                margin-top: 20px;
                .mTitle {
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(224, 224, 224);
                    line-height: 32px;
                    background: rgb(230, 230, 230);
                    padding: 5px;
                    > span {
                        margin-left: 10px;
                    }
                }
                .footer {
                    text-align: right;
                    margin-right: 20px;
                    padding: 10px;
                }
            }
        }
        .addCustomer {
            width: 600px;
            height: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .el-card__body {
                padding: 0;
                margin: 0;
            }
            .edit {
                .title {
                    font-size: 14px;
                    border-bottom: 1px solid rgba(233, 233, 233, 0.4);
                    padding: 14px;
                    margin-bottom: 14px;
                    span{
                        margin-left: 15px;
                    }
                }
            }
        }
    }
}
</style>
