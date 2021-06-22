import Vue from 'vue'
import VueRouter from 'vue-router'

import CrHome from '@/views/CrHome'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CrHome
  },
  {
    path: '/coin/:id',
    name: 'coin-detail',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/CrDetail.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/CrAbout.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Cr404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
