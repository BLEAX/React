import react from "react";
import Image from "./Image";
import "../css/EduPurpose.css";

function EduPurpose() {
  const imageUrl =
    "https://kscms.ks.ac.kr/attach/EDITOR/IMAGE/2021/4/9MYngtikh4SDYzYPr0rK.jpg";

  return (
    <div>
      <br />
      <br />
      <br />
      <h2>교육목표 및 인재상</h2>
      <br />
      <br />
      <br />
      <Image imageUrl={imageUrl} id='EduPurpose' />
    </div>
  );
}

export default EduPurpose;
