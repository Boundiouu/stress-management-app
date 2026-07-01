import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Gestion du Stress</h1>
                <h2>Creer un compte</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nom complet" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <button type="submit">S'inscrire</button>
                </form>

                <p>Vous avez deja un compte ?</p>

                <Link to="/login">Se connecter</Link>
            </div>
        </div>
    );
}

export default Register;