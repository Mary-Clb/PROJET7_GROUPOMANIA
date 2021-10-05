<template>
    <div class="container-post">  
        <article class="post" v-for="post in posts" :key="post.id">
            <div class="username">
               <img src="" alt=""> <span class="firstname"></span>{{ post.user.firstname + ' ' }}<span class="name">{{ post.user.name.toUpperCase() }}</span>
            </div>    
                    <!--TITLE + IMG-->
                    <div class="post-content">
                        <h1 class="title"> {{ post.title }}</h1>
                        <div class="content">
                           <img :src="post.content" class="img-post" alt="image postée par l\'utilisateur">
                        </div>
                    </div>
                    <!--FOOTER-->
                        <div class="post-footer">
                            <div class="likes">
                                <button class="like-btn" type="submit" @click="like"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFQzU1Njk7IiBkPSJNNDEyLjQxLDBIOTkuNTg5QzQ3LjUzMSwwLDUuMzMyLDQyLjIwMSw1LjMzMiw5NC4yNTd2MjA1LjE3MmMwLDUyLjA1Nyw0Mi4yMDEsOTQuMjU3LDk0LjI1Nyw5NC4yNTcNCgloNDQuODk0YzIuMTM2LDAsMy44NjcsMS43MzEsMy44NjcsMy44Njd2MTAxLjIwN2MwLDExLjk2NiwxNC42MzcsMTcuNzY4LDIyLjgzNCw5LjA1bDEwNi4xODgtMTEyLjkwNg0KCWMwLjczMS0wLjc3OCwxLjc1MS0xLjIxOCwyLjgxOC0xLjIxOGgxMzIuMjJjNTIuMDU3LDAsOTQuMjU3LTQyLjIwMSw5NC4yNTctOTQuMjU3Vjk0LjI1N0M1MDYuNjY3LDQyLjIwMSw0NjQuNDY2LDAsNDEyLjQxLDB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTYzOTUwOyIgZD0iTTE4OC4wMDUsMzU4LjUwOWMwLTIuMjQ5LTEuNjc2LTQuMDcyLTMuNzQ0LTQuMDcyaC00My40NjJjLTUwLjM5NiwwLTkxLjI1LTQ0LjQzOS05MS4yNS05OS4yNTcNCglWMzkuMTIzYzAtOS4yNzYsMS4xNzQtMTguMjUzLDMuMzYxLTI2Ljc3QzI0LjQ4OSwyOC41ODcsNS4zMzIsNTkuMTg0LDUuMzMyLDk0LjI1N3YyMDUuMTcyYzAsNTIuMDU2LDQyLjIwMSw5NC4yNTcsOTQuMjU3LDk0LjI1Nw0KCWg0NC44OTRjMi4xMzYsMCwzLjg2NywxLjczMiwzLjg2NywzLjg2N3YxMDEuMjA3YzAsMTEuOTY2LDE0LjYzNywxNy43NjgsMjIuODM0LDkuMDVsMTYuODItMTcuODg1VjM1OC41MDlIMTg4LjAwNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFQzU1Njk7IiBkPSJNMzYxLjkwOCwxMjIuMzI1TDM2MS45MDgsMTIyLjMyNWMtMjMuOTMxLTIzLjkzMS02Mi43MzEtMjMuOTMxLTg2LjY2MywwbC0xMy41MTgsMTMuNTE4DQoJYy0zLjIyMywzLjIyMy04LjQ1LDMuMjIzLTExLjY3MywwbC0xMy4zMDItMTMuMzAyYy0yMy45MzEtMjMuOTMxLTYyLjczMS0yMy45MzEtODYuNjYzLDBsMCwwDQoJYy0yMy45MzEsMjMuOTMxLTIzLjkzMSw2Mi43MzEsMCw4Ni42NjNsOTkuOTczLDk5Ljk3M2MzLjIyMywzLjIyMyw4LjQ1LDMuMjIzLDExLjY3MywwbDEwMC4xNzItMTAwLjE4OQ0KCUMzODUuODM5LDE4NS4wNTYsMzg1LjgzOSwxNDYuMjU3LDM2MS45MDgsMTIyLjMyNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkY1RjU7IiBkPSJNMzYxLjkwOCwxMjIuMzI1TDM2MS45MDgsMTIyLjMyNWMtMjMuOTMxLTIzLjkzMS02Mi43MzEtMjMuOTMxLTg2LjY2MywwbC0xMy41MTgsMTMuNTE4DQoJYy0zLjIyMywzLjIyMy04LjQ1LDMuMjIzLTExLjY3MywwbC0xMy4zMDItMTMuMzAyYy0yMy45MzEtMjMuOTMxLTYyLjczMS0yMy45MzEtODYuNjYzLDBsMCwwDQoJYy0yMy45MzEsMjMuOTMxLTIzLjkzMSw2Mi43MzEsMCw4Ni42NjNsOTkuOTczLDk5Ljk3M2MzLjIyMywzLjIyMyw4LjQ1LDMuMjIzLDExLjY3MywwbDEwMC4xNzItMTAwLjE4OQ0KCUMzODUuODM5LDE4NS4wNTYsMzg1LjgzOSwxNDYuMjU3LDM2MS45MDgsMTIyLjMyNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEQ0U2RUI7IiBkPSJNMTgyLjE0NSwyMDkuMjA0Yy0yMy45MzEtMjMuOTMxLTIzLjkzMS02Mi43MzEsMC04Ni42NjNsMCwwYzcuODUtNy44NSwxNy4zMDQtMTMuMTA4LDI3LjMwMy0xNS44MDcNCgljLTIwLjQ4Ni01LjUzMi00My4yNzgtMC4yNzQtNTkuMzU4LDE1LjgwN2wwLDBjLTIzLjkzMSwyMy45MzEtMjMuOTMxLDYyLjczMSwwLDg2LjY2M2w5OS45NzMsOTkuOTczDQoJYzMuMjIzLDMuMjIzLDguNDUsMy4yMjMsMTEuNjczLDBsMTAuMTktMTAuMTkyTDE4Mi4xNDUsMjA5LjIwNHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" /></button>
                                <span class="nb-of-likes">0</span>
                            </div>
                            <div class="comments">   
                                <button class="like-btn" type="submit"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im00MzYuMzEgMTA3LjQyNWMtNDguMjQtMzcuNDQtMTEyLjI4LTU4LjA2LTE4MC4zMS01OC4wNi02LjIgMC0xMi4zNy4xNy0xOC41LjUxLTYxLjA4IDMuMzktMTE3Ljk3IDIzLjUyLTE2MS44MSA1Ny41NS00OC44MSAzNy44OC03NS42OSA4OC40Mi03NS42OSAxNDIuMzEgMCA0OC42MSAyMi4yOSA5NS4xNiA2Mi44OSAxMzEuNjItMTEuOTUgMjcuODEtMjcuMjUgNTAuNzktNDUuNTIgNjguMzYtMi4xOCAyLjEtMi44OSA1LjMtMS44IDguMTIgMS4xIDIuODIgMy43OCA0LjcxIDYuOCA0Ljc5LjIxIDAgLjgxLjAxIDEuNzguMDEgMTAuNTkgMCA2NC44My0xLjUxIDEyNC44Ny0zMC43OSAyOC4wNCAxMC4xMSA1Ny43MSAxNi4wNSA4OC40NyAxNy43NSA2LjEzLjM0IDEyLjMuNTEgMTguNTEuNTEgNjguMDMgMCAxMzIuMDctMjAuNjMgMTgwLjMxLTU4LjA3IDQ4LjgxLTM3Ljg4IDc1LjY5LTg4LjQyIDc1LjY5LTE0Mi4zIDAtNTMuODktMjYuODgtMTA0LjQzLTc1LjY5LTE0Mi4zMXoiIGZpbGw9IiNmZjNlN2EiLz48Zz48Zz48cGF0aCBkPSJtMzk4LjMyIDI1NS45OTljMCAyMC42OC0xNi43OTkgMzcuNS0zNy40NTMgMzcuNS00LjM3NSAwLTguNTc5LS43NS0xMi40ODQtMi4xNC0xNC41MzItNS4xNi0yNC45NjktMTkuMDYtMjQuOTY5LTM1LjM2czEwLjQzNy0zMC4yIDI0Ljk2OS0zNS4zNmMzLjkwNS0xLjM5IDguMTEtMi4xNCAxMi40ODQtMi4xNCAyMC42NTQgMCAzNy40NTMgMTYuODIgMzcuNDUzIDM3LjV6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTM5OC4zMiAyNTUuOTk5YzAgMjAuNjgtMTYuNzk5IDM3LjUtMzcuNDUzIDM3LjUtNC4zNzUgMC04LjU3OS0uNzUtMTIuNDg0LTIuMTQgMTQuNTMyLTUuMTYgMjQuOTY5LTE5LjA2IDI0Ljk2OS0zNS4zNnMtMTAuNDM3LTMwLjItMjQuOTY5LTM1LjM2YzMuOTA1LTEuMzkgOC4xMS0yLjE0IDEyLjQ4NC0yLjE0IDIwLjY1NCAwIDM3LjQ1MyAxNi44MiAzNy40NTMgMzcuNXoiIGZpbGw9IiNkY2VjZjQiLz48L2c+PGc+PHBhdGggZD0ibTE4OC41ODYgMjU1Ljk5NmMwIDIwLjY4LTE2Ljc5OSAzNy41LTM3LjQ1MyAzNy41LTQuMzc1IDAtOC41NzktLjc1LTEyLjQ4NC0yLjE0LTE0LjUzMi01LjE2LTI0Ljk2OS0xOS4wNi0yNC45NjktMzUuMzZzMTAuNDM3LTMwLjIgMjQuOTY5LTM1LjM2YzMuOTA1LTEuMzkgOC4xMS0yLjE0IDEyLjQ4NC0yLjE0IDIwLjY1NCAwIDM3LjQ1MyAxNi44MiAzNy40NTMgMzcuNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMTg4LjU4NiAyNTUuOTk2YzAgMjAuNjgtMTYuNzk5IDM3LjUtMzcuNDUzIDM3LjUtNC4zNzUgMC04LjU3OS0uNzUtMTIuNDg0LTIuMTQgMTQuNTMyLTUuMTYgMjQuOTY5LTE5LjA2IDI0Ljk2OS0zNS4zNnMtMTAuNDM3LTMwLjItMjQuOTY5LTM1LjM2YzMuOTA1LTEuMzkgOC4xMS0yLjE0IDEyLjQ4NC0yLjE0IDIwLjY1NCAwIDM3LjQ1MyAxNi44MiAzNy40NTMgMzcuNXoiIGZpbGw9IiNkY2VjZjQiLz48L2c+PGc+PHBhdGggZD0ibTI5My40NTUgMjU1Ljk5NmMwIDIwLjY4LTE2Ljc5OSAzNy41LTM3LjQ1MyAzNy41LTQuMzc1IDAtOC41NzktLjc1LTEyLjQ4NC0yLjE0LTE0LjUzMi01LjE2LTI0Ljk2OS0xOS4wNi0yNC45NjktMzUuMzZzMTAuNDM3LTMwLjIgMjQuOTY5LTM1LjM2YzMuOTA1LTEuMzkgOC4xMS0yLjE0IDEyLjQ4NC0yLjE0IDIwLjY1NCAwIDM3LjQ1MyAxNi44MiAzNy40NTMgMzcuNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMjkzLjQ1NSAyNTUuOTk2YzAgMjAuNjgtMTYuNzk5IDM3LjUtMzcuNDUzIDM3LjUtNC4zNzUgMC04LjU3OS0uNzUtMTIuNDg0LTIuMTQgMTQuNTMyLTUuMTYgMjQuOTY5LTE5LjA2IDI0Ljk2OS0zNS4zNnMtMTAuNDM3LTMwLjItMjQuOTY5LTM1LjM2YzMuOTA1LTEuMzkgOC4xMS0yLjE0IDEyLjQ4NC0yLjE0IDIwLjY1NCAwIDM3LjQ1MyAxNi44MiAzNy40NTMgMzcuNXoiIGZpbGw9IiNkY2VjZjQiLz48L2c+PC9nPjxwYXRoIGQ9Im01MTIgMjQ5LjczNWMwIDUzLjg4LTI2Ljg4IDEwNC40Mi03NS42OSAxNDIuMy00OC4yNCAzNy40NC0xMTIuMjggNTguMDctMTgwLjMxIDU4LjA3LTYuMjEgMC0xMi4zOC0uMTctMTguNTEtLjUxIDYxLjA4LTMuMzkgMTE3Ljk4LTIzLjUzIDE2MS44Mi01Ny41NiA0OC44MS0zNy44OCA3NS42OS04OC40MiA3NS42OS0xNDIuMyAwLTUzLjg5LTI2Ljg4LTEwNC40My03NS42OS0xNDIuMzEtNDMuODQtMzQuMDMtMTAwLjczLTU0LjE2LTE2MS44MS01Ny41NSA2LjEzLS4zNCAxMi4zLS41MSAxOC41LS41MSA2OC4wMyAwIDEzMi4wNyAyMC42MiAxODAuMzEgNTguMDYgNDguODEgMzcuODggNzUuNjkgODguNDIgNzUuNjkgMTQyLjMxeiIgZmlsbD0iI2IyMDA2ZSIvPjwvZz48L3N2Zz4=" /></button>
                                <span class="nb-of-comments">0</span>
                            </div>
                            <div class="infos">
                                <p class="created-at"> Créé le : {{ post.createdAt.slice(0,10).split('-').reverse().join('-') + ' à ' + post.createdAt.slice(11,16) }}</p>
                                <p class="updated-at"> Modifié le : {{ post.updatedAt.slice(0,10).split('-').reverse().join('-') + ' à ' + post.updatedAt.slice(11,16) }}</p>
                            </div>
                        </div>    
        </article>
    </div>
   
