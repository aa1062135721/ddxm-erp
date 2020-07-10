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
                <el-table-column label="商品名称" prop="g_title" align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.items[0].item_name}}</span>
                    </template>
                </el-table-column>
                  <el-table-column label="规格名称" prop="items" width="200" align="center">
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.items" :key="index">
                            <span v-if="item.spece_names">{{item.specs_names}}</span>
                            <span v-else>无</span>
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
                 <el-table-column label="限购数量"  align="center" prop="people_num"  width="110">
                    <template slot-scope="scope">
                       <div v-for="(item,index) in scope.row.items" :key="index">
                            <el-input v-model="item.residue_num" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                 <el-table-column label="团员价格"  align="center"  width="110">
                     <template slot-scope="scope">
                       <div v-for="(item,index) in scope.row.items" :key="index">
                            <el-input v-model="item.price" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                 <el-table-column label="团长价格"  align="center" width="110">
                    <template slot-scope="scope">
                       <div v-for="(item,index) in scope.row.items" :key="index">
                            <el-input v-model="item.commander_price" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
                 <el-table-column label="初始数量"  align="center" prop="csNum"  width="110">
                   <template slot-scope="scope">
                       <div v-for="(item,index) in scope.row.items" :key="index">
                            <el-input v-model="item.virtually_num" type="number"></el-input>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="fromList">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标签">
                <el-input v-model="form.name" style="width:220px;"></el-input>
            </el-form-item>
            <el-form-item label="成团人员">
                <el-input v-model="form.number" style="width:220px;"></el-input>
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
            <el-form-item label="自动成团">
                <el-radio-group v-model="form.group">
                    <el-radio :label="1">自动</el-radio>
                    <el-radio :label="2">不自动</el-radio>
                </el-radio-group>
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
                <el-button style="background:#1ABC9C;color:#fff;" @click="onSubmit" >立即提交</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
    </div>
    
</template>

<script>
    import {CollageEdit} from '@/api/salesPromotion/index'
    export default {
        data(){
            return{
                tableData:[],
                goodsTable:[],
                form:{
                    name:'',
                    buy:'',
                    region:'',
                    start_time:'',
                    end_time:'',
                    number:'',
                    show:'',//是否显示
                    noMail:'',//是否免邮
                    group:'',//自动拼团
                },
                id:null,//活动ID
                flag:false,//控制蒙层
                item:[],//保存选中商品
               
            }
        },
        methods:{
             getSpellGroupList(){
                let a = this.$route.query.value
                this.tableData.push(a) 
                this.id = a.id
                this.form.name = a.title
                this.form.number = a.assemble_num
                this.form.buy = a.people_num
                this.form.group = a.auto
                this.form.show = a.status
                this.form.start_time = this.endmatDate(a.end_time)
                this.form.end_time = this.formatDate(a.start_time)
                this.form.noMail = a.postage_way
                console.log('aaa',a)
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
                this.tableData.forEach(v=>{
                    let temp={}
                    v.items.forEach(item => {
                        temp={
                            item_id:item.id,
                            item_name:item.item_name,
                            id:item.id,
                            specs_ids:item.specs_ids,
                            specs_names:item.specs_names,
                            old_price:item.old_price,
                            price:item.price,
                            commander_price:item.commander_price,
                            stock:item.stock,
                            virtually_num:item.virtually_num,
                        }
                        arr.push(temp)
                    });
                })
                 let data={
                       id:this.id,
                       title:this.form.name,
                       people_num:this.form.buy,
                       start_time:this.getTimestamp(this.form.start_time),
                       end_time:this.getTimestamp(this.form.end_time),
                       postage_way:this.form.noMail,
                       status:this.form.show,
                       assemble_num:this.form.number,
                       auto:this.form.group,
                       items:arr
                   }
                CollageEdit(data).then(res=>{
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
            },
        },
        created(){
            this.getSpellGroupList()
        }
    }
</script>

<style lang="scss" scoped>
    .editSales{
        position: relative;
        .fromList{
            margin-top: 20px;
        }
        .add{
            cursor: pointer;
        }
        .goodsList{
                width: 80%;
                position: absolute;
                top: 20%;
                left: 10%;
                z-index: 100;
            .main{
                height: 500px;
                overflow: hidden;
                overflow-y: scroll;
            }
           .btn{
             margin-top: 20px;
             text-align: right;
           }
        }
    }
   
</style>