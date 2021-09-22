const models = require('../models');
const fs = require('fs');


//CREATE POST
exports.createPost = (req, res, next) => {
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({ message:'Veuillez remplir tous les champs'})
        } else {
            console.log(req.body)
        }
        const newPost = models.post.create({
            userId: req.body.userId,
            title: req.body.title,
            content: req.body.content,
            likes: 0
        })
            .then(newPost => {
                return res.status(201).json({
                    'userId': newPost.userId,
                    'postId': newPost.id
                })
            })
            .catch(err => {
                console.log(newPost.title)
                return res.status(500).json({ 'error':'Impossible de créer le post'})
            })
            
    };

//READ ALL POST
exports.getAllPosts = (req, res, next) => {
    models.post.findAll()
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((error) => {
            res.status(400).json({'error':'Impossible d\'afficher les sauces'})
        })

};

//READ ONE POST
exports.getOnePost = (req, res, next) => {

        models.post.findOne({
            where: { id: req.params.id}
        })
        .then((post) => {
            res.status(200).json(post)
        })
        .catch((error) => {
            res.status(404).json({ 'error': 'Impossible d\'afficher le post'})
        })

};