<template>
    <div class="container">
        <div class="text-center">
            <h1 class="text-capitalize mt-3">
                    {{ post?.title }}
            </h1>
        </div>
        <div class="d-flex justify-content-between mt-3">
        
            <div class="col-6">        
                <figure class="w-100">
                    <img :src="post?.image" alt="" class="img-fluid">
                </figure>
            </div>

            <div class="d-flex flex-column justify-content-between col-6 p-5">
                <p class="mt-2">
                    {{ post?.content }}
                </p>

                <h6 class="text-capitalize">
                    {{ post?.category?.title }}
                    
                </h6>
                <ul v-if="post?.tags?.length > 0" class="d-flex gap-3 list-unstyled">
                    <li v-for="tag in post?.tags">
                        <span class="tag p-1">
                            {{ tag.title }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import {store} from '../store.js';
import axios from 'axios';
export default {
    name: "ShowPost",
    
    data () {
        return {
            store,
            post: null
        }
    },
    methods: {
        async getPost(){
            try{
                const slug = this.$route.params.slug;
                const response = await axios.get(`${store.backendBaseUrl}/posts/${slug}`)
                this.post = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted () {
        this.getPost();
    }
    
}
</script>

<style lang="scss" scoped>

p{
    margin: 0;
}

.tag{
    background-color: lime;
}

</style>