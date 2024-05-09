import React, { useState } from "react";

const Counter3 = ({ initialCount }) => {
  const initial = initialCount ? initialCount : 0;
  const [count, setCount] = useState(initial);
  const onIncrease = () => {
    setCount((count) => count + 1);
  };
  const onDecrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      {" "}
      <h2>Count: {count}</h2>{" "}
      <button onClick={() => setCount(initial)}>초기화</button>{" "}
      <button onClick={onIncrease}>증가</button>{" "}
      <button onClick={onDecrease}>감소</button>{" "}
    </>
  );
};

export default Counter3;
