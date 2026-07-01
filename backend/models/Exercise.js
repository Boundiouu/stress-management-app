const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  minStress: { type: Number, required: true },
  maxStress: { type: Number, required: true },
});

module.exports = mongoose.model("Exercise", exerciseSchema);