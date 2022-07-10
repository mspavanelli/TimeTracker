import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import TasksPage from "@/pages/Tasks.vue"
import ProjectsPage from "@/pages/Projects.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: TasksPage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
