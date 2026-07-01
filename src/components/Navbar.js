import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <div className="brand-logo">☘</div>

                <div>
                    <h2>Gestion du Stress</h2>
                    <p>Prenez soin de votre bien-être, chaque jour.</p>
                </div>
            </div>

            <ul>
                <li>
                    <Link to="/dashboard" className="active-link">Accueil</Link>
                </li>

                <li>
                    <Link to="/history">Historique</Link>
                </li>

                <li>
                    <Link to="/exercises">Exercices</Link>
                </li>

                <li>
                    <Link to="/login">Déconnexion</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;