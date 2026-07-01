const StressEntry = require("../models/StressEntry");

const createStressEntry = async (req, res) => {
  try {
    const stressEntry = await StressEntry.create(req.body);
    res.status(201).json(stressEntry);
  } catch (error) {
    res.status(400).json({ message: "Erreur creation entree stress", error: error.message });
  }
};

const getStressEntries = async (req, res) => {
  try {
    const stressEntries = await StressEntry.find().sort({ date: -1 });
    res.status(200).json(stressEntries);
  } catch (error) {
    res.status(500).json({ message: "Erreur recuperation entrees", error: error.message });
  }
};

const getStressStats = async (req, res) => {
  try {
    const stats = await StressEntry.aggregate([
      {
        $group: {
          _id: null,
          totalEntries: { $sum: 1 },
          averageStressLevel: { $avg: "$stressLevel" },
          minStressLevel: { $min: "$stressLevel" },
          maxStressLevel: { $max: "$stressLevel" },
        },
      },
      {
        $project: {
          _id: 0,
          totalEntries: 1,
          averageStressLevel: { $round: ["$averageStressLevel", 2] },
          minStressLevel: 1,
          maxStressLevel: 1,
        },
      },
    ]);

    res.status(200).json(stats[0] || {
      totalEntries: 0,
      averageStressLevel: 0,
      minStressLevel: 0,
      maxStressLevel: 0,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur calcul statistiques", error: error.message });
  }
};

const deleteStressEntry = async (req, res) => {
  try {
    const stressEntry = await StressEntry.findByIdAndDelete(req.params.id);

    if (!stressEntry) {
      return res.status(404).json({ message: "Entree introuvable" });
    }

    res.status(200).json({ message: "Entree supprimee", stressEntry });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression entree", error: error.message });
  }
};

module.exports = {
  createStressEntry,
  getStressEntries,
  getStressStats,
  deleteStressEntry,
};