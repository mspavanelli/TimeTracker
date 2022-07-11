<template>
  <div class="grid h-screen grid-cols-4 gap-8 bg-white pt-10 pl-10">
    <AsidePanel />
    <main class="col-span-3 rounded-tl-3xl bg-stone-50 py-20 px-12">
      <slot />
    </main>
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
