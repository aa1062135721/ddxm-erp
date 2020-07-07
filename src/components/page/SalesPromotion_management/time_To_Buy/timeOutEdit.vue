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
                :cell-style="{'text-align':'center'}"
            >
                <el-table-column label="商品ID" width="120" prop="id" align="center"></el-table-column>
                <el-table-column label="商品名称" prop="title" align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.items[0].item_name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="规格名称" prop="items" width="200" align="center">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index"> 
                            <span v-if="item.specs_names">{{item.specs_names}}</span>
                            <span v-else>暂无</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="总库存" prop="items" align="center">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <span>{{item.stock}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="销售原价" prop="items" align="center">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <span>{{item.old_price}}</span>
                        </div>
                    </template>
                </el-table-column>
                 <el-table-column label="活动价格" prop="items"  width="110" align="center">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <el-input v-model="item.price" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                 <el-table-column label="限购数量"  align="center" prop="people_num"  width="110">
                    <template slot-scope="scope">
                       <div v-for="(item,index) in scope.row.items" :key="index">
                            <el-input v-model="item.residue_num" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                 <el-table-column label="虚拟销量" prop="items"  width="110" align="center">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                             <el-input v-model="item.virtually_num" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column width="130" label="操作" align="center">
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
          
                        placeholder="选择日期时间"
                        >
                        </el-date-picker>
                </template>
            </el-form-item>
             <el-form-item label="是否显示">
                <el-radio-group v-model="form.show">
                    <el-radio :label="1">显示</el-radio>
                    <el-radio :label="2">隐藏</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否免邮">
                <el-radio-group v-model="form.noMail">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
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
    import {flashEdit} from '@/api/salesPromotion/index'
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
                    show:'',
                    noMail:'',
                },
                id:null,//活动ID
            }
        },
        methods:{
            getSalesList(){
                let a = this.$route.query.value
                this.tableData.push(a) 
                this.form.start_time = this.endmatDate(a.end_time)
                this.form.end_time = this.formatDate(a.start_time)
                this.form.show = a.status
                this.form.noMail = a.postage_way
                console.log('111111',this.$route.query.value)
            },
            //开始时间
            formatDate(row, column) {
                let date = new Date(parseInt(row) * 1000);
                let Y = date.getFullYear() + '-';
                let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
                let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                return Y + M + D + h + m + s;
            },
            //结束时间
            endmatDate(row,column){
                let date = new Date(parseInt(row) * 1000);
                let Y = date.getFullYear() + '-';
                let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
                let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                return Y + M + D + h + m + s;
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
                            virtually_num: '' ,//虚拟销量
                            residue_num:'',//限购数量
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
                        temp.virtually_num = item.virtually_num,
                        temp.residue_num = parseInt(item.residue_num) 
                        arr.push(temp)
                    })
                })
                 let data={
                    id:this.id,
                    type: 1,
                    title:this.form.name,
                    people_num:this.form.buy,
                    start_time:this.getTimestamp(this.form.start_time) ,
                    end_time:this.getTimestamp(this.form.end_time) ,
                    items:arr,
                    postage_way:this.form.noMail,
                    status:this.form.show
                }
                console.log(data)
               flashEdit(data).then(res=>{
                  if(res.code==200){
                      this.$message({
                          message:res.msg,
                          type:'success'
                      })
                  }
               })      
            },
            //把时间日期转成时间戳
             getTimestamp(time) { 
                return (new Date(time)).getTime() / 1000
            }
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