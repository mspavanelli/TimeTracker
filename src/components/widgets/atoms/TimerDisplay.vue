<template>
  <span class="font-mono">{{ formattedTimer }}</span>
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
