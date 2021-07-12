import Vue from 'vue'
import VueRouter from 'vue-router'

import AppLayout from '@/views/app/AppLayout'
import AuthLayout from '@/views/auth/AuthLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppLayout,
    redirect: { name: 'home' },
    children: [
      {
        path: '/inicio',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/app/Home.vue')
      },
      {
        path: '/coin/:id',
        name: 'coin-detail',
        component: () => import(/* webpackChunkName: "about" */ '@/views/app/Detail.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/app/About.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    redirect: { name: 'login' },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/auth/Login.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'error',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
