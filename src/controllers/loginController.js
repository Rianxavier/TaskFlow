const Cadastro =  require('../models/cadastroModel')

exports.login = async function(req, res){
    try {
        const login = new Cadastro(req.body)
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save( function ()  {
                return res.redirect('/');
            })
            return
        }
        req.flash('success', 'Você entrou no sistema');
        req.session.user = login.user    
        req.session.save(function () {
            return res.redirect('/');
        })
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}