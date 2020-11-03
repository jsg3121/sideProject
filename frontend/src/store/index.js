import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: []
  },
  mutations: {
    loginCheck: function(state, userInfo) {
      state.user = userInfo;
    },
    logout: function(state) {
      state.user = [];
      location.reload();
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
