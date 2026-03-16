import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Projects from "../views/Projects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/conctact",
      name: "contact",
      component: Projects,
    },
  ],
});

export default router;
