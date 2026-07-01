import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/History.css";

function History() {
    const [history, setHistory] = useState([]);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const historyResponse = await api.get("/api/stress");
                const statsResponse = await api.get("/api/stress/stats");

                setHistory(historyResponse.data);
                setStats(statsResponse.data);
            } catch (error) {
                setHistory([]);
                setStats(null);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="history-container">
                <h1>Historique du stress</h1>

                {stats && (
                    <div className="stats-box">
                        <p>Total : {stats.totalEntries}</p>
                        <p>Moyenne : {stats.averageStressLevel}</p>
                        <p>Min : {stats.minStressLevel}</p>
                        <p>Max : {stats.maxStressLevel}</p>
                    </div>
                )}

                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Niveau</th>
                            <th>Humeur</th>
                            <th>Note</th>
                        </tr>
                    </thead>

                    <tbody>
                        {history.map((item) => (
                            <tr key={item._id}>
                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                <td>{item.stressLevel}</td>
                                <td>{item.mood}</td>
                                <td>{item.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default History;