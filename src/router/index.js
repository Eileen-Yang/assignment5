import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Homeview.vue'
import Login from '../views/Loginview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ],
});

export default router;