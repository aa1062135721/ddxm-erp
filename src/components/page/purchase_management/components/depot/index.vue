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
    import { list } from '@/api/depot/depot.js'

    export default {
        name: 'index',
        props: {
            placeholder: {
                type: String,
                default: '请选择仓库'
            }
        },
        data(){
            return {
                choosesValue: '',
                list: [
                    {id: 1, w_name: '界石仓库'},
                ]
            }
        },
        methods: {
            change(){
                this.$emit('change', this.choosesValue);
            }
        },
        beforeCreate() {
            list({page: 0}).then(res => {
                if (res.code === 200) {
                    this.list = res.data.data
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
