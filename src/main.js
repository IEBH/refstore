import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
const app = createApp(App);

//Vue Flow
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

//PrimeVue 
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'; 

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

//Sync State
import store from './store'
import { createSyncPlugin } from '@iebh/vuex-tera-json'

const teraSyncPluginSetup = createSyncPlugin('refstore', true, {
      debounceMs: 100
})
const teraSyncApi = teraSyncPluginSetup(store)
app.config.globalProperties.$teraSync = teraSyncApi
app.use(store)


//TeraFy
import TeraFy from '@iebh/tera-fy';
import TerafyVue from '@iebh/tera-fy/plugins/vue3';
let terafy = new TeraFy()
  .set('devMode', import.meta.env.DEV) // TeraFy should be chatty and use all `setIfDev` settings
  .setIfDev('siteUrl', 'http://localhost:7334/embed')
  .use(TerafyVue) // Add the Vue plugin

terafy.init(); // Initialize everything
app.use(terafy.vuePlugin({
      globalName: '$tera', // Install as vm.$tera into every component
}));

//vuex-tera-json
//import { createSyncPlugin } from '@iebh/vuex-tera-json'

app.use(PrimeVue, {
      theme: {
            preset: Aura
        }
});

app.mount('#app')
