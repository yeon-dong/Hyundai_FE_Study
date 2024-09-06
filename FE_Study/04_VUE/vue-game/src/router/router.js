import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import Level_1 from "../pages/Level_1.vue";
import Level_2 from "../pages/Level_2.vue";
import Level_3 from "../pages/Level_3.vue";
import Level_4 from "../pages/Level_4.vue";
import Level_5 from "../pages/Level_5.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/level/1",
      name: "level1",
      component: Level_1,
    },
    {
      path: "/level/2",
      name: "level2",
      component: Level_2,
    },
    {
      path: "/level/3",
      name: "level3",
      component: Level_3,
    },
    {
      path: "/level/4",
      name: "level4",
      component: Level_4,
    },
    {
      path: "/level/5",
      name: "level5",
      component: Level_5,
    },
  ],
});
export default router;
