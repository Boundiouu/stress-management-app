const getRecommendation = (req, res) => {
  try {
    const stressLevel = Number(req.params.stressLevel);

    if (!Number.isInteger(stressLevel) || stressLevel < 1 || stressLevel > 10) {
      return res.status(400).json({ message: "Le niveau de stress doit etre entre 1 et 10" });
    }

    let recommendation;

    if (stressLevel <= 3) {
      recommendation = {
        title: "Exercice leger",
        category: "Gratitude / musique douce",
        duration: 5,
        description: "Note trois choses positives ou ecoute une musique calme.",
      };
    } else if (stressLevel <= 6) {
      recommendation = {
        title: "Respiration simple",
        category: "Respiration",
        duration: 5,
        description: "Inspire 4 secondes, expire 6 secondes, puis repete.",
      };
    } else if (stressLevel <= 8) {
      recommendation = {
        title: "Meditation guidee",
        category: "Meditation",
        duration: 10,
        description: "Installe-toi au calme et suis une meditation courte.",
      };
    } else {
      recommendation = {
        title: "Pause immediate",
        category: "Respiration profonde",
        duration: 10,
        description: "Fais une pause immediate et respire profondement.",
      };
    }

    res.status(200).json({ stressLevel, recommendation });
  } catch (error) {
    res.status(500).json({ message: "Erreur recommandation", error: error.message });
  }
};

module.exports = { getRecommendation };