import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import "./index.css"; 

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;