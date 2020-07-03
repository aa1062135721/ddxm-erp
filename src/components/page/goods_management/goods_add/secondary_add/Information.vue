<template>
    <div class="information">
        <div class="container">
            <div class="asider">
                <div class="box">
                    <p>基本信息</p>
                    <div class="kailong"></div>
                </div>
            </div>
            <div class="section">
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="商品分类" prop="name">
                        <div class="title_text">
                            <span >{{first.gc_name}}</span>
                            <span v-if="second.gc_name">></span>
                            <span>{{second.gc_name}}</span>
                            <span v-if="third.gc_name">></span>
                            <span>{{third.gc_name}}</span>
                            <span
                                @click="addClass"
                                style="margin-left: 20px; color:#47C9AF; cursor: pointer;"
                            >添加扩展分类</span>
                        </div>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="region">
                        <el-input style="width:40%" v-model="ruleForm.region"></el-input>
                    </el-form-item>
                    <el-form-item label="副标题" prop="subtitle">
                        <el-input style="width:40%" v-model="ruleForm.subtitle"></el-input>
                    </el-form-item>
                    <el-form-item label="商品品牌" >
                        <recyclingBrand @input='input'></recyclingBrand>
                    </el-form-item>
                     <el-form-item label="供应商">
                        <Supplier @input='input1'></Supplier>
                    </el-form-item>
                    <el-form-item label="选择分区">
                        <template>
                            <el-select v-model="ruleForm.typeId" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.gt_title"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                    <el-form-item label="商品库" >
                        <el-radio v-model="ruleForm.radio" label="1">线上商城</el-radio>
                        <el-radio v-model="ruleForm.radio" label="2">门店商城</el-radio>
                        <el-radio v-model="ruleForm.radio" label="3">线上线下</el-radio>
                    </el-form-item>
                     <el-form-item label="商品分销"  >
                        <el-radio-group v-model="ruleForm.ratio" @change="changeratio">
                            <el-radio :label="1">不参与分销</el-radio>
                            <el-radio :label="2">商品自身ratio的比例</el-radio>
                            <el-radio :label="3">按照品牌或者分类的比例</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="分销佣金" v-if="rod">
                         <div class="radio">
                            <p>1级分销</p>
                            <el-input v-model="ruleForm.g_dis_price.gd_one" style="width:200px"></el-input>
                            <p>2级分销</p>
                            <el-input v-model="ruleForm.g_dis_price.gd_two" style="width:200px"></el-input>
                            <p>3级分销</p>
                            <el-input v-model="ruleForm.g_dis_price.gd_three" style="width:200px"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="是否显示">
                         <template>
                                <el-switch
                                    v-model="ruleForm.is_show"
                                    :active-value="1"
                                    :inactive-value="0"
                                    active-color="#1ABC9C"
                                    inactive-color="#ff4949"
                                   >
                                </el-switch>
                            </template>
                    </el-form-item>
                    <el-form-item label="商品介绍" prop="desc">
                        <el-input style="width:40%" type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="extension" v-if="flag">
            <div>
                <el-card class="box-card">
                    <div
                        style=" display: flex;justify-content:space-between"
                        slot="header"
                        class="clearfix"
                    >
                        <span>添加扩展分类</span>
                        <span @click="flag=false">X</span>
                    </div>
                    <div class="tochoose" style="font-size:14px; color:red;margin-bottom:40px;">
                        <span>{{one}}</span>
                        <span v-if="two">></span>
                        <span>{{two}}</span>
                        <span v-if="three">></span>
                        <span>{{three}}</span>
                    </div>
                    <div class="showTitle" style="border:1px solid #ccc;min-height:40px;">
                        <span class="item" v-for="(item,index) in addList" :key="index">
                            <span>{{ item.gc_name }}</span>
                        </span>
                    </div>
                    <div class="allList">
                        <div class="brandList">
                            <div class="left_class">
                                <ul>
                                    <p>选择一级分类</p>
                                    <li
                                        @click="firstClass(item)"
                                        v-for="(item,index) in tableData"
                                        :key="index"
                                    >
                                        <span>{{item.gc_name}}</span>
                                        <span>></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="middle_class">
                                <ul>
                                    <p>选择二级分类</p>
                                    <li
                                        @click="twoClass(item)"
                                        v-for="(item,index) in secondClass"
                                        :key="index"
                                    >{{item.gc_name}}</li>
                                </ul>
                            </div>
                            <div class="right_class">
                                <ul>
                                    <p>选择三级分类</p>
                                    <li
                                        @click="threeClass(item)"
                                        v-for="(item,index) in thirdClass"
                                        :key="index"
                                        v-if="item.gc_name"
                                    >{{item.gc_name}}</li>
                                    <p v-else>暂无分类</p>
                                </ul>
                            </div>
                        </div>
                        <div class="btn">
                              <el-button :disabled="addState" @click="addGoodsClass">添加</el-button>
                        </div>
                    </div>
                    <div class="cardFoot">
                        <el-button @click="flag=false">取消</el-button>
                        <el-button @click="flag=false">确定</el-button>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import { getGoodsList, findGoodsList,goodsTypeList } from '@/api/goods/goods_list';
