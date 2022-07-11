<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name" />
    <input type="submit" value="Create" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

import { useStore } from "vuex"

export default defineComponent({
  name: "NewProjectForm",
  data() {
    return {
      name: "",
    }
  },
  methods: {
    submitForm() {
      this.store.commit("ADD_PROJECT", this.name)
      this.name = ""
    },
  },
  setup() {
    const store = useStore()

    return { store }
  },
})
</script>

\
