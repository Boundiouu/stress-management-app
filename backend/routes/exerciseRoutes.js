const express = require("express");
const { createExercise, getExercises } = require("../controllers/exerciseController");

const router = express.Router();

router.post("/", createExercise);
router.get("/", getExercises);

module.exports = router;