<template>
    <div class="container mt-4">
        <div v-for="post in posts" class="mb-5">
            <router-link :to="{ name: 'showPost', params: { slug: post.slug }}" :postDetails="post">
                <div class="d-flex justify-content-between">
                    <div class="col-5">
                        <h2 class="text-center text-capitalize">
                            {{ post?.category?.title }}
                            
                        </h2>
                        <figure class="w-100">
                            <img :src="post.image" alt="" class="img-fluid">
                        </figure>
                    </div>
    
                    <div class="d-flex flex-column justify-content-around col-6">
                        <h4 class="text-capitalize">
                            {{ post.title }}
                        </h4>
                        <p class="mt-2">
                            {{ post.content }}
                        </p>
                        <ul class="d-flex gap-3 list-unstyled">
                            <li v-for="tag in post.tags">
                                <span class="tag p-1">
                                    {{ tag.title }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="text-center mb-5">
            <button class="btn btn-primary" @click="prevPage"><</button>
            <span class="mx-5">{{ currentPage }} di {{ totalPages }}</span>
            <button class="btn btn-primary" @click="nextPage">></button>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {store} from '../store';

export default {
    name: "HomePage",
    data () {
        return {
            store,
            posts: [],
            currentPage: 1,
            totalPages: ""
        }
    },
    methods: {
        async getPosts () {
            try {
                const response = await axios.get(store.backendBaseUrl + '/posts' + '?page=' + this.currentPage);
                this.posts = response.data.posts;
                this.currentPage = response.data.page;
                this.totalPages = response.data.totalPages;
            } catch (error) {
                console.log(error);
            }
        },
        nextPage () {
            if (this.currentPage >= this.totalPages) {
                this.currentPage = this.totalPages;
                return;
            }
            this.currentPage++;
            this.getPosts();
        },
        prevPage () {
            if (this.currentPage <= 1) {
                this.currentPage = 1;
                return;
            } 
            this.currentPage--;
            this.getPosts();
        }
    },
    mounted () {
        this.getPosts();
    }
}
</script>

<style lang="scss" scoped>

h2{
    color: coral;
}

.tag{
    background-color: lime;
}
</style>