<template>
    <div class="Classification">
        <div class="container">
            <div class="asider">
                <div class="box">
                    <p>选择分类</p>
                    <div class="kailong"></div>
                </div>
            </div>
            <div class="section">
                <div class="choose_class">
                    <div class="left_class">
                        <ul>
                            <p>选择一级分类</p>
                            <li
                                @click="firstClass(item,idx)"
                                v-for="(item,idx) in tableData"
                                :key="idx"
                                :class="idx===index?'active':''"
                            >
                                <span>{{item.gc_name}}</span>
                                <span>></span>
                            </li>
                        </ul>
                    </div>
                    <img src="../../../../../assets/img/arrow.png">
                    <div class="middle_class">
                        <ul>
                            <p>选择二级分类</p>
                            <li
                                @click="twoClass(item,idx)"
                                v-for="(item,idx) in secondClass"
                                :key="idx"
                                :class="idx===current?'active':''"
                            >{{item.gc_name}}</li>
                        </ul>
                    </div>
                    <img src="../../../../../assets/img/arrow.png">
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
                <div class="txt">
                    <p style="color:#666;">
                        您当前选择的商品类别是：
                        <span>{{firstchoose.gc_name}}</span>
                        <span v-if="secondchoose.gc_name">></span>
                        <span>{{secondchoose.gc_name}}</span>
                        <span v-if="thirdchoose.gc_name">></span>
                        <span>{{thirdchoose.gc_name}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getGoodsList, findGoodsList } from '@/api/goods/goods_list';
import { findChilds } from '@/api/common/index';
export default {
    data() {
        return {
            tableData: [], //保存一级菜单列表
            limit: 10000,
            goods_id: 35, //保存获取到的一级菜单id
            secondClass: [], //保存二级菜单列表
            thirdClass: [], //保存三级菜单列表
            firstchoose: '请选择',
            secondchoose: '',
            thirdchoose: '',
            index:null,
            current:null,
        };
    },
    methods: {
        //获取一级菜单，请求二级菜单
        firstClass(val,idx) {
            this.index=idx;
            this.current=null;
            console.log(idx)
            this.firstchoose = val;
            this.secondchoose = '';
            this.thirdchoose = '';
            this.secondClass = [];
            this.thirdClass = [];
            // console.log(val);
            let data = {
                pid: val.id
            };
            findChilds(data).then(res => {
                let arr = [];
                res.data.forEach(v => {
                    arr.push(v);
                });
                this.secondClass = arr;
            });
            this.setGoodsInfo();
        },
        //获取二级菜单id，请求三级菜单
        twoClass(val,idx) {
            console.log(idx)
            this.current=idx 
            let arr = [];
            if (val.children) {
                val.children.forEach(v => {
                    arr.push(v);
                });
            }
            this.thirdClass = arr;
            this.secondchoose = val;
            this.setGoodsInfo();
        },
        //点击获取三级菜单下的选项
        threeClass(val) {
            this.thirdchoose = val;
            this.setGoodsInfo();
        },
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
        //保存商品名称
        setGoodsInfo() {
            let data = {
                first: this.firstchoose,
                second: this.secondchoose,
                third: this.thirdchoose
            };
            sessionStorage.setItem('classification', JSON.stringify(data));
        }
    },
    created() {
        this.show();
        // this.showsecond();
    }
};
</script>

<style lang="scss" scoped>
.Classification {
     font-family: '微软雅黑';
    .container {
        display: flex;
        width: 100%;
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
            overflow-y: auto;
            padding: 60px 100px;
            width: 100%;
            .choose_class {
                display: flex;
                justify-content: space-between;
                // width: 600px;
                margin-top: 30px;
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
                        li.active{
                            font-weight: bolder;
                            color:#42c6ac;
                        }
                    }
                    ul::-webkit-scrollbar {
                        display: none;
                    }
                }
                > img {
                    width: 60px;
                    height: 60px;
                    padding-top: 200px;
                    margin: 0 20px;
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
                        li.active{
                            font-weight: bolder;
                            color:#42c6ac;
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
        }
        .txt {
            margin-top: 40px;
            font-size: 14px;
            span {
                color: red;
            }
        }
       
    }
}
</style>