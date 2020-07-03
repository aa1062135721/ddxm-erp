<template>
    <div class="Attribute">
        <div class="container">
            <div class="asider">
                <div class="box">
                    <p>商品属性</p>
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
                    <el-form-item label="属性类型">
                        <ChooseProperty @input="input"></ChooseProperty>
                    </el-form-item>
                    <div class="specifications">
                        <p>
                            <span>*</span>商品规格
                        </p>
                        <div>
                            <ul style="list-style:none">
                                <li v-for="(item,index) in PropertyList" :key="index">
                                    <div v-for="(title,c) in item" :key="c">
                                        <span>{{c}}</span>
                                        <el-checkbox-group v-model="ruleForm.type">
                                            <el-checkbox
                                                v-for="(v) in title"
                                                :key="v.id"
                                                :label="v"
                                            >{{v.gs_title}}</el-checkbox>
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
                        <el-table :data="ruleForm.list" style="width: 100%" border="">
                            <!-- 动态表格 -->
                            <el-table-column
                                v-for="(item, index) in columnList"
                                :label="item"
                                :key="index"
                                width="150"
                            >
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row['val'+index]"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="原价">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.price"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="会员价">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.recommendprice"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="上传图片">
                                <template slot-scope="scope">
                                    <goodsupload
                                        @click.native="getIndex(scope)"
                                        @getImgUrls="getImgUrls"
                                        v-model="scope.row.imgurl"
                                    ></goodsupload>
                                </template>
                            </el-table-column>
                            <el-table-column label="条形码">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.bar_code"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="商品库存">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.num"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="deleteJob(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-form>
                <div class="addimg">
                    <div class="goodsImg">
                        <div class="box2">
                            <p>商品相册</p>
                            <div class="rich_title"></div>
                        </div>
                        <div class="imglist">
                            <div class="upimg">
                                <singerUpImg @getImgUrls="setImg"></singerUpImg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <template>
                    <div class="richText">
                    <div class="box1">
                        <p>规格参数</p>
                        <div class="rich_title"></div>
                    </div>
                    <el-card style="height: 400px;width:80%;">
                    <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
                    </quill-editor>
                    </el-card>
                    </div>
                </template>-->
                <div style="text-align:center;margin-top:50px;">
                    <el-button @click="submit">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChooseProperty from '@/components/common/ChooseProperty';
import { goodsSpecs } from '@/api/goods/goods_list';
// import { quillEditor } from 'vue-quill-editor';
import goodsupload from '@/components/common/goods_upload';
import singerUpImg from '@/components/common/singerUpImg';
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';

