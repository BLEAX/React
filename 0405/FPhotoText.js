import React from "react";

function FPhotoText(props) {
  const url = "img/" + props.image + ".png";
  const label = props.label;
  const boxStyle = {
    border: "1px solid silver",
    margin: "8px",
    padding: "4px",
  };
  return (
    <div style={boxStyle}>
      <img src={url} width='128' alt='computer' />
      <span>{label}</span>
    </div>
  );
}

export default FPhotoText;
