import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Special from '../views/Special.vue';
import User from '../views/User.vue';

import Help from '../components/Special/Help.vue';
import About from '../components/Special/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/s',
    name: 'Special',
    component: Special,
    children: [
      {
        path: 'help',
        component: Help
      },
      {
        path: 'about',
        component: About
      }
    ]
  },
  {
    path: '/:user',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
