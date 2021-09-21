const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');
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
                        return res.status(500).json({ 'error':'impossible de vérifier l\'utilisateur'});
                    });
                });
    
            } else {
                return res.status(409).json({ 'error':'Utilisateur déjà existant'});
            }
        });

            
} else if (!validate(req.body.email) || !schema.validate(req.body.password)){
    return res.status(401).json({ message:'Adresse email ou mot de passe incorrect'})
    } else {
        return res.status(500).json({ message: 'erreur'})
    };
};