<template>
    <el-select
            placeholder="选择供应商"
            v-model="choosesValue"
            @change="change"
            clearable
            class="my-input">
        <el-option
                v-for="(item, index) in list"
                :key="index"
                :label="item.name"
                :value="item.id">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                choosesValue: '',
                list: [
                    {id: 1, name: '美赞臣'},
                    {id: 2, name: '杜蕾斯'},
                    {id: 3, name: '杰士邦'},
                ]
            }
        },
        methods: {
            change(){
                this.$emit('change', this.choosesValue);
            }
        },
        beforeCreate() {

        }
    };
</script>

<style scoped lang="scss">
.my-input{
    width: 200px;
    margin-right: 10px;
}
</style>
