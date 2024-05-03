import { useRef, useEffect } from "react";

function DOMFocus() {
  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="아이디또는이메일" />
      <button>Login</button> 
      <br /> 
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default DOMFocus;