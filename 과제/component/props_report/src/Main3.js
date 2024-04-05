import React from "react";

function Main3(props) {
  const box = {
    border: "2px solid purple",
    font: "bold",
  };
  return (
    <div style={box}>
      <h3>{props.organization1}</h3>
      <h3>{props.organization2}</h3>
      <h3>{props.organization3}</h3>
    </div>
  );
}

export default Main3;
