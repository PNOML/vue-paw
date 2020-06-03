export default {
  actions: {
    async fetchGoods({ commit }) {
      const res = await fetch("http://localhost:3000/goods");
      const goods = await res.json();

      commit('updateGoods', goods)
    }
  },
  mutations: {
    updateGoods(state, goods) {
      state.goods = goods;
    }
  },
  state: {
    goods: []
  },
  getters: {
    chosenGoods(state) {
      console.log(state.goods)
      return state.goods.filter(item => {
        return item.navBid === 'cat' && item.sideBid === 'stern';
      })
    }
  }
}