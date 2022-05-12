import React from "react";

function ProfileCard(props) {
  const { name, age, type, profession, biography } = props;
  return (
    <div>
      <div>
        <img src={`src/assets/animals/${type}.jpg`} alt="cheval" />
      </div>
      <div>{name}</div>
      <div> {age}</div>
      <div>
        <div>
          <img src="src/assets/icons/paw.png" alt="empreinte" />
          {type}
        </div>
        <div>
          <img src="src/assets/icons/briefcase.png" alt="malette" />
          {profession}
        </div>
        <div>
          <img src="src/assets/icons/book.png" alt="livre" />
          {biography}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
