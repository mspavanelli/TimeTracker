<template>
  <div class="space-y-4">
    <Task
      v-for="task in tasks"
      :key="task"
      :title="task.title"
      :duration="task.duration"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Task from "../molecules/Task.vue"

export default defineComponent({
  name: "TaskList",
  components: {
    Task,
  },
  props: {
    tasks: {
      type: [],
      required: true,
    },
  },
})
</script>
