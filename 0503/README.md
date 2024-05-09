useReducer:
- useState를 대체할 수 있는 함수
- 일반적으로는 useState를 쓰되, 좀 더 복잡한 상태 관리가 필요한 경우 useReducer사용
(dispatch함수 : reducer 함수를 실행시키는 함수)


useContext:
- 전역적인 데이터(Context)를 여러 컴포넌트에게 전달하는 함수
- useContext이전에는 Redux를 사용했었음.


useRef:
- 저장공간 또는 DOM요소에 접근하기 위해 사용하는 React Hook


forwardRef:
- 함수형 컴포넌트에서 부모 컴포넌트에서 자식 컴포넌트 안의 DOM element에 접근할 때 사용


useImperativeHandle:
- 부모 컴포넌트가 자식 컴포넌트 내부의 특정 함수나 메서드에 직접 접근할 수 있게 한다.


useEffect:
- 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 훅


useLayoutEffect:
- VirtualDOM을 이용해도 불구하고 깜빡거리는 현상이 발생할 경우 사용하는 함수


useInsertionEffect:
- CSS-in-JS 라이브러리를 사용하는 경우


useMemo:
- 자주 필요한 값을 맨 처음 계산할 때 캐싱해 놓아서 그 값이 필요할 때마다 캐시에서 꺼내서 사용하는 것


useCallback:
- 첫번째 인자로 전달된 함수를 메모이제이션(캐싱, 저장)하고, 컴포넌트가 재렌더링될 때마다 새로 생성되지 않고,
의존성 배열에 명시된 값이 변경될 때만 함수가 새로 생성됨.


useTransition:
- 렌더링을 자연스럽게 할 수 있는 훅


useId:
- 컴포넌트의 상태를 변경할 때마다 렌더링이 발생하는데, ID가 매번 재생성되는 것을 막기 위해 고유한 ID를 생성할 수 있게 하는 훅


useSyncExternalStore:
- 리액트에서 내부적으로 제공하는 상태관리 api가 아니라 자체적으로 상태관리 툴을 만들어 리액트 훅과 연동시킨 외부 상태관리 라이브러리들
(redux, mobx, recoil, jotai 등등)


Custom Hook:
- 개발자가 직접 만드는 Hook
