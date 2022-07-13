import { createStore } from "vuex"

import { projectsModule } from "./modules/projects"

const store = createStore({
  modules: {
    projects: projectsModule,
  },
})

export default store
