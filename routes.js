const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const cadastroController = require('./src/controllers/cadastroController');



//Rotas da home
route.get('/', homeController.paginaInicial);
route.get('/cadastro', homeController.paginaCadastro);

//Rotas de Cadastro
route.post('/cadastro/register', cadastroController.register);


module.exports = route;