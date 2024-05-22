import './main.css'

import { createApp, markRaw } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

pinia.use( ({store}) => {
    store.router = markRaw(router);
})

pinia.use(piniaPluginPersistedstate)

app.mount('#app')
