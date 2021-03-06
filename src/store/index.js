import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '未登录'
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    }
  },
  actions: {
    modifyName({commit}, newName) {
      commit('setName', newName);
    }
  }
});
