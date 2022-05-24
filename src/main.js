import Vue from 'vue'

//import App from './App.vue'
import HomeView from './HomeView.vue'

import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(HomeView)
}).$mount('#home')
