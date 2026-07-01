import Navbar from "../components/Navbar";
import StressForm from "../components/StressForm";

import "../styles/Dashboard.css";

function Dashboard() {

    return (

        <div>

            <Navbar />

            <div className="dashboard">

                <h1>Bienvenue 👋</h1>

                <h2>Comment vous sentez-vous aujourd'hui ?</h2>

                <StressForm />

            </div>

        </div>

    );

}

export default Dashboard;