import react from "react";
import "../css/Event.css";

function Event({ year, description }) {
  return (
    <div className='body'>
      <div className='event'>
        <p className='year'>
          <span>{year}</span>
        </p>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
}

export default Event;
