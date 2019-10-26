const express = require('express');
const router = express.Router();

// Persona Model
const Especificaciones = require('../models/especificacion.models');

// GET all Personas
router.get('/', async (req, res) => {
  const especificaciones = await Especificaciones.find().catch(err => res.status(400).json('Error: ' + err));
  res.json(especificaciones);
});

// GET all Personas
router.get('/:id', async (req, res) => {
  const especificaciones = await Especificaciones.findById(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json(especificaciones);
});

// ADD a new Persona
router.post('/', async (req, res) => {
  console.log(req.body);

  const { semana, tem_dia, tem_noche, hum_dia, hum_noche, horas_luz, CO2} = req.body;
  const especificaciones = new Especificaciones({semana, tem_dia, tem_noche, hum_dia, hum_noche, horas_luz, CO2});
  await especificaciones.save().catch(err => console.log(err));
  res.json({status: 'Especificaciones Saved'});
});

// UPDATE a new Persona
router.put('/:id', async (req, res) => {
  const { semana, tem_dia, tem_noche, hum_dia, hum_noche, horas_luz, CO2 } = req.body;
  const newEspecificaciones = {semana, tem_dia, tem_noche, hum_dia, hum_noche, horas_luz, CO2};
  await Especificaciones.findByIdAndUpdate(req.params.id, newEspecificaciones).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Especificaciones Updated'});
});

router.delete('/:id', async (req, res) => {
  await Especificaciones.findByIdAndRemove(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Especificaciones Deleted'});
});

module.exports = router;