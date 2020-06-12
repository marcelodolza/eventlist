import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import mixins from "@/utils/mixins.js";
import "@/utils/filters";
import "@/assets/styles/ant.less";
import "@/assets/styles/main.scss";

Vue.mixin(mixins);
Vue.use(Antd);

// import { DatePicker, Layout, Button } from "ant-design-vue";

/* Vue.use({
  DatePicker,
  Layout,
  Button
}); */

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
