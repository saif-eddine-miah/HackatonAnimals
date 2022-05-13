import React from "react";
import empreinte from "../assets/icons/paw.png";
import malette from "../assets/icons/briefcase.png";
import livre from "../assets/icons/book.png";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { name, age, type, profession, biography } = props;
  console.log(type);
  return (
    <div className="ProfileCardContainer">
      <div className={`animalpic ${type}`}> coucou</div>
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
