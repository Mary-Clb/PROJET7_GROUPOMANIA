
const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');
const validate = require('validate-mail');


let schema = new passwordValidator(); 
//Propriétés du schéma de validation de mot de passe :
schema
.is().min(8)                                     // Minimum 8 caractères
.is().max(20)                                   // Maximum 100 caractères
.has().uppercase(1)                              // Doit avoir au moins 1 lettre majuscule
.has().lowercase()                              // Doit avoir des lettres en minuscule
.has().digits(1)                                // Doit avoir au moins 1 chiffre
.has().not().spaces()                           // Ne pas avoir d'espaces
//.is().not().oneOf(['Passw0rd', 'Password123']);


exports.signup = (req, res, next) => {
    if (!req.body.firstname || !req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ message:'Veuillez remplir tous les champs'});
    }

    if (validate(req.body.email) && schema.validate(req.body.password)) {
        
        models.user.findOne({
            attributes: ['email'],
            where: { email: req.body.email}
        })
        .then(function(userFound) {
            if (!userFound) {

                bcrypt.hash(req.body.password, 10, function(err, bcryptedPassword) {
                    const newUser = models.user.create({
                        firstname: req.body.firstname,
                        name: req.body.name,
                        email: req.body.email,
                        password: bcryptedPassword,
                        isAdmin: 0
                    })
                    .then(newUser => {
                        return res.status(201).json({
                            'userId': newUser.id
                        })
                    })
                    .catch(err => {
                        return res.status(500).json({ 'error':'impossible d\'ajouter l\'utilisateur'});
                        });
                    });
    
            } else {
                return res.status(409).json({ 'error':'Utilisateur déjà existant'});
            }
        })
        .catch(err => {
            return res.status(500).json({ 'error' : 'Impossible de vérifier l\'utilisateur'});
        });
        
} else {
        return res.status(500).json({ message: 'Adresse mail ou mot de passe non valide'})
    };
}; 



exports.login = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message:'Veuillez remplir tous les champs'});
    }

    models.user.findOne({
        where: { email: req.body.email}
    })
    .then(function(userFound) {
        console.log('utilisateur : ' + userFound.firstname + ' ' + userFound.name)
        if (userFound) {
                bcrypt.compare(req.body.password, userFound.password, function(errBcrypt, resBcrypt) {
                if(resBcrypt) {
                    console.log('mot de passe correct')
                    console.log(userFound.id)
                    return res.status(200).json ({
                        message: 'connexion réussie',
                        userId: userFound.id,
                        isAdmin: userFound.isAdmin,
                        token: jwt.sign({ userId: userFound.id }, process.env.AUTH_SECRET, { expiresIn: '24h'})
                    });
                } else {
                    console.log('mot de passe incorrect dans bdd')
                    return res.status(403).json({ message:'mot de passe invalide'});
                }
            })

        } else {
        console.log('Utilisateur non trouvé');
        return res.status(404).json({ message: 'Utilisateur introuvable'});
        }
    })
    .catch(err => {
        return res.status(500).json({ message: 'Impossible de vérifier l\'utilisateur'});
    })

};


exports.deleteMyAccount = (req, res, next) => {
        console.log(" USER ACCOUNT DELETION PROCESS ")
        console.log(" userId : " + req.params.id)

            models.likes.destroy({where: { userId: req.params.id }})
            models.comment.destroy({where: { userId: req.params.id }})
            models.post.destroy({where: { userid: req.params.id }})
            models.user.destroy({ where: { id: req.params.id }})
                .then( () => res.status(200).json({message: "Votre compte a bien été supprimé"}))
                .catch( err => {
                    return res.status(401).json({ message: 'Impossible de supprimer l\'utilisateur'})
                });
            };
