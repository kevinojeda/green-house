const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicionesSchema = new Schema({


temperatura:{ type: DOUBLE(), required: true, unique: true },
temperatura:{ type: DOUBLE(), required: true, unique: true },
temperatura:{ type: DOUBLE(), required: true, unique: true },
luz: {type: boolean(), required: true, unique: true},
hora: {type: date(), required: true, unique: true  },


}, 
{
  timestamps: true,
});

const Mediciones = mongoose.model('Mediciones', medicionesSchema);

module.exports = Mediciones;