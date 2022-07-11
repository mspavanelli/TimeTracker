<template>
  <div class="grid h-screen grid-cols-4 gap-8 bg-white p-8">
    <AsidePanel />
    <!-- <slot /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AsidePanel from "@/components/widgets/organisms/AsidePanel.vue"

export default defineComponent({
  name: "DashboardLayout",
  components: { AsidePanel },
})
</script>
