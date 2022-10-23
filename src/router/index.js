import Vue from "vue";
import VueRouter from "vue-router";
import about from "../views/AboutView.vue";
import auth from "../views/Auth.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "DashboardLayout" */ "../layouts/DashboardLayout.vue"
      ),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "HomePage" */ "../views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/auth",
    name: "auth",
    component: auth,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
