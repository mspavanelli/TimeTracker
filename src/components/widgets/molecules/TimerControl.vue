<template>
  <div
    class="flex w-96 items-center justify-center rounded-3xl bg-white py-10 px-12 shadow"
  >
    <p class="mr-8 w-48 text-2xl font-medium">{{ buttonText }} timer</p>

    <button
      @click="handleAction"
      :disabled="hasTitle"
      class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-amber-400 transition-colors hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-amber-400"
    >
      <Stop v-if="isPlaying" size="32" weight="fill" />
      <Play v-else size="32" weight="fill" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PhPlayCircle, PhStopCircle } from "phosphor-vue"

export default defineComponent({
  name: "TaskInput",
  components: {
    Play: PhPlayCircle,
    Stop: PhStopCircle,
  },
  data() {
    return {
      isPlaying: false,
    }
  },
  methods: {
    handleAction() {
      this.isPlaying ? this.stop() : this.start()
    },
    start() {
      this.isPlaying = true
    },
    stop() {
      this.isPlaying = false
    },
  },
  computed: {
    buttonText() {
      return this.isPlaying ? "Stop" : "Start"
    },
    hasTitle() {
      return false
    },
  },
})
</script>
