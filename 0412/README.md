**{{color:props.color}} 가 중괄호 두 개인 이유 : 


JSX에서 스타일을 설정할 때 CSS 속성 이름은 camelCase로 작성해야 하는데
{color:props.color}라고 작성하면 JSX가 이를 JavaScript 객체로 해석하지만, CSS에서 color를 camelCase로 작성해야 하기 때문에 
이를 해결하기 위해 {color: props.color} 대신 {{color: props.color}}와 같이 중괄호를 두 번 사용하여 JavaScript 객체로 감싸는 것.
이렇게 하면 JSX가 이를 JavaScript 객체로 인식하고 CSS 속성 이름을 camelCase로 변환하지 않음.**


rfc : react function component (pure component라고도 함.)
rcc : react class component
화살표 함수 : 익명함수의 형태 () => {}


컴포넌트 추출 : 기능 단위, 재사용 가능 여부로 추출


**State(상태)** : **객체의 메소드같은 것**
 - **state란 랜더링 결과물에 영향을 주는 정보**
 - **리액트 컴포넌트의 변경 가능한 데이터**
 - 간단히 말해서 변수이다, 하지만 const, let과 다르게 값이 변하면 관련 있는 컴포넌트들이 재렌더링되어 화면이 바뀐다.
 - state는 **컴포넌트의 내부에서 변경 가능한 데이터(지속적으로 변경이 일어나는 값, 상태)를 다루기 위해 사용하는 객체**
 - 값을 저장하거나 변경할 수 있는 객체로 보통 이벤트와 함께 사용된다.
 - 사용자의 입력이나, 개발자가 의도한 동작에 의해 변할 수도 있다.
 - state는 리액트에서 쓰는 일반 자바스크립트 객체


**Props vs State**
props는 컴포넌트 내부에서 값을 바꿀 수 없지만
state는 컴포넌트 내부에서 값을 바꿀 수 있다.



