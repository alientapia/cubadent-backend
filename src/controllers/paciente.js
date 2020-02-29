'use strict'

var Paciente = require('../models/paciente');

var controller = {

    home: function(req,res){
        return res.status(200).send({
            message: 'soy la home'
        });
    },

    test: function(req,res){
        return res.status(200).send({
            message: 'metodo test'
        });
    },
    savePaciente: function(req,res){
        var paciente = new Paciente();

        var params = req.body;
        paciente.nombre = params.nombre;
        paciente.apellido = params.apellido;
        paciente.rut = params.rut;
        paciente.email = params.email;
        paciente.telefono = params.telefono;

        paciente.save((err, pacienteStored) =>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento'});

            if(!pacienteStored) return res.status(404).send({message: 'No se ha podido guardar el paciente'});

            return res.status(200).send({paciente: pacienteStored});
        });
    },

    getPaciente: function(req, res){
        var pacienteId = req.params.id;

        Paciente.findById(pacienteId, (err, paciente) => {
            if(err) return res.status(500).send({message: 'Error no se econtro el documento'});

            if(!paciente) return res.status(404).send({message: 'No encontrado'});

            return res.status(200).send({paciente: paciente});

        });

    },

    getPacientes: function(req, res){

        Paciente.find({}).sort('-apellido').exec((err, pacientes)=>{
            if(err) return res.status(500).send({message:'Error al obtener datos'});

            if(!pacientes) return res.status(404).send({message: 'No hay pacientes que mostrar'});

            return res.status(200).send({pacientes});
        })
    },

    updatePaciente: function(req, res){

        var pacienteId = req.params.id;
        var update = req.body;

        Paciente.findByIdAndUpdate(pacienteId, update, {new: true}, (err, pacienteUpdated) => {

            if(err) return res.status(500).send({message: 'Error al actualizar'});

            if(!pacienteUpdated) return res.status(404).send({message: 'No existe el paciente para actualizar'});

            return res.status(200).send({pacienteUpdated});
        });
    },

    deletePaciente: function(req,res){

        var pacienteId = req.params.id;

        Paciente.findByIdAndDelete(pacienteId, (err, pacieteRemoved) => {
            if(err) return res.status(500).send({message: 'Error al eliminar paciente'});

            if(!pacieteRemoved) return res.status(404).send({message: 'No existe el paciente para eliminar'});

            return res.status(200).send({pacieteRemoved});
        });
    }

};

module.exports = controller;