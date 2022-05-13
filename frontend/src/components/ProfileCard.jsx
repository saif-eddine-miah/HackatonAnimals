import React from "react";
import empreinte from "../assets/icons/paw.png";
import malette from "../assets/icons/briefcase.png";
import livre from "../assets/icons/book.png";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { name, age, type, profession, biography } = props;
  return (
    <div className="ProfileCardContainer">
      <div className={`animalpic ${type}`}> </div>
      <div className="swipe-name">{name}</div>
      <div className="swipe-age"> {age}</div>
      <div>
        <div className="swipe-empreinte">
          <img src={empreinte} alt="empreinte" />
          <p className="info-swipe">{type}</p>
        </div>
        <div className="swipe-profession">
          <img src={malette} alt="malette" />
          <p className="info-swipe">{profession}</p>
        </div>
        <div className="swipe-bio">
          <img src={livre} alt="livre" />
          <p className="info-swipe">{biography}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
