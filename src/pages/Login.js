import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Gestion du Stress</h1>
                <h2>Connexion</h2>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Votre email" />
                    <input type="password" placeholder="Votre mot de passe" />
                    <button type="submit">Se connecter</button>
                </form>

                <p>Vous n'avez pas de compte ?</p>

                <Link to="/register">Creer un compte</Link>
            </div>
        </div>
    );
}

export default Login;