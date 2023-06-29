import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "login",
      path: "/",
      component: () => import("./pages/Login.vue"),
    },
    {
      name: 'home',
      path: '/home',
      component: () => import("./pages/Home.vue"),
    }
  ],
});

export default router;
