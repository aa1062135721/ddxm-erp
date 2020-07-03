<template>
  <div class="goodsAdd">
    <div>
      <div class="steps">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="选择商品分类"></el-step>
          <el-step title="填写商品信息"></el-step>
          <el-step title="填写商品属性"></el-step>
        </el-steps>
      </div>
    </div>
    <Classification v-if="flag===1"></Classification>
    <keep-alive>
      <Information v-if="flag===2"></Information>
    </keep-alive>
    <Attribute v-if="flag===3"></Attribute>
    <div v-if="flag===1">
      <el-button class="next" style="margin-top: 12px;" @click="next">下一步,填写商品信息</el-button>
    </div>
    <div v-else-if="flag===2">
      <el-button class="last" style="margin-top: 12px;" @click="last">上一步,选择商品分类</el-button>
      <el-button class="next" style="margin-top: 12px;" @click="next">下一步,填写商品属性</el-button>
    </div>
    <div v-else>
      <el-button class="last" style="margin-top: 12px;" @click="last">上一步,填写商品信息</el-button>
      <el-button class="next" style="margin-top: 12px;" @click="end">完成提交商品</el-button>
    </div>
  </div>
</template>

<script>
import Classification from '@/components/page/goods_management/goods_add/secondary_add/Classification';
import Information from './secondary_add/Information';
import Attribute from './secondary_add/Attribute';
import { goodsAdd } from '@/api/goods/goods_list';
export default {
    data() {
        return {
            active: 0,
            flag: 1,
            num: 1, //用于计算步骤页
            ids: '',
            id: ''
        };
    },
    methods: {
        next() {
            this.num++;
            if (this.active++ > 3) this.active = 0;
            if (this.num === 2) {
                this.flag = 2;
                let a = JSON.parse(sessionStorage.getItem('classification'));
                if (a) {
                    this.ids = a;
                }
            } else if (this.num === 3) {
                this.flag = 3;
            }
        },
        last() {
            this.num--;
            if (this.active-- > 3) this.active = 0;
            if (this.num === 1) {
                this.flag = 1;
            } else if (this.num === 2) {
                this.flag = 2;
            }
        },
        end() {
            if (this.active++ > 3) this.active = 3;
            if (this.ids.third) {
                if (this.ids.third) {
                    this.id = this.ids.third.id;
                } else {
                    this.id = this.ids.second.id;
                }
            }
            let data = {};
            data = JSON.parse(sessionStorage.getItem('usData'));
            data.g_class.push(this.id);
            data.g_specs.forEach(v => {
                v.initial_sales = 0;
            });
            console.log(data);
            goodsAdd(data).then(res => {
                if (res.code == 200) {
                    sessionStorage.clear();
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                }
            });
        }
    },
    components: {
        Classification,
        Information,
        Attribute
    },
    created() {
        let a = this.$route.query.type;
        let val = this.$route.query.val;
        if (a) {
            this.flag = a;
            sessionStorage.setItem('editGoods', JSON.stringify(val));
        }
    }
};
</script>

<style scoped lang="scss">
.goodsAdd {
     font-family: '微软雅黑';
    .next {
        position: relative;
        left: 45%;
        width: 200px;
        height: 40px;
        background-color: #47c9af;
        color: #fff;
    }
    .last {
        position: relative;
        left: 40%;
        width: 200px;
        height: 40px;
        background-color: #47c9af;
        color: #fff;
    }
}
</style>
