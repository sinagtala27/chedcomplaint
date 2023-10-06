import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "tw-elements";


// views-USER
import Landing from "../views/Landing.vue"
import Login from "../views/Login.vue"
import Complaints from"../components/user/Complaints.vue"

//views-ADMIN
import Dashboard from "../components/admin/Dashboard.vue"
import Admin from "../layouts/AdminLayout.vue"

import Categories from "../components/admindb/CategoryDB/Categories.vue"
import CategoryTable from "../components/admindb/CategoryDB/CategoryTable.vue"

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
// mouting point for the whole app

import App from "./App.vue";

// routes

const routes = [

  {
    path: "/categoriestable",
    component: CategoryTable,
  },
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/complaintform",
    component: Complaints
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/categories",
        component: Categories
      },
      {
        path: "/admin/dashboard",
        component: Dashboard,
      }
    ]
  },

  { path: "/:pathMatch(.*)*", redirect: "/categoriestable" ,},
  { path: "/:pathMatch(.*)*", redirect: "/" ,},
  { path: "/:pathMatch(.*)*", redirect: "/complaintform" ,},
  { path: "/:pathMatch(.*)*", redirect: "/login" ,},
  { path: "/:pathMatch(.*)*", redirect: "/admin/dashboard"},
  { path: "/:pathMatch(.*)*", redirect: "/admin/categories"},
];

 
const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App).use(router).mount("#app");