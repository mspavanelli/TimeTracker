<template>
  <Dashboard>
    <router-view></router-view>
  </Dashboard>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Dashboard from "@/components/layouts/Dashboard.vue"
import { useStore } from "vuex"

export default defineComponent({
  name: "Index",
  components: {
    Dashboard,
  },
  mounted() {
    this.store.dispatch("FETCH_PROJECTS")
  },
  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
