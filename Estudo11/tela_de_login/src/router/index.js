import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import autenticação from './autenticação'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/logado',
    name: 'logado',
    component: () => import(/* webpackChunkName: "about" */ '../views/LogadoView.vue'),
    meta:{requireAuth: true},
  
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (autenticação.isAuthenticated()) {
      next();
    } else {
      next('/');
    }
  } else {
    next(); 
  }
});






export default router
