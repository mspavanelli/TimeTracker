<template>
  <main class="col-span-3 grid h-8 gap-8">
    <h2>Projesotoc</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" />
      <input type="submit" value="Create" />
    </form>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Project</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import IProject from "@/types/IProject"

export default defineComponent({
  name: "ProjectsPage",
  data() {
    return {
      name: "",
      projects: [] as IProject[],
    }
  },
  methods: {
    submitForm() {
      const project: IProject = {
        id: new Date().toISOString(),
        name: this.name,
      }

      this.projects = [...this.projects, project]
      this.name = ""
    },
  },
})
</script>
