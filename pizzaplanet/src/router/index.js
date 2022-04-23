import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'MenuPizza',
    component: () => import( '../views/MenuPizza.vue')
  },
  {
    path: '/crear',
    name: 'CrearPizza',
    component: () => import( '../views/CrearPizza.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
