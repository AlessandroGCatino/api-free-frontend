import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginUser from "./pages/LoginUser.vue";
import CreatePost from "./pages/CreatePost.vue";
import ShowPost from "./pages/ShowPost.vue";


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
        },
        {
            path:"/create",
            name: "create",
            component: CreatePost
        },
        {
            path:"/posts/:slug",
            name: "showPost",
            component: ShowPost
        }
        
    ]
})

export {router};