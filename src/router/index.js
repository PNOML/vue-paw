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
    path: '/cart',
    name: 'Cart',
    meta: { layout: 'main' },
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
