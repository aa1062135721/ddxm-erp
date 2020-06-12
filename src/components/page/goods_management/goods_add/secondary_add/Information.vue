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
                            <span>{{first}}</span>
                            <span v-if="second">></span>
                            <span>{{second}}</span>
                            <span v-if="third">></span>
                            <span>{{third}}</span>
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
                        <Brand></Brand>
                    </el-form-item>
                    <el-form-item label="供应商">
                        <Supplier></Supplier>
                    </el-form-item>
                    <el-form-item label="商品介绍" prop="desc">
                        <el-input style="width:40%" type="textarea" v-model="ruleForm.desc"></el-input>
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
                    <div class="showTitle">
                        <span class="item" v-for="(item,index) in addExtensions" :key="index">
                            <span>{{item.firstchoose}}</span>
                            <span v-if="item.secondchoose">></span>
                            <span>{{item.secondchoose}}</span>
                            <span v-if="item.thirdchoose">></span>
                            <span>{{item.thirdchoose}}</span>
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
                              <el-button @click="addGoodsClass">添加</el-button>
                        </div>
                    </div>
                    <div class="cardFoot">
                        <el-button @click="flag=false">取消</el-button>
                        <el-button>确定</el-button>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import { getGoodsList, findGoodsList } from '../../../../../api/goods/goods_list';
import  Brand from '../../../../common/Brand';
import  Supplier from '../../../../common/Supplier';

export default {
    data() {
        return {
            first: null,
            second: null,
            third: null,
            flag: false,
            addExtensions:[{
                firstchoose:null,
                secondchoose:null,
                thirdchoose:null,
            }],
            goods_id: 35, //保存获取到的一级菜单id
            tableData: [], //保存一级菜单列表
            secondClass: [], //保存二级菜单列表
            thirdClass: [], //保存三级菜单列表
            goodsTitle: {},
            ruleForm: {
                region: '',
                subtitle: '',
                desc: '',
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
                console.log(res);
                this.tableData = res.data.data;
            });
        },
        //获取二级菜单列表
        showsecond() {
            let data = {
                id: this.goods_id
            };
            findGoodsList(data).then(res => {
                this.secondClass = res.data.data;
            });
        },
        //获取一级菜单，请求二级菜单
        firstClass(val) {
            let data = {
                id: val.id
            };
            findGoodsList(data).then(res => {
                this.secondClass = res.data.data;
            });
            console.log(val.gc_name)
            sessionStorage.setItem('one',val.gc_name) 
        },
        //获取二级菜单id，请求三级菜单
        twoClass(val) {
            let data = {
                id: val.id
            };
            findGoodsList(data).then(res => {
                this.thirdClass = res.data.data;
                console.log(res.data.data);
            });
            console.log(val.gc_name)
             sessionStorage.setItem('two',val.gc_name) 
        },
        //点击获取三级菜单下的选项
        threeClass(val){
           console.log(val.gc_name)
           sessionStorage.setItem('three',val.gc_name) 
        },
        // 请求扩展分类
        addClass(){
            this.flag=true;
            this.addExtensions[0].firstchoose=this.first;
            this.addExtensions[0].secondchoose=this.second;
            this.addExtensions[0].thirdchoose=this.third;
        },
        //扩展商品分类
        addGoodsClass(){
            var data={
                firstchoose:sessionStorage.getItem('one'),
                secondchoose:sessionStorage.getItem('two'),
                thirdchoose:sessionStorage.getItem('three'),
            }
            this.addExtensions.push(data)
            sessionStorage.clear()
        }
    },
    created() {
        this.goodsTitle = this.$store.state.goodsinfo_id;
        this.show();
        this.showsecond();
    },
    mounted() {
        this.first = this.goodsTitle.first;
        this.second = this.goodsTitle.second;
        this.third = this.goodsTitle.third;
    },
    components:{
        Brand,
        Supplier,
    }
};
</script>

<style lang="scss" scoped>
.information {
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