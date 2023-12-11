import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/Page1', component: () => import('../components/Essentials/Page1.vue') },
    { path: '/Users/:id', component: () => import('../components/Essentials/User.vue') },
    { path: '/Users/:id/posts/:postId', component: () => import('../components/Essentials/User.vue') },
  ]
})

export default router
