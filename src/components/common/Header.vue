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
                <ul>
                    <li v-for="(item,index) in nav" :key="index" @click="navTab(item.id)">
                        {{item.title}}
                    </li>
                </ul>
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
                        <el-dropdown-item command="checkUser">同步切换用户</el-dropdown-item>
                        <el-dropdown-item command="checkUser1">异步切换用户</el-dropdown-item>
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
            message: 2,
            nav:[{
                id:0,
                title:"首页",
            }]
        };
    },
    created () {
       this.getNav()
    },
    computed: {
        ...mapState(['userInfo']),
    },
    methods: {
        ...mapMutations(['setUserInfo']),
        ...mapActions(['setUserInfoAction','setSideId']),
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                loginOut().then(res => {
                    this.setUserInfo({});
                    this.$router.push('/login');
                }).catch(err => {
                    console.log(err)
                })
            }
            // 同步
            if (command == 'checkUser') {
                const userInfo = {
                    name: '大帅哥',
                    sex: '男',
                    headImg: 'https://ddxm661.com/static/admin/img/avatar.png'
                };
                this.setUserInfo(userInfo);
            }
            // 异步
            if (command == 'checkUser1') {
                this.setUserInfoAction();
            }
        },

        // nav点击
        navTab(id){
            this.setSideId(id)
        },

        // 获取导航
        getNav(){
            let router = window.localStorage.getItem("router")
            let nav = JSON.parse(router)
            nav.forEach(item=>{
                console.log("导航",item)
                let obj = {
                    id:item.id,
                    title:item.meta.title
                }
                this.nav.push(obj)
            })
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
        ul {
            list-style-type: none;
            display: flex;
            li {
                font-size: 16px;
                line-height: 50px;
                height: 50px;
                padding: 0 10px;
                &:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                &.active{
                    background: rgba(255, 255, 255, 0.3);
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
