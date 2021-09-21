const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const userCtrl = require('../controllers/user')

//routeur.get('/', auth, userCtrl.)



module.exports = router;