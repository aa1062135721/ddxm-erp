import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'; // vuex持久化存储工具

Vue.use(Vuex);

const state = {
    userInfo: {},
    sideBarId:0
};

const mutations = {
    setUserInfo(state, saveData = {}) {
        state.userInfo = saveData;
    },
    setId(state,id){
        state.sideBarId = id
    }
};

const actions = {
    setSideId({commit},id) {
        console.log("得到ID",id)
        commit('setId',id)
    }
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
