import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/MajorIntroduce'>학과소개</Link>
        </li>
        <li>
          <Link to='/EduPurpose'>교육목표 및 인재상</Link>
        </li>
        <li>
          <Link to='/MajorAbility'>전공역량</Link>
        </li>
        <li>
          <Link to='/ProfessorIntroduce'>교수진 소개</Link>
        </li>
        <li>
          <Link to='/History'>학과연혁</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
