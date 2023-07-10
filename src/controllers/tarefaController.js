exports.index = function (req, res, next) {
    res.render('tarefa')
};

exports.adicionarTarefas = function (req, res, next) {
    res.render('adicionarTarefa')
};