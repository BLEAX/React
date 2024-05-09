import { useState, useTransition } from "react";

let a = new Array(10000).fill(0);

function UseTransition2() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  return (
    <div>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      {isPending
        ? "로딩 중"
        : a.map(() => {
            return <div>{name}</div>;
          })}
    </div>
  );
}

export default UseTransition2;
