import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
// eslint-disable-next-line import/no-unresolved
import routes from 'virtual:generated-pages';
import App from './App.vue';
// import './styles/main.css';

const app = createApp(App);
// console.log(routes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

app.use(createPinia());
app.use(router);
app.mount('#app');
