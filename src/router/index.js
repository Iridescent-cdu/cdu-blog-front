import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'front',
      component: () => import('@/layout/front/index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/front/home/index.vue'),
          meta: {
            showHeaderSearch: true,
          },
        },
        {
          path: '/tags',
          name: 'tags',
          component: () => import('@/views/front/tags/index.vue'),
          meta: {
            showHeaderSearch: false,
          },
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/front/login/index.vue'),
          meta: {
            showHeaderSearch: true,
          },
        },
        {
          path: '/sign',
          name: 'sign',
          component: () => import('@/views/front/sign/index.vue'),
          meta: {
            showHeaderSearch: true,
          },
        },
        {
          path: '/profile',
          name: 'userInfo',
          component: () => import('@/views/front/profile/index.vue'),
          meta: {
            showHeaderSearch: true,
          },
        },
        {
          path: '/article/:id',
          name: 'article',
          component: () => import('@/views/front/article/index.vue'),
          meta: {
            showHeaderSearch: true,
          },
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/layout/admin/index.vue'),
      children: [
        // {
        //   path: '/admin',
        //   name: 'admin',
        //   component: () => import('@/views/admin/dashboard/index.vue'),
        // },
        {
          path: '/admin/profile',
          name: 'profile',
          component: () => import('@/views/admin/profile/index.vue'),
        },
        {
          path: '/admin/edit/:id',
          name: 'edit',
          component: () => import('@/views/admin/write/index.vue'),
        },
        {
          path: '/admin/write/',
          name: 'write',
          component: () => import('@/views/admin/write/index.vue'),
        },
        {
          path: '/admin/all',
          name: 'all',
          component: () => import('@/views/admin/all/index.vue'),
        },
      ],
    },
  ],
})
