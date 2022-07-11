<template>
  <div
    class="flex items-center gap-8 rounded-2xl bg-slate-300 px-8 py-6 shadow"
  >
    <input
      type="text"
      v-model="title"
      class="flex-1 rounded py-2 px-4 text-lg text-slate-700 outline-none focus:ring-2 focus:ring-slate-600"
    />

    <select @change="updateSelectedProject">
      <option v-for="project in projects" :key="project.id" :value="project.id">
        {{ project.name }}
      </option>
    </select>

    <div class="flex items-center gap-4">
      <TimerDisplay :time="timer" />
      <button @click="handleAction" :disabled="hasTitle" class="btn">
        <Stop v-if="isPlaying" size="20" />
        <Play v-else size="20" />

        <span v-text="buttonText" class="w-10 text-center"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { PhPlayCircle, PhStopCircle } from "phosphor-vue"
import TimerDisplay from "@/components/widgets/atoms/TimerDisplay.vue"

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue"
import { useStore } from "vuex"

export default defineComponent({
  name: "Timer",
  components: {
    TimerDisplay,
    Play: PhPlayCircle,
    Stop: PhStopCircle,
  },
  data() {
    return this.getInitialState()
  },
  emits: ["finishTimer"],
  methods: {
    getInitialState() {
      return {
        timer: 0,
        isPlaying: false,
        interval: null,
        title: "",
        projectId: null,
      }
    },
    handleAction() {
      this.isPlaying ? this.stop() : this.start()
    },
    start() {
      this.isPlaying = true
      this.interval = setInterval(() => {
        this.timer++
      }, 1000)
    },
    stop() {
      this.isPlaying = false
      clearInterval(this.interval)
      this.$emit("finishTimer", {
        duration: this.timer,
        title: this.title,
      })

      Object.assign(this.$data, this.getInitialState())
    },
    updateSelectedProject({ target }) {
      const { value } = target
      this.projectId = value
    },
  },
  computed: {
    buttonText() {
      return this.isPlaying ? "Stop" : "Start"
    },
    hasTitle() {
      return !Boolean(this.title)
    },
  },
  setup() {
    const store = useStore()
    const projects = computed(() => store.state.projects)

    return { projects }
  },
})
</script>

<style>
.btn {
  @apply flex w-28 items-center justify-center gap-2 rounded bg-slate-500 py-2 px-4 text-white outline-none transition-colors;
  @apply hover:bg-slate-600 focus:ring-2 focus:ring-slate-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-slate-500;
}
</style>
