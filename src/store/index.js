import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'; // vuex持久化存储工具

Vue.use(Vuex);

const state = {
    userInfo: {},
    sideBarId: "",// 当前选中的头部id
    authButton: [],// 当前页面点按钮权限列表
    goodsinfo_id:{},//商品分类选中id
};

const mutations = {
    setUserInfo(state, saveData = {}) {
        state.userInfo = saveData;
    },
    setId(state,id){
        state.sideBarId = id
    },
    setAuthButton(state, saveData = []) {
        state.authButton = saveData
    },
    setGoodsinfoId(state,data){
        state.goodsinfo_id = data
    },
};

const actions = {
    setSideId({commit},id) {
        commit('setId',id)
    },
    setAuthButtonAction({commit}, saveData) {
        commit('setAuthButton', saveData)
    },
};

const getters = {
    userInfo: state => state.userInfo
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [
        createPersistedState()
    ]
});
