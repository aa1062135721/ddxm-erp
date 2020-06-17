<template>
    <div>
        <div class="container">
            <div class="asider">
                <div class="box">
                    <p>商品属性</p>
                    <div class="kailong"></div>
                </div>
            </div>
            <div class="section">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="属性类型">
                    <ChooseProperty @input="input"></ChooseProperty>
                </el-form-item>
                <div class="specifications">
                    <p><span>*</span>商品规格</p>
                    <div>
                        <ul style="list-style:none">
                            <li v-for="(item,index) in PropertyList" :key="index">
                                <div v-for="(title,c) in item" :key="c">
                                    <span >{{c}}</span>
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox v-for="(v) in title" :key="v.id" :label="v">{{v.gs_title}}</el-checkbox>
                                    </el-checkbox-group>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style=" text-align: right">
                        <el-button @click="addSpecifications">增加</el-button>
                    </div>
                </div>
                 <div class="edit_box">
                    <el-table :data="ruleForm.list" border style="width: 100%">
                        <el-table-column label="规格ids">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.key"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="规格">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.key_name"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="原价">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.recommendprice"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="会员价">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.recommendprice"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="上传图片">
                            <template slot-scope="scope">
                                <el-upload
                                    v-if="!scope.row.imgurl"
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="5"
                                    :on-exceed="handleExceed">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                                <img :src="scope.row.imgurl" />
                            </template>
                        </el-table-column>
                        <el-table-column label="条形码">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.bar_code"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="商品库存">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.num"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" @click="deleteJob(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                </el-form>
                <template>
                    <div class="richText">
                    <div class="box1">
                        <p>商品属性</p>
                        <div class="rich_title"></div>
                    </div>
                    <el-card style="height: 400px;width:80%;">
                    <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
                    </quill-editor>
                    </el-card>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import ChooseProperty from '@/components/common/ChooseProperty'
import {goodsSpecs} from '@/api/goods/goods_list';
import {quillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { setTimeout } from 'timers';
import { log } from 'util';
export default {
    name: 'FuncFormsEdit',
    data(){
       return{
            ruleForm: {
                type: [],
                list: [
                     {
                        key:"1_3_5",   //规格ID组合，有规格则为ID的组合，用下划线连接，非必填
                        key_name:"红_大_高",  //规格的名称，非必填
                        recommendprice:"699.99", //原价，必填
                        price:"399.99",  //会员价，必填
                        imgurl:"该规格的展示图",  //商品规格的图片地址，不填则此规格的图片为商品主图，非必填
                        initial_sales:0, //虚拟销量，不填则为0，非必填
                        bar_code:"DB565653565"    //商品条形码，非必填
                    },
                    {
                        key:"1_3_6",   //规格ID组合，有规格则为ID的组合，用下划线连接，非必填
                        key_name:"",  //规格的名称，非必填
                        recommendprice:"699.99", //原价，必填
                        price:"399.99",  //会员价，必填
                        imgurl:"该规格的展示图",  //商品规格的图片地址，不填则此规格的图片为商品主图，非必填
                        initial_sales:0, //虚拟销量，不填则为0，非必填
                        bar_code:"DB565653565"    //商品条形码，非必填
                    },
                   
                ]
            },  
            rules: {
            type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
            },
            PropertyList:[],//存放属性规格
            // attribute:[],
            child:[],
            select_name:"规格",
            specifications:[],//存放商品列
            content: null,
            editorOption: {}
       }
   },
   components:{
       ChooseProperty,
       quillEditor
   },
   methods:{
        addSpecifications(){
            this.ruleForm.list = [];
            let arr = []
            for(const item  of this.PropertyList) {
                arr[Object.keys(item)[0]] = [];
                Object.values(item)[0].map(item2 => {
                    for(const itemType of this.ruleForm.type){
                        if(item2.id == itemType.id) {
                            arr[Object.keys(item)[0]].push(itemType)
                        }
                    }
                })
            }
            // console.log(this.attribute)
            console.log("arr", arr);
            
        
            // arr = [
            //     '颜色': [
            //         {id: 1, name: '红'},
            //         {id: 2, name: '绿'}
            //     ],
            //     '尺寸': [
            //         {id: 3, name: '大'},
            //         {id: 4, name: '小'}
            //     ],
            //     '高矮': [
            //         {id: 5, name: '高'},
            //         {id: 6, name: '矮'}
            //     ],
            //     '其他': []         // 过滤掉        // TODO 过滤 arr中的空    
            // ]
            // 红_大_高
            // 红_大_矮
            // 红_小_高
            // 红_小_矮
            // 绿_大_高
            // 绿_大_矮
            // 绿_小_高
            // 绿_小_矮
        
        // console.log("+++++++++++++", Object.keys(arr))
        // console.log("-------------", Object.values(arr))
        // for(const item  of Object.keys(arr)) {
        //     arr[item].forEach(item2 => {

        //     })
        // }
        //     for(const item  of arr) {
        //         console.log("+++++++++++++", item);
        //     }
            
         return
            this.PropertyList.forEach(i => {
                for (let g in i) {
                    let arr = [];
                    i[g].forEach(t => {
                        if (this.ruleForm.type.includes(t.gs_title)) {
                            arr.push(t.gs_title)
                        }
                    })
                    this.ruleForm.list.push({[g]:arr});
                }
            })
            console.log(this.ruleForm.list)
            // this.child.push(this.ruleForm.type)
        },
        input(val){
            console.log(val);
            let flag = true;
            for(const item  of  this.PropertyList){ 
                 console.log("每一项：",item);
                 if(item == val) {
                     flag = false;
                 }
            }
            if(flag)
                this.PropertyList.push(val);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
   },
};
</script>

<style lang="scss">
.container {
    display: flex;
    width: 80%;
    margin: auto;
    padding: 0;
    .asider {
        width: 200px;
        min-height: 400px;
        border-right: 1px solid #ccc;
        .box {
            position: relative;
            top: 50px;
            p {
                padding-left: 30px;
                box-sizing: border-box;
                text-align: left;
                line-height: 50px;
                width: 200px;
                height: 50px;
                background: rgb(161, 174, 194);
                color: #fff;
            }
            .kailong {
                position: absolute;
                top: 0;
                left: 200px;
                width: 0;
                height: 0;
                border-top: 25px solid transparent;
                border-left: 25px solid rgb(161, 174, 194);
                border-bottom: 25px solid transparent;
            }
        }
    }
    .section{
        margin-top: 50px;
        padding: 20px;
        margin: auto;
        .specifications{
            background-color: #F9FAFC;
            width: 90%;
            padding:10px 25px;
            box-sizing: border-box;
            border: 1px solid rgb(221, 221, 221);
            p{
                font-size: 16px;
                color: rgb(105, 105, 105);
                margin-bottom: 10px;
            }
        }
        .edit_box{
            margin-top: 20px;
            width: 90%;
           table{
                border-collapse: collapse;
                td{
                   width: 110px;
                   border: 1px solid #ccc;
                   text-align: center;
                   padding: 5px;
                   box-sizing: border-box;
                   color: rgb(70, 70, 70)
                }
                thead{
                   tr{
                       td{
                           background-color: #F9FAFC;
                           font-weight: bold;
                       }
                   }
               }
           }
           .el-upload--text{
               width: 80px;
               height: 35px;
           }
        }
    }
    .box1 {
            position: relative;
            top: 50px;
            left: -220px;
            p {
                padding-left: 30px;
                box-sizing: border-box;
                text-align: left;
                line-height: 50px;
                width: 200px;
                height: 50px;
                background: rgb(161, 174, 194);
                color: #fff;
            }
            .rich_title {
                position: absolute;
                top: 0;
                left: 200px;
                width: 0;
                height: 0;
                border-top: 25px solid transparent;
                border-left: 25px solid rgb(161, 174, 194);
                border-bottom: 25px solid transparent;
            }
        }
}
</style>