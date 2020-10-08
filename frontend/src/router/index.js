import Vue from "vue";
import Router from "vue-router";
import Posting from "@/views/Posting";
import Detail from "@/views/DetailPosting";
import Write from "@/views/WritePosting";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Posting",
      component: Posting
    },
    //디테일페이지
    {
      path: "/detail/:data",
      name: "Detail",
      component: Detail
    },
    {
      path: "/write",
      name: "Write",
      component: Write
    }
  ]
});
