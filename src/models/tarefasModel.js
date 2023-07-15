const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  titulo: { type: String, required: true },
  tarefas: [{ 
    tarefa: {type: String },
    concluida: {type: Boolean, default: false}
  }],
});

const tarefaModel = mongoose.model("tarefas", tarefaSchema);

  class Tarefa{
    constructor(body){
      this.body = body;
      this.tarefa = null; 
    }
     async register(){
      this.tarefa =  await tarefaModel.create(this.body)
     }

     static async findTask(idUser){
        const tarefas = await tarefaModel.find({userId: idUser}).exec();
        return tarefas;
     }

     static async deleteTask(id){
        const tarefa = await tarefaModel.findOneAndDelete({_id:id});
        return tarefa;
     }

     static async deleteSubTask(tarefaId, userId){
      const tarefa = await tarefaModel.updateOne(
        { userId },
        { $pull: { tarefas: { _id: tarefaId } } }
      );
      return tarefa;
     }
}


module.exports = Tarefa;

