import { useEffect, useState } from "react";
export default function UseEffectTest() {
  const [count, setCount] = useState(1000);
  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => console.log(count), count);
    return () => {
      clearInterval(interval);
      console.log("clearInterval");
    };
  }, [count]);
  const countHandler = (e) => {
    setCount((c) => c + 1000);
  };
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={countHandler}>카운트 증가</button>
    </div>
  );
}
