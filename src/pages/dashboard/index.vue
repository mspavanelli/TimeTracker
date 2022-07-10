<template>
  <Dashboard>
    <router-view></router-view>
  </Dashboard>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Dashboard from "@/components/layouts/Dashboard.vue"

export default defineComponent({
  name: "Index",
  components: {
    Dashboard,
  },
})
</script>
