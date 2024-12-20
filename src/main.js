/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from './router';
// Components
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts';


// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.usd(VueApexCharts)

app.mount('#app')
