import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/routes"

import "@/styles/tailwind.css"

createApp(App).use(router).mount("#app")
