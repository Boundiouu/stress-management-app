import { useState } from "react";

function StressForm() {

    const [stress, setStress] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        alert("Niveau de stress enregistré : " + stress);

        setStress("");

    };

    return (

        <form className="stress-form" onSubmit={handleSubmit}>

            <label>Choisissez votre niveau de stress :</label>

            <select
                value={stress}
                onChange={(e) => setStress(e.target.value)}
            >

                <option value="">Sélectionner</option>

                <option value="1">😊 Très faible</option>

                <option value="2">🙂 Faible</option>

                <option value="3">😐 Moyen</option>

                <option value="4">😟 Élevé</option>

                <option value="5">😫 Très élevé</option>

            </select>

            <button type="submit">

                Enregistrer

            </button>

        </form>

    );

}

export default StressForm;