<template>
    <div class="d-flex justify-content-around frame">
        <div class="col-1 p-3 d-flex align-items-center">
            <a href="/">
                <figure class="w-50">
                    <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/2048px-Wordpress-Logo.svg.png" alt="logo">
                </figure>
            </a>
        </div>
        <nav class="p-3 d-flex align-items-center">
            <ul class="d-flex align-items-center gap-3 list-unstyled ">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li v-if="!store.userLoggedIn">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-if="store.userLoggedIn">
                    <router-link to="/create" class="text-primary fw-bold">Post Something</router-link>
                </li>
            </ul>
        </nav>        

    </div>
</template>

<script>
import { store } from '@/store';

export default {
    name: "AppHeader",
    data () {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>

figure,
ul{
    margin: 0;
}

.frame{
    background-color: #A6A19E;
}

</style>