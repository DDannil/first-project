import Vue from 'vue'
//import App from './App.vue'
import HomeView from './HomeView.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(HomeView),
}).$mount('#home')
