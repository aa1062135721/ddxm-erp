<template>
    <el-select
            :placeholder="placeholder"
            v-model="choosesValue"
            @change="change"
            clearable
            class="my-input">
            <!-- <div style="display:flex;padding:5px;text-align: center;">
                 <el-input style="width:120px" v-model="searchBrand" placeholder="请输入商品"></el-input>
                 <el-button @click="searchBtn" style="margin-left:5px">搜索</el-button>
            </div> -->
      
        <el-option
                v-for="(item, index) in list"
                :key="index"
                :value="item.id"
                :label="item.gs_title"
                >
        </el-option>
    </el-select>
</template>

<script>
    import {goodsSpecs} from '@/api/goods/goods_list';
    export default {
        name: 'index',
        props: {
            placeholder: {
                type: String,
                default: '请选择属性类别'
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
                let selectName=this.list.find(val=>val.id==this.choosesValue).gs_title
                let data={
                    title:selectName,
                    id:this.choosesValue
                }
                goodsSpecs({gs_pid:data.id}).then((res)=>{
                    this.$emit('input', {[data.title]: res.data.data});
                })
            },
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
            goodsSpecs().then((res)=>{
               console.log(res)
               if(res.code===200){
                   this.list=res.data.data
               }
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
