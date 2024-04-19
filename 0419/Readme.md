Hook : 
클래스형 컴포넌트에서만 쓸 수 있었던 상태(state)를 함수형 컴포넌트에서도 사용할 수 있게 한 것
(클래스형 컴포넌트의 단점 때문에)

Hook은 전부 use로 시작한다. (useState, useEffect 등등)

<Hook의 장점>
 - 상태 로직 단순화
 - 코드 재사용성과 관심사 분리
 - 부작용 감소

Hook은 자바스크립트 함수이다. (Hook은 함수이기 때문에 직접 만들 수 있다.)
Hook을 사용하기 위해서는 두 가지 규칙을 준수해야한다.

React함수의 최상위에서만 Hook을 호출해야 한다.
오직 React함수 내에서만 Hook을 호출해야 한다. (반복문이나 조건문 내에서는 호출할 수 없다.)

useState 컴포넌트에 state variable을 추가할 수 있다.
ex) const [state, setState] = useState(state의 초기값)
state변수는 '='를 사용하지 않고 state함수를 통해서만 변수를 바꿀 수 있다.


<parameters>
initialState : 상태의 초기값. 모든 유형의 값이 될 수 있다. 그리고 이 인수는 초기 렌더링 후에는 무시된다.


<Returns>
useState 두 개의 값이 있는 배열을 반환한다.
 - 현재 상태 : 첫 번째 렌더링 중에는 initialState 값이다.
 - Set 함수. 상태를 다른 값으로 다시 업데이트하고, 리렌더링을 트리거할 수 있는 함수


<Caveats(주의사항)>
- useState는 훅이므로 루프나 조건 내에서는 호출할 수 없다.
- React는 상태 업데이트를 일괄 처리(16ms마다)하기 때문에 모든 이벤트 핸들러가 실행되고 해당 set함수를 호출한 후에 화면을 업데이트한다.
