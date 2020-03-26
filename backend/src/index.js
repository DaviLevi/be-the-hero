// arquivo principal da nossa aplicacao
// todo o codigo do projeto vai partir desse arquivo

// importando o modulo express em uma variavel
const express = require('express');
// importando o modulo de routing em uma variavel
const routes = require('./routes');

const cors = require('cors');

// instanciando o modulo express em uma variavel
// essa variavel vai conter todas as funcionalidades
// do framework express, pois será uma instancia do framework
const app = express();

app.use(cors());
// configura a api para interpretar o corpo das requisições como json
app.use(express.json());

// importa a parte de codigo definida em routes
app.use(routes);
/*
 * Metodos HTTP:
 * 
 * GET : Buscar uma info do back-end
 * POST : Criar uma informação no back-end
 * PUT : Alterar uma informação no back-end
 * DELETE : Deletar uma informação no back-end
 * 
 */

// a nossa aplicação de back end, vai ficar escutando
// na porta 3333
app.listen(3333);

