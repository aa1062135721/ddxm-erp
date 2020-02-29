 <template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>岗位管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div>
                <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="a_username" label="用户"></el-table-column>
                <el-table-column prop="l_ip" label="IP"></el-table-column>
                <el-table-column prop="create_time" label="时间"></el-table-column>
                <el-table-column prop="l_browser" label="浏览器"></el-table-column>
            </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
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
                tableData: [],
            }
        },
        created(){
            this.getList();
        },
        methods: {

            getList(){
                logMenu().then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.tableData = res.data.data
                    }
                })
            }
        }

    };
</script>

<style scoped lang="scss">

</style>
