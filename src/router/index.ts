import { createRouter, createWebHistory } from 'vue-router';
import LoginLayout from '@/layouts/LoginLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import GameLayout from '@/layouts/PlayQuizLayout.vue';
import gameRoutes from './quiz';
import AdminLayout from '@/layouts/AdminLayout.vue';
import VideoCourseLayout from '@/layouts/VideoCourseLayout.vue';

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
      path: '/admin-sh/my-dashboard',
      name: 'admin',
      component: () => import('@/pages/admin/AdminPage.vue'),
      meta: { Layout: AdminLayout, requiredAuth: true },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/admin/DashboardPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'userList',
          name: 'userList',
          component: () => import('@/pages/admin/users/UserListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'questionList',
          name: 'questionList',
          component: () => import('@/pages/admin/quizzes/QuizListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'category-list',
          name: 'category-list',
          component: () => import('@/pages/admin/categories/CategoryListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'sub-category-list',
          name: 'sub-category-list',
          component: () => import('@/pages/admin/subcategories/SubCategoryPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'create-new-quiz',
          name: 'create-new-quiz',
          component: () => import('@/pages/admin/quizzes/CreateNewQuizPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'update-quiz/:id',
          name: 'update-quiz',
          component: () => import('@/pages/admin/quizzes/UpdateQuizPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        //
        {
          path: 'course-list',
          name: 'course-list',
          component: () => import('@/pages/admin/courses/AdminCourseListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'city-list',
          name: 'city-list',
          component: () => import('@/pages/admin/goc/CityListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'province-list',
          name: 'province-list',
          component: () => import('@/pages/admin/goc/ProvinceListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'district-list',
          name: 'district-list',
          component: () => import('@/pages/admin/goc/DistrictListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
        {
          path: 'tourist-site-list',
          name: 'tourist-site-list',
          component: () => import('@/pages/admin/tours/TourListPage.vue'),
          meta: { Layout: AdminLayout, requiredAuth: true }
        },
      ]
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('@/pages/courses/CourseListPage.vue'),
      meta: { Layout: VideoCourseLayout, requiredAuth: true }
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

    ...gameRoutes,
    {
      path: '/:catchAll(.*)',
      component: () => import('@/pages/NotFound.vue')
    }
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
