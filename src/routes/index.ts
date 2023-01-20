import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../components/pages/MainPage.vue'),
    },
    {
        path: '/favourites',
        name: 'Favourites',
        component: () => import('../components/pages/FavouritesPage.vue'),
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('../components/pages/BasketPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: ({ hash }, _, savedPosition) =>
        savedPosition || hash
            ? { selector: hash, behavior: 'smooth' }
            : { left: 0, top: 0, behavior: 'smooth' },
});

export default router
