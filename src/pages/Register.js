import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
    return (
        <div className="register-container">

            <div className="register-card">

                <h1>Gestion du Stress</h1>

                <h2>Créer un compte</h2>

                <form>

                    <input
                        type="text"
                        placeholder="Nom complet"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        placeholder="Mot de passe"
                    />

                    <button type="submit">
                        S'inscrire
                    </button>

                </form>

                <p>Vous avez déjà un compte ?</p>

                <Link to="/login">
                    Se connecter
                </Link>

            </div>

        </div>
    );
}

export default Register;