const Tarefa = require("../models/tarefasModel");

exports.index = async function (req, res, next) {
  try {
    const idUser = req.session.user._id;
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

    const novaTarefa = new Tarefa({
      userId: id,
      titulo,
      tarefas: tarefa.map(t => ({tarefa: t})),
    });

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

exports.delete = async function (req, res){
  try {
    if(!req.params.id) return res.render('404');
    if(typeof req.params.id !== "string") return res.render('404');

    const tarefa = await Tarefa.deleteTask(req.params.id);
    if(!tarefa) return res.render('404');
    
    req.session.save(() => res.redirect("/tarefa"));

  } catch (error) {
    console.log("Erro ao deletar a tarefa:", error);
    res.render("404");
  }
}

exports.deleteSubTask = async function(req, res){
  try {
    const userId = req.session.user._id;
    if(!userId) return res.render('404');
    if(!req.params.idSubTask) return res.render('404');

    const tarefaId = req.params.idSubTask;

    const subTarefa = await Tarefa.deleteSubTask(tarefaId, userId);
    if(!subTarefa) return res.render('404');

    req.session.save(() => res.redirect("/tarefa"));
    
  } catch (error) {
    console.log("Erro ao deletar a tarefa:", error);
    res.render("404");
  }
}