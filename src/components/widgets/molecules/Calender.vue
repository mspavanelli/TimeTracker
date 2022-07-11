<template>
  <div>
    <h2 class="mb-4 text-4xl font-semibold">Today</h2>
    <p>{{ getFormattedDate }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { format } from "date-fns"

export default defineComponent({
  name: "Calendar",
  data() {
    return {
      now: new Date(),
    }
  },
  created() {
    let self = this
    setInterval(() => {
      self.now = new Date()
    }, 1000)
  },
  computed: {
    getFormattedDate() {
      return format(this.now, "EEEE MMMM dd', 'yyyy ' | ' hh':'mm aaa")
    },
  },
})
</script>
