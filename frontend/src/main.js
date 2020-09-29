// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// 추가된 부분
import axios from "axios";
Vue.prototype.$http = axios;
// this.$http를 통해 get, post같은 http request를 가능하게 함
// 추가된 부분 끝
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
