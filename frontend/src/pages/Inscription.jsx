import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import ProfileIcon from "../components/ProfileIcon";

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
          <option value="chat">chat</option>
          <option value="chien">chien</option>
          <option value="requin">requin</option>
          <option value="oiseau">oiseau</option>
          <option value="pingouin">pingouin</option>
          <option value="lapin">lapin</option>
          <option value="hibou">hibou</option>
        </select>
        <div className="Inscription__name">
          <p>Comment vous appelez vous ?</p>
          <input
            id="animalName"
            type="text"
            className="Inscription__name__input"
            placeholder="Denis Chon"
            size="30"
            required
            value={form.animalName}
            onChange={handleChange}
          />
        </div>
        <div className="Inscription__age">
          <p>Quel age avez vous ?</p>
          <input
            id="animalAge"
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
      </form>
    </div>
  );
}

export default Inscription;
