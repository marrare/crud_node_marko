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

    alunoDAO.list().then((result) => {
        response.results = result;
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
    const id = req.params.id;
    alunoDAO.findById(id).then((result) => {
        if(result.length > 0) {
            res.marko(require('./templates/form.marko'), result[0]);
        } else {
            req.flash("error",`Não foi encontrado aluno com id = ${id}`);
            res.redirect("/");
        }
    }).catch(err => {
        console.log(err);
        req.flash("error","Não é possível editar usuário");
        res.redirect("/");
    })
    
})

app.get('/alunos/delete/:id', (req, res) => {
    alunoDAO.delete(req.params.id).then((result) => {
        req.flash("success","Aluno deletado com sucesso.");
        res.redirect("/");
    }).catch( err => {
        console.log(err);
        req.flash("error","Erro ao tentar deletar os dados do aluno.");
        res.redirect("/");
    })
});

app.post('/alunos', (req,res) => {
    const aluno = req.body;
    if(aluno.id) {
        alunoDAO.update(aluno).then((result) => {
            req.flash("success","Atualização feita com sucesso.");
            res.redirect("/");
        }).catch( err => {
            console.log(err);
            req.flash("error","Erro ao tentar atualizar os dados do aluno.");
            res.redirect("/");
        })
    } else {
        alunoDAO.save(aluno).then((result) => {
            req.flash("success","Aluno salvo com sucesso.");
            res.redirect("/");
        }).catch(err => {
            console.log(err);
            req.flash("error","Erro ao tentar salvar os dados do aluno.");
            res.redirect("/");
        })
    }
})

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor Iniciado ...');
})