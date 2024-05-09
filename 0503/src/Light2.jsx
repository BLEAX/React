// ./components/Light.jsx
import React from "react";
function Light2({ room, on, toggle }) {
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
export default React.memo(Light2);
