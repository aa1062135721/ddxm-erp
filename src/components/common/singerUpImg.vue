<template>
    <div class="upload-info">
        <div>
            <el-upload
                class="upload-demo"
                :action="domain"
                :data="QiniuData"
                :on-remove="handleRemove"
                :on-success="uploadSuccess"
                :before-upload="beforeAvatarUpload"
                :multiple="false"
            
                :file-list="fileList"
                list-type="picture-card"
                >
                  <i class="el-icon-plus"></i>
            </el-upload>
        </div>
    </div>
</template>

<script>
    import {getQiNiuToken} from '@/api/common/index'
    
    export default {
        data() {
            return {
                loading: true,
                QiniuData: {
                    key: "", //图片名字处理
                    token: "" //七牛云token
                },
                domain: "https://upload-z2.qiniup.com", // 七牛云的上传地址（华南区）
                qiniuaddr: "", // 七牛云的图片外链地址
                fileList: [],  //提交到后台图片地址
            };
        },
        mounted() {
            this.getQiniuToken();
        },
        methods: {
            handleRemove(file, fileList) {
                let imagesUrls = [];
                fileList.map(item => {
                    imagesUrls.push(`${this.qiniuaddr}${item.response.key}`)
                })
                this.$emit('getImgUrls', imagesUrls);
            },
            beforeAvatarUpload(file) {
                const isPNG = file.type === "image/png";
                const isJPEG = file.type === "image/jpeg";
                const isJPG = file.type === "image/jpg";
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isPNG && !isJPEG && !isJPG) {
                    this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!");
                    return false;
                }
                if (!isLt2M) {
                    this.$message.error("上传头像图片大小不能超过 2MB!");
                    return false;
                }
                this.QiniuData.key = new Date().getTime() + '_upload_' + Math.floor(Math.random() * 100) + '_' + file.name;
            },
            uploadSuccess(response, file, fileList) {
                // console.log(fileList);
                let imagesUrls = [];
                fileList.map(item => {
                    imagesUrls=item.response.key
                    // console.log(item.response.key)
                })
                this.$emit('getImgUrls', imagesUrls);
            },
            // //限制一次性选择文件个数
            // handleExceed(files, fileList) {
            //     this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            // },
            //请求后台拿七牛云token
            getQiniuToken() {
                getQiNiuToken().then(res => {
                    if (res.code === 200) {
                        this.QiniuData.token = res.data.token;
                        this.qiniuaddr = res.data.domain
                    }
                }).catch(err => {

                })
            }
        }
    };
</script>
