const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alarmaSchema = new Schema({
  medicion: { type: String , required: true, unique: true }
}, 
{
  timestamps: true,
});

const Alarma = mongoose.model('Alarma', alarmaSchema);
module.exports = Alarma;