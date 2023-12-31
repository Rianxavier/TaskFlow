const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  titulo: { type: String, required: true },
  tarefas: [
    {
      tarefa: { type: String },
      concluida: { type: Boolean, default: false },
    },
  ],
});

const tarefaModel = mongoose.model("tarefas", tarefaSchema);

class Tarefa {
  constructor(body) {
    this.body = body;
    this.tarefa = null;
  }
  async register() {
    this.tarefa = await tarefaModel.create(this.body);
  }

  async editarTarefa(id) {
    this.tarefa = await tarefaModel.findByIdAndUpdate(id, this.body, {
      new: true,
    });
  }

  static async findTask(idUser) {
    const tarefas = await tarefaModel.find({ userId: idUser }).exec();
    return tarefas;
  }

  static async deleteTask(id) {
    const tarefa = await tarefaModel.findOneAndDelete({ _id: id });
    return tarefa;
  }

  static async deleteSubTask(tarefaId, userId) {
    const tarefa = await tarefaModel.updateOne(
      { userId },
      { $pull: { tarefas: { _id: tarefaId } } }
    );
    return tarefa;
  }

  static async buscarPorId(id) {
    if (typeof id !== "string") return;
    const tarefa = await tarefaModel.findById(id);
    return tarefa;
  }

  static async editarConcluida(idTarefa, idSubTarefas) {
    const atualizacoes = idSubTarefas.map((idSubTarefa) => ({
      updateOne: {
        filter: { _id: idTarefa, "tarefas._id": idSubTarefa },
        update: { $set: { "tarefas.$.concluida": true } },
      },
    }));

    const result = await tarefaModel.bulkWrite(atualizacoes);
    return result;
  }
}

module.exports = Tarefa;
