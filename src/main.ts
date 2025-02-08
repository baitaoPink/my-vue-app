import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import En from './locales/en'
import Zh from './locales/zh'
import router from './router';
import 'vant/lib/index.css';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en:En,
    zh:Zh
  }
})

createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app')
