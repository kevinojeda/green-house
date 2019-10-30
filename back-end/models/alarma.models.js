const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alarmaSchema = new Schema({
  temperatura:{ type: Number, required: true, unique: false },
  humedad:{ type: Number, required: true, unique: false },
  CO2:{ type: Number, required: true, unique: false },
  luz: {type: Boolean, required: true, unique: false}
}, 
{
  timestamps: true,
});

const Alarma = mongoose.model('Alarma', alarmaSchema);
module.exports = Alarma;