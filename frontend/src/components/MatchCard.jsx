import React from "react";

function MatchCard() {
  return (
    <div>
      <div>
        <img src="src/assets/animals/cheval.jpg" alt="cheval" />
        <img src="src/assets/animals/chien.png" alt="chien" />
      </div>
      <div>Nom</div>
      <div>
        <button type="button">
          <img src="src/assets/icons/tchat.png" alt="tchat" />
        </button>
        <button type="button">
          <img src="src/assets/icons/couple.png" alt="couple" />
        </button>
      </div>
    </div>
  );
}

export default MatchCard;
