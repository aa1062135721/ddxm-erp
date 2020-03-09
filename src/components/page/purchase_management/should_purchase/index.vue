<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>待采购单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-div">
                <el-input
                        class="my-input"
                        placeholder="商品名称/条形码"
                        clearable>
                </el-input>
                <el-select placeholder="选择供应商" class="my-input">
                    <el-option  label=".label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                </el-select>
                <el-date-picker
                        class="my-input"
                        style="width: 300px;"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="缺货开始"
                        end-placeholder="缺货结束">
                </el-date-picker>
                <el-select placeholder="状态" class="my-input">
                    <el-option  label=".label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                </el-select>
                <el-select placeholder="下单状态" class="my-input">
                    <el-option  label=".label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                    <el-option  label="item.label" value="item.value"></el-option>
                </el-select>
                <el-button type="primary">搜索</el-button>
                <el-button type="primary" plain>导出</el-button>
            </div>
            <div style="margin: 40px 0;">
                <el-table  style="width: 100%">
                    <el-table-column prop="a_username" label="供应商"></el-table-column>
                    <el-table-column prop="l_ip" label="商品名称"></el-table-column>
                    <el-table-column prop="create_time" label="图片"></el-table-column>
                    <el-table-column prop="l_browser" label="条形码"></el-table-column>
                    <el-table-column prop="l_browser" label="缺货量"></el-table-column>
                    <el-table-column prop="l_browser" label="状态"></el-table-column>
                    <el-table-column prop="l_browser" label="操作信息"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        background
                        layout="prev, pager, next">
                </el-pagination>
            </div>
        </div>


        <el-dialog v-dialogDrag title="缺货轨迹" center :visible.sync="isShow" width="30%">
            <el-form label-width="100px">
                <el-form-item label="状态">
                    <el-select placeholder="请选择状态" class="my-input">
                        <el-option  label=".label" value="item.value"></el-option>
                        <el-option  label="item.label" value="item.value"></el-option>
                        <el-option  label="item.label" value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="择缺货时间">
                    <el-date-picker
                            class="my-input"
                            style="width: 300px;"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="缺货开始"
                            end-placeholder="缺货结束">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="合计缺货数量">
                    <el-input
                            class="my-input"
                            clearable>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                </el-form-item>
            </el-form>
            <div style="margin: 40px 0;">
                <el-table max-height="100">
                    <el-table-column prop="l_browser" label="缺货量"></el-table-column>
                    <el-table-column prop="l_browser" label="状态"></el-table-column>
                    <el-table-column prop="l_browser" label="采购时间"></el-table-column>
                </el-table>
            </div>
            <div>
                <el-pagination
                        layout="prev, pager, next"
                        @current-change=""
                        :total="100"
                        background>
                </el-pagination>
            </div>
        </el-dialog>
        <el-dialog v-dialogDrag title="设置无货" center :visible.sync="isShow" width="30%">
            <el-form label-width="100px">
                <el-form-item label="无货时间">
                    <el-select placeholder="请选择状态" class="my-input">
                        <el-option  label=".label" value="item.value"></el-option>
                        <el-option  label="item.label" value="item.value"></el-option>
                        <el-option  label="item.label" value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-date-picker
                            class="my-input"
                            style="width: 300px;"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                isShow: true
            }
        },
        methods: {

        },
        beforeMount() {
        },
    };
</script>

<style scoped lang="scss">
    .search-div{
        display: flex;
        flex-wrap: wrap;
        .my-input{
            width: 150px;
            margin-right: 10px;
        }
    }
</style>
