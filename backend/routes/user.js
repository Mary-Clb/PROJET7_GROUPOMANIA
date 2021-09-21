const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
//routeur.post('/login', userCtrl.login);
//routeur.delete('/:id', auth, userCtrl.deleteUser);



module.exports = router;