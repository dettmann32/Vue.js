import { createRouter, createWebHashHistory } from 'vue-router'

import PedidosView from '../views/PedidosView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path : '/',
    name : 'home',
    component:HomeView
  },
  {
    path : '/pedidos',
    name : 'pedidos',
    component:PedidosView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes:routes
})

export default router
