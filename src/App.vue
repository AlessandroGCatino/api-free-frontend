<template>
    <AppHeader/>
    <router-view></router-view>

</template>

<script>
    import axios from 'axios'
    import { store } from './store'
    import AppHeader from './components/AppHeader.vue';
    
    export default {
        components: {
            AppHeader
        },
        data() {
            return{
                store,
            }
        }
    }


</script>


<style lang="scss">

@use "./styles/general.scss";

</style>
