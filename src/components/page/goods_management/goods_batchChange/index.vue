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
                        <el-input placeholder="请输入搜索关键词" v-model="searchVal"></el-input>
                        <el-button style="margin-left:10px" @click="searchName">搜索</el-button>
                        <el-button style="margin-left:10px" @click="reset">重置</el-button>
                    </div>
                </div>
                <div class="main">
                    <div>
                            <p>
                                已选择
                                <span style="color:red;">{{all}}</span>条
                            </p>
                        <div class="left_table" id="left_table">
                            <el-checkbox-group class="checkbox" v-model="type"   v-for="(item,index) in goodslist" :key="index" v-if="item.g_title">
                                <el-checkbox :label="item" :value="index">{{item.g_title}}</el-checkbox>
                            </el-checkbox-group>
                         </div>
                        <div style="margin-top:20px">
                            <el-button style="background:#42c6ac;color:#fff;" @click="confirm">确定</el-button>
                        </div>
                    </div>
                    
                    <img src="../../../../assets/img/arrow.png">
                    <div>
                        <div class="right_table">
                             <p>
                                已选择
                            <span style="color:red;">{{all}}</span>条
                            </p>
                            <el-checkbox-group class="checkbox" v-model="suretype"  v-for="(item,index) in num" :key="index" >
                                <el-checkbox :label="index" name="type" >{{item.g_title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                         <div style="margin-top:20px">
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
                        <el-button @click="enterEditor" v-if="$_has('find')" style="background:#42c6ac; color:#fff; margin-top:20px; width:120px;height:40px">进入编辑</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Brand from '@/components/common/Brand.vue';
import { goodsList } from '@/api/goods/goods_list.js';
export default {
    data() {
        return {
            goodslist: [], //商品列表
            num: [], //统计已选项
            radio: null, //
            type: [],
            suretype: [],
            alltype: [], //统计确认编辑项
            current_page: 1, //计算当前页
            last_page: null, //总页数
            searchVal:'',//搜索
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
                this.current_page = res.data.current_page;
                this.last_page = res.data.last_page;
            });
        },
        //确定添加
        confirm() {
            this.num = JSON.parse(JSON.stringify(this.type));
            console.log(this.num)
        },
        //移除
        remove() {
            this.suretype.forEach(v => {
                this.num.splice(v, 1);
            });
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
            console.log(this.num);
            if (this.radio === '1') {
                this.$router.push({
                    path: '/singleEditor',
                    query:{
                        data:this.num
                    }
                });
            } else if (this.radio === '2') {
                this.$router.push({
                    path: '/moreEditor',
                     query:{
                        data:this.num
                    }
                });
            }
        },
        //搜索关键字
        searchName(){
            let data={
                search_val:this.searchVal
            }
            goodsList(data).then(res=>{
                this.goodslist = res.data.data;
            })
        },
        reset(){
            this.getGoodsList()
        },
        loadmore() {
            let _this = this;
            let dom = document.querySelector('#left_table');
            dom.addEventListener('scroll', function() {
                const scrollDistance = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
                // console.log(scrollDistance)
                if (scrollDistance <= 0) {
                    //等于0证明已经到底，可以请求接口
                    if (_this.current_page < _this.last_page) {
                        //当前页数小于总页数就请求
                        _this.current_page++; //当前页数自增
                        let data = {
                            page: _this.current_page
                        };
                        goodsList(data).then(res => {
                            _this.goodslist = _this.goodslist.concat(res.data.data);
                            console.log(res);
                        });
                    }
                }
            });
        }
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
    updated() {
        this.loadmore();
    },
    components: {
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
            width: 500px;
            margin-top: 20px;
            overflow-y: scroll;
            height: 300px;
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
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
         .right_table::-webkit-scrollbar {
                    display: none;
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