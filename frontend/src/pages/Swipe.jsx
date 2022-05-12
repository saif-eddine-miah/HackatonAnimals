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
  return (
    <div>
      <ProfileCard name={animal.animalName} />;
    </div>
  );
}

export default Swipe;
