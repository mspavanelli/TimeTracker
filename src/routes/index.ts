import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import TasksPage from "@/pages/dashboard/Tasks.vue"
import ProjectsPage from "@/pages/dashboard/Projects.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    redirect: "/dashboard/tasks",
    children: [
      {
        path: "/dashboard/tasks",
        name: "Tasks",
        component: TasksPage,
      },
      {
        path: "/dashboard/projects",
        name: "Projects",
        component: ProjectsPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
