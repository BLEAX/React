import React from "react";

function Main1(props) {
  const personal_style = {
    border: "3px solid green",
    margin: "2px",
  };

  const name = {
    color: "blue",
    fontSize: "20px",
  };

  const age = {
    color: "red",
    fontSize: "20px",
  };
  return (
    <div style={personal_style}>
      <h4>
        My name is <span style={name}>{props.name}</span> and I'm{" "}
        <span style={age}>{props.age}</span> years old.
      </h4>
    </div>
  );
}

export default Main1;
