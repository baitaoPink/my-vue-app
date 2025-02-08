import { createRouter, createWebHistory } from 'vue-router';
var routes = [
    {
        path: '/',
        name: 'Home',
        component: function () { return import('@/views/home/index.vue'); }
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
        component: function () { return import('@/views/about/index.vue'); }
    }
];
var router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
export default router;
