import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path : '/home',
    name : 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path : '/sobre',
    name : 'sobre',
    component: () => import('../views/SobreView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
