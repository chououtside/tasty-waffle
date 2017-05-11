var mongoose = require('mongoose');

var daySchema = mongoose.Schema({
  day: String,
  lunch: {
    required: Number,
    staff: [String],
    standBy: {},
    manager: {}
  },
  dinner: {
    required: Number,
    staff: [String],
    standBy: {},
    manager: {}
  }
})

var Days = mongoose.model('days', daySchema);

module.exports = Days;