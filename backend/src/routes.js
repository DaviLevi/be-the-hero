// importando o modulo express em uma variavel
const express = require('express');
// importando o modulo de controlador de ongs
const ongController = require('./controllers/OngController');
// importando o modulo de controlador de casos
const incidentController = require('./controllers/IncidentController');
// importando o modulo de controlador de perfis
const profileController = require('./controllers/ProfileController');
// importando o modulo de controlador de sessoes
const sessionController = require('./controllers/SessionController');

// instanciando o modulo de routing em uma variavel
// essa variavel vai conter todas as funcionalidades
// do framework express, pois será uma instancia do framework
const routes = express.Router();

// importando o modulo de conexao
const connection = require('./database/connection');
// importando o modulo de criptografia para gerar bytes aleatorios
const crypto = require('crypto');


/************* ROTAS DAS ONGS ************/
routes.get('/ongs',ongController.list);
routes.post('/ongs', ongController.create);



/************* ROTAS DOS CASOS ************/
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);



/************* ROTAS DOS PERFIS ***********/
routes.get('/profile', profileController.index);



/************* ROTAS DE SESSAO  ***********/
routes.post('/sessions', sessionController.create);

module.exports = routes;
