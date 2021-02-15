
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const consign = require('consign');
const flash = require('connect-flash');
let markoExpress = require("marko/express");
require('marko/node-require');

const app = express();
app.use(bodyParser.urlencoded());
app.use(markoExpress());
app.use(session({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}))
app.use(flash());

consign({})
    .include('src/models')
    .then('config')
    .then('src/controllers')
    .then('src/routes')
    .into(app);

const port = 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
})