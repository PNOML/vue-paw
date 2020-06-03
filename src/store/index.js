import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import goods from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   goods: []
  // },
  // getters: {
  //   GOODS(state) {
  //     console.log(state.goods)
  //     return state.goods;
  //   }
  // },
  // mutations: {
  //   SET_GOODS_TO_STATE: (state, goods) => {
  //     state.goods = goods;
  //   }
  // },
  // actions: {
  //   GET_GOODS_FROM_API({ commit }) {
  //     return axios('http://localhost:3000/goods', {
  //       method: "GET"
  //     })
  //       .then(goods => {
  //         console.log(goods)
  //         commit('SET_GOODS_TO_STATE', goods.data);
  //         return goods;
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         return e;
  //       })
  //   }
  // },

  modules: {
    goods
  }
})
