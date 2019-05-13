import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueP5 from 'vue-p5'


Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueP5)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
