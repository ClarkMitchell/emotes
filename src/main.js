import Vue from 'vue'
import App from './App.vue'
require('animate.css/animate.css');
require('./assets/animations.css');

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
