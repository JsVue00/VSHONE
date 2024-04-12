import { createRouter, createWebHistory } from 'vue-router';
import LoginLayout from '@/layouts/LoginLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import GameLayout from '@/layouts/GameLayout.vue';
import gameRoutes from './game';
import AdminLayout from '@/layouts/AdminLayout.vue';
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
      path: '/admin',
      name: 'admin',
      component: () => import('@/pages/admin/AdminPage.vue'),
      meta: { Layout: AdminLayout, requiredAuth: true },
      children: [
        {
          path: 'userList',
          name: 'userList',
          component: () => import('@/pages/admin/UserListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'questionList',
          name: 'questionList',
          component: () => import('@/pages/admin/QuestionListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        }
      ]
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
});
const isToken = 'sdsfgdsfdsf';

router.beforeEach((to, from, next) => {
  if (to.meta.Layout === LoginLayout) {
    document.title = `${to.name?.toString().charAt(0).toUpperCase()}${to.name?.toString().slice(1)}`;
  } else if (to.meta.Layout === GameLayout) {
    document.title = 'Welcome Quiz';
  } else {
    document.title = 'VSHONE';
  }
  if (to.meta.requiredAuth && !isToken) next('/login');
  next();
});

export default router;
