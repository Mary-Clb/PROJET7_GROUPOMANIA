<template>
    <Header />
    <router-link to="/" id="link" class="link-home">Accueil</router-link>
    <NavBar />
    <OnePost />
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/Navbar.vue'
import OnePost from '@/components/OnePost.vue'

export default {
    name: 'FocusPost',
    components: {
        Header,
        NavBar,
        OnePost,
        
    }
}
</script>

<style lang="scss" scoped>


</style>
