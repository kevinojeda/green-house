const express = require('express');
const router = express.Router();

// Persona Model
const Alarma = require('../models/alarma.models');

// GET all Personas
router.get('/', async (req, res) => {
  const alarma = await Alarma.find().catch(err => res.status(400).json('Error: ' + err));
  res.json(alarma);
});

// GET all Personas
router.get('/:id', async (req, res) => {
  const alarma = await Alarma.findById(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json(alarma);
});

// ADD a new Persona
router.post('/', async (req, res) => {
  console.log(req.body);
  
  const { medicion} = req.body;
  const cosecha = new Cosecha({medicion});
  await cosecha.save().catch(err => console.log(err));
  res.json({status: 'Cosecha Saved'});
});

// UPDATE a new Persona
router.put('/:id', async (req, res) => {
  const { medicion } = req.body;
  const newCosecha = {medicion};
  await Cosecha.findByIdAndUpdate(req.params.id, newCosecha).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Cosecha Updated'});
});

router.delete('/:id', async (req, res) => {
  await Cosecha.findByIdAndRemove(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Cosecha Deleted'});
});

module.exports = router;