import React from "react";

function Light1({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <div>
      <button onClick={toggle}>
        {room}
        {on ? "💡" : "⬛"}
      </button>
    </div>
  );
}
export default Light1;
