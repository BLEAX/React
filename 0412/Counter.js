import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // count라는 변수를 state로 사용하겠다는 의미
  // 카운트 변수의 초기값을 0으로 세팅 (useState(0)라는 훅 이용)
  // setCount라는 함수 안에 코드 사용

  const plus = () => {
    setCount(count+1);
    console.log(count);
  }
  
  const minus = () => {
    setCount(count-1);
    console.log(count);
  }
    return (
    <div style={{margin:15}}>
    <h2>{count}</h2>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    </div>
  )
}
