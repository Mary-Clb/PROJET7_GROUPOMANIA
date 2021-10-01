<template>
    <div class="nav-container">
    <router-link id="link" to="/userprofile">Mon profil</router-link>
    <button id="btn" type="submit" @click="deconnect()">Déconnexion</button>
    </div>
</template>

<script>
//import axios from 'axios'
import router from '../router'

export default {
    name: 'Navbar',
    methods: {
        deconnect () {
            localStorage.clear()
            alert('Vous allez être déconnecté')
            router.push('/')
        },
    }
}
</script>

<style scoped>
.nav-container {
    margin: 10px;
}


</style>