import { createRouter, createWebHistory } from "vue-router";
import BookDashboard from "./components/BookDashboard.vue";
import About from "./components/About.vue";

const routes = [
  { path: '/', component: BookDashboard },
  { path: '/home', redirect: '/' },
  // { path: '/favourites', component: },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;