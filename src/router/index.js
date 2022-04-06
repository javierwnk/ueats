import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',

    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/cart',
    name: 'cart',

    component: () => import('../views/CartView.vue')
  },
  {
    path:'/details/:id',
    name: 'details',

    component: () => import('../views/ProductView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
