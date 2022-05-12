import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Match from "./pages/Match";
import Tchat from "./pages/Tchat";
import "./App.css";
import Swipe from "./pages/Swipe";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/users" element={<Swipe />} />
          <Route path="/users" element={<Match />} />
          <Route path="/users" element={<Tchat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
