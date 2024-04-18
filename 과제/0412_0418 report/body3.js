import React, { useState } from "react";

function Body3({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>클릭된 횟수: {count}</p>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
export default Body3;
