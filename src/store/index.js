import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: []
  },
  getters: {
    GOODS(state) {
      console.log(state.goods)
      return state.goods;
    }
  },
  actions: {
    GET_GOODS_FROM_API({ commit }) {
      return axios('http://localhost:3000/goods', {
        method: "GET"
      })
        .then(goods => {
          console.log(goods)
          commit('SET_GOODS_TO_STATE', goods.data);
          return goods;
        })
        .catch(e => {
          console.log(e);
          return e;
        })
    }
  },
  mutations: {
    SET_GOODS_TO_STATE: (state, goods) => {
      state.goods = goods;
    }
  },

  modules: {
  }
})
