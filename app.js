'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

//rutas
var pacienteRoutes = require('./src/routes/paciente');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));


//cors

//rutas
app.use('/api',pacienteRoutes);


// exportar modulo
module.exports = app;
