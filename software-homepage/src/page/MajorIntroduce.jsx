import react from "react";
import Image from "./Image";
import "../css/MajorIntroduce.css";

function MajorIntroduce() {
  const imageUrl =
    "https://kscms.ks.ac.kr/attach/EDITOR/IMAGE/2021/4/93JhvObk5hH9HSqsS4g7.jpg";

  return (
    <div className='MajorIntroduce'>
      <br />
      <br />
      <br />
      <h2>학과소개</h2>
      <br />
      <br />
      <br />
      <Image imageUrl={imageUrl} />
    </div>
  );
}

export default MajorIntroduce;