</template>

<script>
import axios from 'axios'


export default {
    name: 'UserPosts',

    data() {
        return {
            posts: [],
        }
    },

    mounted() {
        this.getUserPosts();
    },

    methods: {
        getUserPosts () {
            //const userId = localStorage.getItem('userId');
            const userId = this.$route.params.userId;

            axios.get("http://localhost:3000/api/post/all/" + userId, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then((res) => {
                console.log(res);
                this.posts = res.data;
            })
            .catch((err) => {
                console.log(err + ' Impossible de récuperer les posts de l\'utilisateur')
            })
        },


    }
}
</script>

<style lang='scss' scoped>

.container-post {
    width: 95%;
    margin: 10px auto;
    background-color: #FFD7D7;
    border-radius: 5px;

}
    @media screen and (min-width: 769px) {
        .container-post {
            width: 600px ;
        }
    }

.post {
    background-color: white;
    margin: 0px 0px 10px 0px;
    border-radius: 5px;
}
.content {
    width: 100%;
}
.img-post {
    width: 95%;
    object-fit: contain;
}



.username {
    font-size: 17px;
    color: #FD2D01;
    font-weight: bold;
    padding: 10px;
    text-align: left;
}
.info-message {
    color: #FD2D01;
    font-weight: bold;
    font-style: italic;
}

h1 {
    font-size: 20px;
}

.post-footer {
    display: flex;
    flex-direction: raw;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    @media screen and (min-width: 769px) {
        width: 60%;
        margin: auto;
    }

}

.likes, .comments {
    display: flex;
    padding: 10px;
    width: 30px;
    display: inline-block;
    img {
        width: 25px;
        height: 25px;
    }
    span {
        font-size: 13px;
        color: #000000;
    }
}

/*.like-btn {
    background-color: white;
    border: none;
}*/

.infos {
    display: inline-block;
    
    font-size: 10px;
    font-style: italic;
    text-align: right;
    padding: 10px;
    p {
        margin: 2px 0px 2px 0px;
    }
}

</style>