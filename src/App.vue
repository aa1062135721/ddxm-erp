<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'App',
        watch: {
            $route: {
                handler: function(val, oldVal){
                    console.log('当前页面的按钮权限为：', val.meta.button || []);
                    this.setAuthButtonAction(val.meta.button || []);
                },
                deep: true, // 深度观察监听
            }
        },
        methods: {
            ...mapActions(['setAuthButtonAction']),
        }
    };
</script>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css';    /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   !* 浅绿色主题 *!*/
</style>
