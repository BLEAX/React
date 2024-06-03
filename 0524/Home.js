import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>
                홈
            </h1>
            <p>
                가장 먼저 보여지는 페이지입니다.
            </p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/김정훈">김정훈의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;