const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

const stressRoutes = require("./routes/stressRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/stress", stressRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/recommendations", recommendationRoutes);

app.get("/", (req, res) => {
  res.send("API Gestion du stress en ligne ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});