import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HelpView from '../views/HelpView.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import OverviewTab from '../views/User/OverviewTab.vue'
import ListTab from '../views/User/ListTab.vue'
import HistoryTab from '../views/User/HistoryTab.vue'

const NotFoundView = () => import('../views/NotFoundView.vue')

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
    children: [
      {
        path: '',
        name: 'overview',
        component: OverviewTab,
      },
      {
        path: 'list',
        name: 'list',
        component: ListTab,
      },
      {
        path: 'history',
        name: 'history',
        component: HistoryTab,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  switch (to.name) {
    case 'overview':
      to.meta.transitionName = 'tab-slide-right'
      break
    case 'list':
      if (from.name === 'overview') {
        to.meta.transitionName = 'tab-slide-left'
      } else {
        to.meta.transitionName = 'tab-slide-right'
      }
      break
    case 'history':
      to.meta.transitionName = 'tab-slide-left'
      break
  }
})

export default router
