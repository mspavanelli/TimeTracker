<template>
  <div class="grid h-screen grid-cols-4 gap-8 bg-slate-100 p-8">
    <AsidePanel />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AsidePanel from "@/components/widgets/organisms/AsidePanel.vue"

export default defineComponent({
  name: "App",
  components: {
    AsidePanel,
  },
})
</script>
