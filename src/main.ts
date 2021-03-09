import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/index'
import utils from '@/utils'
import '@/styles/main.scss'
import '@/assets/iconfont/iconfont.css'
import 'ambre-plugin/dist/ambre-plugin.css'
const app = createApp(App)
app.config.globalProperties.$utils = utils
app.use(store)
app.use(router)
app.use(components)
app.mount('#app')
