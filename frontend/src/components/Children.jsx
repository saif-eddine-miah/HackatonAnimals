import React from "react";
import "./MatchCard.css";

function Children({ user, animalmatch }) {
  const userType = user;
  const animalType = animalmatch;
  return <div className={`animalChild ${userType}${animalType}`} />;
}

export default Children;
