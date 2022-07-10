<template>
  <aside class="col-span-1 rounded-2xl bg-white p-8 shadow">
    <router-link to="/dashboard">
      <h1>
        Timer
        <strong>Tracker</strong>
      </h1>
    </router-link>

    <ul>
      <li>
        <router-link to="/dashboard/tasks" active-class="active"
          >Tasks</router-link
        >
      </li>
      <li>
        <router-link to="/dashboard/projects" active-class="active"
          >Projects</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AsidePanel",
})
</script>

<style>
.active {
  @apply font-bold;
}
</style>
