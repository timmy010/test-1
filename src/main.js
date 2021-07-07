import "normalize.css";
import Vue from "vue";
import VueScrollmagic from "vue-scrollmagic";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueScrollmagic);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueScrollmagic,
  render: (h) => h(App),
}).$mount("#app");
