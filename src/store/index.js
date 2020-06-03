import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import goods from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goods
  }
})
