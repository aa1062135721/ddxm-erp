<template>
    <div class="container">
        <div class="aside">
            <div class="headPportrait">
                <img src="https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1592546442&t=0b2aed8f9b174f621952b10b26f9d7b6">
                <h4>用户名</h4>
            </div>
            <div class="text">
                <p>商品：<span style="color:#1ABC9C">银色星芒刺绣网纱底裤</span></p>
                <p>购买：<span>肤色/M</span></p>
                <p>评价：<el-rate style="display: inline-block;" v-model="rate"></el-rate></p>
                <p>日期：<span>2017-6-15 14:33:51</span></p>
                <p>IP地址：<span>192.168.1.92</span></p>
            </div>
        </div>
        <div class="main">
            <p>棉布莱卡的出现，不过使内衣面料又多了一种选择与表现。最舒适的面料仍当数棉布，今天的女性依然偏爱棉质内衣，这因为棉布本身独一无二的透气性和天然性，使穿着感受绝不同于其他面料。从美感来说，平织棉布的印花效果和针织棉布的染色效果，都有一种天然纯朴和青春气息，为其他面料所难取代。</p>
            <div class="imgs">
                <img src="https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1592548689&t=92e1886aac2a3f018e403ec073b0a8a4">
                <img src="https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1592548689&t=4403c8a99b3bf84badaba1b483ea9b46">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                rate:null,//绑定评分
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        >.aside{
            width: 500px;
            border-right: 1px solid #ccc;
            .headPportrait{
                text-align: center;
                padding-top: 15%;
                img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
                h4{
                    color: rgb(73, 73, 73);
                    margin-top: 10px;
                }
            }
            .text{
                margin-top: 40px;
                padding-left: 10px;
                p{
                    font-weight: bold;
                    color: rgb(129, 129, 129);
                    span{
                        font-weight: 300;
                        font-size: 14px;
                    }
                }
            }
        }
        .main{
            padding: 40px;
            box-sizing: border-box;
            p{
                color: rgb(121, 121, 121);
                line-height: 35px;
                text-indent: 2em;
                border-bottom: 1px solid rgb(179, 178, 178);
                padding-bottom: 20px;
            }
            .imgs{
                margin-top: 40px;
                background-size: 100%;
                border-bottom: 1px solid #ccc;
                padding-bottom: 20px;
                img{
                   width: 100px;
                   height: 100px;
                   margin-right: 10px;
                }
            }
        }
    }
</style>