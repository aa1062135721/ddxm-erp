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
                <el-table-column label="商品名称" prop="g_title" align="center"></el-table-column>
                 <el-table-column
                    prop="imgurl"
                    label="图片"
                    width="120"
                    align="center">
                    <template slot-scope="scope">
                        <el-avatar shape="square" :size="100"  :src="scope.row.imgurl"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column label="规格名称" prop="key_name" width="200" align="center"></el-table-column>
                <el-table-column label="总库存" prop="w_stock" align="center"></el-table-column>
                <el-table-column label="销售原价" prop="price" align="center"></el-table-column>
                 <el-table-column label="限购数量"  align="center" prop="xgNum"  width="110">
                    <template slot-scope="scope">
                        <el-input type="number" style="width:120px" v-model="scope.row.xgNum"></el-input>
                    </template>
                </el-table-column>
                 <el-table-column label="团员价格"  align="center"   width="110">
                    <template slot-scope="scope">
                        <el-input type="number" style="width:120px" v-model="scope.row.players"></el-input>
                    </template>
                </el-table-column>
                 <el-table-column label="团长价格"  align="center"   width="110">
                    <template slot-scope="scope">
                        <el-input type="number" style="width:120px" v-model="scope.row.captain"></el-input>
                    </template>
                </el-table-column>
                 <el-table-column label="初始数量"  align="center" prop="csNum"  width="110">
                   <template slot-scope="scope">
                        <el-input type="number" style="width:120px" v-model="scope.row.csNum"></el-input>
                    </template>
                </el-table-column>
                <el-table-column width="130" label="操作"  align="center">
                    <template slot-scope="scope">
                        <el-button
                            style="color:#1ABC9C"
                            @click="deleteGoods(scope.$index)"
                            type="text"
                            size="small"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="add" style="text-align:center;color:#1ABC9C;margin-top:10px;">
                <p @click="addGoods">点击此处添加商品</p>
            </div>
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
        <div class="goodsList" v-if="flag">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>选择商品</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="flag=false">X</el-button>
                </div>
                <div class="main">
                    <div class="title" style="margin-bottom:20px;">
                        <el-input style="width:200px" placeholder="商品名称" v-model="goodsVal"></el-input>
                        <el-button style="background:#1ABC9C;color:#fff;margin-left:10px;" @click="searchGoods">搜索</el-button>
                    </div>
                    <div class="goodsTable">
                         <el-table
                            ref="multipleTable"
                            :data="goodsTable"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="selectionChange"
                           >
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            label="商品名称"
                            prop="g_title"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="图片"
                            width="120">
                            <template slot-scope="scope">
                                <el-avatar shape="square" :size="100"  :src="scope.row.imgurl"></el-avatar>
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="key_name"
                            label="规格"
                            >
                            </el-table-column>
                             <el-table-column
                            prop="price"
                            label="销售金额"
                            show-overflow-tooltip>
                            </el-table-column>
                             <el-table-column
                            prop="w_stock"
                            label="总库存"
                            show-overflow-tooltip>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="block">
                          <el-pagination
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                layout="total, prev, pager, next, jumper"
                                :total="total"
                            ></el-pagination>
                    </div>
                </div>
                <div class="btn">
                    <el-button style="background:#1ABC9C;color:#fff" @click="sure">确定</el-button>
                    <el-button @click="flag = false">取消</el-button>
                </div>
            </el-card>
        </div>
    </div>
    </div>
    
</template>

<script>
    import {CollageAdd,goodsList} from '@/api/salesPromotion/index'
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
                total:1,//总条数
                currentPage: 1, //当前页
                goodsVal:'',//搜索商品名称
                flag:false,//控制蒙层
                item:[],//保存选中商品
               
            }
        },
        methods:{
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
                let data={}
                this.tableData.forEach(v=>{
                let temp={}
                 temp={
                       item_id:v.id,
                       item_name:v.g_title,
                       specs:[{
                           specs_ids:'',
                           specs_names:'',
                           old_price:v.price,
                           price:v.players,
                           commander_price:v.captain,
                           stock:v.xgNum,
                           virtually_num:v.csNum
                       }]
                   }
                   data={
                       title:this.form.name,
                       people_num:this.form.buy,
                       type:3,
                       start_time:this.getTimestamp(this.form.start_time),
                       end_time:this.getTimestamp(this.form.end_time),
                       postage_way:this.form.noMail,
                       status:this.form.show,
                       assemble_num:this.form.number,
                       auto:this.form.group,
                       items:[temp]
                   }
                })
                console.log(data)
                CollageAdd(data).then(res=>{
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
            //添加商品
            addGoods(){
                this.flag = true
            },
            //获取商品列表
            getGoodsList(){
                goodsList().then(res=>{
                    if(res.code==200){
                        res.data.data.forEach(m => {
                            m.xgNum = 0,
                            m.csNum = 0,
                            m.players = '0:00'
                            m.captain = '0:00'
                        });
                    }
                    this.goodsTable = res.data.data
                    this.total = res.data.total
                    console.log(res)
                })
            },
            // 上下页
            handleCurrentChange(val) {
                goodsList({page:val,search_val:this.goodsVal}).then(res => {
                    this.goodsTable = res.data.data;
                    console.log(res);
                });
            },
            //搜索商品名称
            searchGoods(){
               goodsList({search_val:this.goodsVal}).then(res=>{
                   this.goodsTable = res.data.data
                   this.total = res.data.total
               })
            },
            //删除行
            deleteGoods(index){
                this.tableData.splice(index,1)
            },
            //监听选中行
            selectionChange(val){
                this.item  = val
            },
            //确认添加
            sure(){
                let arr=[]
                this.item.forEach(v=>{
                    arr.push(v)
                })
              this.tableData = arr
            }
        },
        created(){
            this.getGoodsList()
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