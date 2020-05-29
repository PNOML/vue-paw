import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'auth' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'auth' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    meta: { layout: 'main' },
    component: () => import('../views/Goods.vue')

  },
  {
    path: '/delivery',
    name: 'Delivery',
    meta: { layout: 'main' },
    component: () => import('../views/Delivery.vue')
  },
  {
    path: '/bonuses',
    name: 'Bonuses',
    meta: { layout: 'main' },
    component: () => import('../views/BonusPage.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: { layout: 'main' },
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { layout: 'main' },
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main' },
    component: () => import('../views/LC/Profile.vue')
  },
  {
    path: '/history',
    name: 'Profile',
    meta: { layout: 'main' },
    component: () => import('../views/LC/OrderHistory.vue')
  },
  {
    path: '/offer',
    name: 'Profile',
    meta: { layout: 'main' },
    component: () => import('../views/LC/PersonalOffer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
