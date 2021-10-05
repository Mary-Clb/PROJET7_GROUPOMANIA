<template>
    <div class="container-post">
        <div class="username">
          
        </div>
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
        this.getOnePost();
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
                this.post = res.data;
                console.log('post récupéré')
                console.log(this.post)
            })

        },
    }
}
</script>

<style scoped>

</style>