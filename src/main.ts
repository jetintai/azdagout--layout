import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue';
import 'bootstrap';
import './assets/scss/_main.scss';

import Home from '@/components/views/HomePage.vue';
import Projects from '@/components/views/ProjectsPage.vue';
import Tags from '@/components/views/TagsPage.vue';
import Break from '@/components/views/BreakPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/projects', name: 'Projects', component: Projects},
        { path: '/tags', name: 'Tags', component: Tags },
        { path: '/break', name: 'Break', component: Break }
    ]
});

createApp(App).use(router).mount('#app');
