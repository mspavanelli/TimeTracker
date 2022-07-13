import { createServer } from "miragejs"

export default function () {
  createServer({
    routes() {
      this.namespace = "api"
      this.get("/projects", () => ({
        projects: [
          {
            id: "1",
            name: "Home",
          },
          {
            id: "2",
            name: "Work",
          },
        ],
      }))
    },
  })
}
