import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginUser from "./pages/LoginUser.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name: "home",
            component: HomePage
        },
        {
            path:"/login",
            name: "login",
            component: LoginUser
        }
        
    ]
})

export {router};