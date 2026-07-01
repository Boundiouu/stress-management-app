const mongoose = require("mongoose");

const stressEntrySchema = new mongoose.Schema({
  mood: { type: String, required: true },
  stressLevel: { type: Number, required: true, min: 1, max: 10 },
  note: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("StressEntry", stressEntrySchema);