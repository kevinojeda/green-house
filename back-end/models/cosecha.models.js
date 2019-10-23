const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cosechaSchema = new Schema({
  fecha_inicio: {type: Date , required: true, unique: false },
  nombre_planta: { type: String , required: true, unique: false , trim: true , minlength: 3 },
  numero_plantas: { type: Number , required: true, unique: false },
  produccion_final: { type: Number, required: true, unique: false},
  nivel_thc: { type: Number, required: true, unique: false},
  nivel_cbd: { type: Number, required: true, unique: false},

}, 
{
  timestamps: true,
});

const Cosecha = mongoose.model('Cosecha', cosechaSchema);

module.exports = Cosecha;