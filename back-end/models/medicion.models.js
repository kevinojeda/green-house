const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicionSchema = new Schema({
temperatura:{ type: Number, required: true, unique: false },
humedad:{ type: Number, required: true, unique: false },
co2:{ type: Number, required: true, unique: false },
luz: {type: Number, required: true, unique: false},
}, 
{
  timestamps: true,
});

const Medicion = mongoose.model('Medicion', medicionSchema);

module.exports = Medicion;