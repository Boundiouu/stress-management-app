import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Exercises from "./pages/Exercises";

import "./styles/App.css";

function App() {
    return (
        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/history" element={<History />} />

            <Route path="/exercises" element={<Exercises />} />

        </Routes>
    );
}

export default App;
