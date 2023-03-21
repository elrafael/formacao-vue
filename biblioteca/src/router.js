import { createRouter, createWebHistory } from "vue-router";
import BookDashboard from "./components/BookDashBoard.vue";

const routes = [
  { path: '/', component: BookDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;