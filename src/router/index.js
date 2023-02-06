import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import GameView from '../views/GameView/GameView.vue';
import NotFoundView from '../views/NotFoundView/NotFoundView.vue';
import AboutView from '../views/AboutView/AboutView.vue';

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
    }
  ]
});

export default router;
