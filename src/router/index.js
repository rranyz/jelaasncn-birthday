import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Letter from '@/views/Letter.vue'

import { layoutMiddleware } from './layoutMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'letter',
      component: Letter,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/birthday',
      name: 'home',
      component: Home,
      meta: {
        layout: 'Birthday',
      },
    },
  ],
})

router.beforeEach(layoutMiddleware)

export default router
