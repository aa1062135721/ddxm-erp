<template>
    <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';
export default {
    name: 'App',
    provide() {
        return {
            reload: this.reload
        };
    },
    watch: {
        $route: {
            handler: function(val, oldVal){
                console.log('当前页面的按钮权限为：', val.meta.button || []);
                this.setAuthButtonAction(val.meta.button || []);
            },
            deep: true, // 深度观察监听
        }
    },
    data() {
        return {
            isRouterAlive: true
        };
    },
    methods: {
        ...mapActions(['setAuthButtonAction']),
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => {
                this.isRouterAlive = true;
            });
        }
    }
};
</script>
<style>
@import './assets/css/main.css';
/* @import './assets/css/color-dark.css'; 深色主题 */
@import "./assets/css/theme-green/color-green.css";   /* 浅绿色主题 */
</style>
