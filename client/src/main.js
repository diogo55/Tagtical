import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueApexCharts from 'vue-apexcharts'


Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueApexCharts)

Vue.component('apexchart',VueApexCharts)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
