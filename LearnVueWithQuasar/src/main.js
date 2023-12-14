// import './assets/main.css'

import { createApp } from 'vue'
import App from './components/GettingStarted/HowToUse.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(router)

app.mount('#app')
