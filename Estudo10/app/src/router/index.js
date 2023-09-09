import { createRouter, createWebHashHistory } from 'vue-router'

import SobreView from '../views/SobreView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path : '/home',
    name : 'home',
    component:HomeView
  },
  {
    path : '/sobre',
    name : 'sobre',
    component:SobreView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes:routes
})

export default router
