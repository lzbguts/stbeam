import { createRouter, createWebHistory } from 'vue-router';
import { HomeView, GameView, NotFoundView, AboutView } from '../views'
import Random from '../components/Random/Random.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/games/:id',
      name: 'games',
      component: GameView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'default',
      component: NotFoundView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/random',
      name: 'random',
      component: Random
    }
  ]
});

export default router;
