import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <h2>Gestion du Stress</h2>

            <ul>

                <li>
                    <Link to="/dashboard">Accueil</Link>
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