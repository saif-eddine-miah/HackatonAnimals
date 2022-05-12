import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";

function Swipe() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/animals";
    axios.get(url).then((res) => setAnimals(res.data));
  }, []);

  const animal = animals[0];
  console.log(animal);
  return (
    <div>
      <ProfileCard
        name={animal.animalName}
        age={animal.animalAge}
        type={animal.animalType}
        profession={animal.animalProfession}
        biography={animal.animalBio}
      />
      ;
      <button type="button">
        <img src="src/assets/icons/cross.png" alt="croix" />
      </button>
      <button type="button">
        <img src="src/assets/icons/heart.png" alt="coeur" />
      </button>
    </div>
  );
}

export default Swipe;
