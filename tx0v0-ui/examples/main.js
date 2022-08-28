import Vue from 'vue'
import App from './App.vue'
import TxUI from '../packages'

Vue.config.productionTip = false
Vue.use(TxUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
