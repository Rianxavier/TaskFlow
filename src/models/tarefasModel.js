const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  titulo: { type: String, required: true },
  tarefas: [{ type: String }],
});

const tarefaModel = mongoose.model("tarefas", tarefaSchema);

module.exports = tarefaModel;

