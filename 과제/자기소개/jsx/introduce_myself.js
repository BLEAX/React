import React from "react";

function Introduce_myself() {
  const textStyle = {
    textAlign: "center",
    fontSize: "20px",
  };

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
    </div>
  );
}

export default Introduce_myself;
