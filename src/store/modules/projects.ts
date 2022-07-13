import { Module } from "vuex"
import projectsAPI from "@/services/api/projects"
import IProject from "@/types/IProject"

type State = {
  projects: IProject[]
}

type RootState = State

export const projectsModule: Module<State, RootState> = {
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
      try {
        const response = await projectsAPI.all()
        const projects = response.data

        commit("SET_PROJECTS", projects)
      } catch (err) {
        console.error(err)
      }
    },
  },
}
