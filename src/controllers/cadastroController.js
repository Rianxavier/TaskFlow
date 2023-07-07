const Cadastro = require('../models/cadastroModel');

exports.register = async function (req, res) {  
    try{
        const cadastro = new Cadastro(req.body);
        await cadastro.register()

        if(cadastro.errors.length > 0) {
            req.flash('errors', cadastro.errors);
            req.session.save(() => res.redirect('/cadastro'));
            return;
        }

        req.flash('success', 'Usuário cadastrado com sucesso');
        req.session.save(() => res.redirect('/cadastro'));
    } catch (e) {
        console.log(e);
        res.render('404')
    }
}