export default {
    name: 'FuncFormsEdit',
    data() {
        return {
            ruleForm: {
                type: [],
                list: [
                    {
                        key: '', //规格ID组合，有规格则为ID的组合，用下划线连接
                        key_name: '', //规格的名称
                        recommendprice: '', //原价
                        price: '', //会员价
                        imgurl: '', //商品规格的图片地址，不填则此规格的图片为商品主图
                        bar_code: '', //商品条形码
                        initial_sales: 0
                    }
                ]
            },
            rules: {
                type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }]
            },
            PropertyList: [], //存放属性规格
            columnList: [], //存放动态列
            child: [],
            select_name: '规格',
            specifications: [], //存放商品列
            content: null,
            tableIndex: null,
            editorOption: {},
            data: {}, //存放第二步=>商品信息
            g_imgs: [] //存放商品相册
        };
    },
    components: {
        ChooseProperty,
        // quillEditor,
        goodsupload,
        singerUpImg
    },
    mounted() {
        this.data = JSON.parse(sessionStorage.getItem('data'));
        console.log(this.data);
    },
    methods: {
        addSpecifications() {
            this.ruleForm.list = [];
            let arr = [];
            for (const item of this.PropertyList) {
                arr[Object.keys(item)[0]] = [];
                Object.values(item)[0].map(item2 => {
                    for (const itemType of this.ruleForm.type) {
                        if (item2.id == itemType.id) {
                            arr[Object.keys(item)[0]].push(itemType);
                        }
                    }
                });
            }
            // console.log(this.attribute)
            // console.log('arr', arr);

            let arr1 = Object.values(arr);
            let combine = function(...chunks) {
                let res = [];
                let helper = function(chunkIndex, prev) {
                    let chunk = chunks[chunkIndex];
                    let isLast = chunkIndex === chunks.length - 1;
                    for (let val of chunk) {
                        let cur = prev.concat(val);
                        if (isLast) {
                            res.push(cur);
                        } else {
                            helper(chunkIndex + 1, cur);
                        }
                    }
                };
                helper(0, []);
                return res;
            };
            // // // 得到的结果
            let result = combine(...arr1);
            // console.log('结果', result);
            let result2 = [];
            for (let item of result) {
                let obj = { key_name: '', key: '' };

                item.map((item2, index) => {
                    if (index + 1 === item.length) {
                        obj.key_name += item2.gs_title;
                        obj.key += item2.id;
                    } else {
                        obj.key_name += item2.gs_title + '_';
                        obj.key += item2.id + '_';
                    }
                });
                result2.push(obj);
            }
            // console.log('最终结果', result2);
            this.ruleForm.list = result2;
            this.ruleForm.list.forEach(_ => {
                let msgList = _.key_name.split('_');
                for (let i = 0; i < msgList.length; i++) {
                    _['val' + i] = msgList[i];
                }
            });

            this.columnList = [];
            this.PropertyList.forEach(_ => {
                console.log(Object.keys(_)[0]);
                this.columnList.push(Object.keys(_)[0]);
            });
        },
        input(val) {
            console.log(val);
            let flag = true;
            for (const item of this.PropertyList) {
                console.log('每一项：', item);
                if (item == val) {
                    flag = false;
                }
            }
            if (flag) this.PropertyList.push(val);
        },
        getIndex(scope) {
            this.tableIndex = scope.$index;
        },
        //获取图片上传地址
        getImgUrls(val) {
            this.ruleForm.list[this.tableIndex].imgurl = val;
        },
        //删除图片
        deleteJob(val) {
            console.log(val);
            this.ruleForm.list.splice(val, 1);
        },
        // 上传主图
        setImg(val) {
            this.g_imgs.push(val);
            console.log(val);
        },
        submit() {
            let usData = {
                g_title: this.data.g_title,
                g_subtitle: this.data.g_subtitle,
                g_content: this.data.g_content,
                brand_id: this.data.brand_id,
                supplier_id: this.data.supplier_id,
                g_specs: this.ruleForm.list,
                g_class: this.data.g_class,
                is_show: this.data.is_show,
                g_type: this.data.g_type,
                g_img: this.g_imgs,
                g_ratio: this.data.g_ratio,
                g_dis_price: this.data.g_dis_price,
                type_id: this.data.type_id
            };
            sessionStorage.setItem('usData', JSON.stringify(usData));
            console.log(this.ruleForm.list);
        }
    }
};
</script>

<style lang="scss">
.Attribute {
     font-family: '微软雅黑';
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
        .section {
            margin-top: 50px;
            padding: 20px;
            margin: auto;
            width: 100%;
            .specifications {
                background-color: #f9fafc;
                width: 90%;
                padding: 10px 25px;
                box-sizing: border-box;
                border: 1px solid rgb(221, 221, 221);
                margin-left: 20px;
                p {
                    font-size: 16px;
                    color: rgb(105, 105, 105);
                    margin-bottom: 10px;
                }
            }
            .edit_box {
                margin-top: 20px;
                margin-left: 20px;
                width: 90%;
                table {
                    border-collapse: collapse;
                    td {
                        width: 110px;
                        border: 1px solid #ccc;
                        text-align: center;
                        padding: 5px;
                        box-sizing: border-box;
                        color: rgb(70, 70, 70);
                    }
                    thead {
                        tr {
                            td {
                                background-color: #f9fafc;
                                font-weight: bold;
                            }
                        }
                    }
                }
                .el-upload--text {
                    width: 80px;
                    height: 35px;
                }
            }
        }
        .box1,
        .box2 {
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
        .addimg {
            .imglist {
                padding-left: 20px;
            }
        }
    }
}
</style>
