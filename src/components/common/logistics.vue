<template>
    <el-dialog v-dialogDrag title="查看物流信息" center :visible.sync="show" width="30%">
        <div class="title">
            <div class="title-item">
                <span>物流：</span>{{code | codeToString}}
            </div>
            <div class="title-item">
                <span>快递单号：</span>{{sn}}
            </div>
        </div>
        <el-steps direction="vertical" :active="1" space="100px">
            <el-step v-for="(item, index) in responseData"
                     :key="index"
                     :title="item.Date"
                     :description="item.StatusDescription">
            </el-step>
        </el-steps>
    </el-dialog>
</template>

<script>
    import { logistics, } from '../../api/index';

    export default {
        name: 'logistics',
        data() {
            return {
                show: false,
                responseData: [
                    {
                        Date: "2020-03-11 17:28:46",
                        StatusDescription: "您的订单已由【郑州逸泉营业部】接货完成",
                        Details: "",
                        checkpoint_status: "transit"
                    },
                    {
                        Date: "2020-03-11 17:28:19",
                        StatusDescription: "尊敬的用户您好，受全国道路交通影响，部分快递可能会延迟派送，我们正在全力为您服务，请您耐心等待;",
                        Details: "",
                        checkpoint_status: "transit"
                    },
                    {
                        Date: "2020-03-11 16:06:08",
                        StatusDescription: "揽收任务已分配给朱小波,配送员电话18639001511或18337156351",
                        Details: "",
                        checkpoint_status: "transit",
                        ItemNode: "ItemReceived"
                    }
                ]
            };
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            code: {
                type: String,
                default: ''
            },
            sn: {
                type: String,
                default: ''
            }
        },
        watch: {
            isShow:{
                immediate: true,
                handler: function(newVal) {
                    console.log("我是查看物流子组件，父组件让我显示出来了", newVal);
                    this.show = newVal;
                    if (newVal){
                        this.getData();
                    }
                }
            },
            show: function(newVal, oldValue) {
                if (!newVal) {
                    this.$emit("update:isShow", false); // 当弹出层被关闭的时候，发送消息给父组件，取消显示对话框
                }
            },
        },
        filters: {
            codeToString: function(value) {
                let str = '';
                switch (value) {
                    case 'jd':
                        str = '京东快递';
                        break;
                    default:
                        str = '未知快点公司';
                        break;
                }
                return str;
            }
        },
        methods: {
          getData(){
            const requestData = {
                sn: this.sn,
                code: this.code
            };
            logistics(requestData).then(res => {
               if (res.code === 200) {
                   // this.responseData = res.data;
               }
            }).catch(err => {
                console.log(err);
            });
          },
        },
    };
</script>

<style scoped lang="scss">
    .title {
        margin-bottom: 20px;
        .title-item{
            margin: 10px 0;
            font-size: 12px;
            color: #8c939d;
            span{
                font-size: 14px;
                color: #000000;
            }
        }
    }
</style>
