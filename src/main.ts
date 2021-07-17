import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookOpen, faChevronRight, faCog, faInfo, faLightbulb, faMoon, faQuestionCircle, faRandom, faList, faUserCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog, faChevronLeft, faChevronRight, faQuestionCircle, faMoon, faLightbulb, faInfo, faUserCircle, faBookOpen, faList, faRandom)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
