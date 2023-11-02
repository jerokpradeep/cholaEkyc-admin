// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import './assets/tailwind/tailwind.css';
import { default as notification } from './notification/index.js';
const app = createApp(App)
app.config.globalProperties.$notify = notification
app.use(router)
app.use(store)
app.mount('#app')
