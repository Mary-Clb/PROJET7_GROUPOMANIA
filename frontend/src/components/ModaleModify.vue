<template>

    <div class="modale" v-if="revele">
        <div class="modale__overlay" >
            <div class="modale__container">
                <button id="btn" type="button" class="modale__container--closebtn" @click="toggleModale"> X </button>
                <h1 class="modale__container--title">Modifier votre post</h1>

                <form class="modale__form">
                    <label for="modifiedTitle">Changez le titre de votre article :</label>
                    <input type="text" id="modifiedTitle" placeholder="Modifier le titre ici..." aria-label="Modifiez le titre de votre article ici">

                    <label for="modifiedContent-file">Choisissez un autre fichier :</label>
                    <input type="file" ref="file" name="file" id="modifiedContent-file" accept='.png, .jpeg, .gif, .png, .jpg'>

                    <label for="modifiedContent-url">Ou copiez/collez une autre URL pour votre image :</label>
                    <input type="text" id="modifiedContent-url" placeholder="http://..." aria-label="Modifiez l'URL de votre image ici">

                    <button type="submit" id="btn" class="modale__form--submit"> Valider </button>
                </form>
            </div>

        </div>


    </div>

</template>

<script>
export default {
    name : 'ModaleModify',
    props: ['revele', 'toggleModale'],
    data() {
        return {
            user_id: localStorage.getItem("userId")
        };
    }
}
</script>

<style lang="scss" scoped>
.modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
   
   &__container--title {
       text-align: left;
   }

   &__overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    &__container {
        background: white;
        border-radius: 5px;
        position: fixed;
        top: 30%;
        padding: 10px;
    }
    &__container--closebtn {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    &__form {
        display: flex;
        flex-direction: column;
        width: 95%
    }
}

        @media screen and (min-width: 769px) {
            .modale__container {
            width: 420px ;
            left: 25%;
        }
        }

</style>