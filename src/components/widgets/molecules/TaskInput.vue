<template>
  <div
    class="flex w-full flex-col justify-between gap-8 rounded-3xl bg-white py-8 px-10 shadow"
  >
    <div class="flex items-center justify-center gap-8">
      <input
        type="text"
        v-model="title"
        placeholder="Task name"
        class="flex-1 rounded-xl border border-gray-300 py-3 px-4 text-slate-700 outline-none focus:ring-2 focus:ring-amber-400"
      />

      <select @change="updateSelectedProject">
        <option
          v-for="project in projects"
          :key="project.id"
          :value="project.id"
        >
          {{ project.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"

import { useStore } from "vuex"

export default defineComponent({
  name: "TaskInput",
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
