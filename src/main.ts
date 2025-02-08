// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import En from './locales/en'
import Zh from './locales/zh'

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
  .mount('#app')
