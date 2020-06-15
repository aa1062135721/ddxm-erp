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
                                        <el-checkbox v-for="(v,i) in title" :key="i" :label="v.gs_title"></el-checkbox>
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
                    <table>
                        <thead>
                            <tr >
                                <td  v-for="(item,index) in ruleForm.list" :key="index">
                                    <div  v-for="(type,id) in item" :key="id">{{id}}</div>
                                </td>
                                <td>商品原价</td>
                                <td><span style="color:red;">*</span>销售价格</td>
                                <td><span style="color:red;">*</span>上传图片</td>  
                                <td><span style="color:red;">*</span>商品库存</td>
                                <td><span style="color:red;">*</span>库存预警值</td>
                                <td>条形码</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td v-for="(item,index) in ruleForm.list" :key="index">
                                    <div v-for="(type,id) in item" :key="id">
                                        <tr v-for="(t,c) in type" :key="c">
                                            <td>
                                                {{t}}
                                            </td>
                                        </tr>
                                    </div>
                                </td>
                                 <td><el-input></el-input></td>
                                <td><el-input></el-input></td>
                                <td>
                                    <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="5"
                                    :on-exceed="handleExceed"
                                    >
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                </td>  
                                <td><el-input></el-input></td>
                                <td><el-input></el-input></td>
                                <td><el-input></el-input></td>
                                <td><span>删除</span></td>
                            </tr>
                        </tbody>
                    </table>
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
export default {
    name: 'FuncFormsEdit',
    data(){
       return{
            ruleForm: {
                type: [],
                list: []
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
            this.PropertyList.push(val );
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