<template>
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
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  name: "ProjectsList",
  setup() {
    const store = useStore()
    const projects = computed(() => store.state.projects)

    console.log({ projects })
    return { projects }
  },
})
</script>
