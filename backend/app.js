require('dotenv').config();


//IMPORT PLUGINS
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const sequelize_fixtures = require('sequelize-fixtures');
const dataBase = require('./models');


const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

//ANTICIPER LES ERREURS CORS - AUTORISE L'ACCES DEPUIS N'IMPORTE QUELLE ORIGINE - POUR TOUTES LES REQUETES A L'API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//SYNCHRONISATION DE LA BDD
dataBase.sequelize.sync()

//FIXTURE A PARTIR D'UN FICHIER POUR CREATION AUTOMATIQUE COMPTE TEST ADMINISTRATEUR
sequelize_fixtures.loadFile('./fixtures/test_admin.json', dataBase).then(function(){
  LoadAdminDatas();
});

//ROUTES
app.use("/images", express.static(path.join(__dirname, "images")));
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);

module.exports = app;