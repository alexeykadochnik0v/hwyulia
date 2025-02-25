import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from './views/TaskListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TaskListView',
      component: TaskListView,
    },
    {
      path: '/task/:id',
      name: 'taskpage',
      component: () => import('./views/TaskPageView.vue'),
    },
    {
      path: '/user/:id',
      name: 'userprofile',
      component: () => import('./views/UserProfileView.vue'),
    },
  ],
})

export default router
