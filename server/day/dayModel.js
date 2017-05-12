var mongoose = require('mongoose');

var daySchema = mongoose.Schema({
  day: String,
  lunch: {
    required: Number,
    staff: [String],
    standby: String,
    manager: String
  },
  dinner: {
    required: Number,
    staff: [String],
    standby: String,
    manager: String
  }
})

var Days = mongoose.model('days', daySchema);

module.exports = Days;