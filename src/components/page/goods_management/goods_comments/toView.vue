<template>
    <div class="toView">
        <div class="container">
            <div ref="none" style="color:#666"></div>
            <div v-for="(item,index) in commentList" :key="index">
                <div class="aside">
                    <div class="headPportrait">
                        <img :src="item.user_head">
                        <h4>{{item.nickname}}</h4>
                    </div>
                    <div class="text">
                        <p>商品：
                            <span style="color:#1ABC9C">{{item.goods.g_title}}</span>
                        </p>
                        <p>购买：
                            <span v-if="item.goods.key_name">{{item.goods.key_name}}</span>
                            <span v-else>暂无</span>
                        </p>
                        <p>评价：
                            <el-rate style="display: inline-block;" v-model="item.level"></el-rate>
                        </p>
                        <p>日期：
                            <span>{{item.add_time}}</span>
                        </p>
                    </div>
                </div>
                <div class="main">
                    <div class="comment">
                         <p v-if="item.comment">{{item.comment}}</p>
                         <p v-else>暂无评论</p>
                    </div>
                    <div class="imglist">
                        <div class="imgs" v-for="(v,i) in item.pic" :key="i" v-if="i">
                            <img :src="v">
                        </div>
                        <div v-else>
                            <p>暂无图片</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { goodsListFind } from '@/api/goods/goods_classification';
export default {
    data() {
        return {
            rate: null, //绑定评分
            commentList: [] //获取评论数据
        };
    },
    methods: {
        getCommentsInfo() {
            let data = {
                id: this.$route.query.id
            };
            goodsListFind(data).then(res => {
                    res.data.forEach(v => {
                        if(v.goods){
                            this.commentList = res.data;
                        }else{
                        this.$refs.none.innerHTML='暂无任何信息'
                    }
                });
            });
        }
    },
    created() {
        this.getCommentsInfo();
    }
};
</script>

<style lang="scss" scoped>
.toView {
     font-family: '微软雅黑';
    .container {
        > div {
            display: flex;
            > .aside {
                width: 500px;
                border-right: 1px solid #ccc;
                .headPportrait {
                    text-align: center;
                    padding-top: 15%;
                    img {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }
                    h4 {
                        color: rgb(73, 73, 73);
                        margin-top: 10px;
                    }
                }
                .text {
                    margin-top: 40px;
                    padding-left: 10px;
                    p {
                        font-weight: bold;
                        color: rgb(129, 129, 129);
                        line-height: 40px;
                        span {
                            font-weight: 300;
                            font-size: 14px;
                        }
                    }
                }
            }
            .main {
                flex-grow: 1;
                padding: 40px;
                box-sizing: border-box;
                p {
                    color: rgb(121, 121, 121);
                    line-height: 35px;
                    text-indent: 2em;
                    padding-bottom: 130px;
                }
                .comment{
                    width: 100%;
                    border: 3px solid rgb(230, 230, 230);
                    // box-shadow: 5px 5px 5px #888;
                }
                .imglist{
                     width: 100%;
                     border: 3px solid rgb(230, 230, 230);
                    // box-shadow: 10px 10px 10px #888;
                     margin-top: 40px;
                    .imgs {
                        background-size: 100%;
                        padding-bottom: 20px;
                        img {
                            width: 100px;
                            height: 100px;
                            margin-right: 10px;
                        }
                    }
                }

            }
        }
    }
}
</style>