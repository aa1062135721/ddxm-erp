<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>员工权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-checkbox-group v-model="choosesValue">
                <el-table :data="responseData"
                          row-key="id"
                          style="width: 100%;"
                          border
                          default-expand-all
                          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                >
                    <el-table-column label="菜单列表">
                        <template slot-scope="scope">
                            {{scope.row.a_name}}
                        </template>
                    </el-table-column>
                    <el-table-column label="选择权限">
                        <template slot-scope="scope">
                            <el-checkbox :label="scope.row.id" @change="routerAuth(scope.row.id, $event)">选择</el-checkbox>
                        </template>
                    </el-table-column>
                </el-table>
            </el-checkbox-group>
            <div style="margin-top: 40px;">
                <el-button type="primary" @click="saveAuth()">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { setAuth, } from '../../../api/staff';

    export default {
        name: 'auth',
        data() {
            return {
                responseData: [],
                // 已经选择了的
                choosesValue: [],
            };
        },
        methods: {
            getList(){
                const requestData = {
                    role_id: this.$route.query.admin_id_role_id,
                    admin_id: this.$route.query.admin_id,
                    type: 0, // 查询
                };
                setAuth(requestData).then(res => {
                    if (res.code === 200) {
                        this.choosesValue = res.data.is_set;
                        this.responseData = res.data.router;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            saveAuth(){
                const requestData = {
                    ids: this.choosesValue.join(','),
                    role_id: this.$route.query.admin_id_role_id,
                    admin_id: this.$route.query.admin_id,
                    type: 1, // 编辑
                };
                setAuth(requestData).then(res => {
                    if (res.code === 200) {
                        this.$message.success('保存成功！');
                        this.getList();
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            // 权限被选中  或  取消选中
            routerAuth(choosesId, isSelect){
                if (isSelect) {
                    console.log("选中的id:",choosesId);
                    let nodes = [];
                    function _getParentNodes(his, targetId, tree) {
                        tree.some((list) => {
                            const children = list.children || [];
                            if (list.id === targetId) {
                                nodes = his;
                                return true;
                            } else if (children.length > 0) {
                                const history = [...his];
                                history.push(list.id);
                                return _getParentNodes(history, targetId, children);
                            }
                        })
                    };
                    _getParentNodes([], choosesId, this.responseData);
                    let arr = [...this.choosesValue, ... nodes];
                    this.choosesValue =  [...new Set(arr)];
                } else {
                    console.log("取消选中id:",choosesId);
                    let returnedItem; //定义一个不不赋值的变量
                    let find = function(arr, id){
                        arr.forEach((item) => {
                            if(item.id === id) {
                                returnedItem = item;
                                return item;
                            } else if(item.children && item.children.length) {
                                find(item.children, id);  //递归调用
                            }
                        })
                    };
                    find(this.responseData, choosesId);
                    console.log("取消选择本节点及其后面点所有节点：", returnedItem);
                    function getSon(arr, ids = []){
                        arr.map(one => {
                            if (one.children && one.children.length) {
                                getSon(one.children, ids);
                            }
                            ids.push(one.id);
                        });
                        return ids;
                    };
                    let son = getSon([returnedItem], []);
                    let diff = this.choosesValue.filter(function (val) { return son.indexOf(val) === -1 })
                    this.choosesValue =  [...new Set(diff)];
                }
            },
        },
        mounted() {
            this.getList();
        },
        watch: {
            $route: {
                handler: function(val, oldVal){
                    if (val.query.role_id){
                        this.getList();
                    }
                },
                // 深度观察监听
                deep: true
            }
        }
    };
</script>

<style scoped>

</style>
