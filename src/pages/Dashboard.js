import { useState } from "react";
import Navbar from "../components/Navbar";
import StressForm from "../components/StressForm";
import api from "../services/api";

import "../styles/Dashboard.css";

function Dashboard() {
    const [recommendation, setRecommendation] = useState(null);

    const handleStressCreated = async (stressLevel) => {
        try {
            const response = await api.get(`/api/recommendations/${stressLevel}`);
            setRecommendation(response.data.recommendation);
        } catch (error) {
            setRecommendation(null);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="dashboard">
                <h1>Bienvenue</h1>
                <h2>Comment vous sentez-vous aujourd'hui ?</h2>

                <StressForm onStressCreated={handleStressCreated} />

                {recommendation && (
                    <div className="recommendation-box">
                        <h2>Recommandation</h2>
                        <h3>{recommendation.title}</h3>
                        <p>{recommendation.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;