import React from "react";
import { Link } from "react-router-dom";
import LogoTinder from "../assets/logosite.svg";
import "./accueil.css";

function Accueil() {
  return (
    <div className="logo-inscription">
      <img className="logo-site" src={LogoTinder} alt="logo tinder animal" />

      <Link className="inscription" to="/inscription">
        Inscription
      </Link>
    </div>
  );
}

export default Accueil;
