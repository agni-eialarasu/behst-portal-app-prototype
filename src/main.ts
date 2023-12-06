import { createApp } from "vue";
import { createPinia } from "pinia";
import VNum from "v3-num";
import { Tooltip } from "bootstrap";
import App from "./App.vue";

import router from "./router/default";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";

import "@/core/plugins/prismjs";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
// @ts-ignore
app.use(VNum);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initKtIcon(app);
initVeeValidate();

app.use(i18n);

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

app.mount("#app");
