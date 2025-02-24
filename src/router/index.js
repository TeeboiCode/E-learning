import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppFooter from "../components/AppFooter.vue";
import AppNavBar from "../components/AppNavBar.vue";
import Card1 from "../components/Card1.vue";
import AppSignUp from "../components/Login and SignUp/AppSignUp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/appfooter",
    name: "appfooter",
    component: AppFooter,
  },
  {
    path: "/appnavbar",
    name: "appnavbar",
    component: AppNavBar,
  },
  {
    path: "/card1",
    name: "card1",
    component: Card1,
  },
  {
    path: "/app-signup",
    name: "app-signup",
    component: AppSignUp,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
