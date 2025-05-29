import { createStore } from 'vuex'
import fieldList from './fieldList'

const store = createStore({
  modules: {
    fieldList,
  },
  actions: {
    resetStore({ commit }) {
      commit("fieldList/reset");
    },
  },
});

export default store