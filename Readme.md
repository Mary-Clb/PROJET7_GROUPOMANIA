# FORMATION DEVELOPPEUR WEB - OPENCLASSROOMS
## PROJET 7 - CREER UN RESEAU SOCIAL D'ENTREPRISE
### CONTEXTE :
Créer une application web qui jouera le rôle de réseau social interne pour une entreprise. 

> ### COMPETENCES ACQUISES : 
> - Authentifier un utilisateur et maintenir sa session
> - Personnaliser le contenu envoyé à un client web
> - Gérer un stockage de données à l'aide de SQL
> - Créer une application web avec Vue.js
> - Utiliser un ORM (Sequelize) pour faciliter les actions CRUD sur la BDD, ainsi que la création de tables et le mapping
> - Utiliser les standards préconisés par le WCAG pour sécuriser une application

### INSTALLATION DE L'APPLICATION :

* ENVIRONNEMENT NECESSAIRE :
    * Node.js, npm
    * MySQL

* CLONER LE REPERTOIRE :

```
$ git clone https://github.com/Mary-Clb/PROJET7_GROUPOMANIA
```

* LANCER L'APPLICATION (FRONTEND):

Se placer dans le dossier frontend à l'aide du terminal :

```
$ cd frontend
```

Puis, taper :

```
$ npm install
```

Ensuite, lancer le serveur :

```
$ npm run serve
```


* LANCER LE SERVEUR BACKEND :

Vous devez au préalable connecter votre BDD à l'application.
Pour cela, utiliser le fichier ".env.example" situé dans le dossier backend, le renommer ".env" et compléter les variables de connexion avec vos identifiants. 

Les identifiants du compte test administrateur ont été créés par défaut et ne doivent pas être modifiés.



Ensuite, se placer dans le dossier backend de l'application :

```
$ cd backend
```

Installer les dépendances nécessaires :

```
$ npm install
```

Lancer le serveur :

```
$ node server
```

* NAVIGATEUR

Ouvrir une nouvelle fenêtre à l'adresse  http://localhost:8080/

Vous êtes sur la page d'accueil de l'application. Cliquer sur "S'inscrire" et créer un nouveau compte utilisateur.
Ensuite, connectez vous à l'aide de vos identifiants. Vous avez maintenant accès à la page d'accueil, où vous pourrez :

* Lire tous les posts
* Créer un post
* Modifier vos posts
* Supprimer vos posts
* Commenter les posts
* Supprimer vos commentaires



* COMPTE ADMINISTRATEUR

Un compte test administrateur a été créé par défaut. Pour y accéder, rendez vous sur la page de connexion et saisissez les identifiants suivant :

Email : admin.test@gmail.com
Mot de passe : Admin1234

Avec ce compte, vous pouvez :

* Lire tous les posts
* Supprimer tous les posts
* Commenter les posts
* Supprimer tous les commentaires
* Supprimer un compte utilisateur




