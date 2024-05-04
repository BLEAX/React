import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  useLayoutEffect(() => {
    setAge(25);
    setName("찬민");
  }, []);
  return (
    <>
      <div className='App'>{`그의 이름은 ${name} 이며,
나이는 ${age}살 입니다.`}</div>
    </>
  );
}
