const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alarmasSchema = new Schema({



}, 
{
  timestamps: true,
});

const Alarmas = mongoose.model('Alarmas', alarmasSchema);
module.exports = Alarmas;