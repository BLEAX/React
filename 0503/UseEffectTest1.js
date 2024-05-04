import { useEffect, useState } from "react";

export default function UseEffectTest1() {
  const [count, setCounter] = useState(0);
  useEffect(() => {
    console.log(`useEffect: ${Date()}`);
  });
  const countHandler = (e) => {
    setCounter((s) => s + 1);
  };
  return (
    <div className='App'>
      <h1 id='hi'>{count}</h1>
      <button onClick={countHandler}>카운터 증가</button>
    </div>
  );
}
