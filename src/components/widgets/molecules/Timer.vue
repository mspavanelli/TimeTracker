<template>
  <Calender />
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
  </div>
  <TimerDisplay :time="timer" />

  <div
    class="flex w-96 items-center justify-center rounded-3xl bg-white py-10 px-12 shadow"
  >
    <p class="mr-8 w-48 text-2xl font-medium">{{ buttonText }} time</p>

    <button
      @click="handleAction"
      :disabled="hasTitle"
      class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-amber-400 transition-colors hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-amber-400"
    >
      <Stop v-if="isPlaying" size="32" />
      <Play v-else size="32" />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { PhPlayCircle, PhStopCircle } from "phosphor-vue"
import TimerDisplay from "@/components/widgets/atoms/TimerDisplay.vue"

import { useStore } from "vuex"
import Calender from "./Calender.vue"

export default defineComponent({
  name: "Timer",
  components: {
    TimerDisplay,
    Play: PhPlayCircle,
    Stop: PhStopCircle,
    Calender,
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
