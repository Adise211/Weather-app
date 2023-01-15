import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import FavoritesPage from './pages/Favorites.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomePage

    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesPage
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
