import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'; // vuex持久化存储工具

Vue.use(Vuex);

const state = {
    userInfo: {
        // name: '大帅哥',
        // sex: '男',
        // headImg: 'https://ddxm661.com/static/admin/img/avatar.png'
    },
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
    setUserInfoAction({ commit }) {
        const userInfo = {
            name: '小可爱',
            sex: '女',
            headImg: 'https://ddxm661.com/static/admin/img/avatar.png'
        };
        setTimeout(() => {
            commit('setUserInfo', userInfo);
        }, 2000);
    },
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
