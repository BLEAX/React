import React, { createContext, useContext, useState } from "react";
const TextContext = createContext("Hello world");

function End() {
  const text = useContext(TextContext);
  return <div> {text} </div>;
}

function Middle() {
  return (
    <div>
      <End />
    </div>
  );
}

export default function App() {
  const [text, setText] = useState("Hello world");
  return (
    <div>
      <TextContext.Provider value={text}>
        <Middle />
      </TextContext.Provider>

      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
