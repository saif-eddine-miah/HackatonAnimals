import React from "react";
import { Link } from "react-router-dom";

function Children() {
  return (
    <div>
      <h1>Accouplement...!</h1>
      <div>
        <img src="src/assets/animals/chien-cheval.jpg" alt="chien-cheval" />
      </div>
      <Link to="/Match">
        <button type="button">
          <img src="src/assets/icons/left-arrow.png" alt="flèche gauche" />
          Retourner au match
        </button>
      </Link>
    </div>
  );
}

export default Children;
