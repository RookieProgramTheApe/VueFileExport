import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import JsonExcel from 'vue-json-excel'

Vue.config.productionTip = false
Vue.component('downloadExcel', JsonExcel)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
