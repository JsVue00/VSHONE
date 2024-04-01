import { createRouter, createWebHistory } from 'vue-router'
import LoginLayout from '@/layouts/LoginLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import gameRoutes from './game'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: { Layout: DefaultLayout }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/pages/NotFound.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/authentication/LoginPage.vue'),
      meta: { Layout: LoginLayout }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/authentication/RegisterPage.vue'),
      meta: { Layout: LoginLayout }
    },
    ...gameRoutes
  ]
})

export default router
