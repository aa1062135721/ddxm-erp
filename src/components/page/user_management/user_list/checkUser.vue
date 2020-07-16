<template>
    <div class="checkUser">
        <div class="container">
            <div class="userInfo">
                <table  class="tab">
                    <tr>
                        <td rowspan="5" class="avatar" >
                            <img src="https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595476779&t=54f9d3bcc1feaca5632480e67fb1f051"/>
                            <p>13800000000</p>
                            <p>
                                <span>黄金会员</span>
                            </p>
                        </td>
                        <td>用户ID</td>
                        <td style="background:#fff">8447466</td>
                        <td>职业</td>
                        <td style="background:#fff">学生</td>
                    </tr>
                    <tr>
                        <td>昵称</td>
                        <td>Windir</td>
                        <td>个性签名</td>
                        <td>无</td>
                    </tr>
                    <tr>
                        <td>性别</td>
                        <td>男</td>
                        <td>喜欢的分类</td>
                        <td>服装、餐厨</td>
                    </tr>
                    <tr>
                        <td>生日</td>
                        <td>1984年6月22日</td>
                        <td>注册时间</td>
                        <td>2017-07-24 17:25:38</td>
                    </tr>
                    <tr>
                        <td>城市</td>
                        <td>广东省深圳市</td>
                        <td>用户来源</td>
                        <td>PC端</td>
                    </tr>
                </table>
            </div>
            <div class="otherInfo">
                <div class="singer">
                    <p>
                        <i class="el-icon-s-management" style=" color: rgb(113, 113, 113); margin-right:5px"></i>
                        <span>统计信息</span>
                    </p>
                    <table>
                        <tr>
                            <td>消费金额</td>
                            <td>订单数量</td>
                            <td>可用优币</td>
                            <td>成长值</td>
                            <td>优惠券(张)</td>
                            <td>商品评论</td>
                            <td>退货记录</td>
                            <td>登录次数</td>
                        </tr>
                        <tr>
                            <td>￥2000.00</td>
                            <td>10</td>
                            <td>200</td>
                            <td>1000</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>关注</td>
                            <td>粉丝</td>
                            <td>收藏商品</td>
                            <td>收藏专题</td>
                            <td>收藏话题</td>
                            <td>收藏评论</td>
                            <td>邀请好友</td>
                            <td>剩余抽奖次数</td>
                        </tr>
                         <tr>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                    </table>
                </div>
                <div class="singer">
                    <p>
                        <i class="el-icon-s-management" style=" color: rgb(113, 113, 113); margin-right:5px"></i>
                        <span>收货地址</span>
                    </p>
                   <el-table border :header-cell-style="{background:'#eef1f6',color:'#606266'}">
                       <el-table-column label="姓名"     align="center">

                       </el-table-column>
                       <el-table-column label="手机号码" align="center">

                       </el-table-column>
                       <el-table-column label="详细地址" align="center">

                       </el-table-column>
                       <el-table-column label="邮政编码" align="center">

                       </el-table-column>
                       <el-table-column label="默认地址" align="center">

                       </el-table-column>
                   </el-table>
                </div>
                <div class="singer">
                    <p>
                        <i class="el-icon-s-management" style=" color: rgb(113, 113, 113); margin-right:5px"></i>
                        <span>订单记录</span>
                    </p>
                   <el-table border :header-cell-style="{background:'#eef1f6',color:'#606266'}">
                       <el-table-column label="订单编号"     align="center">

                       </el-table-column>
                       <el-table-column label="提交时间" align="center">

                       </el-table-column>
                       <el-table-column label="用户账号" align="center">

                       </el-table-column>
                       <el-table-column label="订单金额" align="center">

                       </el-table-column>
                       <el-table-column label="支付方式" align="center">

                       </el-table-column>
                       <el-table-column label="订单来源" align="center">

                       </el-table-column>
                       <el-table-column label="订单状态" align="center">

                       </el-table-column>
                       <el-table-column label="操作" align="center">

                       </el-table-column>
                   </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .checkUser{
        .container{
            .tab{
               border-collapse:collapse;
               width: 100%;
               height: 260px;
               text-align: center;
               background-color: #F9FAFC;
               color: rgb(93, 93, 93);
               tr{
                   td{
                       border: 1px solid #e7e7e7;
                   }
               }
               tr:not(:nth-of-type(1)){
                    td:nth-of-type(2),td:nth-of-type(4){
                       background-color: #fff;
                   }
               }
               tr:first-of-type{
                   .avatar{
                       p{
                           margin-top: 5px;
                       }
                       img{
                           width: 120px;
                           height: 120px;
                           border-radius: 50%;
                       }
                       p:nth-of-type(2){
                           span{
                               width: 70px;
                                display: inline-block;
                                background: #F04844;
                                color: #fff;
                                font-size: 14px;
                                font-family: "黑体";
                                padding: 4px 5px;
                                border-radius: 15px;
                           }
                          
                       }
                   }
               }
            }
            .otherInfo{
                padding: 20px;
                border: 1px solid #f1f1f1;
                margin-top: 30px;
                .singer{
                    p{
                        margin:20px 0;
                    }
                    table{
                        border-collapse:collapse;
                        width: 100%;
                        height: 260px;
                        text-align: center;
                        background-color: #F9FAFC;
                        color: rgb(90, 90, 90);
                        font-weight: bold;
                        tr:nth-child(2) , tr:nth-child(4){
                            background-color: #fff;
                            color: rgb(93, 93, 93);
                            font-weight: 300;
                        }
                        tr{
                            td{
                                border: 1px solid #ebebeb;
                            }
                        }
                    }
                }
            }
        }
    }
</style>