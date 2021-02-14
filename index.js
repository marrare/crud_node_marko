require('marko/node-require');
let markoExpress = require("marko/express");
const express = require('express');

const AlunoDao = require('./dao/aluno-dao');
const alunoDAO = new AlunoDao();

const bodyParser = require('body-parser');

const app = express();
app.use(markoExpress());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    alunoDAO.list().then((alunos) => {
        res.marko(require('./templates/alunos.marko'), alunos);
    }).catch(err => {
        console.log(err);
        res.status(500).json("Internal Error")
    })
    
})

app.get('/form', (req, res) => {
    res.marko(require('./templates/form.marko'));
})

app.get('/form/:id', (req, res) => {
    const aluno = alunoDAO.findById(req.params.id);
    res.marko(require('./templates/form.marko'), aluno);
})

app.get('/alunos/delete/:id', (req, res) => {
    alunoDAO.delete(req.params.id);
    res.redirect("/");
});

app.post('/alunos', (req,res) => {
    const aluno = req.body;
    if(aluno.id) alunoDAO.update(aluno);
    else alunoDAO.save(aluno);
    
    res.redirect("/");
})

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor Iniciado ...');
})