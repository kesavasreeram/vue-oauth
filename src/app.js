import Vue from 'vue'
import router from './router.js'
import store from './state-management.js'

const app = new Vue({
  router,
  store
})

export { app, router, store }
