import { createApp } from "vue";
import App from "./App.vue";
import ToyElement from "play-elements";

import "play-elements/dist/index.css";

createApp(App).use(ToyElement).mount("#app");
