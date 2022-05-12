import React from "react";
import LogoTinder from "../assets/logosite.svg";
import "./accueil.css";

function Accueil() {
  return (
    <div className="logo-inscription">
      <img className="logo-site" src={LogoTinder} alt="logo tinder animal" />
      <button className="inscription" type="button">
        Inscription
      </button>
    </div>
  );
}

export default Accueil;
