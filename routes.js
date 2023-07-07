const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');



//Rotas da home
route.get('/', homeController.paginaInicial);
route.get('/cadastro', homeController.paginaCadastro);

//Rotas de Cadastro
route.post('/cadastro/register', cadastroController.register);

//Rota Login
route.post('/login', loginController.login);
module.exports = route;