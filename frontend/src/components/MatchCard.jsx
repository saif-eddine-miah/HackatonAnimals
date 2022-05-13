import React, { useState } from "react";
import { Link } from "react-router-dom";
import Children from "./Children";
import "./MatchCard.css";
import "./ProfileCard.css";

import tchat from "../assets/icons/tchat.png";
import couple from "../assets/icons/couple.png";

function MatchCard({ user, animalmatch }) {
  const [showChildren, setShowChildren] = useState(false);
  console.log(user);
  console.log(animalmatch);
  return (
    <div>
      <div className="matched-peoples">
        <div className="matched-people1">
          <div className={`animalpic ${user?.animalType}`}> </div>
          <h2>{user?.animalName}</h2>
        </div>
        <div className="matched-people2">
          <div className={`animalpic ${animalmatch?.animalType}`}> </div>
          <h2>{animalmatch?.animalName}</h2>
        </div>
      </div>
      <div className="divBtns">
        <Link to="/tchat">
          <button className="matchBtns" type="button">
            <img src={tchat} alt="tchat" />
          </button>
        </Link>
        <button
          className="matchBtns"
          type="button"
          onClick={() => setShowChildren(!showChildren)}
        >
          <img src={couple} alt="couple" />
        </button>
        {showChildren ? (
          <Children
            user={user.animalType}
            animalmatch={animalmatch.animalType}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MatchCard;
