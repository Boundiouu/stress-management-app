import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ExerciseCard from "../components/ExerciseCard";
import api from "../services/api";

import "../styles/Exercises.css";

function Exercises() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await api.get("/api/exercises");
                setExercises(response.data);
            } catch (error) {
                setExercises([]);
            }
        };

        fetchExercises();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="exercise-container">
                <h1>Exercices Anti-Stress</h1>

                {exercises.length === 0 && <p>Aucun exercice disponible.</p>}

                {exercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise._id}
                        title={exercise.title}
                        description={exercise.description}
                        category={exercise.category}
                        duration={exercise.duration}
                    />
                ))}
            </div>
        </div>
    );
}

export default Exercises;