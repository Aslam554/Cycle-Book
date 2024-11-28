const mongoose = require('mongoose');

const cycleSchema = new mongoose.Schema({
  name: String,
  email: String,
  roll: String,
  hostel: String,
  mobile: String, // Added mobile number field
  date: Date,
});

module.exports = mongoose.model('Cycle', cycleSchema);
