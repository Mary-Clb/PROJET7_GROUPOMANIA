<template>
    <Header />
    <Navbar />


    <div id="page-container">
       
        <NewPost />
        <Post />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Post from '@/components/Post.vue'
import Navbar from '@/components/Navbar.vue'
import NewPost from '@/components/NewPost.vue'

export default {
    name: 'Dashboard',
    components: {
        Header,
        Navbar,
        NewPost,
        Post,
        
    }

}
</script>

<style scoped>

.page-container {
    margin: 20px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #FFD7D7 ;
    border-radius: 5px;
    background-color: #FFD7D7;
    box-shadow: 3px 3px #be9b9b ;

}


</style>