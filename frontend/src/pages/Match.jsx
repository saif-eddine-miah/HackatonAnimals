import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import MatchCard from "../components/MatchCard";
import leftarrow from "../assets/icons/leftarrow.png";

import "../components/MatchCard.css";

function Match() {
  const params = useParams();
  const userid = params.id.split("-")[0];
  const animalid = params.id.split("-")[1];

  // console.log(params.split("").slice(1, "&"));
  // appeler la base de données

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/animals`;
    Axios.get(url).then((response) => setAnimals(response.data));
  }, []);
  // recuper le user avec l'id

  const user = animals.filter(
    (animal) => animal.animalId === parseInt(userid, 10)
  )[0];

  const animalmatch = animals.filter(
    (animal) => animal.animalId === parseInt(animalid, 10)
  )[0];

  // afficher les données du user

  return (
    <div className="body">
      <div>
        <Link className="squareBtn" to={`/Swipe/${userid}`}>
          <button className="previousBtn" type="button">
            <img className="arrowBtn" src={leftarrow} alt="flèche gauche" />
            <div>Continuer de swiper</div>
          </button>
        </Link>
      </div>
      <h1>It&apos;s a match !</h1>
      <MatchCard user={user} animalmatch={animalmatch} />
    </div>
  );
}

export default Match;
