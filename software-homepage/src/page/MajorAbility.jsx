import react from "react";
import "../css/MajorAbility.css";

function MajorAbility() {
  return (
    <div className='major-introduce'>
      <br />
      <br />
      <br />
      <h2>전공역량</h2>
      <br />
      <br />
      <br />
      <table className='competency-table'>
        <thead>
          <tr>
            <th>전공역량</th>
            <th>전공역량정의</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>학문 고유 지식</td>
            <td>전공을 이수하기 위해 필요한 핵심 기본 지식</td>
          </tr>
          <tr>
            <td>정보기술전략계획</td>
            <td>
              현시대 정보기술 및 그 동작 환경을 이해하고 새로운 소프트웨어를
              기획하는 능력
            </td>
          </tr>
          <tr>
            <td>정보기술개발</td>
            <td>
              현시대 정보기술 및 그 동작 환경에서 소프트웨어를 개발하는 능력
            </td>
          </tr>
          <tr>
            <td>정보기술운영</td>
            <td>
              현시대 정보기술 및 그 동작 환경에서 소프트웨어 및 컴퓨터시스템을
              운영하는 능력
            </td>
          </tr>
          <tr>
            <td>정보기술관리</td>
            <td>
              분석, 설계, 구현, 테스트 등 소프트웨어 프로젝트 진행의 각 단계를
              수행하고 관리하는 능력
            </td>
          </tr>
          <tr>
            <td>문제해결능력</td>
            <td>
              현시대 정보기술 및 그 동작 환경에서 실세계 문제 해결을 위한
              논리적이고 창의적 방법을 고안하고 실현하는 능력
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default MajorAbility;
