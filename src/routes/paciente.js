'use strict'

var express = require('express');
var PacienteController = require('../controllers/paciente');

var router = express.Router();

router.get('/home', PacienteController.home);
router.post('/test',PacienteController.test);
router.post('/save-paciente', PacienteController.savePaciente);
router.get('/paciente/:id', PacienteController.getPaciente);
router.get('/pacientes', PacienteController.getPacientes);
router.put('/paciente/:id', PacienteController.updatePaciente);
router.delete('/paciente/:id', PacienteController.deletePaciente);

module.exports = router;