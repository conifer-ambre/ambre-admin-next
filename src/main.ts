import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/index'
import '@/styles/main.scss'
import 'ambre-plugin/dist/ambre-plugin.css'
createApp(App).use(store).use(router).use(components).mount('#app')
