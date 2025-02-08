import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: () => import('@/views/settings/index.vue'),
  //   children: [
  //     {
  //       path: 'profile',
  //       name: 'Profile',
  //       component: () => import('@/views/settings/profile/index.vue')
  //     },
  //     {
  //       path: 'nested',
  //       name: 'Nested',
  //       component: () => import('@/views/settings/nested/index.vue'),
  //     }
  //   ]
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
