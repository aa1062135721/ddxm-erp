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
                          :tree-props="{children: 'son', hasChildren: 'hasChildren'}"
                >
                    <el-table-column label="菜单列表">
                        <template slot-scope="scope">
                            {{scope.row.a_name}}
                        </template>
                    </el-table-column>
                    <el-table-column label="路由权限">
                        <template slot-scope="scope">
                            <template v-if="scope.row.type_id !== 1">
                                <el-checkbox :label="scope.row.id" @change="routerAuth(scope.row.id, $event)">选择</el-checkbox>
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column label="按钮权限">
                        <template slot-scope="scope">
                            <template v-if="scope.row.type_id === 1">
                                <el-checkbox :label="scope.row.id" @change="btnAuth(scope.row.id, $event)">选择</el-checkbox>
                            </template>
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
                }
                setAuth(requestData).then(res => {
                    if (res.code === 200) {
                        this.choosesValue = this.getChoosesValue(res.data, []);
                        this.responseData = res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            getChoosesValue(arr, ids = []){
                arr.map(one => {
                    if (one.son && one.son.length) {
                        this.getChoosesValue(one.son, ids);
                    }
                    if (one.is_set){
                        ids.push(one.id);
                    }
                });
                return ids;
            },
            saveAuth(){
                const requestData = {
                    ids: this.choosesValue.join(','),
                    admin_id: this.$route.query.admin_id_role_id,
                    role_id: this.$route.query.role_id,
                };
                if (this.choosesValue.length === 0){
                    this.$message.error('请选择权限或路由');
                    return;
                }
                setAuth(requestData).then(res => {
                    if (res.code === 200) {
                        this.$message.success('保存成功！');
                        this.getList();
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            // 按钮权限被选中
            btnAuth(choosesId, isSelect){
                console.log("被选中的id:",choosesId);
                let nodes = [];
                function _getParentNodes(his, targetId, tree) {
                    tree.some((list) => {
                        const children = list.son || [];
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
                if (isSelect) {
                    let arr = [...this.choosesValue, ... nodes];
                    this.choosesValue =  [...new Set(arr)];
                }
            },
            // 路由被选中
            routerAuth(choosesId, isSelect){
                console.log("被选中的id:",choosesId);
                let returnedItem; //定义一个不不赋值的变量
                let find = function(arr, id){
                    arr.forEach((item) => { //利用foreach循环遍历
                        if(item.id===choosesId)//判断递归结束条件
                        {
                            returnedItem = item;
                            return item;
                        }
                        else if(item.son && item.son.length) //判断chlidren是否有数据
                        {
                            find(item.son, id);  //递归调用
                        }
                    })
                };
                find(this.responseData, 7);
                console.log("吴黎明，",returnedItem);
                function getSon(arr, ids = []){
                    arr.map(one => {
                        if (one.son && one.son.length) {
                            getSon(one.son, ids);
                        }
                        ids.push(one.id);
                    });
                    return ids;
                };
                let son = getSon([returnedItem], []);
                console.log("吴黎明2：", son);
                if (!isSelect) {
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
                    if (val.query.admin_id){
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
