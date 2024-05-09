import GameLayout from '@/layouts/PlayQuizLayout.vue';

const routes = [
  {
    path: '/',
    name: 'game',
    component: () => import('@/pages/startquiz/IndexPage.vue')
  },
  {
    path: '/:type/:id',
    name: 'welcome',
    component: () => import('@/pages/startquiz/StartQuizPage.vue')
  }
];

const gameRoutes = routes.map((route) => ({
  ...route,
  path: `/games${route.path}`,
  meta: { Layout: GameLayout }
}));

export default gameRoutes;
