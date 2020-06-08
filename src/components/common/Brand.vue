<template>
    <el-select
            :placeholder="placeholder"
            v-model="choosesValue"
            @change="change"
            clearable
            class="my-input">
            <div style="display:flex;padding:5px;text-align: center;">
                 <el-input style="width:120px" v-model="searchBrand" placeholder="请输入商品"></el-input>
                 <el-button @click="searchBtn" style="margin-left:5px">搜索</el-button>
            </div>
      
        <el-option
                v-for="(item, index) in list"
                :key="index"
                :value="item.gb_title"
                >
        </el-option>
    </el-select>
</template>

<script>
    import { getBrand } from '@/api/common/index';
    export default {
        name: 'index',
        props: {
            placeholder: {
                type: String,
                default: '请选择品牌'
            },
            value: null,
        },
        data(){
            return {
                choosesValue: '',
                list: [],
                searchBrand:'',
            }
        },
        methods: {
            change(){
                this.$emit('input', this.choosesValue);
                // console.log(this.choosesValue)
            },
            // 搜索品牌
            searchBtn(){
               let data={
                   seach_val:this.searchBrand
               }
               getBrand(data).then(res=>{
                  this.list = res.data.data
               })
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
            getBrand().then(res => {
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
