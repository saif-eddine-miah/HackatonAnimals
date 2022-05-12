
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Match from "./pages/Match";
import Tchat from "./pages/Tchat";
import Inscription from "./pages/Inscription";
import "./App.css";
import Swipe from "./pages/Swipe";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/swipe" element={<Swipe />} />
          <Route path="/match" element={<Match />} />
          <Route path="/tchat" element={<Tchat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
