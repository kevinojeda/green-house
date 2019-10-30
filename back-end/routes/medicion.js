const express = require('express');
const router = express.Router();

// Medicion Model
const Medicion = require('../models/medicion.models');

// GET all Medicion
router.get('/', async (req, res) => {
  const medicion = await Medicion.find().catch(err => res.status(400).json('Error: ' + err));
  res.json(medicion);
});

// GET all Medicion
router.get('/:id', async (req, res) => {
  const medicion = await Medicion.findById(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json(medicion);
});

// ADD a new Medicion
router.post('/', async (req, res) => {
  console.log(req.body);
 
  const { luz , temperatura , humedad , CO2 } = req.body;
  const medicion = new Medicion({ luz , temperatura , humedad , CO2 });
  await medicion.save().catch(err => console.log(err));
  res.json({status: 'Medicion Saved'});
});

// UPDATE a new Medicion
router.put('/:id', async (req, res) => {
  const { luz , temperatura , humedad , CO2 } = req.body;
  const newMedicion = { luz , temperatura , humedad , CO2 };
  await Medicion.findByIdAndUpdate(req.params.id, newMedicion).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Medicion Updated'});
});

router.delete('/:id', async (req, res) => {
  await Medicion.findByIdAndRemove(req.params.id).catch(err => res.status(400).json('Error: ' + err));
  res.json({status: 'Medicion Deleted'});
});

module.exports = router;
