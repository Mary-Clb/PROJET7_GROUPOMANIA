<template>
    <div class="userinfos">

        <!--MODALE POUR MODIFIER IMAGE DE PROFIL-->
        <ModaleModifyUser v-bind:revele="revele" v-bind:toggleModale="toggleModale" />

        <div class="userinfos__pic">
            <img v-if="profilePic" :src="user.profilePic" alt="Image de profil" />
            <img v-else src="@/assets/placeholderpic.jpg" alt="Image de profil" />
            <button type="button" id="btn" v-if=" user.id == user_Id" @click="toggleModale()" class="userinfos__pic--modifybtn"><img class="userinfos__pic--modifybtnimg" src="../assets/wheel.svg" alt="Cliquez ici pour modifier votre photo de profil"></button>
        </div>    
        <h1>{{ user.firstname }} {{ user.name }}</h1>
        <p>{{ user.email }}</p>
        <button type=button id="btn" v-if=" user.id == user_Id" class="userinfos__deletebtn" @click="deleteAccount()">Supprimer le compte</button>
    </div>
</template>

<script>
import ModaleModifyUser from './ModaleModifyUser.vue'
import axios from 'axios'
import router from '../router'


export default {
    name: 'UserInfos',
    components: {
        ModaleModifyUser,
    },
    data() {
        return {
            user_Id: localStorage.getItem('userId'),
            revele: false,
            profilePic: false,
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
                console.log(this.user);
                if (res.data.profilePic) {
                    this.profilePic = true;
                    console.log(this.profilePic)
                }
            })
            .catch((err) => {
                console.log(err + 'Impossible de récupérer les données utilisateurs')
            })
        },

        deleteAccount() {
            const userId = this.user_Id;

            var conf = confirm("Voulez-vous vraiment supprimer votre compte ?");
            if (conf == true) {
                axios.delete("http://localhost:3000/api/auth/" + userId, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
                    .then(() => {
                        alert("Votre compte a été supprimé. Vous allez être redirigé vers la page d'accueil")
                        //window.location.reload();
                        localStorage.clear()
                        router.push({ path: '/'});
                        
                    })
                    .catch((err) => {
                        console.log(err + "Impossible de supprimer votre compte")
                    });

            } else {
                console.log('Suppression du compte annulée');
            }

        },

        //MODALE
        toggleModale() {
            this.revele = !this.revele;
            console.log('Utilisateur :' + this.user_Id)
        },

    }


}
</script>

<style lang="scss" scoped>
.userinfos {
    width: 100%;
    border-radius: 5px;

    &__pic {
    width: 170px; 
    height: 160px;
    margin: 5px auto;
    border-radius: 100px; 
    position: relative;
    bottom: 40px;
    }

    &__pic--modifybtn {
        height: 40px;
        width: 40px;
        padding: 5px 5px 2px 5px !important;
        margin-right: 0 !important;
        position: relative;
        bottom: 45px;
        left: 40px;

    }

    &__pic--modifybtnimg {
        height: 20px;
        width: 20px;
    }
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