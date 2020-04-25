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
                :label="item.title"
                :value="item.code">
        </el-option>
    </el-select>
</template>

<script>
    import { logisticsCompany } from '@/api/index.js';

    export default {
        data() {
            return {
                choosesValue: '',
                list: []
            };
        },
        props: {
            placeholder: {
                type: String,
                default: '请选择物流公司'
            },
            value: null,
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
            logisticsCompany().then(res => {
                if (res.code === 200) {
                    this.list = res.data
                }
            }).catch(err => {
                console.log(err);
            })
        }
    };
</script>

<style scoped>

</style>
