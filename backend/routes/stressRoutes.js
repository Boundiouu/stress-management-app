const express = require("express");
const {
  createStressEntry,
  getStressEntries,
  getStressStats,
  deleteStressEntry,
} = require("../controllers/stressController");

const router = express.Router();

router.post("/", createStressEntry);
router.get("/", getStressEntries);
router.get("/stats", getStressStats);
router.delete("/:id", deleteStressEntry);

module.exports = router;