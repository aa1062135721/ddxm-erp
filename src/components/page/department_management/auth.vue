<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>部门权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-checkbox-group v-model="choosesValue" @change="handleCheckedCitiesChange">
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
                                <el-checkbox :label="scope.row.id">选择</el-checkbox>
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column label="按钮权限">
                        <template slot-scope="scope">
                            <template v-if="scope.row.type_id === 1">
                                <el-checkbox :label="scope.row.id">选择</el-checkbox>
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
    import { setAuth, } from '../../../api/department';

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
            handleCheckedCitiesChange(value) {
                console.log(value)
            },
            getList(){
                setAuth({role_id: this.$route.query.role_id}).then(res => {
                    if (res.code === 200) {
                        this.choosesValue = this.getChoosesValue(res.data);
                        this.responseData = res.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            getChoosesValue(item){
                let arr = [];
                item.map(one => {
                    if (one.son && one.son.length) {
                        this.getChoosesValue(one.son);
                    }
                    if (one.is_set){
                        arr.push(one.id);
                    }
                });
                return arr;
            },
            saveAuth(){
                console.log(this.choosesValue);
                const requestData = {
                    ids: this.choosesValue.join(','),
                    role_id: this.$route.query.role_id,
                };
                if (this.choosesValue.length === 0){
                    this.$message.error('请选择权限或路由');
                    return;
                }
                setAuth(requestData).then(res => {
                    if (res.code === 200) {
                        this.getList();
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
        },
        watch: {
            $route: {
                handler: function(val, oldVal){
                    console.log(val);
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
