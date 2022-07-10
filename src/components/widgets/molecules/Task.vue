<template>
  <div class="flex items-center justify-between rounded-xl bg-white p-4">
    <p>{{ title }}</p>
    <TimerDisplay :time="duration" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TimerDisplay from "@/components/widgets/atoms/TimerDisplay.vue"

export default defineComponent({
  name: "Task",
  components: { TimerDisplay },
  props: {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style></style>
