import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Welcome.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/About.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

