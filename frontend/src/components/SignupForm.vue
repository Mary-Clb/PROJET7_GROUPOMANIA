<template>
    <div id="container-form">
        <form id="login-form">
            <h1>Inscrivez-vous</h1>
                <label for="signup-firstname">Prénom</label>
                <input type="text" id="signup-firstname" placeholder="Saississez votre prénom" required>

                <label for="signup-name">Nom</label>
                <input type="text" id="signup-name" placeholder="Saississez votre nom" required>

                <label for="connexion-email">Email</label>
                <input type="text" id="connexion-email" placeholder="Saississez votre email" required>

                <label for="connexion-password">Mot de passe</label>
                <input type="password" id="connexion-password" placeholder=" Saisissez votre mot de passe" required>

                <button id="btn">S'inscrire</button>

                    <div class="subscribe-link">
                            <router-link id="link" to="/">Accueil</router-link>
                    </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignupForm'
}
</script>

<style scoped>

</style>