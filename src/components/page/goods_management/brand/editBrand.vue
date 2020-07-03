<template>
    <div class="editBrand">
        <div class="container">
            <div class="title">
                <p>编辑品牌</p>
            </div>
            <div class="main">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="品牌名称">
                        <el-input style="width:214px" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌首字母">
                        <el-input style="width:214px" v-model="form.tag"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌图标">
                        <Clickupload @getImgUrls="getImgUrls"></Clickupload>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input style="width:214px" v-model="form.sorting"></el-input>
                    </el-form-item>
                    <el-form-item label="是否显示">
                        <el-radio v-model="form.checkList" label="0">是</el-radio>
                        <el-radio v-model="form.checkList" label="1">否</el-radio>
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
import { editBrand } from '@/api/common/index';
import Clickupload from '@/components/common/clickupload';
export default {
    data() {
        return {
            form: {
                name: '',
                tag: '',
                sorting: '',
                checkList: null,
                imgUrl: ''
            },
            id: 0
        };
    },
    methods: {
        onSubmit() {
            let data = {
                gb_title: this.form.name,
                gb_tag: this.form.tag,
                gb_sort: this.form.sorting,
                gb_status: this.form.checkList,
                gb_url: this.form.imgUrl,
                id: this.id
            };
            console.log(data);
            editBrand(data).then(res => {
                if (res.code === 200) {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                }
            });
        },
        //获取图片上传地址
        getImgUrls(val) {
            this.form.imgUrl = val;
        },
        // 获取当前品牌信息
        getBrandInfo() {
            let data = this.$route.query.data;
            this.form.name = data.gb_title;
            this.form.tag = data.gb_tag;
            this.form.sorting = data.gb_sort;
            this.form.checkList = data.gb_status;
            this.form.imgUrl = data.gb_url;
            this.id = data.id;
        }
    },
    components: {
        Clickupload
    },
    mounted() {
        this.getBrandInfo();
    }
};
</script>
<style lang="scss">
.editBrand {
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