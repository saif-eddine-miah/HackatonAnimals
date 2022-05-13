import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TinderCard from "react-tinder-card";
import ProfileCard from "../components/ProfileCard";
import croix from "../assets/icons/cross.png";
import coeur from "../assets/icons/heart.png";

function Swipe() {
  const { id } = useParams();
  console.log(id);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/animals";
    axios.get(url).then((response) => setAnimals(response.data));
  }, []);
  console.log(animals);

  const realAnimals = animals.filter(
    (realAnimal) => realAnimal.animalIsreal === 1
  );
  console.log("real ", realAnimals);
  const sampleAnimals = animals.filter(
    (sampleAnimal) => sampleAnimal.animalIsreal === 0
  );
  console.log("sample ", sampleAnimals);
  const sortedAnimals = realAnimals
    .concat(sampleAnimals)
    .filter((sortedAnimal) => sortedAnimal.animalId !== id);

  console.log("sorted ", sortedAnimals);
  const animal = animals[2];

  const onSwipe = (direction) => {
    console.log(`You swiped: ${direction}`);
  };
  const onCardLeftScreen = (myIdentifier) => {
    console.log(`${myIdentifier} left the screen`);
  };
  return (
    <div>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
      >
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
      </TinderCard>
      <button type="button">
        <img src={croix} alt="croix" />
      </button>
      <button type="button">
        <img src={coeur} alt="coeur" />
      </button>
    </div>
  );
}

export default Swipe;
