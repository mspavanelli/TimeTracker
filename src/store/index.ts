import { createStore } from "vuex"
import IProject from "@/types/IProject"
import { api } from "@/services/api"

interface State {
  projects: IProject[]
}

const store = createStore<State>({
  state: {
    projects: [],
  },
  mutations: {
    ADD_PROJECT(state, projectName) {
      const newProject: IProject = {
        id: new Date().toISOString(),
        name: projectName,
      }

      state.projects = [...state.projects, newProject]
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects
    },
  },
  actions: {
    async FETCH_PROJECTS({ commit }) {
      const response = await api.get("/projects")
      const { projects } = response.data

      commit("SET_PROJECTS", projects)
    },
  },
})

export default store
