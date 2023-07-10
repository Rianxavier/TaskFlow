
exports.erro = (req, res) => {
    res.render('404');
    return;
};
exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};
exports.paginaCadastro = (req, res) => {
    res.render('cadastro');
    return;
};
exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};

