<template>
  <main class="col-span-3 grid h-8 gap-8">
    <div class="flex items-center justify-between">
      <Calender />
      <TimerControl />
    </div>

    <TaskInput />

    <!-- <TaskList :tasks="taskList" /> -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import TaskList from "@/components/widgets/organisms/TaskList.vue"
import Calender from "@/components/widgets/molecules/Calender.vue"
import TimerControl from "@/components/widgets/molecules/TimerControl.vue"
import TaskInput from "../../components/widgets/molecules/TaskInput.vue"
export default defineComponent({
  name: "TasksPage",
    Calender,
    TimerControl,
    TaskInput,
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
