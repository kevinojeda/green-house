const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cosechaSchema = new Schema({
  fecha_inicio: {type: date() , required: true, unique: false },
  nombre_planta: { type: String , required: true, unique: false , trim: true , minlength: 3 },
  numer_plantas: { type: Number , required: true, unique: true },
  produccion_final { type: DOUBLE(), required: true, unique: true},
  nivel_thc { type: DOUBLE(), required: true, unique: true},
  nivel_cbd { type: DOUBLE(), required: true, unique: true},

}, 
{
  timestamps: true,
});

const Cosecha = mongoose.model('Cosecha', cosechaSchema);

module.exports = Cosecha;