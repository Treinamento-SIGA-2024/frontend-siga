import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './routes/index.js'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);
app.config.globalProperties.global = {
    colors: {
        green0: "#C1DEBE",
        green1: "#86C497",
        green2: "#53B584",
        green3: "#41AF75",
        green4: "#19856E"
    },
    font: "Source Sans"
    };

app.use(vuetify).use(router).mount('#app');
