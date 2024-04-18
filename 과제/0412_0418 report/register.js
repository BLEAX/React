import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let message = "회원가입 정보:";
    if (username.trim() !== "") {
      message += `\n사용자 이름: ${username}`;
    }
    if (email.trim() !== "") {
      message += `\n이메일: ${email}`;
    }
    if (password.trim() !== "") {
      message += `\n비밀번호: ${password}`;
    }
    window.alert(message);
  };

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>사용자 이름 </label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>이메일 </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>비밀번호 </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>회원가입</button>
      </form>
    </div>
  );
}

export default Register;
