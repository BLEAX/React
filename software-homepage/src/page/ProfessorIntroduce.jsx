import { React, useState } from "react";
import ProfessorCard from "./ProfessorCard";
import "../css/ProfessorIntroduce.css";

function ProfessorIntroduce() {
  const professor = [
    {
      imageUrl:
        "https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/euoGbMBr3mkbzje4.JPG",
      name: "강인수",
      major: "-세부전공 : 자연어처리, 정보검색, 시맨틱웹",
      email: "-이메일 : dbaisk@ks.ac.kr",
      phoneNumber: "-전화번호 : 051-663-5147",
      graduate: "-최종학력 : 포항공과대학교 박사",
      etc: `학력
      경북대학교 학사(1995)
      포항공과대학교 석사(1999)
      포항공과대학교 박사(2006)
      연구분야
      자연어처리, 정보검색, 시맨틱웹`,
    },
    {
      imageUrl:
        "https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/pyzC0FR0KMIEqhIC.JPG",
      name: "성락운",
      major: "-세부전공 : 운영체제",
      email: "-이메일 : nuseong@ks.ac.kr",
      phoneNumber: "-전화번호 : 051-663-5142",
      graduate: "-최종학력 : KAIST 전산학 (박사)",
      etc: `학력
      1982 서울대학교 (학사)
      1984 KAIST 전산학 (석사)
      1993 KAIST 전산학 (박사)
      경력
      2004.3 ~ 2005.2 UPENN 방문교수
      2009.3 ~ 현재 멀티미디어대학 학장, 멀티미디어대학원 원장
      출판
      2000.8 어셈블리언어-인텔계열 컴퓨터 (교보문고)
      2000.9 전자상거래관리사 2급 실기특별대비 (영진.com)
      전공분야
      Operating Systems
      강의
      운영체제, 어셈블리 언어, 시스템 프로그래밍`,
    },
    {
      imageUrl:
        "https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/RKnQWX4W3C7aUXy8.JPG",
      name: "지상문",
      major: "-세부전공 : deep learning, bioinformatics",
      email: "-이메일 : smchiks@ks.ac.kr",
      phoneNumber: "-전화번호 : 051-663-5146",
      graduate: "-최종학력 : KAIST 박사",
      etc: `학력
      서울대 학사('91), KAIST 석사 ('93), KAIST 박사 ('98)
      경력
      1993.8 ~ 2000.4 삼성전자 정보통신 무선사업부 선임연구원 2001.9 ~ 현재 경성대학교 공과대학 소프트웨어학과 교수
      전공분야
      deep learning, bioinformatics
      최근논문 (2010~현재)
      [SCI] Sora Yoon, Jinhwan Kim, Seon-Kyu Kim, Bukyung Baik, Sang-Mun Chi, Seon-Young Kim and Dougu Nam, GScluster: network-weighted gene-set clustering analysis, BMC Genomics, (2019) 20:352, ( 4.257 - 5-year IF)
      
      [SCI] Sora Yoon, Hai C. T. Nguyen, Woobeen Jo, Jinhwan Kim, Sang-Mun Chi, Jiyoung Park, Seon-Young Kim and Dougu Nam*, "Biclustering analysis of tranx-x-x-x-x-x-scriptome big data identifies condition-specific microRNA targets," NUCLEIC ACIDS RESEARCH, 2019, (IF 11.561).
      
      [J] Sang-Mun Chi, "Architectures of convolutional Neural Networks for the Prediction of Protein Secondary Structures,” JKIICE, Vol. 22, No. 5, pp. 728-733, 2018.
      
      [J] Sang-Mun Chi*, "A Performance Comparison of Protein Profiles for the Prediction of Protein Secondary Structures,” JKIICE, Vol. 22, No. 1, pp. 26-32, 2018.
      
      [J] Sang-Mun Chi*, "Prediction of protein secondary structure using the weighted combination of homology information of protein sequence,” JKIICE, Vol. 20, No. 9, pp. 1816-1821, 2016.
      
      [C] Sora Yoon, Seon-Kyu Kim, Sang-Mun Chi, Seon-Young Kim and Dougu Nam, "GSAseq: Gene set enrichment analysis of RNA-seq data accounting for read number bias,” HItSeq 2015 : a sig of IMSB/ECCB, Dublin, Ireland, July 10-11, 2015.
      
      [J] Sang-Mun Chi*, "Construction of Large Library of Protein Fragments Using Inter Alpha-carbon Distance and Binet-Cauchy Distance,” JKIICE, Vol. 19, No. 12, pp. 3011-3016, 2015
      
      [J] Sang-Mun Chi, "Prediction of Protein Subcellular Localization using label power-set classification and multi-class probability estimates," JKIICE, Vol. 18, No. 10, pp. 2562-2570, Oct. 2014.
      
      [J] Sang-Mun Chi, "Multi-label combination based prediction of protein subcellular localization,” JKIICE, Vol. 18, No. 7, pp. 1749-1756, July, 2014.
      
      [C] Sang-Mun Chi, "Prediction of protein subcellular multiple localization using affine combination of Multi-labels,” KSMB, Daegu, Korea, Jun, 2014.
      
      [SCI] Sang-Mun Chi, Young-Kyo Seo, Young-Kyu Park, Chan Young Park, Sora Yoon, Yong Sung Kim, Seon-Young Kim and Dougu Nam, “REGNET: Mining context-specific human tranx-x-x-x-x-x-scription networks using composite genomic information,” BMC Genomics, 15:450, Jun, 2014. (IF: 4.40)
      
      [J] Sang-Mun Chi, "A Performance comparison of multi-label classification methods for protein subcellular localization prediction,” JKIICE, Vol. 18, No. 4, pp. 992-999, Apr, 2014.
      
      [J] Sang-Mun Chi, "Protein Subcellular Localization Prediction Using a Fast Sequence Search Based on Enhanced Suffix Arrays," KIISE, Vol. 40, No. 9, pp. 483-490, september, 2013.
      
      [C] Dougu Nam, Sang-Mun Chi,, Young-Kyu Park, Seon-Young Kim, "Mining condition-specific tranx-x-x-x-x-x-scription programs from composite molecular information and a large collection of gene expression data", RECOMB, Sanfrancisco, USA, november, 2012.
      
      [SCI] Sang-Mun Chi, Dougu Nam, "WegoLoc: accurate prediction of protein subcellular localization using weighted gene ontology terms," Bioinformatics, Vol. 28, No. 7, pp. 1028-1030, April. 2012.
      
      (SCI) (IF: 5.323, #1 ranked journal in ISI’s mathematical and computational biology category)
      
      [C] Dougu Nam, Sang-Mun Chi, “PREDICTION OF DISEASE SUBTYPES USING ENSEMBLE MACHINE LEARNING METHODS,” 한국산업응용수학회 학술대회 논문집 7(2), 2012.1.
      
      [SCI] Sang-Mun Chi, Jin Kim, Seon-Young Kim, Dougu Nam, "ADGO 2.0: interpreting microarray data and list of genes using composite annotations," NUCLEIC ACIDS RESEARCH, Vol. 39, No. 2, pp. 302-306, Jul. 2011. (IF: 8.278)
      
      [SCI] Sang-Mun Chi, "Prediction of protein subcellular localization by weighted gene ontology terms," BIOCHEMICAL AND BIOPHYSICAL RESEARCH COMMUNICATIONS, Vol. 399, No. 3, pp. 402-405, Aug. 2010. (IF: 2.406)
      
      [SCI] Sang-Mun Chi, Young-Hwan Oh, "Spectral magnitude normalisation and cepstral coefficient transform for noisy-Lombard speech recognition," Electronics Letters, Vol. 32, No. 19, pp. 1761-1763, Sep. 1996. (IF: 1.038)
      
      [J] 지상문, 단백질의 세포내 위치를 예측하기 위한 외부정보의 성능 비교, 정보과학회논문지: 소프트웨어 및 응용, 제 37권 제 11호, pp. 803-811, 2010. 11. [J] 지상문, 위치 종속 유사도 스펙트럼을 이용한 단백질 서열의 아미노산 조성 추정, 정보과학회논문지: 소프트웨어 및 응용, 제 37권 제 1호, pp. 74-79, 2010. 1.
      
      
      
      .
      연구과제
      단일세포 RNA서열 자료를 사용한 유전자 발현 모델링을 위한 미분가능하고 해석가능한 심층학습, 한국연구재단 (1차, 2차, 3차),
      
      2021-06-01 ~ 2024-05-31
      
      
      Extraction of protein structural and functional features using effective deep learning architectures, NRF (1차, 2차, 3차), 2016.11 - 2019.10
      
      Prediction of protein subcellular localization using effective discriminative information from gene ontology terms and multi-class classification, and its application to genetic disease association, KOSEF (1차, 2차, 3차), 2012-5 - 2015.4
      
      Prediction of protein subcellular localization by weighted gene ontology, 경성대학교, 2010.03-2011.2
      
      실수 지수 메트릭으로 구성된 스트링 커널을 이용한 신호펩티드의 절단위치 예측, 경성대학교, 2009.03-2010.2
      
      소수성과 치환행렬에 기반한 신호서열 예측, 경성대학교, 2007.03-2008.2
      
      음성인식을 활용한 영어학습 소프트웨어 개발, 2000.05-2002.04
      
      이동전화에서 음성인식/합성 프로젝트(상품기획, 엔진공동개발, 엔진 포팅, SW, UART통신, HW prototype), 삼성전자, 1999.01-2000.04
      
      이동전화에서 숫자음 다이얼링 필드테스트, 잡음 제거, 삼성전자, 1998.02-1998.12
      
      잡음환경하에서의 음성인식을 위한 전처리 연구 (1차, 2차년도), 한국통신, 1996.1-1997.12.
      
      음성인식을 위한 잡음처리기술에 관한 연구, 한국전자통신연구소, 1995.5-1995.12.
      
      음향환경에 강인한 음성인식시스템의 개발, KAIST 인공지능 연구센터, 1994.9-1995.8.
      
      HMM과 Neural Network를 이용한 음성 자동분할에 관한 연구, 한국전자통신연구소, 1993.3-1993.12`,
    },
    {
      imageUrl:
        "https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/q1N3Pby4oRjhFVNq.JPG",
      name: "홍석희",
      major:
        "-세부전공 : 데이터베이스, 실시간 데이터베이스, 실시간 시스템, 트랜잭션 시스템, 소프트웨어 시험, 저장 장치",
      email: "-이메일 : shong@ks.ac.kr",
      phoneNumber: "-전화번호 : 051-663-5145",
      graduate: "-최종학력 : 한국과학기술원(KAIST) 전산학과 졸업 (박사)",
      etc: `학력
      1989.2 홍익대학교 전자계산학과 졸업 (학사)
      1991.2 한국과학기술원(KAIST) 전산학과 졸업 (석사)
      1997.2 한국과학기술원(KAIST) 전산학과 졸업 (박사)
      경력
      1997년 3월~8월 : 한국전자통신연구원 박사후 연구원
      
      1997년 9월~현재 : 경성대학교 교수
      
      2006년 9월~2007년 8월 : 미국 산호세주립대 교환교수
      
      2016년 2월~2017년 1월 : 미국 산호세주립대 교환교수
      
      1999년 3월 ~ 2002년 12월 : 한국전자통신연구원 위탁과제 책임자
      
      2000년 2월 ~ 4월 : (주) 알티베이스 위탁과제 책임자
      
      2001년 ~ 2003년 : 멀티미디어 및 CT 사업단 교재개발
      
      2013년 6월 ~ 2014년 5월 : 한국인터넷진흥원 위탁과제 공동연구원
      
      2013년 7월 ~ 2017년 4월 : 한국건설기술연구원 연구과제 공동연구원
      
      2014년 5월 ~ 2017년 4월 : 한국환경기술원 연구과제 공동연구원
      전공분야
      전산학, 데이타베이스
      연구분야
      실시간 데이터베이스, 실시간 시스템, 트랜잭션 시스템, 소프트웨어 시험, 저장 장치`,
    },
    {
      imageUrl:
        "https://kscms.ks.ac.kr/attach/IMAGE/ProfessorMgr/ProfessorUpload/2021/4/auRGThIiJUVEePwo.JPG",
      name: "양태천",
      major: "-세부전공 : 알고리즘, 컴퓨터그래픽스",
      email: "-이메일 : tcyang@ks.ac.kr",
      phoneNumber: "-전화번호 : 051-663-5141",
      graduate: "-최종학력 : KAIST 전산학과(박사)",
      etc: `학력
      1978.3 ~ 1982.2 경북대학교 전자공학과(학사)
      1982.3 ~ 1984.2 KAIST 전산학과(석사)
      1988.3 ~ 1994.2 KAIST 전산학과(박사)
      경력
      1985.3 ~ 현재 경성대학교 컴퓨터과학과 교수
      1995.1 ~ 1995.12 SUNY at Stony Brook 교환교수
      2003.1 ~ 2003.12 Dartmouth College 교환교수
      전공분야
      Algorithm & Computer Graphics
      연구분야
      알고리즘, 컴퓨터그래픽`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? professor.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === professor.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='professor-introduce'>
      <h2>교수진 소개</h2>
      <br />
      <br />
      <ProfessorCard
        imageUrl={professor[currentIndex].imageUrl}
        name={professor[currentIndex].name}
        major={professor[currentIndex].major}
        email={professor[currentIndex].email}
        phoneNumber={professor[currentIndex].phoneNumber}
        graduate={professor[currentIndex].graduate}
      />
      <div className='buttons'>
        <button onClick={handlePrev}>◀</button>
        <button onClick={handleNext}>▶</button>
      </div>
    </div>
  );
}

export default ProfessorIntroduce;
