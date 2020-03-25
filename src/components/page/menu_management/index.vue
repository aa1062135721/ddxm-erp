<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div style="margin-bottom:20px;">
                <el-button type="primary" plain @click="addDialogShow" v-if="$_has('add')">添加</el-button>
            </div>
            <div>
                <el-tree
                    :data="menu"
                    :props="defaultProps"
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent"
                ></el-tree>
            </div>
        </div>

        <el-dialog v-dialogDrag title="编辑" center :visible.sync="editDialog.visible" width="40%">
            <el-form :model="editDialog.ruleForm" :rules="editDialog.rules" ref="editDialog" label-width="150px" class="demo-ruleForm">
                <el-form-item label="名称" prop="a_name">
                    <el-input clearable v-model="editDialog.ruleForm.a_name"></el-input>
                </el-form-item>
                <el-form-item label="模块" prop="a_module">
                    <el-input clearable v-model="editDialog.ruleForm.a_module"></el-input>
                </el-form-item>
                <el-form-item label="控制器" prop="a_controller">
                    <el-input clearable v-model="editDialog.ruleForm.a_controller"></el-input>
                </el-form-item>
                <el-form-item label="操作方法" prop="a_action">
                    <el-input clearable v-model="editDialog.ruleForm.a_action"></el-input>
                </el-form-item>
                <el-form-item label="文件请求地址" prop="a_component">
                    <el-input clearable v-model="editDialog.ruleForm.a_component"></el-input>
                </el-form-item>
                <el-form-item label="页面请求路由" prop="a_page_url">
                    <el-input clearable v-model="editDialog.ruleForm.a_page_url"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="editDialogSubmitForm('editDialog')">编辑</el-button>
                    <el-button @click="resetForm('editDialog')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-dialog v-dialogDrag title="新增" center :visible.sync="addDialog.isShow" width="40%">
            <el-form :model="addDialog.requestData" :rules="addDialog.rules" ref="addDialog" label-width="150px">
                <el-form-item label="父级" prop="a_pid">
                    <el-cascader
                            v-model="addDialog.requestData.a_pid"
                            placeholder="未选择表示新增为顶级"
                            :options="menu"
                            :props="{ checkStrictly: true, value: 'id', label: 'a_name', children: 'children' }">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="类型" prop="type_id">
                    <el-select v-model="addDialog.requestData.type_id" @change="addDialogTypeChange" clearable placeholder="请选择" size="medium">
                        <el-option v-for="(item, index) in addDialog.responseData"
                                   :key="index"
                                   :label="item.h_title"
                                   :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称" prop="a_name">
                    <el-input clearable v-model="addDialog.requestData.a_name"></el-input>
                </el-form-item>
                <el-form-item label="模块" prop="a_module">
                    <el-input clearable v-model="addDialog.requestData.a_module"></el-input>
                </el-form-item>
                <el-form-item label="控制器" prop="a_controller">
                    <el-input clearable v-model="addDialog.requestData.a_controller"></el-input>
                </el-form-item>
                <el-form-item label="操作方法" prop="a_action">
                    <el-input clearable v-model="addDialog.requestData.a_action" disabled></el-input>
                </el-form-item>
                <el-form-item label="文件请求地址" prop="a_component">
                    <el-input clearable v-model="addDialog.requestData.a_component"></el-input>
                </el-form-item>
                <el-form-item label="页面请求路由" prop="a_page_url">
                    <el-input clearable v-model="addDialog.requestData.a_page_url"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addDialogSubmitForm('addDialog')">立即创建</el-button>
                    <el-button @click="resetForm('addDialog')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { addMenu, editMenu, listMenu, delMenu } from '../../../api/menu';

