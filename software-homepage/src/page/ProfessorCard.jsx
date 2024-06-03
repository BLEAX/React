import { react, useState } from "react";
import "../css/ProfessorCard.css";

function ProfessorCard({
  imageUrl,
  name,
  major,
  email,
  phoneNumber,
  graduate,
}) {
  return (
    <div className='Professor-card'>
      <img
        src={imageUrl}
        alt={`${name} 교수님의 사진`}
        className='Professor-card-image'
      />
      <h2 className='Professor-card-name'>{name}</h2>
      <div className='Professor-card-description'>
        <p>{major}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{graduate}</p>
        <hr />
      </div>
    </div>
  );
}

export default ProfessorCard;
