import { api } from "@/services/api"
import IProject from "@/types/IProject"

export default {
  all: () => {
    return api.get<IProject[]>(`projects`)
  },
}
