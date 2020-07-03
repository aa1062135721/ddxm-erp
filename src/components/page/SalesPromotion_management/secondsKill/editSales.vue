<template>
    <div class="editSales">
        <div class="container">
        <div class="table">
              <el-table
                ref="multipleTable"
                :data="tableData"
                border=""
                tooltip-effect="dark"
                style="width: 100%;"
            >
                <el-table-column label="商品ID" width="120" prop="id"></el-table-column>
                <el-table-column label="商品名称" prop="title">
                    <template slot-scope="scope">
                        <span>{{scope.row.items[0].item_name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="规格名称" prop="items" width="200">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <span>{{item.specs_names}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="总库存" prop="items">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <span>{{item.stock}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="销售原价" prop="items">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <span>{{item.old_price}}</span>
                        </div>
                    </template>
                </el-table-column>
                 <el-table-column label="活动价格" prop="items">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <el-input v-model="item.price" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                 <!-- <el-table-column label="限购数量" prop="items">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <span>{{item.price}}</span>
                        </div>
                    </template>
                </el-table-column> -->
                 <el-table-column label="虚拟销量" prop="items">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                             <el-input v-model="item.virtually_num" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column width="130" label="操作">
                    <template slot-scope="scope">
                        <el-button
                            style="color:#1ABC9C"
                            @click="deleteGoods(scope.row)"
                            type="text"
                            size="small"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="fromList">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标签">
                <el-input v-model="form.name" style="width:220px;"></el-input>
            </el-form-item>
              <el-form-item label="每人限购">
                <el-input v-model="form.buy"  style="width:220px;"></el-input>
            </el-form-item>
            <el-form-item label="开始时间">
                <template>
                        <el-date-picker
                        v-model="form.start_time"
                        type="datetime"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="选择日期时间"
                        >
                        </el-date-picker>
                </template>
            </el-form-item>
            <el-form-item label="结束时间">
                <template>
                        <el-date-picker
                        v-model="form.end_time"
                        type="datetime"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="选择日期时间"
                        >
                        </el-date-picker>
                </template>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即提交</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
    </div>
    
</template>

<script>
    import {activityEdit} from '@/api/salesPromotion/index'
import { Stats } from 'fs';
    export default {
        data(){
            return{
                tableData:[],
                form:{
                    name:'',
                    buy:'',
                    region:'',
                    start_time:'',
                    end_time:'',
                },
                id:null,//活动ID
            }
        },
        methods:{
            getSalesList(){
               this.tableData.push(this.$route.query.value) 
               console.log(this.tableData)
            },
            onSubmit(){
                let arr=[]
                let postage=null
                let status=null
                this.tableData.forEach(v=>{
                    postage = v.postage_way
                    status = v.status
                    v.items.forEach(item=>{
                        let temp={ 
                            item_id: '',   //商品ID
                            item_name: '', //商品名称
                            id:'', //副表ID
                            specs_ids: '',    //规格ID组
                            specs_names: '',  //规格名称
                            old_price: '',  //原价
                            price: '',   //现价
                            commander_price: '',  //当type=3时，传入此参数，表示是团长价
                            stock: '',  //参与活动的库存，-1表示不限制
                            virtually_num: '' //虚拟销量
                        }
                        temp.item_id = item.item_id,
                        temp.item_name = item.item_name,
                        temp.id = item.id,
                        temp.specs_ids = item.specs_ids,
                        temp.specs_names = item.specs_names,
                        temp.old_price = item.old_price,
                        temp.price = item.price,
                        temp.commander_price = item.commander_price,
                        temp.stock = item.stock,
                        temp.virtually_num = item.virtually_num
                        arr.push(temp)
                    })
                })
                 let data={
                    id:this.id,
                    title:this.form.name,
                    people_num:this.form.buy,
                    start_time:this.form.start_time,
                    end_time:this.form.end_time,
                    items:arr,
                    postage_way:postage,
                    status:status
                }
                console.log(data)
               activityEdit(data).then(res=>{
                   console.log(res)
               })      
            },
        },
        created(){
            this.getSalesList()
        },
        mounted(){
            this.tableData.forEach(v=>{
                this.form.name = v.title
                this.form.buy = v.people_num
                this.id = v.id
            })
        }
    }
</script>

<style lang="scss" scoped>
    .fromList{
        margin-top: 20px;
    }
</style>