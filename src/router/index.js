import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/raw',
    name: 'Raw',
    component: () => import('@/views/Raw.vue'),
  },
  {
    path: '/cooked',
    name: 'Cooked',
    component: () => import('@/views/Cooked.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
