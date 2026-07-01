const Exercise = require("../models/Exercise");

const createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    res.status(201).json(exercise);
  } catch (error) {
    res.status(400).json({ message: "Erreur creation exercice", error: error.message });
  }
};

const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find().sort({ minStress: 1 });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Erreur recuperation exercices", error: error.message });
  }
};

module.exports = { createExercise, getExercises };