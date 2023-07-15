const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const cadastroController = require("./src/controllers/cadastroController");
const loginController = require("./src/controllers/loginController");
const tarefaController = require("./src/controllers/tarefaController");

const { loginRequired } = require("./src/middlewares/middleware");

//Rotas da home
route.get("/404", homeController.erro);
route.get("/", homeController.paginaInicial);
route.get("/cadastro", homeController.paginaCadastro);

//Rotas de Cadastro
route.post("/cadastro/register", cadastroController.register);

//Rota Login
route.post("/login", loginController.login);
route.get("/logout", loginController.logout);

//Rotas de tarefas
route.get("/tarefa", loginRequired, tarefaController.index);
route.get("/adicionarTarefas", loginRequired, tarefaController.adicionarTarefas);
route.post("/adicionarTarefas/register", tarefaController.register)

//Rotas de deletar
route.get("/tarefa/delete/:id", tarefaController.delete);
route.get("/tarefa/deleteSubTask/:idSubTask", tarefaController.deleteSubTask);


module.exports = route;
