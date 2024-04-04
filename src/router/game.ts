import GameLayout from '@/layouts/GameLayout.vue';

const routes = [
  {
    path: '/',
    name: 'game',
    component: () => import('@/pages/games/IndexPage.vue'),
    children: [
      {
        path: '/games/:id',
        name: 'welcome',
        component: () => import('@/pages/games/Game01Page.vue')
      }
    ]
  }
];

const gameRoutes = routes.map((route) => ({
  ...route,
  path: `/games${route.path}`,
  meta: { Layout: GameLayout }
}));

export default gameRoutes;
