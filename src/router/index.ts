import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";

import Main from "../components/User/Main.vue";
import List from "../components/List/List.vue";
import History from "../components/History/History.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:user",
    name: "User",
    component: User,
    children: [
      {
        path: "",
        component: Main,
      },
      {
        path: "list/anime",
        component: List,
        name: "AnimeList",
        props: {
          type: "anime",
        },
      },
      {
        path: "list/manga",
        component: List,
        name: "MangaList",
        props: {
          type: "manga",
        },
      },
      {
        path: "history/anime",
        component: History,
        name: "AnimeHistory",
      },
      {
        path: "history/manga",
        component: History,
        name: "MangaHistory",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
