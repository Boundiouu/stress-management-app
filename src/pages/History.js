import Navbar from "../components/Navbar";
import "../styles/History.css";

function History() {

    const history = [

        {
            id: 1,
            date: "25/06/2026",
            level: "😊 Très faible"
        },

        {
            id: 2,
            date: "26/06/2026",
            level: "😐 Moyen"
        },

        {
            id: 3,
            date: "27/06/2026",
            level: "😟 Élevé"
        }

    ];

    return (

        <div>

            <Navbar />

            <div className="history-container">

                <h1>Historique du stress</h1>

                <table>

                    <thead>

                        <tr>

                            <th>Date</th>

                            <th>Niveau</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            history.map((item) => (

                                <tr key={item.id}>

                                    <td>{item.date}</td>

                                    <td>{item.level}</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default History;