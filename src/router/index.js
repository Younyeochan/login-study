import { createRouter, createWebHistory } from 'vue-router';
import { beforeEach as validLoginBeforeEach } from './hook/validLogin';

const LoginPage = () => import('../components/LoginPage.vue');
const MainPage = () => import('../components/MainPage.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            component: LoginPage
        },
        { 
            path: '/main', 
            meta: { requiresAuth: true },
            component: MainPage
        },
    ]
})

router.beforeEach(validLoginBeforeEach)

export default router;