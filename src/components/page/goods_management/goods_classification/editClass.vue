<template>
    <div class="addClass">
        <div class="container">
            <div class="title">
                <p>编辑分类</p>
            </div>
            <div class="main">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="分类名称">
                        <el-input style="width:214px" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="上级分类">
                        <el-select v-model="form.region" placeholder="请选择分类">
                            <el-option value="1" v-if="!form.region"></el-option>
                            <el-option value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input style="width:214px" v-model="form.sorting"></el-input>
                    </el-form-item>
                    <el-form-item label="是否显示">
                        <el-radio-group v-model="form.checkList">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="分类类型">
                        <el-radio-group v-model="form.checkType">
                            <el-radio :label="1">商品分类</el-radio>
                            <el-radio :label="2">服务分类</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="分类图标">
                        <Clickupload @getImgUrls="getImgUrls"></Clickupload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { goodsClassAdd } from '@/api/goods/goods_classification';
import Clickupload from '@/components/common/clickupload';
export default {
    data() {
        return {
            form: {
                name: '',
                sorting: '',
                region: null,
                checkList: '',
                checkType: '',
                imgUrl: ''
            },
            fatherId: 0
        };
    },
    methods: {
        onSubmit() {
            let data = {
                pid: this.fatherId,
                gc_name: this.form.name,
                gc_status: this.form.checkList,
                gc_img: this.form.imgUrl,
                gc_type: this.form.checkType,
                gc_level: this.form.region
            };
            goodsClassAdd(data).then(res => {
                if (res.code === 200) {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                }
            });
        },
        //获取父级ID和级别
        getParentInfo() {
            console.log( JSON.parse(this.$route.query.row) );
            let a = JSON.parse(this.$route.query.row)
            this.form.name = a.gc_name;
            this.form.sorting = a.gc_sort,
            this.form.checkList= a.gc_status,
            this.form.checkType = a.gc_type,
            this.form.region = a.gc_level+1;
            if (this.$route.query.id) {
                this.fatherId = this.$route.query.id;
            }
        },
        //获取图片上传地址
        getImgUrls(val) {
            this.form.imgUrl = val;
        }
    },
    components: {
        Clickupload
    },
    mounted() {
        this.getParentInfo();
    }
};
</script>
<style lang="scss" >
.addClass {
     font-family: '微软雅黑';
    .container {
        width: 100%;
        padding: 0;
        margin: 0;
        .title {
            background: rgb(238, 238, 238);
            padding: 15px;
            color: rgb(61, 61, 61);
            font-size: 14px;
        }
        .main {
            width: 600px;
            padding: 50px 0;
            margin: auto;
            .el-upload--text {
                width: 80px;
                height: 35px;
            }
        }
    }
}
</style>