const Tarefa = require("../models/tarefasModel");

exports.index = function (req, res, next) {
  res.render("tarefa");
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
      tarefas: tarefa,
    });

    // Salva a nova tarefa no banco de dados
    await novaTarefa.save();

    if (res.status(201)) {
      req.flash("success", "Tarefa Salva");
      req.session.save(() => res.redirect("/adicionarTarefas"));
    }
  } catch (error) {
    console.log("Erro ao adicionar a tarefa:", error);
    res.render("404");
  }
};
