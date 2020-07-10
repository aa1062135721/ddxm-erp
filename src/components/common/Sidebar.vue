<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#EAEDF1"
            text-color="#999999"
            active-text-color="#48C9B0"
            :collapse-transition="false"
            unique-opened
            router
        >
            <template v-for="(oneItem, oneIndex) in items">
                <el-submenu v-if="oneItem.children" :index="oneItem.path" :key="oneIndex">
                        <template slot="title">
                            <span slot="title">{{ oneItem.meta.title }}</span>
                        </template>
                        <template v-for="(twoItem, twoIndex) in oneItem.children">
                            <el-submenu v-if="twoItem.children" :index="twoItem.path" :key="twoIndex">
                                <template slot="title">
                                    <span slot="title">{{ twoItem.meta.title }}</span>
                                </template>
                                <el-menu-item v-for="(threeItem, threeIndex) in twoItem.children" :key="threeIndex" :index="threeItem.path">
                                    <template slot="title">
                                        <span slot="title">{{ threeItem.title }}</span>
                                    </template>
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="twoItem.path" :key="twoIndex">
                                <template slot="title">
                                    <span slot="title">{{ twoItem.meta.title }}</span>
                                </template>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                <el-menu-item v-else :index="oneItem.path" :key="oneIndex">
                    <template slot="title" >
                        <span slot="title">{{ oneItem.meta.title }}</span>
                    </template>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            collapse: false,
            items: []
        };
    },
    watch:{
        sideBarId(){
            this.getSideBar()
        }

    },
    computed: {
        ...mapState(['userInfo','sideBarId']),
        onRoutes() {
            return '/' + this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });

        this.getSideBar()
    },
    methods:{
        getSideBar(){
            this.userInfo.auth.forEach(item => {
                if(item.id == this.sideBarId){
                    this.items = item.children
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    overflow-y: scroll;
    background-color: #EAEDF1;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
.sidebar > ul >li{
    border-bottom: 1px dotted #ccc;
}
.is-active{
    background-color: #FFFFFF !important;
}
</style>
