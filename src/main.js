import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

// Echart
import Echarts from 'echarts-vue/src/components/echarts/index-full.js'
Echarts.install(Vue)

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
