require('marko/node-require');
let markoExpress = require("marko/express");
const express = require('express');

const AlunoDao = require('./dao/aluno-dao');
const dao = new AlunoDao();

const bodyParser = require('body-parser');

const app = express();
app.use(markoExpress());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.marko(require('./templates/alunos.marko'), dao.list());
})

app.get('/form', (req, res) => {
    res.marko(require('./templates/form.marko'));
})

app.get('/form/:id', (req, res) => {
    const aluno = dao.findById(req.params.id);
    res.marko(require('./templates/form.marko'), aluno);
})

app.get('/alunos/delete/:id', (req, res) => {
    dao.delete(req.params.id);
    res.redirect("/");
});

app.post('/alunos', (req,res) => {
    const aluno = req.body;
    if(aluno.id) dao.update(aluno);
    else dao.save(aluno);
    
    res.redirect("/");
})

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor Iniciado ...');
})