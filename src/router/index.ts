import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',redirect: '/dashboard'},
    {path: '/login',name: 'login', component: () => import('@/views/login.vue')},
    {path: '/setting', component: () => import('@/views/setting.vue')}, 
    {path: '/dashboard', component: () => import('@/views/dashboard.vue')},
    {path: '/:pathMatch(.*)', name: 'not-found',component: () => import('@/views/404.vue')},
  ]
});

export default router
