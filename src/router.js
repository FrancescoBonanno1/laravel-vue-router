import { createRouter, CReateWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history :CReateWebHistory(),
    routes :{
        path: '/',
        name: 'home',
        component: AppHome
    },
    {
        path: '/',
        name: 'about',
        component: AppAbout
    }
});

export { router };
