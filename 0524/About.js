import React from 'react';
import { useLocation } from 'react-router-dom';
//useLocation이라는 훅은 location 객체를 반환하며, 이 객체는 사용자가 보고 있는 페이지의 정보를 지니고 있다.
//이 객체에는 다음과 같은 값들이 있다.
//pathname : 현재 주소의 경로
//search : 맨 앞의 ? 주소 포함한 쿼리스트링 값
//hash : 주소의 # 문자열 뒤의 값
//state : 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
//key : location 객체의 고유 값, 초기에는 default이며 페이지가 변경될 때마다 고유의 값이 생성됨.
import { useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === 'true' ? false : true });
    };
    
    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({ mode: nextMode, detail });
    };

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;