<template>
    <div id="container-form">
        <form @submit.prevent="Signup(event)" id="login-form">
            <h1>Inscrivez-vous</h1>
                <label for="signup-firstname">Prénom</label>
                <input type="text" id="signup-firstname" placeholder="Saississez votre prénom" v-model="input.firstName" aria-label="Ecrivez votre prénom" required>

                <label for="signup-name">Nom</label>
                <input type="text" id="signup-name" placeholder="Saississez votre nom" v-model="input.name" aria-label="Ecrivez votre nom" required>

                <label for="connexion-email">Email</label>
                <input type="text" id="connexion-email" placeholder="Saississez votre email" v-model="input.email" aria-label="Ecrivez votre email" required>

                <label for="connexion-password">Mot de passe</label>
                <input type="password" id="connexion-password" placeholder=" Saisissez votre mot de passe" v-model="input.password" aria-label="Ecrivez votre mot de passe" required>

                <button type="submit" id="btn" >S'inscrire</button>
                <div v-show="invalid" class="InvalidMsg" key="invalid">{{ errForEmpty }}</div>

                    <div class="subscribe-link">
                            <router-link id="link" to="/">Se connecter</router-link>
                    </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
    name: 'SignupForm',

    data() {
        return {
        invalid: false,
        errForEmpty: '',
        input: {
            firstName: '',
            name: '',
            email: '',
            password: ''
            }    
        }
    },

   methods: {
        Signup() {
            if (!this.input.firstName || !this.input.name || !this.input.email || !this.input.password) {
                return this.invalid = true, this.errForEmpty = 'Veuillez remplir tous les champs';
            }

        //REGEX
        const verifyString = /^(\w+\S+)$/;
        const verifyEmail = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const verifyPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        //Vérification des champs
        if (verifyString.test(this.input.firstName) && verifyString.test(this.input.name) && verifyEmail.test(this.input.email) && verifyPwd.test(this.input.password)) {
               
               //Si vérifications des champs ok, on envoie la requête  
                axios.post("http://localhost:3000/api/auth/signup", {
                    firstname: this.input.firstName,
                    name: this.input.name,
                    email: this.input.email,
                    password: this.input.password
                },
                {
                    headers: {'Content-Type': 'application/json'}
                })
                .then(response => {  
                    const user = {
                        token: response.data.token,
                        userId: response.data.userId,
                        isAdmin: response.data.isAdmin
                    }
                    localStorage.setItem('user', JSON.stringify(user));
                    alert('Merci de votre inscription. Vous allez être redirigé vers la page de connexion')
                    router.push({ path:'/'});
                })
                .catch((error) => {
                    alert(error.status + 'Nous sommes désolés, une erreur s\'est produite')
                    console.log('Une erreur s\'est produite lors de l\'exécution de la requête')
                })

        } else {
            console.log('Impossible d\'effectuer l\'inscription de l\'utilisateur')
            return this.invalid = true
        }

        }

    }

};





</script>

<style scoped>

.InvalidMsg {
    margin: 5px 0px 5px 0px;
    font-style: italic;
}

</style>