**컴포넌트** : 
- 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈
- 입력을 받아 출력하는 역할
  (**입력을 props(properties), 출력을 React Element라고 한다.**)
  (쉽게 말하면 자바의 클래스와 객체 느낌. 생성자로 속성을 받고, 객체가 생성되는 것처럼)
- 웹 페이지를 만드는 퍼즐 조각

**(쉽게 말하면 레고 블럭(객체))**
ex) Header.js, Main.js, Footer.js 를 App.js가 품고 있고, App.js를 다시 index.js가 품는 구조

컴포넌트는 **Class Component**와 **Function Component**로 나뉜다. (다음에 후술)

**<컴포넌트 규칙>**
- 컴포넌트의 이름은 항상 대문자로 시작해야 한다. (리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문에)
- div, span과 같이 사용되는 것은 내장 컴포넌트라는 것을 뜻하며, div나 span과 같은 문자열 형태로 react.createElement에 전달된다.
