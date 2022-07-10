<template>
  <main class="col-span-3 grid h-8 gap-8">
    <Timer @finishTimer="handleFinishTimer" />
    <TaskList :tasks="taskList" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Timer from "@/components/widgets/molecules/Timer.vue"
import TaskList from "@/components/widgets/organisms/TaskList.vue"

export default defineComponent({
  name: "TasksPage",
  components: {
    Timer,
    TaskList,
  },
  data() {
    return {
      taskList: [
        {
          title: "Foo",
          duration: 10,
        },
        {
          title: "Tickling girl",
          duration: 1400,
        },
      ],
    }
  },
  methods: {
    handleFinishTimer(task) {
      this.taskList = [task, ...this.taskList]
    },
  },
})
</script>
