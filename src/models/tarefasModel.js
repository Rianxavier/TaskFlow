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
}


module.exports = Tarefa;

