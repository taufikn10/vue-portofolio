import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import Vue from "vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./assets/main.css";
import getters from "./getters";
import projectStore from "./stores/projectStore";

const app = createApp(App);

app.mixin(getters);

app.use(createPinia());
app.use(router, projectStore);

/* add icons to the library */
library.add(fas, fab);
/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
