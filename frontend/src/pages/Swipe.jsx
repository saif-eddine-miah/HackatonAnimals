import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import croix from "../assets/icons/cross.png";
import coeur from "../assets/icons/heart.png";
import "./Swipe.css";

function Swipe() {
  const { id } = useParams();
  const [animals, setAnimals] = useState([]);
  const [match, setMatch] = useState(false);
  const [animalNumber, setanimalNumber] = useState(0);

  useEffect(() => {
    const url = "http://localhost:5000/animals";
    axios.get(url).then((response) => setAnimals(response.data));
  }, []);

  const realAnimals = animals.filter(
    (realAnimal) => realAnimal.animalIsreal === 1
  );
  const sampleAnimals = animals.filter(
    (sampleAnimal) => sampleAnimal.animalIsreal === 0
  );
  const sortedAnimals = realAnimals
    .concat(sampleAnimals)
    .filter((sortedAnimal) => sortedAnimal.animalId !== id);

  const navigate = useNavigate();

  const animal = sortedAnimals[animalNumber];
  const handleNO = () => {
    if (animalNumber < sortedAnimals.length - 1)
      setanimalNumber(animalNumber + 1);
    else setanimalNumber(0);
  };
  const handleMatch = () => {
    if (animal.animalMatch) setMatch(true);
    else if (animalNumber < sortedAnimals.length - 1)
      setanimalNumber(animalNumber + 1);
    else setanimalNumber(0);
  };

  useEffect(() => {
    if (match) navigate(`/match/${id}-${animal.animalId}`);
  }, [match]);
  return (
    <div className="ProfileCardContainer">
      {animal ? (
        <ProfileCard
          name={animal.animalName}
          age={animal.animalAge}
          type={animal.animalType}
          profession={animal.animalProfession}
          biography={animal.animalBio}
        />
      ) : (
        "Loading"
      )}
      <div className="cross-heart">
        <button className="swipe-cross" type="button" onClick={handleNO}>
          <img src={croix} alt="croix" />
        </button>
        <button className="swipe-heart" type="button" onClick={handleMatch}>
          <img src={coeur} alt="coeur" />
        </button>
      </div>
    </div>
  );
}

export default Swipe;
