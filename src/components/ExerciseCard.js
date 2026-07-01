function ExerciseCard({ title, description, category, duration }) {
    return (
        <div className="exercise-card">
            <h2>{title}</h2>
            {category && <p>Categorie : {category}</p>}
            {duration && <p>Duree : {duration} minutes</p>}
            <p>{description}</p>
        </div>
    );
}

export default ExerciseCard;