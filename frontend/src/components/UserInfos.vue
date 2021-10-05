<template>
    <div class="user-infos">
        <div class="pic-container">
            <img src="@/assets/placeholderpic.jpg" alt="Image de profil" />
        </div>    
        <h1>{{ user.firstname }} {{ user.name }}</h1>
        <p>{{ user.email }}</p>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'UserInfos',

    data() {
        return {
            user: []

        }
    },

    mounted() {
        this.getOneUser()
    },

    methods: {
        getOneUser() {
            //const userId = localStorage.getItem('userId');
            const userId = this.$route.params.userId;

            axios.get("http://localhost:3000/api/auth/user/" + userId, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then((res) => {
                console.log(res);
                this.user = res.data;
                console.log(this.user)
            })
            .catch((err) => {
                console.log(err + 'Impossible de récupérer les données utilisateurs')
            })
        }

    }


}
</script>

<style scoped>
.user-infos {
    width: 100%;
    border-radius: 5px;
}
.pic-container {
    width: 170px; 
    height: 160px;
    margin: 5px auto;
    border-radius: 100px; 
    position: relative;
    bottom: 40px;
}
img {
    width: 160px;
    height: 150px;
    border: 5px solid white;
    object-fit: cover;
    border-radius: 100px;
}
h1 {
    padding: 10px;
    margin: inherit;
    margin-top: -30px;
}

p {
    font-size: 17px;
    margin-top: inherit;
}




</style>