<template>
    <el-cascader
            v-model="choosesValue"
            :placeholder="placeholder"
            :options="list"
            clearable
            @change="change"
            :props="{ checkStrictly: true, value: 'id', label: 'w_name', children: 'children' }">
    </el-cascader>
</template>

<script>
    import { listAll } from '@/api/depot/depot';

    export default {
        name: 'index',
        props: {
            placeholder: {
                type: String,
                default: '请选择仓库'
            },
            value: null,
        },
        data(){
            return {
                choosesValue: [],
                list: []
            }
        },
        methods: {
            change(){
                this.$emit('input', this.choosesValue[this.choosesValue.length - 1]);
            }
        },
        watch: {
            value: {
                immediate:true,
                handler:function(newVal){
                    if (newVal) {
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
                        _getParentNodes([], newVal, this.list);
                        this.choosesValue = [newVal, ...nodes].sort();
                    } else {
                        this.choosesValue = [];
                    }
                }
            },
        },
        beforeCreate() {
            listAll().then(res => {
                if (res.code === 200) {
                    this.list = res.data
                }
            }).catch(err => {
                console.log(err);
            })
        }
    };
</script>

<style scoped lang="scss">
.my-input{
    width: 200px;
    margin-right: 10px;
}
</style>
