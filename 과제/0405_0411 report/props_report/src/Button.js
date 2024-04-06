import React from "react";

function Button(props) {
  const ButtonStyle = {
    border: "1px solid black",
    margin: "8px",
    padding: "4px",
  };

  return (
    <div style={ButtonStyle}>
      <button>{props.name1}</button>
      <button>{props.name2}</button>
      <button>{props.name3}</button>
      <button>{props.name4}</button>
      <button>{props.name5}</button>
    </div>
  );
}

export default Button;
