require('marko/node-require');
let markoExpress = require("marko/express");
const express = require('express');

const AlunoDao = require('./dao/aluno-dao');
const dao = new AlunoDao();

const app = express();
app.use(markoExpress());

app.get('/', (req, res) => {
    res.marko(require('./templates/alunos.marko'), dao.list());
})

app.get('/form', (req, res) => {
    res.marko(require('./templates/form.marko'));
})

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor Iniciado ...');
})