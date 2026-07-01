import Navbar from "../components/Navbar";
import ExerciseCard from "../components/ExerciseCard";

import "../styles/Exercises.css";

function Exercises() {

    const exercises = [

        {
            id: 1,
            title: "🧘 Respiration profonde",
            description: "Respirez lentement pendant 5 minutes afin de diminuer votre niveau de stress."
        },

        {
            id: 2,
            title: "🚶 Marche",
            description: "Marchez pendant 15 à 30 minutes pour vous détendre."
        },

        {
            id: 3,
            title: "🎵 Musique relaxante",
            description: "Écoutez une musique douce afin de réduire le stress."
        },

        {
            id: 4,
            title: "🧠 Méditation",
            description: "Prenez quelques minutes pour méditer et vous concentrer sur votre respiration."
        }

    ];

    return (

        <div>

            <Navbar />

            <div className="exercise-container">

                <h1>Exercices Anti-Stress</h1>

                {

                    exercises.map((exercise) => (

                        <ExerciseCard

                            key={exercise.id}

                            title={exercise.title}

                            description={exercise.description}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default Exercises;