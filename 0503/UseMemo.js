import { useEffect, useState, useMemo } from "react";

export default function Practice() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);
  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);
  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      {/* 📌 location.country 할당 */}
      <p>나라:{location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
      <p></p>
    </div>
  );
}
