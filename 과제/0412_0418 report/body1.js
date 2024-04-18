import React, { useState } from "react";

function Body1() {
  const style = {
    width: "250px",
    height: "20px",
  };

  const [text, setText] = useState("");

  const rainbowStyle = (text) => {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    const letters = text.split("");
    const rainbowText = letters.map((letter, index) => (
      <span key={index} style={{ color: colors[index % colors.length] }}>
        {letter}
      </span>
    ));
    return rainbowText;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <br />
      <br />
      <h2>텍스트 입력</h2>
      <br />
      <textarea style={style} value={text} onChange={handleTextChange} />
      <div>{rainbowStyle(text)}</div>
    </div>
  );
}

export default Body1;
