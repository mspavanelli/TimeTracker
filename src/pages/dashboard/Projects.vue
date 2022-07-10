<template>
  <Dashboard>
    <main class="col-span-3 grid h-8 gap-8">
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
  </Dashboard>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"
import Dashboard from "@/components/layouts/Dashboard.vue"
import IProject from "@/types/IProject"

export default defineComponent({
  name: "ProjectsPage",
  components: {
    Dashboard,
  },
  data() {
    return {
      name: "",
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
  setup() {
    const store = useStore()

    const projects = computed(() => store.state.projects)

    return {
      projects,
    }
  },
})
</script>
