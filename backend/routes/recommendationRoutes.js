const express = require("express");
const { getRecommendation } = require("../controllers/recommendationController");

const router = express.Router();

router.get("/:stressLevel", getRecommendation);

module.exports = router;