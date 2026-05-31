import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuView from "../views/MenuView.vue";
import ReserveView from "../views/ReserveView.vue";
import StoryView from "../views/StoryView.vue";
import VisitView from "../views/VisitView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/menu", name: "menu", component: MenuView },
  { path: "/story", name: "story", component: StoryView },
  { path: "/reserve", name: "reserve", component: ReserveView },
  { path: "/visit", name: "visit", component: VisitView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
