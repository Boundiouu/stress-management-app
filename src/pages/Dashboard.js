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
        <div className="app-shell">
            <Navbar />

            <main className="dashboard">
                <section className="dashboard-header">
                    <h1>Bienvenue !</h1>
                    <h2>Comment vous sentez-vous aujourd'hui ?</h2>
                </section>

                <StressForm onStressCreated={handleStressCreated} />

                {recommendation && (
                    <div className="recommendation-box">
                        <h2>Recommandation</h2>
                        <h3>{recommendation.title}</h3>
                        <p>{recommendation.description}</p>
                    </div>
                )}

                <section className="feature-grid">
                    <article className="feature-card green">
                        <span>☘</span>
                        <div>
                            <h3>Suivez votre progrès</h3>
                            <p>Observez l'évolution de votre stress au fil du temps.</p>
                        </div>
                    </article>

                    <article className="feature-card blue">
                        <span>☁</span>
                        <div>
                            <h3>Exercices guidés</h3>
                            <p>Découvrez des exercices adaptés pour vous détendre.</p>
                        </div>
                    </article>

                    <article className="feature-card yellow">
                        <span>▥</span>
                        <div>
                            <h3>Analyses personnalisées</h3>
                            <p>Comprenez vos habitudes pour mieux gérer votre stress.</p>
                        </div>
                    </article>

                    <article className="feature-card purple">
                        <span>♥</span>
                        <div>
                            <h3>Prenez soin de vous</h3>
                            <p>Votre bien-être est notre priorité chaque jour.</p>
                        </div>
                    </article>
                </section>

                <section className="quote-box">
                    <strong>Le calme intérieur commence par une respiration consciente.</strong>
                    <p>Prenez un moment pour vous, vous le méritez.</p>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;