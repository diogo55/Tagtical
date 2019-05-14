import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGL from "vue-gl";

Object.keys(VueGL).forEach(name => {
    Vue.component(name, VueGL[name]);
});


Vue.config.productionTip = false

Vue.use(Vuetify)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
