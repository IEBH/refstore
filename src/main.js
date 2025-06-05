import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import store from './store'
import { createSyncPlugin } from "@iebh/vuex-tera-json";

const app = createApp(App);

//Vue Flow
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";

//PrimeVue
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

//Import $tera / @iebh/Tera-fy global service
import TeraFy from "@iebh/tera-fy";
import TerafyVue from "@iebh/tera-fy/plugins/vue3";
let terafy = new TeraFy()
  .set("devMode", import.meta.env.DEV) // TeraFy should be chatty and use all `setIfDev` settings
  .setIfDev("siteUrl", "http://localhost:7334/embed")
  .use(TerafyVue); // Add the Vue plugin
//terafy.init();
app.use(
  terafy.vuePlugin({
    globalName: "$tera", // Install as vm.$tera into every component
  })
);

const teraSyncPluginSetup = createSyncPlugin("refstore", true, {
  debounceMs: 100,
});
const teraSyncApi = teraSyncPluginSetup(store);
app.config.globalProperties.$teraSync = teraSyncApi;
app.use(store);

//Set VUE instance
(async () => {
  if (teraSyncApi && typeof teraSyncApi.setVueInstance === "function") {
    teraSyncApi.setVueInstance(app);
  } else {
    console.error("Failed to set Vue instance on TERA Sync API object.");
  }

  try {
    await terafy.init({ app });

    // --- Set TERA ready ---
    if (teraSyncApi && typeof teraSyncApi.setTeraReady === "function") {
      console.log("Setting TERA Ready on Sync Plugin");
      teraSyncApi.setTeraReady();
    } else {
      console.error("Failed to set TERA Ready on TERA Sync API object.");
    }
  } catch (er) {
    console.error("TeraFy initialization failed:", er);
  }
  app.mount("#app");
})();
