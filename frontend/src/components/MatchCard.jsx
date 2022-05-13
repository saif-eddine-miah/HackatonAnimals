import React, { useState } from "react";
import { Link } from "react-router-dom";
import Children from "./Children";
import "./MatchCard.css";

function MatchCard() {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div>
      <div className="matched-peoples">
        <div className="matched-people1">
          <img src="src/assets/animals/cheval.jpg" alt="cheval" />
          <h2>Nom</h2>
        </div>
        <div className="matched-people2">
          <img src="src/assets/animals/chien.jpg" alt="chien" />
          <h2>Nom</h2>
        </div>
      </div>
      <div className="divBtns">
        <Link to="/tchat">
          <button className="matchBtns" type="button">
            <img src="src/assets/icons/tchat.png" alt="tchat" />
          </button>
        </Link>
        <button
          className="matchBtns"
          type="button"
          onClick={() => setShowChildren(!showChildren)}
        >
          <img src="src/assets/icons/couple.png" alt="couple" />
        </button>
        {showChildren ? <Children /> : ""}
      </div>
    </div>
  );
}

export default MatchCard;
