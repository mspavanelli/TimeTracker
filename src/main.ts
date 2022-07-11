import { createApp } from "vue"

import App from "@/App.vue"

import router from "@/routes"
import store from "@/store"
import server from "@/server"

import "@/styles/tailwind.css"

const app = createApp(App)

server()

app.use(router)
app.use(store)

app.mount("#app")
