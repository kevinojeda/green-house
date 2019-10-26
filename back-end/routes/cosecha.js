const express = require('express');
const router = express.Router();

// Persona Model
const Cosecha = require('../models/cosecha.models');

// GET all Personas
router.get('/', async (req, res) => {
  const cosecha = await Cosecha.find().catch(err => res.status(400).json('Error: ' + err));
  res.json(cosecha);
});

// GET all Personas
router.get('/:id', async (req, res) => {
  const cosecha = await Cosecha.findById(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json(cosecha);
});

// ADD a new Persona
router.post('/', async (req, res) => {
  console.log(req.body);
  const { fecha_inicio, nombre_planta, numero_plantas, produccion_final, nivel_thc, nivel_cbd} = req.body;
  const cosecha = new Cosecha({fecha_inicio, nombre_planta, numero_plantas, produccion_final, nivel_thc, nivel_cbd});
  await cosecha.save().catch(err => console.log(err));
  res.json({status: 'Cosecha Saved'});
});

// UPDATE a new Persona
router.put('/:id', async (req, res) => {
  const { fecha_inicio, nombre_planta, numero_plantas, produccion_final, nivel_thc, nivel_cbd } = req.body;
  const newCosecha = {fecha_inicio, nombre_planta, numero_plantas, produccion_final, nivel_thc, nivel_cbd};
  await Cosecha.findByIdAndUpdate(req.params.id, newCosecha).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Cosecha Updated'});
});

router.delete('/:id', async (req, res) => {
  await Cosecha.findByIdAndRemove(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Cosecha Deleted'});
});

module.exports = router;