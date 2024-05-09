import React, { useState } from "react";

function useSecretReveal(initialValue) {
  const [revealed, setRevealed] = useState(false);
  const [value, setValue] = useState(initialValue);

  const toggleReveal = () => {
    setRevealed(!revealed);
  };

  return {
    value: revealed ? value : "******",
    toggleReveal,
  };
}

function Introduce_myself() {
  const textStyle = {
    textAlign: "center",
    fontSize: "20px",
  };

  const email = useSecretReveal("rlawjdgns135@naver.com");

  return (
    <div id='root'>
      <h2>이름 : 김정훈</h2>
      <hr />
      <h3>학번 : 2019603018</h3>
      <hr />
      <h3>학과 : 영어영문학과</h3>
      <hr />
      <h4>취미 : 게임, 맨몸운동</h4>
      <hr />
      <h4>목표 : OPIC IM3 이상, 정보처리기사 취득, 취업</h4>
      <hr />
      <h4>내 이메일 : {email.value}</h4>
      <button onClick={email.toggleReveal}>
        {email.revealed ? "이메일 숨기기" : "이메일 보기"}
      </button>
    </div>
  );
}

export default Introduce_myself;
