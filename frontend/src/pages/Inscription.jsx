import React from "react";
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
        <p>Comment age avez vous ?</p>
        <input
          type="number"
          className="Inscription__age__input"
          step="1"
          min="0"
          max="20"
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
      <button type="button" className="Inscription__finish">
        Terminer
      </button>
    </div>
  );
}

export default Inscription;
