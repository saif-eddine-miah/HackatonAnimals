import React from "react";
// import chien from "../assets/animals/chien.jpg";
// import chat from "../assets/animals/chat.jpg";
// import cheval from "../assets/animals/cheval.jpg";
// import hibou from "../assets/animals/hibou.jpg";
// import lapin from "../assets/animals/lapin.jpg";
// import oiseau from "../assets/animals/oiseau.jpg";
// import requin from "../assets/animals/requin.jpg";

import empreinte from "../assets/icons/paw.png";
import malette from "../assets/icons/briefcase.png";
import livre from "../assets/icons/book.png";

function ProfileCard(props) {
  const { name, age, type, profession, biography } = props;

  return (
    <div>
      <div>
        <img src={`${type}`} alt={type} />
      </div>
      <div>{name}</div>
      <div> {age}</div>
      <div>
        <div>
          <img src={empreinte} alt="empreinte" />
          {type}
        </div>
        <div>
          <img src={malette} alt="malette" />
          {profession}
        </div>
        <div>
          <img src={livre} alt="livre" />
          {biography}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
