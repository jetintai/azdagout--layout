import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue';
import './assets/scss/_main.scss';

import Home from '@/components/views/HomePage.vue';
import Projects from '@/components/views/ProjectsPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/projects', name: 'Projects', component: Projects}
    ]
});

createApp(App).use(router).mount('#app');
