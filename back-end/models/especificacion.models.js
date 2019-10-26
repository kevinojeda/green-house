const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const especificacionesSchema = new Schema({
  semana: { type: Number , required: true, unique: true },
  tem_dia: { type: Number, required: true, unique: true},
  tem_noche: { type: Number, required: true, unique: true},
  hum_dia: { type: Number, required: true, unique: true},
  hum_noche: { type: Number, required: true, unique: true},
  horas_luz: { type: Number , required: true, unique: true },
  CO2: { type: Number , required: true, unique: true },
}, 
{
  timestamps: true,
});

const Especificaciones = mongoose.model('Especificaciones', especificacionesSchema);

module.exports = Especificaciones;