JSX = XML과 유사한 구문을 사용하여 DOM트리를 생성할 수 있는 JavaScript 확장
처음에는 React에서 쓰려고 Facebook이 만들었지만 이제는 여러 웹프레임워크에서 사용중

JSX는 일반적으로 원래 JSX와 구조적으로 유사한 중첩된 JavaScript 함수 호출로 변환
JSX를 사용하면 React에서 HTML 작성, 추가 가능


JQuery는 원래 필수였던 JS 라이브러리였으나, 
시대가 지나면서 JQuery에서 React로 넘어감.

바닐라 JS를 사용해서 html 태그를 사용할 수 있지만 (document.createElement()가),
그걸 더 쉽게 사용하기 위해 React를 사용한다고 보면 됨. (React.createElement()로 바뀜.)

React.createElement() 로 만들고
ReactDOM.render() 로 브라우저의 DOM 상에 React 엘리먼트를 추가

JSX에 작성하면 Babel 컴파일러가 React API로 변환해주고, 
이 React API는 HTML에 일대일로 대응.

<JSX의 규칙>
1. 반드시 부모 요소 하나가 감싸는 형태여야 한다.
2. 자바스크립트 표현식
   - JSX 안에서도 자바스크립트 표현식 사용 가능
   - JSX내부에서 코드를 {}로 감싸주면 된다.
   - {} 안에서 모든 자바스크립트 표현식 사용가능
3. JSX도 표현식이다.
   - JSX도 자바스크립트의 객체로 인식된다.

4. ****JSX 내부에는 if문(for문) 사용 불가능 (표현식이 아니기 때문)****
-> 따라서, 삼항 연산자 (a==1?b:c) 로 대체

5. ReactDOM은 HTML 어트리뷰트 이름 대신 camelCase를 사용한다.
   - class 대신 className 사용 (class는 HTML에서 사용중이라 겹침)
6. JSX 내에서 주석 사용법 /* ... */

자신이 만든 태그는 대문자로 적음.





