import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from "vue-socket.io";
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/global.scss'

axios.defaults.withCredentials = true
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'localhost:5050',
}))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
