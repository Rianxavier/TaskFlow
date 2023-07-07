const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const CadastroSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    
});

const CadastroModel = mongoose.model('cadastro', CadastroSchema);

class Cadastro{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register(){
        await this.userExists();

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

        this.user = await CadastroModel.create(this.body);
    }

    async userExists(){
        this.cleanUp();

        this.user = await CadastroModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('O e-mail fornecido já está em uso. Por favor, escolha outro e-mail.')

    }

    async login() {
        if(this.errors.length > 0) return;
    
        this.user = await CadastroModel.findOne({email: this.body.email });

        if (!this.user){
            this.errors.push('Usuário não encontrado.');
            return;
        }
        
        if(!bcryptjs.compareSync(this.body.senha, this.user.senha)){
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }
    }

    cleanUp(){
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome,
            email: this.body.email,
            senha: this.body.senha
        };
    }
}

module.exports = Cadastro;