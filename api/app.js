'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//charge Rutes
var user_routes = require('./routes/user');
//middlewares
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//cors

//rutes
app.use('/api', user_routes);

//export

module.exports = app;