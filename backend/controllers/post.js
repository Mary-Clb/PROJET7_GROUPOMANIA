const models = require('../models');
const fs = require('fs');

//ROUTES FOR POSTS//

//CREATE POST
exports.createPost = (req, res, next) => {
        console.log(req.file);
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({ message:'Veuillez remplir tous les champs'})
        } else {
            console.log(req.body)
        }
        let imagePost = req.body.content
        console.log('récupération de l\'image ');
        console.log(imagePost);
        if (req.file) {
            imagePost = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
            //console.log(imagePost);
        } 

        const newPost = models.post.create({
            userId: req.body.userId, 
            title: req.body.title,
            content: imagePost
        })
            .then(newPost => {
                return res.status(201).json({
                    'userId': newPost.userId,
                    'postId': newPost.id
                })
            })
            .catch(err => {
                console.log('erreur impossible de récupere le post ' + err)
                return res.status(500).json({ 'error':'Impossible de créer le post'})
            })
            
    };

//READ ALL POST
exports.getAllPosts = (req, res, next) => {
    models.post.findAll({
        include: [{
            model: models.user,
            required: true,
            attributes: ['firstname', 'name', 'id']
        },
        {
            model: models.comment,
            required: false,
            include: {
                model: models.user,
               // as: 'commentUser',
                required: true,
                attributes: ['firstname', 'name']
            },
        }],
        order: [['createdAt', 'DESC']],
    })
        .then((posts) => {
            //console.log(posts);
            res.status(200).json(posts);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({'error':'Impossible d\'afficher le post'})
        })

};

//READ ONE POST
exports.getOnePost = (req, res, next) => {

        models.post.findOne({
            where: { id: req.params.id},
            include: {
                model: models.user,
                required: true,
                attributes: ['firstname', 'name']
            }
        })
        .then((post) => {
            console.log('données envoyées')
            res.status(200).json(post)
        })
        .catch((error) => {
            res.status(404).json({ 'error': 'Impossible d\'afficher le post'})
        })

};

//READ ALL POSTS FROM ONE USER
exports.getUserPosts = (req, res, next) => {
    
    models.post.findAll({ 
        where: { userId: req.params.id },
        include: {
            model: models.user,
            required: true,
            attributes: ['firstname', 'name']
        }, 
        order: [['createdAt', 'DESC']],
    })
    .then((posts) => {
        res.status(200).json(posts)
    })
    .catch(error => res.status(400).json({ error : 'Impossible de récupérer les posts'}))

};





//UPDATE POST
exports.modifyPost = (req, res, next) => {
    if(req.file) {
        console.log('req.body')
       let data = {
           title: req.body.title,
           content: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
       }
    } else {
        let data = {
            title: req.body.title,
            content: req.body.content
        }
    }
    models.post.update(data, {where: { id: req.params.id}})
        .then(() => res.status(200).json({ message: 'Modification réussie'}))
        .catch(error => res.status(400).json({ 'error': 'Modification impossible'}))

};





//DELETE POST
exports.deletePost = (req, res, next) => {
    models.post.findOne({
        where: {id: req.params.id}
    })
    .then(function(postFound) {
        console.log('Vous allez supprimer le post ' + postFound.title)
        if (postFound) {
            const filename = postFound.content.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                models.likes.destroy({ where: { postId: req.params.id }})
                models.comment.destroy({ where: { postId: req.params.id}})
                models.post.destroy({ where: { id: req.params.id }})
                    .then(() => res.status(200).json({ message: 'Votre post a bien été supprimé'}))
                    .catch(error => res.status(400).json({ 'error': 'impossible de supprimer le post'}))
            })
        } 
    })
    .catch(error => res.status(500).json({ 'error' : 'Action impossible'}))
};



//ROUTES FOR COMMENTS//

//CREATE A COMMENT
exports.newComment = (req, res, next) => {
    if (!req.body.content) {
        return res.status(400).json({ message: 'commentaire vide'})
    }
    let postId = req.params.id
    console.log(req.body)
    console.log(postId)
    const newComment = models.comment.create ({
        userId: req.body.userId,
        postId: postId,
        content: req.body.content
    })
        .then(newComment => {
            console.log('commentaire créé')
            return res.status(201).json({
                'userId': newComment.userId,
                'postId': newComment.postId
            })
        })
        .catch(err => {
            return res.status(400).json({ 'error': 'Commentaire non créé'})
        })

};

//READ COMMENT
exports.getAllComments = (req, res, next) => {
    models.comment.findAll({
        where: { postId: req.params.id},
        include: {
            model: models.user,
            required: true,
            attributes: ['firstname', 'name']
        },
    })
    .then((comments) => {
        res.status(200).json(comments)
    })
    .catch(err => res.status(400).json({ 'err': 'impossible d\'afficher les commentaires'}))


};

//DELETE A COMMENT
exports.deleteComment = (req, res, next) => {
    console.log('Vous allez supprimer le commentaire')
    models.comment.destroy({ where: { id: req.params.id}})
        .then(() => res.status(200).json({ message: 'commentaire supprimé'}))
        .catch(err => res.status(400).json({ err : 'Impossible de supprimer le commentaire'}))

};

//ROUTES FOR LIKES

//ADD A LIKE
exports.likeAPost = (res, req, next) => {

    const token = req.headers.authorization.split(' ')[1]; //On extrait le token du header de la requête
    const decodedToken = jwt.verify(token, process.env.AUTH_SECRET); //On utilise la méthode Verify() de JWT pour vérfier que le token est valide
    const userId = decodedToken.userId;

    models.likes.findOne ({
        where: {
            [Op.and] : [
                { postId: req.params.id},
                { userId: userId}
            ]
        }
    })
    .then(function(likeFound) {
        if(!likeFound) {
            models.likes.update ({
                postId: req.params.id,
                userId: userId
            })
            .then(() => res.status(200).json ({ message: 'Vous avez liké ce post'}))
            .catch(err => res.status(400).json ({ err: 'Impossible de liker le post'}))
        } else {
            return res.status(401).json({ message: 'Vous avez déjà liké ce post'})
        }

    })
    .catch(err => res.status(500).json({ err: 'Impossible d\'accéder à la requête'}))


};

//GET ALL LIKE FOR ONE POST

exports.getAllLikes = (req, res, next) => {
    models.likes.findAll ({
        where: { postId: req.params.id},
        include: {
            model: models.user,
            required: true,
            attributes: [ 'firstname', 'name']
        }
    })
    .then(allLikes => { res.status(200).json(allLikes) })
    .catch(err => res.status(403).json({ err: 'Impossible d\'exécuter la requête'}))

};