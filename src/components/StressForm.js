import { useState } from "react";
import api from "../services/api";

function StressForm({ onStressCreated }) {
    const [mood, setMood] = useState("");
    const [stressLevel, setStressLevel] = useState("");
    const [note, setNote] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/api/stress", {
                mood,
                stressLevel: Number(stressLevel),
                note,
            });

            const savedStressLevel = Number(stressLevel);

            setMood("");
            setStressLevel("");
            setNote("");
            setMessage("Entree de stress enregistree.");

            if (onStressCreated) {
                onStressCreated(savedStressLevel);
            }
        } catch (error) {
            setMessage("Erreur lors de l'enregistrement.");
        }
    };

    return (
        <form className="stress-form" onSubmit={handleSubmit}>
            <label>Votre humeur :</label>

            <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Ex : fatigue, calme, anxieux"
                required
            />

            <label>Choisissez votre niveau de stress :</label>

            <select
                value={stressLevel}
                onChange={(e) => setStressLevel(e.target.value)}
                required
            >
                <option value="">Selectionner</option>
                <option value="1">1 - Tres faible</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 - Moyen</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 - Tres eleve</option>
            </select>

            <label>Note :</label>

            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ex : journee chargee"
            />

            <button type="submit">Enregistrer</button>

            {message && <p>{message}</p>}
        </form>
    );
}

export default StressForm;