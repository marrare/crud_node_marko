module.exports = (app) => {
    const { alunoController } = app.src.controllers;

    app.get('/', alunoController.listarAlunoPagina);
    app.get('/aluno', alunoController.formAlunoPagina);
    app.get('/aluno/:id', alunoController.formAlunoPagina);
    app.post('/aluno', alunoController.saveAluno);
    app.get('/aluno/delete/:id', alunoController.deleteAluno);
};