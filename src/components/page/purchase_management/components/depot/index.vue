<template>
    <el-select
            :placeholder="placeholder"
            v-model="choosesValue"
            @change="change"
            clearable
            class="my-input">
        <el-option
                v-for="(item, index) in list"
                :key="index"
                :label="item.w_name"
                :value="item.id">
        </el-option>
    </el-select>
</template>

<script>
    import { listAll } from '../../../../../api/depot/depot';

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
                choosesValue: '',
                list: []
            }
        },
        methods: {
            change(){
                this.$emit('input', this.choosesValue);
            }
        },
        watch: {
            value: {
                immediate:true,
                handler:function(newVal){
                    this.choosesValue = newVal;
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
