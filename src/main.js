import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './scss/global.scss'
import { IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
