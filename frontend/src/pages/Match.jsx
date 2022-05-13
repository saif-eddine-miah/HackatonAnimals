import React from "react";
import { Link } from "react-router-dom";
import Tchat from "../components/Tchat";
import MatchCard from "../components/MatchCard";

function Match() {
  return (
    <div>
      <div>
        <Link to="/Swipe">
          <button type="button">
            <img src="src/assets/icons/left-arrow.png" alt="flèche gauche" />{" "}
            Continuer de swiper
          </button>
        </Link>
      </div>
      <h1>It&apos;s a match !</h1>
      <MatchCard />
      <Tchat />
    </div>
  );
}

export default Match;
