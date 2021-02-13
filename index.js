require('marko/node-require');
let markoExpress = require("marko/express");
const express = require('express');

const app = express();
app.use(markoExpress());

app.get('/', (req, res) => {
    var alunos = [
        { id: 1, nome: 'Josino', curso: 'ADS' },
        { id: 1, nome: 'Josino', curso: 'ADS' },
        { id: 1, nome: 'Josino', curso: 'ADS' }
    ]
    res.marko(require('./templates/alunos.marko'), alunos);
})

app.get('/form', (req, res) => {
    res.marko(require('./templates/form.marko'));
})

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor Iniciado ...');
})