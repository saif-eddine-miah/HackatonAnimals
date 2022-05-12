import React, { useState } from "react";
import Children from "./Children";

function MatchCard() {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div>
      <div>
        <div>
          <img src="src/assets/animals/cheval.jpg" alt="cheval" />
          <div>Nom</div>
        </div>
        <div>
          <img src="src/assets/animals/chien.png" alt="chien" />
          <div>Nom</div>
        </div>
      </div>
      <div>
        <button type="button">
          <img src="src/assets/icons/tchat.png" alt="tchat" />
        </button>
        <button type="button" onClick={() => setShowChildren(!showChildren)}>
          <img src="src/assets/icons/couple.png" alt="couple" />
        </button>
        {showChildren ? <Children /> : ""}
      </div>
    </div>
  );
}

export default MatchCard;
