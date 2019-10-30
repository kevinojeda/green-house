const express = require('express');
const router = express.Router();

// Persona Model
const Alarma = require('../models/alarma.models');

// GET all alarma
router.get('/', async (req, res) => {
  const alarma = await Alarma.find().catch(err => res.status(400).json('Error: ' + err));
  res.json(alarma);
});

// GET all alarma
router.get('/:id', async (req, res) => {
  const alarma = await Alarma.findById(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json(alarma);
});

// ADD a new alarma
router.post('/', async (req, res) => {
  console.log(req.body);
 
  const { luz , temperatura , humedad , CO2 } = req.body;
  const alarma = new Alarma({ luz , temperatura , humedad , CO2 });
  await alarma.save().catch(err => console.log(err));
  res.json({status: 'alarma Saved'});
});

// UPDATE a new Medicion
router.put('/:id', async (req, res) => {
  const { luz , temperatura , humedad , CO2 } = req.body;
  const newAlarma = { luz , temperatura , humedad , CO2 };
  await Alarma.findByIdAndUpdate(req.params.id, newAlarma).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'alarma Updated'});
});

router.delete('/:id', async (req, res) => {
  await Alarma.findByIdAndRemove(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Medicion Deleted'});
});

module.exports = router;
