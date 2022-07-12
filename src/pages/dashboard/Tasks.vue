<template>
  <main class="col-span-3 grid h-8 gap-8">
    <Calender />
    <!-- <Timer @finishTimer="handleFinishTimer" /> -->
    <!-- <TaskList :tasks="taskList" /> -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Timer from "@/components/widgets/molecules/Timer.vue"
import TaskList from "@/components/widgets/organisms/TaskList.vue"
import Calender from "@/components/widgets/molecules/Calender.vue"

export default defineComponent({
  name: "TasksPage",
  components: {
    Timer,
    TaskList,
    Calender,
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
