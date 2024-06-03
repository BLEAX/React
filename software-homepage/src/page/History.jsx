import react from "react";
import Event from "./Event.jsx";

function History() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h2>학과연혁</h2>
      <br />
      <br />
      <Event
        year='2017'
        description='경성대학교 CKS 사업 선정 (소프트웨어인재양성사업단)'
      />
      <Event year='2015' description='컴퓨터공학과로 명칭 변경' />
      <Event year='2012' description='컴퓨터공학부로 명칭 변경' />
      <Event
        year='2011'
        description='정보통신산업진흥원(미래창조과학부) 글로벌 IT인재 활용지원사업 수행 (2011~2013)'
      />
      <Event
        year='2010'
        description='컴퓨터학부로 통합 (공과대학), 중소기업청 앱 창작터 사업 참여 (2010~2012)'
      />
      <Event
        year='2006'
        description='컴퓨터정보학부로 명칭 변경 (컴퓨터과학전공, 인터넷공학전공)'
      />
      <Event
        year='2005'
        description='정보통신연구진흥원 대학IT전공역량강화사업(NEXT) 사업 선정'
      />
      <Event year='2003' description='컴퓨터과학과로 명칭 변경' />
      <Event year='1999' description='정보과학부 신설 (멀티미디어대학)' />
      <Event
        year='1998'
        description='교육부 지방대학 멀티미디어특성화사업 참여, 전자계산학과 신설 (이과대학)'
      />
      <Event year='1984' description='계산통계학과 (이과대학)' />
    </div>
  );
}

export default History;