import {findChilds} from '@/api/common/index'
import  recyclingBrand from '@/components/common/recyclingBrand';
import  Supplier from '@/components/common/Supplier';

export default {
    data() {
        return {
            first: '',
            second: '',
            third: '',
            flag: false,
            rod:false,
            addState: true,
            addObj: {},
            addList: [],
            addExtensions:[],
            one:'',//保存当前一级分类
            two:'',//保存当前二级分类
            three:'',//保存当前三级分类
            goods_id: 35, //保存获取到的一级菜单id
            tableData: [], //保存一级菜单列表
            secondClass: [], //保存二级菜单列表
            thirdClass: [], //保存三级菜单列表
            goodsTitle: {},//保存vuex中选择的商品分类
            brandId:null,//保存商品id
            supplierId:null,//保存供应商id
            addGoodsId:[],//保存添加id
            options:[],//分区数据
            id:null,//保存编辑商品的ID
            ruleForm: {
                region: '',
                subtitle: '',
                desc: '',
                is_show:0,
                radio:0,
                ratio:0,
                g_dis_price:{},
                typeId:null,//分区ID
            },
            rules: {
                name: [{ required: true }],
                region: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                subtitle: [
                    { required: true, message: '请输入副标题', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                ],
                desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
            }
        };
    },
    methods: {
        //获取一级菜单列表
        show() {
            let data = {
                limit: this.limit
            };
            getGoodsList(data).then(res => {
                // console.log(res);
                this.tableData = res.data.data;
            });
        },
        //获取一级菜单，请求二级菜单
        firstClass(val) {
            let data = {
                pid: val.id
            };
            findChilds(data).then(res => {
                let arr= []
                if(res.data){
                    this.addState = res.data.length > 0
                    this.addObj = val
                    res.data.forEach(v => {
                        arr.push(v)
                    });
                }
                this.secondClass = arr
            });
            this.one = val.gc_name
            this.two =''
            this.three=''
            this.thirdClass=[]
        },
        //获取二级菜单id，请求三级菜单
        twoClass(val) {
            this.addState = !(!val.children || val.children.length === 0);
            this.addObj = val

            // console.log(val)
            let arr=[]
            if(val.children){
                val.children.forEach(v=>{
                    arr.push(v)
                })
            }
            this.thirdClass = arr
            this.two = val.gc_name
            this.three =''
        },
        //点击获取三级菜单下的选项
        threeClass(val){
            this.addState = false
            this.addObj = val
            this.three = val.gc_name
        },
        // 请求扩展分类
        addClass(){
            this.flag=true;
        },
        //扩展商品分类
        addGoodsClass(){
            console.log(this.addObj, 'addObj')
            let ids = []
            let arr=[]
            this.addList.forEach(item => {
                ids.push(item.id)
            })
            if (ids.indexOf(this.addObj.id) > -1) {
                return
            }
            this.addList.push(this.addObj)
            this.addList.forEach(v=>{
                arr.push(v.id)
            })
           this.addGoodsId = arr
        },
        //获取品牌ID
        input(val){
            this.brandId = val
        },
        //获取供应商ID
        input1(val){
            this.supplierId = val
        },
        // 监听分销选项
        changeratio(val){
            if(val===3){
                this.rod = true
            }else[
                this.rod = false,
                this.ruleForm.g_dis_price = {}
            ]
        },
        // 获取分区数据
        getratio(){
            goodsTypeList().then(res=>{
                this.options = res.data.data
            })
        },
        //提交商品
        submit(){
            let temp=[this.ruleForm.g_dis_price]
            let data={
                id:this.id,
                g_title:this.ruleForm.region,
                g_subtitle:this.ruleForm.subtitle,
                brand_id:this.brandId,
                supplier_id:this.supplierId,
                g_content:this.ruleForm.desc,
                g_class:this.addGoodsId,
                is_show:this.ruleForm.is_show,
                g_type:this.ruleForm.radio,
                g_ratio:this.ruleForm.ratio,
                g_dis_price:temp,
                type_id:this.ruleForm.typeId
            }
            sessionStorage.setItem('data',JSON.stringify(data))
            console.log(data)
        }
    },
    created() {
        this.goodsTitle =JSON.parse(sessionStorage.getItem("classification")) 
        this.show();
        this.getratio()
        // console.log('1111111',this.editGoods)
        let a =JSON.parse(sessionStorage.getItem('editGoods')) 
        if(a){
            this.ruleForm.region = a.g_title,
            this.ruleForm.is_show = a.is_show
            this.id = a.id
        }
    },
    mounted() {
        // console.log(this.goodsTitle)
        if(this.goodsTitle){
            this.first = this.goodsTitle.first;
            this.second = this.goodsTitle.second;
            this.third = this.goodsTitle.third;
        }
    },
    components:{
        recyclingBrand,
        Supplier,
    }
};
</script>

<style lang="scss" scoped>
.information {
     font-family: '微软雅黑';
    position: relative;
    .container {
        display: flex;
        width: 75%;
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
        .section {
            flex-grow: 1;
            padding: 60px 100px;
            .el-form-item {
                .el-input__inner {
                    width: 100px;
                }
            }
            .title_text {
                span {
                    font-size: 12px;
                    color: rgb(98, 98, 98);
                }
            }
        }
    }
    .extension {
        width: 700px;
        min-height: 700px;
        position: absolute;
        top: 10%;
        left: 30%;
        z-index: 10;
        box-shadow: 2px 0px 10px rgb(78, 78, 78);
        .box-card {
            .showTitle {
                border-bottom: 1px solid #ccc;
                padding-bottom: 20px;
                .item {
                    border: 1px solid #47c9af;
                    padding: 2px;
                    display: inline-block;
                    margin-right: 10px;
                    span {
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .allList{
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
        >.btn{
            margin-top: 20px;
            text-align: right;
            padding-right: 40px;
            button{
                width: 100px;
                height: 40px;
            }
        }
    }
    .brandList {
        display: flex;
        justify-content: space-around;
        .left_class {
            margin-top: 20px;
            ul {
                width: 200px;
                background: rgb(221, 224, 235);
                list-style: none;
                font-size: 14px;
                border-bottom: 1px solid #ccc;
                height: 400px;
                overflow-y: scroll;
                p {
                    padding: 10px 30px;
                    background-color: #f9fafc;
                    border: 1px solid rgb(230, 230, 230);
                    color: #aaaaab;
                    border-bottom: none;
                }
                li {
                    display: flex;
                    justify-content: space-between;
                    background: #fff;
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-bottom: none;
                    color: #aaaaab;
                    font-family: '黑体';
                }
                li:hover {
                    background: #f2f2f2;
                    color: #42c6ac;
                    font-weight: bold;
                }
            }
            ul::-webkit-scrollbar {
                display: none;
            }
        }
        .middle_class {
            margin-top: 20px;
            ul {
                width: 200px;
                background: rgb(221, 224, 235);
                list-style: none;
                font-size: 14px;
                border-bottom: 1px solid #ccc;
                min-height: 40px;
                overflow-y: scroll;
                p {
                    padding: 10px 30px;
                    background-color: #f9fafc;
                    border: 1px solid rgb(230, 230, 230);
                    color: #aaaaab;
                    border-bottom: none;
                }
                li {
                    background: #fff;
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-bottom: none;
                    color: #aaaaab;
                    font-family: '黑体';
                }
                li:hover {
                    background: #f2f2f2;
                    color: #42c6ac;
                    font-weight: bold;
                }
            }
            ul::-webkit-scrollbar {
                display: none;
            }
        }
        .right_class {
            margin-top: 20px;
            ul {
                width: 200px;
                background: rgb(221, 224, 235);
                list-style: none;
                font-size: 14px;
                border-bottom: 1px solid #ccc;
                min-height: 40px;
                overflow-y: scroll;
                p {
                    padding: 10px 30px;
                    background-color: #f9fafc;
                    border: 1px solid rgb(230, 230, 230);
                    color: #aaaaab;
                    border-bottom: none;
                }
                li {
                    background: #fff;
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-bottom: none;
                    color: #aaaaab;
                    font-family: '黑体';
                }
                li:hover {
                    background: #f2f2f2;
                    color: #42c6ac;
                    font-weight: bold;
                }
            }
            ul::-webkit-scrollbar {
                display: none;
            }
        }
    }
    .cardFoot{
        margin-top: 20px;
        text-align: right;
        button{
            width: 100px;
            height: 40px;
        }
        button:nth-child(2){
            background: #42c6ac;
            color: #fff;
        }
    }
}

</style>
