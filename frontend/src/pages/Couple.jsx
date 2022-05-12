import React from "react";
import { Link } from "react-router-dom";
import Children from "../components/Children";

function Couple() {
  return (
    <div>
      <div>
        <Link to="/Match">
          <button type="button">
            <img src="src/assets/icons/left-arrow.png" alt="flèche gauche" />{" "}
            Revenir à votre match
          </button>
        </Link>
      </div>
      <Children />
    </div>
  );
}

export default Couple;
