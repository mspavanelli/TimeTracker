<template>
  <div
    class="flex h-40 w-56 flex-col justify-between rounded-3xl bg-white p-8 shadow"
  >
    <h3>Task Name</h3>
    <p class="text-3xl font-bold">
      {{ formattedTimer }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "TimerDisplay",
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatTimeUnit(timeUnit: number): string {
      return timeUnit.toString().padStart(2, "0")
    },
  },
  computed: {
    formattedTimer(): string {
      const minutes = Math.floor(this.time / 60)
      const seconds = Math.floor(this.time % 60)

      return `${this.formatTimeUnit(minutes)}:${this.formatTimeUnit(seconds)}`
    },
  },
})
</script>

<style></style>
