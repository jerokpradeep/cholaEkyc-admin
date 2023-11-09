// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import './assets/tailwind/tailwind.css';
import { default as notification } from './notification/index.js';
import VueCropper from 'vue-cropper'; 
// import 'vue-cropper/dist/index.css'


const app = createApp(App)
app.config.globalProperties.$notify = notification
app.use(router)
app.use(store)
app.use(VueCropper)

import spinner from "./components/utilComponents/spinner.vue"
import btnLoader from "./components/utilComponents/button-loader.vue"
app.component('spinner', spinner);
app.component('btnLoader', btnLoader);
app.mount('#app')
