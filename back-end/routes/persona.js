const express = require('express');
const router = express.Router();

// Persona Model
const Persona = require('../models/persona.models');

// GET all Personas
router.get('/', async (req, res) => {
  const personas = await Persona.find().catch(err => res.status(400).json('Error: ' + err));
  res.json(personas);
});

// GET all Personas
router.get('/:id', async (req, res) => {
  const persona = await Persona.findById(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json(persona);
});

// ADD a new Persona
router.post('/', async (req, res) => {
  const { nombre, telefono, cedula, direccion, user, password, administrador, analista, operario } = req.body;
  const persona = new Persona({nombre, telefono, cedula, direccion, user, password, administrador, analista, operario});
  await persona.save().catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Persona Saved'});
});

// UPDATE a new Persona
router.put('/:id', async (req, res) => {
  const { nombre, telefono, cedula, direccion, user, password, administrador, analista, operario } = req.body;
  const newPersona = {nombre, telefono, cedula, direccion, user, password, administrador, analista, operario};
  await Persona.findByIdAndUpdate(req.params.id, newPersona).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Persona Updated'});
});

router.delete('/:id', async (req, res) => {
  await Persona.findByIdAndRemove(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Persona Deleted'});
});

module.exports = router;
