<template>
  <aside class="col-span-1">
    <h1 class="mb-10 flex flex-col gap-1 text-xl font-light">
      <Logo />
      <p class="tracking-wider">Time<span class="font-bold">Tracker</span></p>
    </h1>

    <ul>
      <li>
        <router-link to="/dashboard/tasks" active-class="active">
          <TasksIcon :size="28" color="#facc15" weight="duotone" />
          Tasks</router-link
        >
      </li>
      <li>
        <router-link to="/dashboard/projects" active-class="active">
          <ProjectsIcons :size="28" color="#facc15" weight="duotone" />
          Projects</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Logo from "@/components/icons/Logo.vue"
import { PhKanban, PhCheckSquareOffset } from "phosphor-vue"

export default defineComponent({
  name: "AsidePanel",
  components: {
    Logo,
    ProjectsIcons: PhKanban,
    TasksIcon: PhCheckSquareOffset,
  },
})
</script>

<style>
ul {
  @apply space-y-4;
}
ul li a {
  @apply flex w-60 cursor-pointer items-center rounded-2xl border-2 border-transparent py-5 px-7 text-yellow-900 outline-none transition-all hover:bg-yellow-50 focus:border-yellow-300;
}
ul li a svg {
  @apply mr-4;
}
.active {
  @apply bg-black font-bold text-white hover:bg-slate-800 focus:border-slate-500;
}
</style>
