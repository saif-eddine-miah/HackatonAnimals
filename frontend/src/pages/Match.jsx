import React from "react";
import { Link } from "react-router-dom";
import Tchat from "../components/Tchat";
import MatchCard from "../components/MatchCard";
import "../components/MatchCard.css";

function Match() {
  return (
    <div className="body">
      <div>
        <Link className="squareBtn" to="/Swipe">
          <button className="previousBtn" type="button">
            <img
              className="arrowBtn"
              src="src/assets/icons/left-arrow.png"
              alt="flèche gauche"
            />
            <div>Continuer de swiper</div>
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
