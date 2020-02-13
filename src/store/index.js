import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'; // vuex持久化存储工具

Vue.use(Vuex);

const state = {
    userInfo: {
        // name: '大帅哥',
        // sex: '男',
        // headImg: 'https://ddxm661.com/static/admin/img/avatar.png'
    }
};

const mutations = {
    setUserInfo(state, saveData = {}) {
        state.userInfo = saveData;
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
