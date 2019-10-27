const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const especificacionesSchema = new Schema({
  semana: { type: Number , required: true, unique: true },
  tem_dia: { type: Number, required: true, unique: false},
  tem_noche: { type: Number, required: true, unique: false},
  hum_dia: { type: Number, required: true, unique: false},
  hum_noche: { type: Number, required: true, unique: false},
  horas_luz: { type: Number , required: true, unique: false },
  CO2: { type: Number , required: true, unique: false },
}, 
{
  timestamps: true,
});

const Especificaciones = mongoose.model('Especificaciones', especificacionesSchema);

module.exports = Especificaciones;