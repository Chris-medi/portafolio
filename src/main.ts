import { createApp } from "vue";
import "./style.css";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";

const app = createApp(App);

app.use(MotionPlugin);

app.mount("#app");
