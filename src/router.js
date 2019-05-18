import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'cinema',
      component: () => import('./views/Cinema.vue')
    },
    {
      path: '/',
      name: 'hall',
      component: () => import('./views/Hall.vue')
    },
    {
      path: '/',
      name: 'welfare',
      component: () => import('./views/Welfare.vue')
    },
    {
      path: '/',
      name: 'me',
      component: () => import('./views/Me.vue')
    }
  ]
})
