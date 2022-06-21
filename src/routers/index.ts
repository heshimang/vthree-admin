import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'main' }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue'),
    meta: {
      requiresAuth: false,
      title: '首页',
      key: 'main'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false
})

export default router
