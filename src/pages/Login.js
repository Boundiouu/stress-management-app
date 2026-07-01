import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    return (
        <div className="login-container">

            <div className="login-card">

                <h1>Gestion du Stress</h1>

                <h2>Connexion</h2>

                <form>

                    <input
                        type="email"
                        placeholder="Votre email"
                    />

                    <input
                        type="password"
                        placeholder="Votre mot de passe"
                    />

                    <button type="submit">
                        Se connecter
                    </button>

                </form>

                <p>
                    Vous n'avez pas de compte ?
                </p>

                <Link to="/register">
                    Créer un compte
                </Link>

            </div>

        </div>
    );
}

export default Login;