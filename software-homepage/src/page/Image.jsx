import React from "react";

const Image = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt='Loaded from external source' />
    </div>
  );
};

export default Image;
