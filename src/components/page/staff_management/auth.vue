<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>员工权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">

        </div>
    </div>
</template>

<script>
    import { setAuth, } from '../../../api/staff';

    export default {
        name: 'auth',
        data() {
            return {

            };
        },
        methods: {
            getList(){
                const requestData = {
                    role_id: this.$route.query.role_id,
                    admin_id: this.$route.query.admin_id,
                }
                setAuth(requestData).then(res => {
                    if (res.code === 200) {

                    }
                }).catch(err => {
                    console.log(err);
                })
            },
        },
        watch: {
            $route: {
                handler: function(val, oldVal){
                    if (val.query.role_id){
                        this.getList();
                    }
                },
                // 深度观察监听
                deep: true
            }
        }
    };
</script>

<style scoped>

</style>
