export default {
  state: {
    goods: []
  },
  getters: {
    allGoods(state) {
      return state.goods
    }
  },
  mutations: {
    updateGoods(state, goods) {
      state.goods = goods;
    }
  },
  actions: {
    async fetchGoods(ctx) {
      const res = await fetch("http://localhost:3000/goods");
      const goods = await res.json();

      ctx.commit('updateGoods', goods)
    }
  }
}