<template>
    <div>
        <div class="title">
            <el-button>修改基本信息</el-button>
            <el-button @click="findUp" v-if="$_has('find')">批量自动上下架</el-button>
        </div>
        <div class="container">
            <div class="asider">
                <div class="box">
                    <p>根据商品分类、品牌</p>
                    <div class="kailong"></div>
                </div>
            </div>
            <div class="sortingOptions">
                <div class="childHeader">
                    <Brand @input="input"/>
                    <div>
                        <el-input placeholder="请输入搜索关键词"></el-input>
                        <el-button style="margin-left:10px">搜索</el-button>
                    </div>
                </div>
                <div class="main">
                    <div class="left_table">
                        <p>
                            已选择
                            <span style="color:red;">{{all}}</span>条
                        </p>
                        <el-checkbox-group
                            class="checkbox"
                            v-model="type"
                            v-for="(item,index) in goodslist"
                            :key="index"
                            v-if="item.g_title"
                        >
                            <el-checkbox :label="item" name="type">{{item.g_title}}</el-checkbox>
                        </el-checkbox-group>
                        <div style="margin-top:20px">
                            <el-button>全选</el-button>
                            <el-button style="background:#42c6ac;color:#fff;" @click="confirm">确定</el-button>
                        </div>
                    </div>
                    <img src="../../../../assets/img/arrow.png">
                    <div class="right_table">
                        <p>
                            已选择
                            <span style="color:red;">{{all}}</span>条
                        </p>
                        <el-checkbox-group  v-for="(item,index) in num" :key="index" class="checkbox" v-model="suretype">
                            <el-checkbox  :label="item" name="type">{{item.g_title}}</el-checkbox>
                        </el-checkbox-group>
                        <div style="margin-top:20px">
                            <el-button>全选</el-button>
                            <el-button style="background:#42c6ac;color:#fff;" @click="remove">移除</el-button>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div>
                        <el-radio v-model="radio" label="1">逐个编辑</el-radio>
                        <el-radio v-model="radio" label="2">统一编辑</el-radio>
                    </div>
                    <div>
                        <el-button
                            @click="enterEditor"
                            v-if="$_has('find')"
                            style="background:#42c6ac; color:#fff; margin-top:20px; width:120px;height:40px"
                        >进入编辑</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Brand from '@/components/common/Brand.vue';
import { goodsList } from '@/api/goods/goods_list.js';
import { nearer } from 'q';
export default {
    data() {
        return {
            goodslist: [], //商品列表
            num: [], //统计已选项
            radio: null, //
            type: [],
            suretype: [],
            alltype: [] //统计确认编辑项
        };
    },
    methods: {
        //查看批量自动上下架
        findUp() {
            this.$router.push({
                path: '/multipleIsup'
            });
        },
        //获取全部商品
        getGoodsList() {
            goodsList().then(res => {
                this.goodslist = res.data.data;
            });
        },
        //确定添加
        confirm() {
            this.num = this.type;
        },
        //移除
        remove() {
        
        },
        //获取子组件传值
        input(val) {
            let data = { gb_title: val };
            goodsList(data).then(res => {
                this.goodslist = res.data.data;
                console.log(res.data.data);
            });
        },
        //进入编辑
        enterEditor() {
           
            if (this.radio === '1') {
                this.$router.push({
                    path: '/singleEditor',
                     query: {
                       data:this.num
                    }
                });
            } else if (this.radio === '2') {
                this.$router.push({
                    path: '/moreEditor',
                    query: {
                       data:this.num
                    }
                });
            }
        },
    },
    created() {
        this.getGoodsList();
    },
    computed: {
        all() {
            return this.num.length;
        }
    },
    watch: {
        value: {
            immediate: true,
            handler: function(newVal) {
                console.log(newVal);
            }
        }
    },
    components:{
        Brand
    }
};
</script>

<style lang="scss" scoped>
.title {
    margin-left: 160px;
    margin-bottom: 20px;
}
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
    .sortingOptions {
        padding: 50px 60px;
        margin: auto;
        .childHeader {
            display: flex;
            > div {
                display: flex;
            }
        }
    }
    .main {
        display: flex;
        margin-bottom: 40px;
        .left_table,
        .right_table {
            min-width: 300px;
            margin-top: 20px;
            p {
                border: 1px solid #ccc;
                padding: 10px;
                background: rgba(226, 226, 226, 0.5);
                color: rgb(136, 136, 136);
            }
            .checkbox {
                border: 1px solid #ccc;
                padding: 10px 20px;
                border-top: none;
            }
        }
        > img {
            width: 60px;
            height: 60px;
            padding-top: 200px;
            margin: 0 20px;
        }
    }
}
.foot {
    border-top: 1px solid #ccc;
    padding-top: 40px;
    text-align: center;
}
.active {
    width: 15px;
    height: 15px;
    border: 1px solid #b8b8b8;
    display: inline-block;
    span {
        color: #ccc;
    }
}
.active1 {
    width: 15px;
    height: 15px;
    border: 1px solid #42c6ac;
    display: inline-block;
    span {
        color: #42c6ac;
    }
}
</style>