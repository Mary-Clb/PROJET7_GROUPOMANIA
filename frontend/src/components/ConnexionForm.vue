<template>
    <div id="container-form">
        <form @submit.prevent="Login(event)" id="login-form" >
            <h1>Bienvenue</h1>
                <label for="connexion-email">Email</label>
                <input type="text" id="connexion-email" placeholder="Saississez votre email" v-model="email" required>

                <label for="connexion-password">Mot de passe</label>
                <input type="password" id="connexion-password" placeholder=" Saisissez votre mot de passe" v-model="password" required>

                <button type="submit" id="btn">Connexion</button>

                    <div class="subscribe-link">
                            <p>Vous n'avez pas de compte ?</p>
                            <router-link id="link" to="/signup">S'inscrire</router-link>
                    </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'


export default {
    name: 'ConnexionForm',

    data() {
        return {
            invalid: false,
            errForEmpty: '',
            errForErr:'',
            email: '',
            password: ''
        }

    },

    methods: {
        Login() {
            //Vérification que tous les champs sont remplis
            if (!this.email || !this.password) {
                return this.invalid = true, this.errForEmpty = 'Veuillez remplir tous les champs';
            }
        //Si tous les champs sont remplis, on envoie les données
        axios.post("http://localhost:3000/api/auth/login", {
            email: this.email,
            password: this.password
        },
        {
            headers: { 'Content-Type' : 'application/json'}
        })
        .then((response) => {
            const loggedUser = {
                token: response.data.token,
                userId: response.data.userId,
                firstname: response.data.firstname,
                name: response.data.name
            }
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
            alert('Bienvenue , vous êtes maintenant connecté')
            router.push({ path: '/dashboard'});
        })
        .catch((error) => {
            alert(error + 'La connexion a échoué, veuillez vérifier les informations saisies')
            console.log('Erreur de connexion')
        })
        }
    }


}
</script>

<style scoped>
    p {
        margin: 0px;
    }

    .subscribe-link {
        margin-top: 20px;
        display: flex;
        flex-direction: column;

    }

</style>