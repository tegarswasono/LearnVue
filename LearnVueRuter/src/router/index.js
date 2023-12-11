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

    //Learn
    {
      path: '/GettingStart/Page1',
      name: 'GettingStartPage1',
      component : () => import('../components/Essentials/GettingStarted/Page1.vue')
    },
    {
      path: '/GettingStart/Page2',
      name: 'GettingStartPage2',
      component : () => import('../components/Essentials/GettingStarted/Page2.vue')
    },
    {
      path: '/GettingStart/Page3',
      name: 'GettingStartPage3',
      component : () => import('../components/Essentials/GettingStarted/Page3.vue')
    }
  ]
})

export default router
