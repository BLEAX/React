**{{color:props.color}}** 가 중괄호 두 개인 이유 : 


JSX에서 스타일을 설정할 때 CSS 속성 이름은 camelCase로 작성해야 하는데
{color:props.color}라고 작성하면 JSX가 이를 JavaScript 객체로 해석하지만, CSS에서 color를 camelCase로 작성해야 하기 때문에 
이를 해결하기 위해 {color: props.color} 대신 {{color: props.color}}와 같이 중괄호를 두 번 사용하여 JavaScript 객체로 감싸는 것.
이렇게 하면 JSX가 이를 JavaScript 객체로 인식하고 CSS 속성 이름을 camelCase로 변환하지 않음.


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

```
**Props vs State**
props는 컴포넌트 내부에서 값을 바꿀 수 없지만
state는 컴포넌트 내부에서 값을 바꿀 수 있다.

state는 props와 다르게 자동 생성되지 않는다.
```

리액트 컴포넌트는 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링 된다.
(바뀐 내용이 없다 할지라도 의존하고 있는 부모 컴포넌트가 바뀌었기 때문에)


**useState()로 state초기화**
**값 변경 시에는 setState를 쓰며, this.setState({ 스테이트 명 : 신규값 }) 형태로 사용 가능**


setState()는 비동기적(다른 작업을 기다리지 않고)으로 동작한다.
setState의 동작 : 
   1. setState()를 통해 state의 값을 변경해주고,
   2. React가 state의 변경을 감지하면,
   3. 화면을 리렌더링해준다.


왜 : state의 값이 변경되면 리렌더링이 발생하는데, 변경되는 state가 많을수록 리렌더링이 계속 일어나고, 
     속도도 저하되는 등 성능적으로 문제가 많을 것이다. 
     그래서 16ms 동안 변경된 상태 값들을 모아서 한 번에 리렌더링을 진행하는데, 이를 batch update(일괄 업데이트)라고 한다.


```
동기(Synchronous : 동시에 발생하는) :
 - 요청을 보냈다면, 응답을 받아야 다음 동작이 이루어진다,
 - 순차적으로 실행되기 때문에, 어떤 작업이 수행 중이라면 다음 작업은 대기해야 한다.
 - 블로킹(작업 중단)이 발생한다.

비동기(Asynchronous : 동시에 발생하지 않는) : 
 - 작업 종료 여부에 관계없이 다음 작업을 실행한다.
 - 그러므로 동기와 다르게 실행 순서를 보장하지 않는다.
 - 블로킹이 발생하지 않는다.
```


state 값을 바꿔준 뒤 특정 작업(함수)을 실행하고 싶으면, setState의 두 번째 파라미터에 콜백 함수를 등록하여 작업을 처리할 수 있다.
this.setState( { 바꿀 스테이트값 기술 }, () => { 여기 콜백 함수 } );

this.state에 직접적으로 값을 설정할 수 있는 건 유일하게, 
처음 state을 초기화하는 생성자(constructor)또는 useState()에서만 가능하다.


spread 연산자(...)
ex) const copy = {...size};
size 객체의 모든 값을 복사하여 새로운 copy객체를 생성하는 코드

```
**<이벤트 핸들링>**
일반적인 클릭 이벤트 지정 방법 <div onclick=“clickHandler(e)”>Click Me</div>
리액트에서 클릭 이벤트를 지정하는 방법 <div onClick={clickHandler}>Click Me</div>

// 이벤트 핸들러의 this를 설정합니다. --- (※1)
this.clickHandler = this.clickHandler.bind(this);
로 이벤트를 연결해줘야 함.
```

```
**<컴포넌트 생명 주기> Component Life Cycle**
Component가 생성되는 시점과 사라지는 시점이 있다.

**Mounting**
 - 컴포넌트가 생성되는 시점
 - Class Component를 사용할 경우 Component의 constructor, 즉 생성자가 실행된다.
 - 생성자에서는 Component의 state를 정의하게 된다.
 - Component가 렌더링되며 이후에 componentDidMount함수가 호출된다.

**Updating**
 - 컴포넌트가 살아있는 시간 동안 생애 동안 변화를 겪으면서 여러 번 렌더링 되는 것.
 - 컴포넌트의 props가 변경되거나 setState 함수 호출에 의해 state가 변경되거나
   state가 변경되거나 falseUpdate라는 강제 업데이트 함수 호출로 인해 Component가 다시 렌더링된다.

**Unmounting**
 - 컴포넌트가 사라지는 것
 - 상위 컴포넌트를 더 이상 화면에 표시하지 않게 될때 unmount된다.
```
