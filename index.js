const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

require('marko/node-require');
let markoExpress = require("marko/express");
app.use(markoExpress());

const AlunoDao = require('./dao/aluno-dao');
const alunoDAO = new AlunoDao();

const session = require('express-session');
const flash = require('connect-flash');
app.use(session({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}))
app.use(flash());

app.get('/', (req, res) => {

    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results: []
    }

    alunoDAO.list().then((alunos) => {
        response.results = alunos;
        res.marko(require('./templates/alunos.marko'), response);
    }).catch(err => {
        console.log(err);
        response.error_messages.push("Aconteceu algum erro");
        res.marko(require('./templates/alunos.marko'), response);
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