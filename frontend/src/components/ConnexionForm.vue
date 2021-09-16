<template>
    <div class="container-form">
        <form class="login-form">
            <h1>Bienvenue</h1>
                <label for="connexion-email">Prénom</label>
                <input type="text" id="connexion-email" placeholder="Saississez votre email">

                <label for="connexion-password">Nom</label>
                <input type="password" id="connexion-password" placeholder=" Saisissez votre mot de passe">
        
                <button id="btn">Connexion</button>

                    <div class="subscribe-link">
                            <p>Vous n'avez pas de compte ?</p>
                            <button id="btn">S'inscrire</button>
                    </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ConnexionForm'
}
</script>

<style scoped>
    .container-form {
        max-width: 500px;
        margin: 70px auto;
        padding: 20px;
        border: 2px solid #FFD7D7;
        border-radius: 5px;
        box-shadow: 3px 3px #be9b9b ;
    }
    @media screen and (max-width: 769px) {
        .container-form {
            margin: 70px auto;
        }
    }

    .login-form {
        display: flex;
        flex-direction: column;
    }

    label {
        text-align: left;
        padding: 10px 0px 10px 0px;
        font-weight: bold;
    }

    input {
        height: 25px;
        max-width: 500px;
        border-radius: 5px;
        border: 2px inset #FFD7D7;
        margin-bottom: 10px;
    }

    p {
        margin: 0px;
    }

    .subscribe-link {
        margin-top: 20px;
    }

    #btn {
        display: inline-block;
        margin: 15px auto;
    }
</style>