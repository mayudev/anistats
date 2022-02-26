import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import { faBookOpen, faChevronRight, faCog, faInfo, faLightbulb, faMoon, faQuestionCircle, faRandom, faList, faUserCircle, faChevronLeft, faTimes, faHistory, faPlay, faStop, faPause, faCheck, faClock, faBars, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog as IconDefinition, faChevronLeft as IconDefinition, faChevronRight as IconDefinition, faQuestionCircle as IconDefinition, faMoon as IconDefinition, faLightbulb as IconDefinition, faInfo as IconDefinition, faUserCircle as IconDefinition, faBookOpen as IconDefinition, faList as IconDefinition, faRandom as IconDefinition, faTimes as IconDefinition, faHistory as IconDefinition, faPlay as IconDefinition, faStop as IconDefinition, faPause as IconDefinition, faCheck as IconDefinition, faClock as IconDefinition, faBars as IconDefinition, faRedoAlt as IconDefinition)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
