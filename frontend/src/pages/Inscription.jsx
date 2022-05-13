import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import ProfileIcon from "../components/ProfileIcon";
import "./Inscription.css";

function Inscription() {
  const url = "http://localhost:5000/user";
  const [form, setForm] = useState({
    animalName: "",
    animalBio: "",
    animalProfession: "",
    animalAge: 0,
    animalType: "",
  });

  function submit(event) {
    event.preventDefault();
    Axios.post(url, { ...form }).then((response) => {
      console.log(response);
    });
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };
  console.log(form);

  return (
    <div className="Inscription">
      <form className="Inscription__form" onSubmit={(event) => submit(event)}>
        <ProfileIcon />
        <select
          name="type"
          id="animalType"
          value={form.animalType}
          onChange={handleChange}
        >
          <option value="">-choose a type-</option>
          <option value="Chat">chat</option>
          <option value="Chien">chien</option>
          <option value="Requin">requin</option>
          <option value="Oiseau">oiseau</option>
          <option value="Pingouin">pingouin</option>
          <option value="Lapin">lapin</option>
          <option value="Hibou">hibou</option>
        </select>
        <div className="Info-inscription">
          <div className="Inscription__name">
            <p>Comment vous appelez vous ?</p>
            <input
              id="animalName"
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
              value={form.animalAge}
              onChange={handleChange}
            />
          </div>
          <div className="Inscription__Profession">
            <p>Quelle est votre profession ?</p>
            <input
              id="animalProfession"
              type="text"
              className="Inscription__Profession__input"
              placeholder="Préparateur de commande"
              size="30"
              required
              value={form.animalProfession}
              onChange={handleChange}
            />
          </div>
          <div className="Inscription__bio">
            <p>Décrivez vous en quelques mots :</p>
            <textarea
              id="animalBio"
              type="text"
              className="Inscription__bio__input"
              placeholder="Bio..."
              size="225"
              required
              value={form.animalBio}
              onChange={handleChange}
            />
          </div>

          <Link to="/swipe">
            <button
              type="button"
              className="Inscription__finish"
              onClick={submit}
            >
              Terminer
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
