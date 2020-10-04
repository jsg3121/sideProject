import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 추가된 부분
import axios from "axios";

import vuetify from "./plugins/vuetify";
Vue.prototype.$http = axios;
// this.$http를 통해 get, post같은 http request를 가능하게 함
// 추가된 부분 끝
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
