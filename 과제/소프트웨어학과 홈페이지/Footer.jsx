import React from 'react';
import '../css/Footer.css';

function Footer() {
    return(
        <div className='wrap'>
            <footer>
                <nav>
                    <a href='https://github.com/BLEAX/React' target='_blank'>Github</a>
                </nav>
                <p>
                    <span>저자 : 김정훈</span><br/>
                    <span>이메일 : rlawjdgns135@naver.com</span><br/>
                    <span>Copyright 2024. 김정훈. All Rights Reserved.</span>
                </p>
            </footer>
        </div>
    );
}

export default Footer;