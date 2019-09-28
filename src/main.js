import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = 'https://agile-crag-49831.herokuapp.com'

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
