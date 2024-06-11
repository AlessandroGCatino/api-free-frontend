import { reactive } from "vue"

export const store = reactive({
    
    backendBaseUrl: "http://localhost:3000",
    userLoggedIn: true,
})