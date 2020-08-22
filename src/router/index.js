import Vue from 'vue'
import VueRouter from 'vue-router'

import VAllProducts from '../components/pages/v-all-products.vue'
import VSets from '../components/pages/v-sets.vue'
import VRolls from '../components/pages/v-rolls.vue'
import VChicken from '../components/pages/v-chicken.vue'
import VSalads from '../components/pages/v-salads.vue'
import VShip from '../components/pages/v-ship.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Главная',
    component: VAllProducts
  },
  {
    path: '/sets',
    name: 'Сеты',
    component: VSets
  },
  {
    path: '/rolls',
    name: 'Роллы',
    component: VRolls
  },
  {
    path: '/chicken',
    name: 'Курица',
    component: VChicken
  },
  {
    path: '/salads',
    name: 'Салаты',
    component: VSalads
  },
  {
    path: '/ship',
    name: 'Доставка и оплата',
    component: VShip
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
