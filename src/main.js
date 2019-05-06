import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// Ensure you have installed the `css-loader`
import '@mdi/font/css/materialdesignicons.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
