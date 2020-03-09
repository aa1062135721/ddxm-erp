<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div style="margin-bottom:20px;">
                <el-button type="primary" plain @click="openAdd">添加</el-button>
            </div>
            <div>
                <el-tree
                    :data="menu"
                    :props="defaultProps"
                    @node-click="handleNodeClick(menu)"
                    :show-checkbox="true"
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent"
                ></el-tree>
            </div>
        </div>

        <el-dialog
            v-dialogDrag
            :title="val == 1 ? '添加菜单' : '更改菜单'"
            center
            :visible.sync="addDepartmentDialog.visible"
            width="40%"
            @close="addClose"
        >
            <el-form
                :model="addDepartmentDialog.ruleForm"
                :rules="addDepartmentDialog.rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="父级ID" prop="a_pid">
                    <!-- <el-input clearable v-model="addDepartmentDialog.ruleForm.a_pid"></el-input> -->
                    <el-select v-model="addDepartmentDialog.ruleForm.a_pid" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.a_name"
                            :value="item.id"
                            size="medium"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称" prop="a_name">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.a_name"></el-input>
                </el-form-item>
                <el-form-item label="模块" prop="a_module">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.a_module"></el-input>
                </el-form-item>
                <el-form-item label="控制器" prop="a_controller">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.a_controller"></el-input>
                </el-form-item>
                <el-form-item label="操作方法" prop="a_action">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.a_action"></el-input>
                </el-form-item>
                <el-form-item label="层级" prop="a_level">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.a_level"></el-input>
                </el-form-item>
                <el-form-item label="文件请求地址" prop="a_component">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.a_component"></el-input>
                </el-form-item>
                <el-form-item label="页面请求路由" prop="a_page_url">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.a_page_url"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="type_id">
                    <el-input clearable v-model="addDepartmentDialog.ruleForm.type_id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" v-if="val == 1">立即创建</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')" v-else>立即更改</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
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
        var validateForm = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('新增不能为空'));
            } else {
                if (!/^[5A-Za-z0-9-\_]+$/.test(value)) {
                    callback(new Error('只能输入数字和英文下划线'));
                } else {
                    callback();
                }
            }
            callback();
        };
        return {
            val: 1,
            addDepartmentDialog: {
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
                    a_pid: [{ required: true, validator: validateForm, trigger: 'blur' }],
                    a_name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
                    a_module: [{ required: true, validator: validateForm, trigger: 'blur' }],
                    a_controller: [{ required: true, validator: validateForm, trigger: 'blur' }],
                    a_action: [{ required: true, validator: validateForm, trigger: 'blur' }],
                    a_level: [{ required: true, validator: validateForm, trigger: 'blur' }],
                    a_component: [{ required: true, message: '请输入路由地址', trigger: 'blur' }],
                    a_page_url: [{ required: true, message: '请输入路由地址', trigger: 'blur' }],
                    type_id: [{ required: true, validator: validateForm, trigger: 'blur' }]
                }
            },

            menu: [
                {
                    label: '一级 1',
                    children: [
                        {
                            label: '二级 1-1',
                            children: [
                                {
                                    label: '三级 1-1-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [
                                {
                                    label: '三级 2-1-1'
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'son',
                label: 'a_name'
            },
            options: [
                {
                    id: 0,
                    a_name: '设置顶级',
                    a_level: 1
                }
            ]
        };
    },
    created() {
        this.getMenu();
        this.getFathers();
    },
    inject: ['reload'], // 页面刷新
    methods: {
        getMenu() {
            listMenu().then(res => {
                console.log('列表', res);
                if (res.code == 200) {
                    this.menu = res.data;
                }
            });
        },

        getFathers() {
            addMenu().then(res => {
                console.log(res.data.parents);
                if (res.code == 200) {
                    res.data.parents.forEach(item => {
                        this.options.push(item);
                    });
                }
            });
        },

        openAdd() {
            this.val = 1;
            this.addDepartmentDialog.visible = true;
        },

        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (this.val == 1) {
                        addMenu(this.addDepartmentDialog.ruleForm).then(res => {
                            console.log('返回结果', res);
                            if (res.code == 200) {
                                this.addDepartmentDialog.visible = false;
                                this.reload();
                            }
                        });
                    } else {
                        editMenu(this.addDepartmentDialog.ruleForm).then(res => {
                            if (res.code == 200) {
                                this.addDepartmentDialog.visible = false;
                                this.reload();
                            }
                        });
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        renderContent(h, { node, data, store }) {
            return (
                <span class="custom-tree-node">
                    <span style="margin-right:10px;size:16px;">{node.label}</span>
                    <span>
                        <el-button size="mini" type="text" on-click={() => this.append(node, data)}>
                            编辑
                        </el-button>
                        <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>
                            删除
                        </el-button>
                    </span>
                </span>
            );
        },

        addClose() {
            this.addDepartmentDialog.ruleForm = {
                a_pid: '', // 父级id
                a_name: '', // 名称
                a_module: '', // 模块
                a_controller: '', // 控制器
                a_action: '', // 操作方法
                a_level: '', // 层级
                a_component: '', // 数据请求路由
                a_page_url: '', // 页面请求路由
                type_id: '' // 类型
            };
        },

        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        handleNodeClick(data) {
            console.log(data);
        },

        append(node, data) {
            console.log('编辑', node);
            let id = node.data.id;
            editMenu({
                id
            }).then(res => {
                if (res.code == 200) {
                    let obj = res.data.info[`${id}`];
                    this.addDepartmentDialog.ruleForm = obj;
                    this.val = 2;
                    this.addDepartmentDialog.visible = true;
                }
            });
        },

        remove(node, data) {
            console.log('删除', node);
            console.log('删2', data);
            let id = node.data.id;
            this.$confirm('此操作将删除其所有子节点, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    delMenu({
                        id
                    })
                        .then(res => {
                            if (res.code === 200) {
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                this.reload();
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            this.$message.error('操作失败');
                        });
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
