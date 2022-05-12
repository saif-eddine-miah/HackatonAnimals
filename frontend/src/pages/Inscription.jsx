import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../components/ProfileIcon";

function Inscription() {
  return (
    <div className="Inscription">
      <ProfileIcon />
      <div className="Inscription__name">
        <p>Comment vous appelez vous ?</p>
        <input
          type="text"
          className="Inscription__name__input"
          placeholder="Denis Chon"
          size="30"
          required
        />
      </div>
      <div className="Inscription__age">
        <p>Quel age avez vous ?</p>
        <input
          type="number"
          className="Inscription__age__input"
          step="1"
          min="0"
          max="20"
        />
      </div>
      <div className="Inscription__Profession">
        <p>Quelle est votre profession ?</p>
        <input
          type="text"
          className="Inscription__Profession__input"
          placeholder="Préparateur de commande"
          size="30"
          required
        />
      </div>
      <div className="Inscription__bio">
        <p>Décrivez vous en quelques mots :</p>
        <input
          type="text"
          className="Inscription__bio__input"
          placeholder="Bio..."
          size="225"
          required
        />
      </div>
      <Link to="/swipe">
        <button type="button" className="Inscription__finish">
          Terminer
        </button>
      </Link>
    </div>
  );
}

export default Inscription;
