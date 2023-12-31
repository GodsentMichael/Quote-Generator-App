import { createApp } from 'vue'
import './style.css'
import './assets/index.css'
// import store from './store'
import router from './router'

import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')