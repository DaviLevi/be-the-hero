const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async list(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
        // sintaxe para acessar os queries params
        //const params1 = request.query;

        // sintaxe para acessar os Route Params
        //const params2 = request.params;

        // sintaxe para acessar o body do request
        const { name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf,
        });
        return response.json({ id });
    }

}














// implementando um comportamento na aplicação
// caso receba uma requisição GET no endpoint relativo "/"
// ou seja no endpoint absoluto localhost:3333 ou localhost:3333/

/* 
 *  Tipos parametros
 *  
 * Query Params: Parametros nomeados, enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parametros utilizados p/ identificar recursos
 * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /*
  *  Sintaxe da rota para Route Params -> /users/:id
  *  Sintaxe da rota para Query Params -> /users   (nao muda)
  *  
  */
