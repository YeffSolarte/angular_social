'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//charge Rutes

//middlewares
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//cors

//rutes
app.get('/', (req, res) => {
	res.status(200).send({message : 'HOLA MUNDOOOOOO :D '});
});

app.get('/try', (req, res) => {
	res.status(200).send({message : 'Accion de pruebeas'});
});

//export

module.exports = app;