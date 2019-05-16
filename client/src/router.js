import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Event from './views/Event.vue'
import Single from './views/Single.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Event
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/events/:id',
      component: Single
    },
  ]
})
