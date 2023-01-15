import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/About.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomePage

    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
