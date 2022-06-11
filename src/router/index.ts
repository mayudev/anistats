import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HelpView from '../views/HelpView.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
  },
  {
    path: '/user/:username',
    name: 'user',
    component: UserView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
