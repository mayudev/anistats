import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faCog, faInfo, faLightbulb, faMoon, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog, faChevronRight, faQuestionCircle, faMoon, faLightbulb, faInfo)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
