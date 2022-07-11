<template>
  <main class="col-span-3 grid h-8 gap-8">
    <Form />
    <ProjectsList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Form from "@/components/views/Projects/Form.vue"
import ProjectsList from "@/components/views/Projects/ProjectsList.vue"

export default defineComponent({
  name: "ProjectsPage",
  components: { ProjectsList, Form },
})
</script>
