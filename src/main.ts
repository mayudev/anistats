import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@fontsource/jost/variable.css'
import { FontAwesomeIcon } from './lib/library'

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
