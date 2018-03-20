import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const stateStore = new Vuex.Store({
  modules: {},
  state,
  getters: {},
  actions: {},
  mutations: {}
})

export default stateStore
