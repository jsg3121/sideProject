import Vue from "vue";
import Router from "vue-router";
import Posting from "@/views/Posting";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Posting",
      component: Posting
    }
  ]
});
