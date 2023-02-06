import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/main.css'

import router from './router';
import Popper from 'vue3-popper';

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(far);
library.add(fas);
library.add(fab);

const app = createApp(App);

app.config.globalProperties.$appName = document.title;
app.config.globalProperties.$stbeamAPI = import.meta.env.VITE_STBEAM_API;
app.config.globalProperties.$exchangeAPI = import.meta.env.VITE_EXCHANGE_API;
app.use(router);
app.component("Popper", Popper);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
