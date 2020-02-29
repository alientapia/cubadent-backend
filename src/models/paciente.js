'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaPaciente = Schema({
    nombre: String,
    apellido: String,
    rut: String,
    email: String,
    telefono: String
});

module.exports = mongoose.model('Paciente', SchemaPaciente);