const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const passwordValidator = require('password-validator');
const validate = require('validate-mail');
const bodyParser = require('body-parser');


let schema = new passwordValidator(); 
//Propriétés du schéma de validation de mot de passe :
schema
.is().min(8)                                     // Minimum 8 caractères
.is().max(20)                                   // Maximum 100 caractères
.has().uppercase(1)                              // Doit avoir au moins 1 lettre majuscule
.has().lowercase()                              // Doit avoir des lettres en minuscule
.has().digits(1)                                // Doit avoir au moins 1 chiffre
.has().symbols(1)                               // Doit avoir au moins 1 caractère spécial
.has().not().spaces()                           // Ne pas avoir d'espaces
//.is().not().oneOf(['Passw0rd', 'Password123']);














/*exports.signup = (req, res, next) => {
            if (validate(req.body.email) && (schema.validate(req.body.password)))  {

                User.findOne({ attributes: ['email'], where: {email: req.body.email}})
                    .then(userFound => {
                        if (!userFound) {
                            bcrypt.hash(req.body.password,10)
                            .then(hash => {
                                const user = user.create({
                                    firstname: req.body.firstname,
                                    name : req.body.name,
                                    email : req.body.email,
                                    password : hash
                                });
                            });
                            .catch(error => res.status(400).json({ message: 'L\'utilisateur n\'a pas pu être créé'}));    
                            });

                        } else {
                            return res.status(409).json({ 'Erreur : l\'utilisateur existe déjà' });
                        }
                    })
                    .catch(error => {return res.status(500).json({ 'Erreur : impossible de vérifier l\'utilisateur})
                    });

                .catch(error => res.status(400).json({ message:'Adresse mail ou mot de passe incorrect'}));
            };   */
        







