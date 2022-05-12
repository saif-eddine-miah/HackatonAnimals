import React from "react";

function ProfileCard() {
  return (
    <div>
      <div>
        <img
          src="src/assets/animals/chat-hibou.jpg"
          alt="croisement chat-hibou"
        />
      </div>
      <div>Nom, Age</div>
      <div>
        <div>
          <img src="src/assets/icons/paw.png" alt="empreinte" />
          Race
        </div>
        <div>
          <img src="src/assets/icons/briefcase.png" alt="malette" />
          Profession
        </div>
        <div>
          <img src="src/assets/icons/book.png" alt="livre" />
          Biographie
        </div>
        {/* <div>id</div>
        <div>isReal</div>
        <div>matchDefault</div> */}
      </div>
      <div>
        <button>
          <img src="src/assets/icons/cross.png" alt="croix" />
        </button>
        <button>
          <img src="src/assets/icons/heart.png" alt="coeur" />
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
