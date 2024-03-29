import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView.vue';
import SearchView from '../views/SearchView.vue';
import DetailsView from '../views/DetailsView.vue';
import PlayView from '../views/PlayView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/:bingoId',
    name: 'details',
    component: DetailsView,
  },
  {
    path: '/:bingoId/play',
    name: 'play',
    component: PlayView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