export default {
    name: 'index',
    data() {
        return {
            // 编辑对话框
            editDialog: {
                visible: false,
                ruleForm: {
                    a_pid: '', // 父级id
                    a_name: '', // 名称
                    a_module: '', // 模块
                    a_controller: '', // 控制器
                    a_action: '', // 操作方法
                    a_level: '', // 层级
                    a_component: '', // 文件请求路径
                    a_page_url: '', // 页面请求路由
                    type_id: '' // 类型
                },
                rules: {
                    a_name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
                    a_module: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
                    a_controller: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
                    a_action: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
                    a_component: [{ required: true, message: '请输入路由地址', trigger: 'blur' }],
                    a_page_url: [{ required: true, message: '请输入路由地址', trigger: 'blur' }],
                }
            },

            menu: [],
            defaultProps: {
                children: 'children',
                label: 'a_name'
            },

            // 新增菜单对话框
            addDialog: {
                isShow: false,
                responseData: [],// 新增栏目是菜单还是按钮
                requestData: {
                    a_pid: [], // 父级id
                    a_name: '', // 名称
                    a_module: '', // 模块
                    a_controller: '', // 控制器
                    a_action: '', // 操作方法
                    a_component: '', // 文件请求路径
                    a_page_url: '', // 页面请求路由
                    a_level: '',
                    type_id: '' // 类型
                },
                rules: {
                    a_name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
                    a_action: [{ required: true, message: '请输入选择类型', trigger: 'blur' }],
                    a_component: [{ required: true, message: '请输入组件地址', trigger: 'blur' }],
                    a_page_url: [{ required: true, message: '请输入路由地址', trigger: 'blur' }],
                    type_id: [{ required: true, message: '请选择类型', trigger: 'blur' }]
                }
            },
        };
    },
    created() {
        this.getMenu();
    },
    methods: {
        // 获取菜单
        getMenu() {
            listMenu().then(res => {
                if (res.code == 200) {
                    this.menu = res.data;
                }
            });
        },

        // 重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // 编辑对话框显示
        editDialogShow(node, data) {
            let id = node.data.id;
            editMenu({ id }).then(res => {
                if (res.code == 200) {
                    this.editDialog.ruleForm = res.data.info;;
                    this.editDialog.visible = true;
                }
            });
        },
        // 编辑对话框
        editDialogSubmitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    editMenu(this.editDialog.ruleForm).then(res => {
                        if (res.code == 200) {
                            this.editDialog.visible = false;
                            this.getMenu();
                        }
                    });
                } else {
                    return false;
                }
            });
        },

        // 渲染树形结构
        renderContent(h, { node, data, store }) {
            return (
                <span class = "custom-tree-node">
                    <span style="margin-right:10px;size:16px;">{node.label}</span>
                    <span>
                        {   this.$_has('edit') ? (<el-button size="mini" type="text" on-click={() => this.editDialogShow(node, data)}>编辑 </el-button>): null}
                        {   this.$_has('del') ? (<el-button size="mini" type="text" on-click={() => this.remove(node, data)} >删除 </el-button>) : null}
                        {
                            data.meta.button_array && data.meta.button_array.length ?
                            data.meta.button_array.map(tag => {
                                return (
                                    this.$_has('del') ? ( <el-tag style={{margin:'0 5px'}} type="danger" closable  on-close={() => this.removeBtn(tag)}>{tag.name}</el-tag>): null
                                )
                            }) : null
                        }
                    </span>
                </span>
            );
        },

        // 删除栏目
        remove(node, data) {
            let id = node.data.id;
            this.$confirm('此操作将删除其所有子节点, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delMenu({ id }).then(res => {
                    if (res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getMenu();
                    }
                }).catch(err => {
                    console.log(err);
                    this.$message.error('操作失败');
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        // 删除某个栏目下点按钮
        removeBtn(tag){
            this.$confirm('此操作将删除该栏目下的该按钮, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delMenu({ id: tag.id }).then(res => {
                    if (res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getMenu();
                    }
                }).catch(err => {
                    console.log(err);
                    this.$message.error('操作失败');
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },

        // 新增栏目对话框显示，并得到所有的按钮类型
        addDialogShow(){
            addMenu().then(res => {
                if (res.code == 200){
                    this.addDialog.responseData = res.data
                    this.addDialog.isShow = true;
                }
            }).catch(err => {
                console.log(err);
            })
        },
        // 新增栏目对话框，选择新增类型
        addDialogTypeChange(e){
            this.addDialog.responseData.map(item => {
                if (item.id == e) {
                    this.addDialog.requestData.a_action = item.h_tag;
                    if (item.h_tag.toLowerCase() != 'getlist') {
                        this.addDialog.requestData.a_name = item.h_title;
                    } else {
                        this.addDialog.requestData.a_name = '';
                    }
                }
            })
        },
        // 新增栏目 确定新增
        addDialogSubmitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (this.addDialog.requestData.a_pid.length){
                        this.addDialog.requestData.a_level = this.addDialog.requestData.a_pid.length;
                        this.addDialog.requestData.a_pid = this.addDialog.requestData.a_pid[this.addDialog.requestData.a_pid.length - 1];
                    } else {
                        this.addDialog.requestData.a_pid = 0;
                        this.addDialog.requestData.a_level = 0;
                    }
                    addMenu(this.addDialog.requestData).then(res => {
                        if (res.code == 200) {
                            this.getMenu();
                            this.resetForm(formName);
                            this.addDialog.requestData.a_pid = [];
                            this.addDialog.isShow = false;
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                } else {
                    return false;
                }
            });
        },
    }
};
</script>

<style scoped lang="scss">
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>
