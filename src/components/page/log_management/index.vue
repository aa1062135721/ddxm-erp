 <template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>日志管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div style="margin: 40px 0;">
                <el-table :data="responseData.data" style="width: 100%">
                    <el-table-column prop="a_username" label="用户"></el-table-column>
                    <el-table-column prop="l_ip" label="IP"></el-table-column>
                    <el-table-column prop="create_time" label="时间"></el-table-column>
                    <el-table-column prop="l_browser" label="浏览器"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="responseData.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { logMenu } from '../../../api/log';

    export default {
        name: 'index',
        data(){
            return {
                requestData: {
                    page: 1,
                },
                responseData: {
                    data: [],
                    total: 0,
                },
            }
        },
        created(){
            this.getList();
        },
        methods: {
            //改变页码
            handleCurrentChange(val) {
                this.requestData.page = val;
                this.getList();
            },
            getList(){
                logMenu(this.requestData).then(res=>{
                    if(res.code === 200){
                        this.responseData = res.data
                    }
                })
            }
        }

    };
</script>

<style scoped lang="scss">

</style>
