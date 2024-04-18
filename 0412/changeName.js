import React, { useState } from 'react';

const Main = () => {
    const [ myName, setMyName ] = useState("홍길동")
    function changeName() {
        setMyName(myName === "홍길동" ? "김길동" : "홍길동");
    }

    return (
        <div>
            <h1>안녕하세요. {myName} 입니다.</h1>
            <button onClick={changeName}>Change</button>
        </div>
    );
};

export default Main;