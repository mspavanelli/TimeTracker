import { createStore } from "vuex"
import IProject from "@/types/IProject"

interface State {
  projects: IProject[]
}

const store = createStore<State>({
  state: {
    projects: [
      {
        id: new Date().toISOString(),
        name: "Home",
      },
      {
        id: new Date().toISOString(),
        name: "Personal",
      },
      {
        id: new Date().toISOString(),
        name: "Work",
      },
    ],
  },
})

export default store
