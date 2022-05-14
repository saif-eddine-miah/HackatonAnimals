import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [newId, setNewId] = useState("0");

  const navigate = useNavigate();
  function submit(event) {
    event.preventDefault();
    Axios.post(url, { ...form }).then((response) => {
      setNewId(response.data.id);
    });
  }
  useEffect(() => {
    if (newId !== "0") navigate(`/swipe/${newId}`);
  }, [newId]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };
  console.log(newId);

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
              value={form.animalName}
              onChange={handleChange}
            />
          </div>
          <div className="Inscription__age">
            <p>Quel age avez vous ?</p>
            <input
              type="number"
              id="animalAge"
              className="Inscription__age__input"
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

          <button type="submit" className="Inscription__finish">
            Terminer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
