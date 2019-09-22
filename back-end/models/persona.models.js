const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personaSchema = new Schema({
  nombre: { type: String , required: true, unique: false , trim: true , minlength: 3 },
  telefono: { type: String , required: true, unique: false , trim: true },
  cedula: { type: Number , required: true, unique: true },
  direccion: { type: String , required: true, unique: false , trim: true },
  user: { type: String , required: true, unique: true , trim: true , minlength: 6 },
  password: { type: String , required: true, unique: false , trim: true , minlength: 6 },
  administrador: { type: Boolean , required: true },
  analista: { type: Boolean , required: true },
  operario: { type: Boolean , required: true },
}, 
{
  timestamps: true,
});

const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;