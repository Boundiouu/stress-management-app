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
            <div className="form-row">
                <div className="form-label">
                    <span>:)</span>
                    <div>
                        <label>Votre humeur</label>
                        <p>Decrivez votre humeur actuelle</p>
                    </div>
                </div>

                <input
                    type="text"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    placeholder="Ex : fatigue, calme, anxieux, heureux..."
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-label">
                    <span>|||</span>
                    <div>
                        <label>Choisissez votre niveau de stress</label>
                        <p>Evaluez votre niveau de stress actuel</p>
                    </div>
                </div>

                <select
                    value={stressLevel}
                    onChange={(e) => setStressLevel(e.target.value)}
                    required
                >
                    <option value="">Selectionner votre niveau</option>
                    <option value="1">1 - Tres faible</option>
                    <option value="2">2 - Faible</option>
                    <option value="3">3 - Leger</option>
                    <option value="4">4 - Modere</option>
                    <option value="5">5 - Moyen</option>
                    <option value="6">6 - Present</option>
                    <option value="7">7 - Eleve</option>
                    <option value="8">8 - Tres eleve</option>
                    <option value="9">9 - Intense</option>
                    <option value="10">10 - Maximum</option>
                </select>
            </div>

            <div className="form-row">
                <div className="form-label">
                    <span>+</span>
                    <div>
                        <label>Note</label>
                        <p>Ajoutez une note sur votre journee</p>
                    </div>
                </div>

                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Ex : journee chargee, beaucoup de travail..."
                />
            </div>

            <button type="submit">Enregistrer</button>

            {message && <p className="form-message">{message}</p>}
        </form>
    );
}

export default StressForm;