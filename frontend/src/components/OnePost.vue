<template>
    <div class="container-post">
        <article class="post" >
        <div class="username">
         <span class="user"></span>
        </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'OnePost',
    data() {
        return {
            post: []
        }
    },

    mounted() {
        this.getOnePost()
    },

    methods: {
        getOnePost() {
            const postId = this.$route.params.postId;

            axios.get("http://localhost:3000/api/post/" + postId, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then((res) => {
                this.post = res.data
                console.log('post récupéré')
                console.log(this.post)
            })
            .catch((err) => {
                console.log(err + 'Impossible de récupérer les données utilisateurs')
            })

        },
    }
}
</script>

<style scoped>

</style>