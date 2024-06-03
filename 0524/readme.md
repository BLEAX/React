react-router-dom 라이브러리를 통한 라우팅

react-router-dom 라이브러리에 들어있는
Link 컴포넌트를 통한 라우팅 
(a 태그를 사용하지만 페이지를 새로 불러오는 것을 막고 History API를 통해
브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다.)

URL 파라미터 : 
주소의 경로에 유동적인 값을 넣는 형태 
ex) /profile/veloport


쿼리스트링 : 
주소의 뒷부분에 ? 문자열 이후에 key=value로 값을 정의하며 &로 구분을 하는 형태
ex) /articles?**page=1&keyword=react


주로 URL 파라미터는 ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용,
쿼리스트링은 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용.


useParams라는 훅을 이용해 URL 파라미터를 객체 형태로 조회 가능.
URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path props를 통하여 설정.


쿼리스트링을 사용할 때는 URL 파라미터와 달리 Route 컴포넌트를 사용할 때 
별도로 설정해야 하는 것은 없음.
useLocation이라는 훅은 location 객체를 반환하며 이 객체는 현재 사용자가 보고있는 페이지의 정보를 지니고 있다.
pathname, search, hash, state, key 값이 있음.
쿼리 스트링은 location.search 값을 통해 조회를 할 수 있음


리액트 라우터 v6부터
useSearchParams라는 Hook을 통해서 쿼리스트링을 쉽게 다룰 수 있다.


리액트 라우터에서 제공하는 Outlet 이라는 컴포넌트를 통해 children으로 들어가는
JSX 엘리먼트를 보여주게 할 수도 있다.


useNavigate는 Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 상황에 사용하는 훅이다.
