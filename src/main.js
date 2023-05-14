import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueCookies from "vue-cookies";

import router from './router';

createApp(App)
.use(router)
.use(VueCookies)
.mount('#app');