import DefaultLayout from "../../components/layouts/Default.vue";
import PageNotFound from "../../views/NotfoundView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../../views/HomeView.vue"),
      },
      {
        path: "project",
        name: "project",
        component: () => import("../../views/ProjectView.vue"),
      },
      {
        path: "details/:slug",
        name: "details",
        component: () => import("../../views/DetailsView.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../../views/ContactView.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: PageNotFound,
  },
];

export default routes;
