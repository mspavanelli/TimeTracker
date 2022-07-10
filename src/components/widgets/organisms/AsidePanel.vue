<template>
  <aside class="col-span-1 rounded-2xl bg-white p-8 shadow">
    <h1>Timer <strong>Tracker</strong></h1>

    <ul>
      <li>
        <router-link to="/" active-class="active">Tasks</router-link>
      </li>
      <li>
        <router-link to="/projects" active-class="active">Projects</router-link>
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
  border: 2px solid red;
}
</style>
