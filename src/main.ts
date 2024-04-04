import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import ElementPlus from 'element-plus';
import { createI18n } from 'vue-i18n';
import '@/assets/css/style.css';
import '@/assets/css/global.css';
import '@/assets/css/app.css';
import 'element-plus/dist/index.css';
import '@/assets/css/global.css';
import en from '@/locales/en.json';
import kh from '@/locales/kh.json';
import App from './App.vue';
import router from './router';
import { appStore } from '@/stores';

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(pinia);
pinia.use(piniaPluginPersistedstate);
const store = appStore();

const i18n = createI18n({
  locale: store.locale,
  messages: {
    en: en,
    kh: kh
  }
});
app.use(i18n);
app.mount('#app');
