import { createRouter, createWebHistory } from "vue-router";
import Homeview from '../views/Homeview.vue'
import Loginview from '../views/Loginview.vue'
import Purchaseview from '../views/Purchaseview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Homeview
    },
    {
      path: '/login',
      component: Loginview
    },
    {
      path: '/purchase',
      component: Purchaseview
    }
  ],
});

export default router;