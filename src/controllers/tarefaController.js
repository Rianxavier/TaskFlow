const Tarefa = require("../models/tarefasModel");

exports.index = async function (req, res, next) {
  try {
    const idUser = req.session._id;
    const tarefas = await Tarefa.findTask(idUser);
    res.render("tarefa", { tarefas });
  } catch (error) {
    console.log("Erro ao obter as tarefas:", error);
    res.render("404");
  }
};

exports.adicionarTarefas = function (req, res, next) {
  res.render("adicionarTarefa");
};

exports.register = async (req, res) => {
  try {

     const { id, titulo, tarefa } = req.body;

    // Cria um novo objeto de tarefa com os dados fornecidos
    const novaTarefa = new Tarefa({
      userId: id,
      titulo,
      tarefas: tarefa.map(t => ({tarefa: t})),
    });

    // Salva a nova tarefa no banco de dados
    await novaTarefa.register();

    if (res.status(201)) {
      req.flash("success", "Tarefa Salva");
      req.session.save(() => res.redirect("/tarefa"));
    }
  } catch (error) {
    console.log("Erro ao adicionar a tarefa:", error);
    res.render("404");
  }
};
