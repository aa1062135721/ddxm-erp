<template>
    <div class="header">
        <div class="header-left">
            <!-- 折叠按钮 -->
            <div class="collapse-btn" @click="collapseChage">
                <i v-if="!collapse" class="el-icon-s-fold"></i>
                <i v-else class="el-icon-s-unfold"></i>
            </div>
            <div class="logo">
                <img src="../../assets/img/logo.png" alt="">
                <span>捣蛋熊</span>
            </div>
            <div class="my-menu">
                <el-menu :default-active="'' + sideBarId" active-text-color="#fff" text-color="#fff" class="nav-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item v-for="(item, index) in userInfo.auth" :index="'' + item.id" :key="index">{{item.meta.title}}</el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="header-right">
            <div class="header-user-con">

                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img :src="userInfo.headImg || 'https://ddxm661.com/static/admin/img/avatar.png'" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{userInfo.username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '../common/bus';
import { mapState, mapActions, mapMutations } from 'vuex';
import { loginOut } from '@/api/user.js';

export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            message: "",
        };
    },
    created () {
    },
    computed: {
        ...mapState(['userInfo', 'sideBarId']),
    },
    methods: {
        ...mapMutations(['setUserInfo']),
        ...mapActions(['setSideId']),
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                loginOut().then(res => {
                    this.setUserInfo({});
                    window.localStorage.removeItem('router')
                    this.$router.push({
                        path: '/login'
                    });
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        handleSelect(key, keyPath){
            this.setSideId('' + key)
        },

        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },

        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>

<style scoped lang="scss">
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 22px;
    color: #fff;
    background-color: #3498DB;
    display: flex;
    justify-content: space-between;
}

.header-left{
    display: flex;
    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 50px;
    }
    .logo {
        display: flex;
        align-items: center;
        img{
            height: 40px;
            margin-right: 10px;
        }
        padding: 0 10px;
        line-height: 50px;
    }
    .my-menu {
        height: 50px;
        line-height: 50px;
        .nav-demo{
            height: 50px;
            line-height: 50px;
            background-color: #3498DB;
            li{
                height: 100%;
                color: #ffffff;
                border: transparent;
                &.is-active{
                    /*border-bottom:2px solid #ffffff;*/

                    background-color: #2b78ac;
                }
                &:hover{
                    background: #2b78ac;
                }
            }
        }
    }

}

.header-right {
    .header-user-con {
        display: flex;
        height: 50px;
        align-items: center;

        .btn-fullscreen {
            transform: rotate(45deg);
            padding: 0 10px;
            font-size: 24px;
        }
        .btn-bell,
        .btn-fullscreen {
            position: relative;
            width: 30px;
            height: 30px;
            text-align: center;
            border-radius: 15px;
            cursor: pointer;
        }
        .btn-bell-badge {
            position: absolute;
            right: 0;
            top: -2px;
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background: #f56c6c;
            color: #fff;
        }
        .btn-bell .el-icon-bell {
            color: #fff;
        }
        .user-name {
            padding: 0 10px;
        }
        .user-avator {
            margin-left: 20px;
        }
        .user-avator img {
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .el-dropdown-link {
            color: #fff;
            cursor: pointer;
        }
        .el-dropdown-menu__item {
            text-align: center;
        }
    }
}
</style>
